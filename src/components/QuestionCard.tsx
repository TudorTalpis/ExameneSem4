import { useState, useEffect } from 'react';
import type { Question, Difficulty } from '../types/question';
import { AnswerFeedback } from './AnswerFeedback';
import { CodeBuilder } from './CodeBuilder';

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

// ---- shared bits ----

function TopicChips({ question }: { question: Question }) {
  const diff = difficultyLabel[question.difficulty];
  return (
    <div className="flex items-center gap-2 mb-3 flex-wrap">
      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${diff.cls}`}>{diff.label}</span>
      <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2.5 py-0.5 rounded-full capitalize">
        {question.topic.replace(/-/g, ' ')}
      </span>
    </div>
  );
}

function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  return (
    <div className="relative mb-4">
      {lang && (
        <span className="absolute right-2.5 top-2 text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono select-none">
          {lang}
        </span>
      )}
      <pre className="overflow-x-auto rounded-xl bg-slate-900 dark:bg-slate-950 border border-slate-700 dark:border-slate-700 p-4 pt-5">
        <code className="font-mono text-[13px] leading-relaxed text-slate-100 whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

function ExplanationBox({ text }: { text: string }) {
  return (
    <div className="mt-4 animate-fadeIn">
      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl p-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">📖 Explicație</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

// ---- dispatcher ----

export function QuestionCard(props: Props) {
  if (props.question.kind === 'order') return <OrderQuestion {...props} />;
  return <McqQuestion {...props} />;
}

// ---- classic / code-analysis / fill-in-blank (pick one option) ----

function McqQuestion({ question, shuffledOrder, onAnswer, readOnly = false, readOnlyChosenPos }: Props) {
  const shuffledCorrectPos = shuffledOrder.indexOf(question.correctIndex);

  const [chosen, setChosen]     = useState<number | null>(readOnly ? (readOnlyChosenPos ?? null) : null);
  const [answered, setAnswered] = useState(readOnly);

  useEffect(() => {
    setChosen(readOnly ? (readOnlyChosenPos ?? null) : null);
    setAnswered(readOnly);
  }, [question.id, readOnly, readOnlyChosenPos]);

  const handleChoice = (shuffledPos: number) => {
    if (answered || readOnly) return;
    setChosen(shuffledPos);
    setAnswered(true);

    const isCorrect   = shuffledPos === shuffledCorrectPos;
    const originalIdx = shuffledOrder[shuffledPos];

    if (isCorrect) {
      setTimeout(() => onAnswer(shuffledPos, originalIdx), 800);
    }
  };

  const handleNext = () => {
    if (chosen !== null) onAnswer(chosen, shuffledOrder[chosen]);
  };

  const isCorrect = chosen === shuffledCorrectPos;
  const asCode = question.optionsAsCode;

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

  return (
    <div className="w-full max-w-2xl mx-auto">
      <TopicChips question={question} />

      {/* Întrebarea */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-5 mb-4">
        <p className="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-base">
          {question.prompt}
        </p>
      </div>

      {/* Bloc de cod (opțional) */}
      {question.code && <CodeBlock code={question.code} lang={question.codeLang} />}

      {/* Opțiuni în ordinea amestecată */}
      <div className={asCode ? 'grid grid-cols-1 gap-2' : 'grid grid-cols-1 sm:grid-cols-2 gap-2'}>
        {shuffledOrder.map((origIdx, shuffledPos) => (
          <button
            key={shuffledPos}
            onClick={() => handleChoice(shuffledPos)}
            disabled={answered}
            className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-150 leading-snug
              ${asCode ? 'text-[13px]' : 'text-sm'} ${optionClass(shuffledPos)}`}
          >
            <span className="font-semibold text-slate-400 dark:text-slate-500 mr-2">
              {String.fromCharCode(65 + shuffledPos)}.
            </span>
            <span className={asCode ? 'font-mono' : ''}>{question.options[origIdx]}</span>
          </button>
        ))}
      </div>

      {/* Mod history: explicație mereu vizibilă, fără buton */}
      {answered && readOnly && <ExplanationBox text={question.explanation} />}

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

// ---- code-builder (assemble tokens in order) ----

function OrderQuestion({ question, onAnswer, readOnly = false }: Props) {
  const [answered, setAnswered] = useState(readOnly);
  const [correct, setCorrect]   = useState(false);

  useEffect(() => {
    setAnswered(readOnly);
    setCorrect(false);
  }, [question.id, readOnly]);

  const handleResult = (isCorrect: boolean) => {
    setAnswered(true);
    setCorrect(isCorrect);
    // correctIndex e 0 pentru întrebările 'order'; răspuns corect => answerQuestion(0),
    // răspuns greșit => answerQuestion(-1) (≠ 0), reluând logica normală de scor/repetiție.
    if (isCorrect) {
      setTimeout(() => onAnswer(0, 0), 800);
    }
  };

  const handleNext = () => onAnswer(0, -1);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <TopicChips question={question} />

      {/* Enunț */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-5 mb-4">
        <p className="text-slate-800 dark:text-slate-100 font-medium leading-relaxed text-base">
          {question.prompt}
        </p>
      </div>

      {/* Context de cod (opțional) */}
      {question.code && <CodeBlock code={question.code} lang={question.codeLang} />}

      {/* Constructorul de cod */}
      <CodeBuilder
        tokens={question.tokens ?? []}
        distractorTokens={question.distractorTokens}
        readOnly={readOnly}
        locked={answered}
        onResult={handleResult}
      />

      {/* Mod history: explicație mereu vizibilă */}
      {readOnly && <ExplanationBox text={question.explanation} />}

      {/* Răspuns greșit: explicație + buton „Următoarea" */}
      {answered && !readOnly && !correct && (
        <AnswerFeedback explanation={question.explanation} onNext={handleNext} />
      )}

      {/* Răspuns corect: flash */}
      {answered && !readOnly && correct && (
        <div className="mt-3 text-center text-emerald-600 text-sm font-medium animate-pulse">
          ✓ Corect!
        </div>
      )}
    </div>
  );
}
