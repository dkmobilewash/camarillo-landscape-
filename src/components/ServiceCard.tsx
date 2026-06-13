import { Link } from 'react-router-dom';

interface ServiceCardProps {
  to: string;
  title: string;
  description: string;
  icon?: string;
}

export default function ServiceCard({ to, title, description, icon }: ServiceCardProps) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col border-t-4 border-gold bg-white p-7 shadow-sm transition-colors duration-200 hover:bg-cream"
    >
      {icon && <span className="mb-3 text-3xl">{icon}</span>}
      <h3 className="text-navy">{title}</h3>
      <p className="mt-3 flex-1 text-mid">{description}</p>
      <span className="mt-4 font-heading text-sm uppercase tracking-wide text-gold-deep group-hover:text-navy">
        Learn More →
      </span>
    </Link>
  );
}
