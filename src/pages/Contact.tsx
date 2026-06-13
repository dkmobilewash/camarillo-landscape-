import PageMeta from '../components/PageMeta';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import SectionEyebrow from '../components/SectionEyebrow';
import ContactForm from '../components/ContactForm';
import { useFadeUp } from '../hooks/useFadeUp';
import { business } from '../data/business';
import { routes } from '../lib/routes';

const trust = ['Licensed & Insured', 'Free Estimates', 'Custom Designs', 'Local & Trusted'];

export default function Contact() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageMeta
        title="Free Estimate in Camarillo, CA | Camarillo Landscape Solutions"
        description="Request a free landscaping estimate in Camarillo, CA. Tell us about your project and we'll respond within one business day. Call 805-398-6469."
        canonical={business.baseUrl + routes.contact}
      />
      <PageHero
        eyebrow="Free Estimate"
        title="Request Your Free Estimate"
        subtitle="Tell us about your Camarillo project and we'll be in touch within one business day."
      />
      <Breadcrumb items={[{ label: 'Home', to: routes.home }, { label: 'Free Estimate' }]} />

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 fade-up">
            <SectionEyebrow eyebrow="Get Started" heading="Tell Us About Your Project" />
            <ContactForm />
          </div>

          <aside className="lg:col-span-2 fade-up">
            <div className="bg-navy p-8 text-white">
              <h3 className="text-white">Contact Information</h3>
              <ul className="mt-5 space-y-4 text-cream/85">
                <li>
                  <span className="block font-heading text-xs uppercase tracking-wide text-gold">
                    Phone
                  </span>
                  <a href={business.phoneHref} className="text-white hover:text-gold-lt">
                    {business.phone}
                  </a>
                </li>
                <li>
                  <span className="block font-heading text-xs uppercase tracking-wide text-gold">
                    Hours
                  </span>
                  {business.hours}
                </li>
                <li>
                  <span className="block font-heading text-xs uppercase tracking-wide text-gold">
                    Service Area
                  </span>
                  Camarillo &amp; surrounding communities
                </li>
                <li>
                  <span className="block font-heading text-xs uppercase tracking-wide text-gold">
                    Credentials
                  </span>
                  {business.license}
                </li>
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-3 font-heading text-xs uppercase tracking-wide text-gold">
                  Why Choose Us
                </p>
                <ul className="space-y-2 text-sm text-cream/85">
                  {trust.map((t) => (
                    <li key={t}>
                      <span className="text-gold">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={business.phoneHref} className="btn btn-primary mt-8 w-full">
                Call {business.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
