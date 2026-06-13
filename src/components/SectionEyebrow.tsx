interface SectionEyebrowProps {
  eyebrow: string;
  heading: string;
  subtitle?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
}

export default function SectionEyebrow({
  eyebrow,
  heading,
  subtitle,
  align = 'left',
  variant = 'light',
}: SectionEyebrowProps) {
  const centered = align === 'center';
  const headingColor = variant === 'dark' ? 'text-white' : 'text-navy';
  const subColor = variant === 'dark' ? 'text-cream/80' : 'text-mid';

  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <div
        className={`mb-4 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
      >
        <span className="block h-[2px] w-10 bg-gold" />
        <span className="font-heading uppercase tracking-widest text-gold text-sm">
          {eyebrow}
        </span>
      </div>
      <h2 className={headingColor}>{heading}</h2>
      {subtitle && (
        <p className={`mt-4 font-serif italic text-lg ${subColor} ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
