import { useState } from 'react';

interface PhotoProps {
  src?: string;
  alt: string;
  /** Fallback label shown if no src or the image fails to load */
  label?: string;
  className?: string;
  /** Aspect ratio like "4/3" */
  ratio?: string;
}

/**
 * Renders a real image with object-cover and lazy loading. If no src is given
 * or the image fails to load (e.g. a hotlinked source), it falls back to the
 * brand gradient placeholder with a centered label.
 */
export default function Photo({ src, alt, label, className = '', ratio = '4/3' }: PhotoProps) {
  const [failed, setFailed] = useState(false);
  const showImg = Boolean(src) && !failed;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio, background: 'linear-gradient(135deg, #2b4c7e, #1a3357)' }}
    >
      {showImg ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-6 text-center">
          <span className="font-heading text-sm uppercase tracking-widest text-white/85">
            {label ?? alt}
          </span>
        </div>
      )}
    </div>
  );
}
