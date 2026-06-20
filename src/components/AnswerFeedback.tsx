interface Props {
  explanation: string;
  onNext: () => void;
  /** Dacă e setat, afișează un banner „Corect/Greșit" deasupra explicației. */
  isCorrect?: boolean;
}

export function AnswerFeedback({ explanation, onNext, isCorrect }: Props) {
  return (
    <div className="mt-4 animate-fadeIn">
      {isCorrect !== undefined && (
        <div
          className={`mb-2 text-center text-sm font-semibold ${
            isCorrect
              ? 'text-emerald-600 dark:text-emerald-400'
              : 'text-rose-600 dark:text-rose-400'
          }`}
        >
          {isCorrect ? '✓ Corect!' : '✗ Greșit'}
        </div>
      )}
      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl p-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">📖 Explicație</p>
        <p>{explanation}</p>
      </div>
      <button
        onClick={onNext}
        className="mt-3 w-full py-2.5 rounded-xl bg-indigo-600 text-white font-semibold
          hover:bg-indigo-700 active:scale-95 transition-all duration-150"
      >
        Continuă →
      </button>
    </div>
  );
}
