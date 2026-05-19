interface Props {
  correct: number;
  wrong: number;
  remaining: number;
}

export function StatsBar({ correct, wrong, remaining }: Props) {
  return (
    <div className="flex gap-4 text-sm">
      <span className="text-emerald-600 font-medium">✓ {correct}</span>
      <span className="text-rose-500 font-medium">✗ {wrong}</span>
      <span className="text-slate-400 dark:text-slate-500">Rămase: {remaining}</span>
    </div>
  );
}
