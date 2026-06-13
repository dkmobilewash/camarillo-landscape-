import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  /** CSS gradient string for the background (used as fallback / when no image) */
  gradient?: string;
  /** Optional background photo; a navy overlay keeps text readable */
  image?: string;
  children?: ReactNode;
}

const DEFAULT_GRADIENT = 'linear-gradient(135deg, #1b2b3a 0%, #14202b 55%, #0f1922 100%)';

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  gradient = DEFAULT_GRADIENT,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative text-white" style={{ background: gradient }}>
      {/* Background photo */}
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={
          image
            ? {
                background:
                  'linear-gradient(135deg, rgba(27,43,58,0.88) 0%, rgba(20,32,43,0.82) 55%, rgba(15,25,34,0.85) 100%)',
              }
            : {
                background:
                  'radial-gradient(circle at 20% 20%, rgba(184,134,59,0.35), transparent 45%)',
                opacity: 0.4,
              }
        }
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
          <p className="mt-5 max-w-2xl font-serif text-lg italic text-cream/90">{subtitle}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}
