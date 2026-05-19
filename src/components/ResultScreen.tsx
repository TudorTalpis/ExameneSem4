interface Props {
  correct: number;
  wrong: number;
  total: number;
  onHome: () => void;
  onRestart: () => void;
}

export function ResultScreen({ correct, wrong, total, onHome, onRestart }: Props) {
  const pct = total > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;

  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '💪' : '📚';
  const msg =
    pct >= 90
      ? 'Excelent! Ești pregătit pentru examen!'
      : pct >= 70
      ? 'Bine! Mai repetă capitolele greșite.'
      : pct >= 50
      ? 'Continuă să exersezi!'
      : 'Mai mult exercițiu necesar.';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center p-4 transition-colors duration-200">
      <div className="w-full max-w-md text-center">
        <div className="text-6xl mb-4">{emoji}</div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">Sesiune completă!</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">{msg}</p>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-emerald-600">{correct}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Corecte</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-rose-500">{wrong}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Greșeli</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{pct}%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Rată succes</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={onRestart}
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold
              hover:bg-indigo-700 active:scale-95 transition-all duration-150"
          >
            🔄 Sesiune nouă
          </button>
          <button
            onClick={onHome}
            className="w-full py-3 rounded-xl bg-white dark:bg-slate-800 border-2
              border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200
              font-medium hover:border-indigo-300 dark:hover:border-indigo-600 active:scale-95 transition-all duration-150"
          >
            🏠 Acasă
          </button>
        </div>
      </div>
    </div>
  );
}
