import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Schimbă tema"
      className="fixed bottom-5 right-5 z-50
        w-11 h-11 rounded-full shadow-lg
        bg-white dark:bg-slate-700
        border border-slate-200 dark:border-slate-600
        flex items-center justify-center text-xl
        hover:scale-110 active:scale-95
        transition-all duration-150"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
