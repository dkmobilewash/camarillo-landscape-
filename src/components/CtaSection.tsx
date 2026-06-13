import { Link } from 'react-router-dom';
import { business } from '../data/business';
import { routes } from '../lib/routes';

interface CtaSectionProps {
  heading: string;
  subtext?: string;
}

export default function CtaSection({ heading, subtext }: CtaSectionProps) {
  return (
    <section className="bg-navy text-white section-pad">
      <div className="container-x text-center">
        <div className="mx-auto mb-4 h-[2px] w-10 bg-gold" />
        <h2 className="text-white">{heading}</h2>
        {subtext && (
          <p className="mx-auto mt-4 max-w-2xl font-serif text-lg italic text-cream/85">
            {subtext}
          </p>
        )}
        <p className="mt-6 font-heading text-3xl font-bold text-gold md:text-4xl">
          <a href={business.phoneHref} className="text-gold hover:text-gold-lt">
            {business.phone}
          </a>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={business.phoneHref} className="btn btn-secondary">
            Call {business.phone}
          </a>
          <Link to={routes.contact} className="btn btn-primary">
            Request a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
