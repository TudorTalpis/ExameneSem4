// no useState needed here — quiz state is in useQuiz hook
import { useState, useMemo } from 'react';
import type { Question } from './types/question';
import { useQuiz } from './hooks/useQuiz';
import { HomeScreen } from './components/HomeScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultScreen } from './components/ResultScreen';
import { ProgressBar } from './components/ProgressBar';
import { StatsBar } from './components/StatsBar';

// ---- tipul intrării din istoric ----
interface HistoryEntry {
  question: Question;
  shuffledOrder: number[];
  chosenPos: number;
}

function shuffleArray(len: number): number[] {
  const a = Array.from({ length: len }, (_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const {
    mode, session, currentQuestion, learnedCount, totalCount,
    mistakeCount, isDone, startNewSession, continueSession,
    startReview, resetAll, answerQuestion, goHome,
  } = useQuiz();

  // Istoricul răspunsurilor din sesiunea curentă (nu se persistă)
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  // null = afișăm întrebarea curentă; number = afișăm history[historyIdx]
  const [historyIdx, setHistoryIdx] = useState<number | null>(null);

  // Shuffle stabil pentru întrebarea curentă (se regenerează doar când se schimbă id-ul)
  const currentShuffleOrder = useMemo(
    () => (currentQuestion ? shuffleArray(currentQuestion.options.length) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentQuestion?.id],
  );

  // Ce afișăm efectiv
  const viewingEntry    = historyIdx !== null ? history[historyIdx] : null;
  const displayQuestion = viewingEntry ? viewingEntry.question    : currentQuestion;
  const displayShuffle  = viewingEntry ? viewingEntry.shuffledOrder : currentShuffleOrder;
  const displayChosen   = viewingEntry ? viewingEntry.chosenPos    : undefined;
  const isReadOnly      = historyIdx !== null;

  // ---- handlere ----

  const handleAnswer = (chosenPos: number, originalIdx: number) => {
    // Salvăm în istoric înainte de avans (numai când răspundem la întrebarea curentă)
    if (currentQuestion && historyIdx === null) {
      setHistory(prev => [
        ...prev,
        { question: currentQuestion, shuffledOrder: currentShuffleOrder, chosenPos },
      ]);
    }
    answerQuestion(originalIdx);
  };

  const handleBack = () => {
    if (historyIdx === null && history.length > 0) {
      setHistoryIdx(history.length - 1);           // curent → ultima intrare
    } else if (historyIdx !== null && historyIdx > 0) {
      setHistoryIdx(historyIdx - 1);               // mergi mai departe în trecut
    }
  };

  const handleForward = () => {
    if (historyIdx === null) return;
    if (historyIdx < history.length - 1) {
      setHistoryIdx(historyIdx + 1);               // înaintează în istoric
    } else {
      setHistoryIdx(null);                         // revino la întrebarea curentă
    }
  };

  const handleStartNew = () => {
    setHistory([]);
    setHistoryIdx(null);
    startNewSession();
  };

  const handleGoHome = () => {
    setHistoryIdx(null);
    goHome();
  };

  const canGoBack    = historyIdx === null ? history.length > 0 : historyIdx > 0;
  const canGoForward = historyIdx !== null;
  const isAtLastHistory = historyIdx === history.length - 1;

  // ---- ecrane ----

  if (mode === 'home') {
    return (
      <HomeScreen
        hasSession={session !== null}
        learnedCount={learnedCount}
        totalCount={totalCount}
        mistakeCount={mistakeCount}
        onStart={handleStartNew}
        onContinue={continueSession}
        onReview={startReview}
        onReset={resetAll}
      />
    );
  }

  if (isDone || !currentQuestion) {
    return (
      <ResultScreen
        correct={session?.stats.correctTotal ?? 0}
        wrong={session?.stats.wrongTotal ?? 0}
        total={totalCount}
        onHome={handleGoHome}
        onRestart={handleStartNew}
      />
    );
  }

  const remaining = session ? session.queue.length : 0;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header sticky */}
      <header className="sticky top-0 z-10 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-2 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <button
              onClick={handleGoHome}
              className="text-slate-400 hover:text-slate-600 text-sm transition-colors"
            >
              ← Meniu
            </button>
            <StatsBar
              correct={session?.stats.correctTotal ?? 0}
              wrong={session?.stats.wrongTotal ?? 0}
              remaining={remaining}
            />
          </div>
          <ProgressBar learned={learnedCount} total={totalCount} />
        </div>
      </header>

      {/* Banner mod vizualizare istoric */}
      {isReadOnly && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-700 text-xs text-center py-1.5 font-medium">
          📖 Răspuns anterior — {historyIdx! + 1} / {history.length}
        </div>
      )}

      {/* Zona de întrebare */}
      <main className="flex-1 flex items-start justify-center px-4 py-6">
        {displayQuestion && (
          <QuestionCard
            key={`${displayQuestion.id}-${historyIdx ?? 'current'}`}
            question={displayQuestion}
            shuffledOrder={displayShuffle}
            onAnswer={handleAnswer}
            readOnly={isReadOnly}
            readOnlyChosenPos={displayChosen}
          />
        )}
      </main>

      {/* Navigare înapoi / înainte */}
      {(canGoBack || canGoForward) && (
        <div className="max-w-2xl mx-auto w-full px-4 pb-4 flex gap-2">
          {canGoBack && (
            <button
              onClick={handleBack}
              className="flex-1 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-600
                text-sm font-medium hover:border-slate-300 hover:bg-slate-50
                active:scale-95 transition-all duration-150"
            >
              ← Anterioară
            </button>
          )}
          {canGoForward && (
            <button
              onClick={handleForward}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium
                active:scale-95 transition-all duration-150
                ${isAtLastHistory
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-white border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
            >
              {isAtLastHistory ? 'Continuă →' : 'Următoarea →'}
            </button>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-xs text-slate-300 pb-3">
        {mode === 'review' ? '📝 Mod revizuire greșeli' : '🎯 Mod sesiune normală'}
      </footer>
    </div>
  );
}
