interface ImagePlaceholderProps {
  label: string;
  className?: string;
  /** Aspect ratio like "4/3" */
  ratio?: string;
}

export default function ImagePlaceholder({
  label,
  className = '',
  ratio = '4/3',
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center p-6 text-center ${className}`}
      style={{
        aspectRatio: ratio,
        background: 'linear-gradient(135deg, #2b4c7e, #1a3357)',
      }}
    >
      <span className="font-heading text-sm uppercase tracking-widest text-white/85">
        {label}
      </span>
    </div>
  );
}
