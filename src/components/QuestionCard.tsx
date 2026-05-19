import { useState, useEffect } from 'react';
import type { Question, Difficulty } from '../types/question';
import { AnswerFeedback } from './AnswerFeedback';

interface Props {
  question: Question;
  /** Ordinea afișată a opțiunilor (indici originali amestecați) — generată de parent */
  shuffledOrder: number[];
  /** Apelat cu (poziția aleasă în shuffle, indexul original) */
  onAnswer: (chosenPos: number, originalIdx: number) => void;
  /** Mod vizualizare istoric: întrebarea e deja răspunsă, explicația e mereu vizibilă */
  readOnly?: boolean;
  /** Poziția (în shuffledOrder) pe care utilizatorul a ales-o anterior */
  readOnlyChosenPos?: number;
}

const difficultyLabel: Record<Difficulty, { label: string; cls: string }> = {
  easy:   { label: 'Ușor',      cls: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' },
  medium: { label: 'Mediu',     cls: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400' },
  hard:   { label: 'Greu',      cls: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400' },
  trap:   { label: '⚠ Capcană', cls: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' },
};

export function QuestionCard({
  question,
  shuffledOrder,
  onAnswer,
  readOnly = false,
  readOnlyChosenPos,
}: Props) {
  const shuffledCorrectPos = shuffledOrder.indexOf(question.correctIndex);

  // În modul readOnly pornim deja în starea „răspuns dat"
  const [chosen, setChosen]   = useState<number | null>(readOnly ? (readOnlyChosenPos ?? null) : null);
  const [answered, setAnswered] = useState(readOnly);

  // Resetăm când se schimbă întrebarea sau modul
  useEffect(() => {
    setChosen(readOnly ? (readOnlyChosenPos ?? null) : null);
    setAnswered(readOnly);
  }, [question.id, readOnly, readOnlyChosenPos]);

  const handleChoice = (shuffledPos: number) => {
    if (answered || readOnly) return;
    setChosen(shuffledPos);
    setAnswered(true);

    const isCorrect  = shuffledPos === shuffledCorrectPos;
    const originalIdx = shuffledOrder[shuffledPos];

    if (isCorrect) {
      setTimeout(() => onAnswer(shuffledPos, originalIdx), 800);
    }
    // Greșit → utilizatorul citește explicația și apasă „Următoarea"
  };

  const handleNext = () => {
    if (chosen !== null) onAnswer(chosen, shuffledOrder[chosen]);
  };

  const isCorrect = chosen === shuffledCorrectPos;
  const diff = difficultyLabel[question.difficulty];

  const optionClass = (shuffledPos: number) => {
    if (!answered) {
      return 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 cursor-pointer';
    }
    if (shuffledPos === shuffledCorrectPos) {
      return 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300 font-medium';
    }
    if (shuffledPos === chosen) {
      return chosen !== shuffledCorrectPos
        ? 'bg-rose-50 dark:bg-rose-900/20 border-rose-400 dark:border-rose-600 text-rose-800 dark:text-rose-300'
        : 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300 font-medium';
    }
    return 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 cursor-default';
  };

  // Explicația în modul history (fără buton „Următoarea" — navigarea e în parent)
  const historyExplanation = answered && readOnly && (
    <div className="mt-4 animate-fadeIn">
      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl p-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">📖 Explicație</p>
        <p>{question.explanation}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Chips dificultate / temă */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${diff.cls}`}>
          {diff.label}
        </span>
        <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2.5 py-0.5 rounded-full capitalize">
          {question.topic.replace('-', ' ')}
        </span>
      </div>

      {/* Întrebarea */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-5 mb-4">
        <p className="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-base">
          {question.prompt}
        </p>
      </div>

      {/* Opțiuni în ordinea amestecată */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {shuffledOrder.map((origIdx, shuffledPos) => (
          <button
            key={shuffledPos}
            onClick={() => handleChoice(shuffledPos)}
            disabled={answered}
            className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-150 text-sm leading-snug
              ${optionClass(shuffledPos)}`}
          >
            <span className="font-semibold text-slate-400 dark:text-slate-500 mr-2">
              {String.fromCharCode(65 + shuffledPos)}.
            </span>
            {question.options[origIdx]}
          </button>
        ))}
      </div>

      {/* Mod history: explicație mereu vizibilă, fără buton */}
      {historyExplanation}

      {/* Mod normal: explicație + buton doar la răspuns greșit */}
      {answered && !readOnly && !isCorrect && (
        <AnswerFeedback explanation={question.explanation} onNext={handleNext} />
      )}

      {/* Mod normal: flash corect (înainte de auto-avans) */}
      {answered && !readOnly && isCorrect && (
        <div className="mt-3 text-center text-emerald-600 text-sm font-medium animate-pulse">
          ✓ Corect!
        </div>
      )}
    </div>
  );
}
