import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  /** CSS gradient string for the background */
  gradient?: string;
  children?: ReactNode;
}

const DEFAULT_GRADIENT =
  'linear-gradient(135deg, #1b2b3a 0%, #14202b 55%, #0f1922 100%)';

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  gradient = DEFAULT_GRADIENT,
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative text-white"
      style={{ background: gradient }}
    >
      {/* subtle texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(184,134,59,0.35), transparent 45%)',
        }}
      />
      <div className="container-x relative py-16 md:py-24">
        {eyebrow && (
          <div className="mb-4 flex items-center gap-3">
            <span className="block h-[2px] w-10 bg-gold" />
            <span className="font-heading uppercase tracking-widest text-gold text-sm">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl font-serif text-lg italic text-cream/90">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}
