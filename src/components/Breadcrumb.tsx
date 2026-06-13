import { Link } from 'react-router-dom';

export interface Crumb {
  label: string;
  to?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-cream border-b border-rule">
      <div className="container-x">
        <ol className="flex flex-wrap items-center gap-2 py-3 text-sm text-mid">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-2">
                {item.to && !last ? (
                  <Link to={item.to} className="text-gold-deep hover:text-navy">
                    {item.label}
                  </Link>
                ) : (
                  <span className={last ? 'text-charcoal' : ''}>{item.label}</span>
                )}
                {!last && <span className="text-mid">›</span>}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
