interface Step {
  title: string;
  desc: string;
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div
      className="grid gap-px bg-rule"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
    >
      {steps.map((step, i) => (
        <div key={i} className="relative bg-white p-7">
          <span
            aria-hidden
            className="font-heading text-5xl font-bold leading-none text-rule"
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-4 text-navy">{step.title}</h3>
          <p className="mt-2 text-sm text-mid">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
