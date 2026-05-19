import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import type { Question } from '../types/question';
import { useQuiz } from '../hooks/useQuiz';
import { loadExamQuestions, loadTopicQuestions, getExam } from '../data/registry';
import { QuestionCard } from '../components/QuestionCard';
import { ResultScreen } from '../components/ResultScreen';
import { ProgressBar } from '../components/ProgressBar';
import { StatsBar } from '../components/StatsBar';
import { Breadcrumbs } from '../components/Breadcrumbs';

// ---- history types ----
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

export function QuizPage() {
  const { examId = '' }         = useParams<{ examId: string }>();
  const [searchParams]          = useSearchParams();
  const navigate                = useNavigate();

  const topicId  = searchParams.get('topic') ?? undefined;
  const modeParam = searchParams.get('mode') ?? undefined;   // 'review' | undefined

  // ---- async question loading ----
  const [questions, setQuestions] = useState<Question[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = topicId
      ? loadTopicQuestions(examId, topicId)
      : loadExamQuestions(examId);

    load.then(qs => {
      if (!cancelled) setQuestions(qs);
    });

    return () => { cancelled = true; };
  }, [examId, topicId]);

  if (!questions) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Se încarcă întrebările…
      </div>
    );
  }

  return (
    <QuizSession
      examId={examId}
      questions={questions}
      topicId={topicId}
      initialMode={modeParam === 'review' ? 'review' : undefined}
      onBack={() => navigate(`/exam/${examId}`)}
    />
  );
}

// ---- Inner component that runs once questions are loaded ----

interface QuizSessionProps {
  examId: string;
  questions: Question[];
  topicId?: string;
  initialMode?: 'review';
  onBack: () => void;
}

function QuizSession({ examId, questions, topicId, initialMode, onBack }: QuizSessionProps) {
  const exam = getExam(examId);

  // Suffix storage key so topic quizzes don't share state with full-exam quiz
  const sessionKey = topicId ? `${examId}-${topicId}` : examId;

  const {
    mode, session, currentQuestion, learnedCount, totalCount,
    isDone, startNewSession, continueSession,
    startReview, answerQuestion,
  } = useQuiz(sessionKey, questions);

  // ---- local history (in-memory) ----
  const [history, setHistory]       = useState<HistoryEntry[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number | null>(null);

  // Stable shuffle for current question
  const currentShuffleOrder = useMemo(
    () => (currentQuestion ? shuffleArray(currentQuestion.options.length) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentQuestion?.id],
  );

  // Kick off review mode if requested by URL param
  useEffect(() => {
    if (initialMode === 'review' && mode === 'home') {
      startReview();
    } else if (mode === 'home') {
      // Auto-continue or auto-start on mount
      if (session) {
        continueSession();
      } else {
        startNewSession();
      }
    }
    // Only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---- display resolution (history vs current) ----
  const viewingEntry    = historyIdx !== null ? history[historyIdx] : null;
  const displayQuestion = viewingEntry ? viewingEntry.question    : currentQuestion;
  const displayShuffle  = viewingEntry ? viewingEntry.shuffledOrder : currentShuffleOrder;
  const displayChosen   = viewingEntry ? viewingEntry.chosenPos    : undefined;
  const isReadOnly      = historyIdx !== null;

  // ---- handlers ----

  const handleAnswer = (chosenPos: number, originalIdx: number) => {
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
      setHistoryIdx(history.length - 1);
    } else if (historyIdx !== null && historyIdx > 0) {
      setHistoryIdx(historyIdx - 1);
    }
  };

  const handleForward = () => {
    if (historyIdx === null) return;
    if (historyIdx < history.length - 1) {
      setHistoryIdx(historyIdx + 1);
    } else {
      setHistoryIdx(null);
    }
  };

  const handleStartNew = () => {
    setHistory([]);
    setHistoryIdx(null);
    startNewSession();
  };

  const handleGoHome = () => {
    setHistoryIdx(null);
    onBack();
  };

  const canGoBack      = historyIdx === null ? history.length > 0 : historyIdx > 0;
  const canGoForward   = historyIdx !== null;
  const isAtLastHistory = historyIdx === history.length - 1;

  const remaining = session ? session.queue.length : 0;

  // ---- breadcrumb label ----
  const topicLabel = exam?.topics.find(t => t.id === topicId)?.title;
  const crumbs = [
    { label: 'Acasă', to: '/' },
    { label: exam?.title ?? examId, to: `/exam/${examId}` },
    ...(topicLabel ? [{ label: topicLabel }] : [{ label: mode === 'review' ? 'Revizuire greșeli' : 'Quiz complet' }]),
  ];

  // ---- result screen ----
  if (isDone || (mode === 'quiz' || mode === 'review') && !currentQuestion && session !== null) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 pt-4">
          <Breadcrumbs crumbs={crumbs} />
        </div>
        <ResultScreen
          correct={session?.stats.correctTotal ?? 0}
          wrong={session?.stats.wrongTotal ?? 0}
          total={totalCount}
          onHome={handleGoHome}
          onRestart={handleStartNew}
        />
      </div>
    );
  }

  // ---- loading / home fallback ----
  if (mode === 'home' || !currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Se pregătesc întrebările…
      </div>
    );
  }

  // ---- main quiz UI ----
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-2 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <button
              onClick={handleGoHome}
              className="text-slate-400 hover:text-slate-600 text-sm transition-colors"
            >
              ← {topicLabel ?? exam?.title ?? 'Înapoi'}
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

      {/* History mode banner */}
      {isReadOnly && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-700 text-xs text-center py-1.5 font-medium">
          📖 Răspuns anterior — {historyIdx! + 1} / {history.length}
        </div>
      )}

      {/* Question area */}
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

      {/* Back / forward navigation */}
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
