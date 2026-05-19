interface Props {
  explanation: string;
  onNext: () => void;
}

export function AnswerFeedback({ explanation, onNext }: Props) {
  return (
    <div className="mt-4 animate-fadeIn">
      <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl p-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">📖 Explicație</p>
        <p>{explanation}</p>
      </div>
      <button
        onClick={onNext}
        className="mt-3 w-full py-2.5 rounded-xl bg-indigo-600 text-white font-semibold
          hover:bg-indigo-700 active:scale-95 transition-all duration-150"
      >
        Următoarea →
      </button>
    </div>
  );
}
