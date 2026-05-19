interface Props {
  learned: number;
  total: number;
}

export function ProgressBar({ learned, total }: Props) {
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
        <span>Progres</span>
        <span>{learned} / {total} ({pct}%)</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-500 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
