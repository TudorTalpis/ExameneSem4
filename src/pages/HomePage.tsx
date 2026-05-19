import { useNavigate } from 'react-router-dom';
import { examRegistry } from '../data/registry';
import { useProgress } from '../context/ProgressContext';

const accentClasses: Record<string, { bg: string; border: string; text: string; bar: string }> = {
  indigo:  { bg: 'bg-indigo-50 dark:bg-indigo-900/20',  border: 'border-indigo-200 dark:border-indigo-700',  text: 'text-indigo-600 dark:text-indigo-400',  bar: 'bg-indigo-500'  },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-200 dark:border-emerald-700', text: 'text-emerald-600 dark:text-emerald-400', bar: 'bg-emerald-500' },
  blue:    { bg: 'bg-blue-50 dark:bg-blue-900/20',       border: 'border-blue-200 dark:border-blue-700',       text: 'text-blue-600 dark:text-blue-400',       bar: 'bg-blue-500'    },
  rose:    { bg: 'bg-rose-50 dark:bg-rose-900/20',       border: 'border-rose-200 dark:border-rose-700',       text: 'text-rose-600 dark:text-rose-400',       bar: 'bg-rose-500'    },
  amber:   { bg: 'bg-amber-50 dark:bg-amber-900/20',     border: 'border-amber-200 dark:border-amber-700',     text: 'text-amber-600 dark:text-amber-400',     bar: 'bg-amber-500'   },
  violet:  { bg: 'bg-violet-50 dark:bg-violet-900/20',   border: 'border-violet-200 dark:border-violet-700',   text: 'text-violet-600 dark:text-violet-400',   bar: 'bg-violet-500'  },
  teal:    { bg: 'bg-teal-50 dark:bg-teal-900/20',       border: 'border-teal-200 dark:border-teal-700',       text: 'text-teal-600 dark:text-teal-400',       bar: 'bg-teal-500'    },
};

export function HomePage() {
  const navigate    = useNavigate();
  const { getProgress } = useProgress();

  const totalQuestions = (id: string) =>
    examRegistry.find(e => e.id === id)?.topics.reduce((s, t) => s + t.questionCount, 0) ?? 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col items-center justify-start px-4 py-10 transition-colors duration-200">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-1">🎓 Site Examene</h1>
        <p className="text-slate-500 dark:text-slate-400">Alege un examen și începe să înveți</p>
      </div>

      {/* Exam grid */}
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {examRegistry.map(exam => {
          const total    = totalQuestions(exam.id);
          const progress = getProgress(exam.id, total);
          const acc      = accentClasses[exam.accentColor] ?? accentClasses.indigo;

          return (
            <button
              key={exam.id}
              onClick={() => navigate(`/exam/${exam.id}`)}
              className={`text-left p-5 rounded-2xl border-2 ${acc.border} ${acc.bg}
                hover:shadow-md active:scale-95 transition-all duration-150`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{exam.icon}</span>
                {progress.hasSession && (
                  <span className={`text-xs font-bold ${acc.text}`}>{progress.pct}%</span>
                )}
              </div>

              <h2 className="font-bold text-slate-800 dark:text-slate-100 text-base leading-tight mb-0.5">
                {exam.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">{exam.subtitle}</p>

              {/* Progress bar */}
              <div className="h-1.5 bg-white/70 dark:bg-slate-700/70 rounded-full overflow-hidden">
                <div
                  className={`h-full ${acc.bar} rounded-full transition-all duration-500`}
                  style={{ width: `${progress.pct}%` }}
                />
              </div>

              <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                {total} întrebări • {exam.topics.length} teme
                {progress.hasSession && (
                  <> • <span className={acc.text}>{progress.learnedCount} învățate</span></>
                )}
              </p>
            </button>
          );
        })}

        {/* "Coming soon" placeholder */}
        <div
          className="text-left p-5 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700
            bg-white dark:bg-slate-800 opacity-60 cursor-default select-none"
        >
          <div className="text-3xl mb-3">➕</div>
          <h2 className="font-bold text-slate-400 dark:text-slate-500 text-base">Examen nou</h2>
          <p className="text-slate-300 dark:text-slate-600 text-xs mt-0.5">Adaugă un folder în <code>src/data/exams/</code></p>
        </div>
      </div>
    </div>
  );
}
