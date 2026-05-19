import { Link } from 'react-router-dom';

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  crumbs: Crumb[];
}

export function Breadcrumbs({ crumbs }: Props) {
  return (
    <nav className="flex items-center gap-1 text-xs text-slate-400 flex-wrap">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-slate-300">›</span>}
          {crumb.to ? (
            <Link
              to={crumb.to}
              className="hover:text-indigo-500 transition-colors"
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="text-slate-600 font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
