import { useState } from 'react';
import { business } from '../data/business';
import { services } from '../data/services';

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  neighborhood: string;
  description: string;
}

const empty: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  neighborhood: '',
  description: '',
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    if (!form.email.trim()) {
      e.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email.';
    }
    if (!form.neighborhood.trim()) e.neighborhood = 'Please enter your neighborhood or zip.';
    return e;
  }

  function update(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setSubmitting(true);
// Send form data to Zapier webhook
    fetch('https://hooks.zapier.com/hooks/catch/20117350/44fmixd/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        website: 'Camarillo Landscape Design',
        submittedAt: new Date().toISOString(),
      }),
    }).catch((e) => console.error('[Zapier Webhook Error]', e));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-t-4 border-gold bg-white p-8 shadow-sm">
        <h3 className="text-navy">Thank you!</h3>
        <p className="mt-3 text-mid">
          We&apos;ll be in touch within 1 business day. For faster service, call us at{' '}
          <a href={business.phoneHref} className="font-semibold text-gold-deep hover:text-navy">
            {business.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputBase =
    'w-full border bg-white px-4 py-3 text-charcoal outline-none focus:border-gold';
  const errorBorder = (f: keyof FormState) =>
    errors[f] ? 'border-red-500' : 'border-rule';

  return (
    <form onSubmit={handleSubmit} noValidate className="border-t-4 border-gold bg-white p-8 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={`${inputBase} ${errorBorder('name')}`}
            autoComplete="name"
          />
        </Field>
        <Field label="Phone Number" required error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={`${inputBase} ${errorBorder('phone')}`}
            autoComplete="tel"
          />
        </Field>
        <Field label="Email Address" required error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={`${inputBase} ${errorBorder('email')}`}
            autoComplete="email"
          />
        </Field>
        <Field label="Neighborhood / Zip Code" required error={errors.neighborhood}>
          <input
            type="text"
            value={form.neighborhood}
            onChange={(e) => update('neighborhood', e.target.value)}
            className={`${inputBase} ${errorBorder('neighborhood')}`}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Service Interested In">
            <select
              value={form.service}
              onChange={(e) => update('service', e.target.value)}
              className={`${inputBase} border-rule`}
            >
              <option value="">Select a service…</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Tell Us About Your Project">
            <textarea
              rows={4}
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              className={`${inputBase} border-rule resize-y`}
            />
          </Field>
        </div>
      </div>
      <button type="submit" disabled={submitting} className="btn btn-primary mt-6 w-full disabled:opacity-60">
        {submitting ? 'Sending…' : 'Send My Request'}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-heading text-xs uppercase tracking-wide text-navy">
        {label} {required && <span className="text-gold-deep">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
