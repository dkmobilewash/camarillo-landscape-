import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHero from '../components/PageHero';
import SectionEyebrow from '../components/SectionEyebrow';
import ServiceCard from '../components/ServiceCard';
import ProcessSteps from '../components/ProcessSteps';
import CtaSection from '../components/CtaSection';
import ContactForm from '../components/ContactForm';
import { useFadeUp } from '../hooks/useFadeUp';
import { services } from '../data/services';
import { serviceAreas } from '../data/serviceAreas';
import { business, trustBadges, localBusinessSchema } from '../data/business';
import { routes } from '../lib/routes';

const whyChooseUs = [
  {
    title: 'Community Knowledge',
    desc: 'We know Camarillo block by block, from Spanish-style elevations to the HOA architectural standards that govern Mission Oaks, Springville, and Dos Vientos Ranch. Your project fits the neighborhood the first time.',
  },
  {
    title: 'Complete Service',
    desc: 'Design, hardscaping, irrigation, turf, lighting, and maintenance under one roof. One accountable team takes your project from first sketch to ongoing care, with no juggling subcontractors.',
  },
  {
    title: 'Quality Guaranteed',
    desc: 'Proper base prep, efficient water-wise systems, and premium materials built for our climate. We build to last and stand behind the craftsmanship on every Camarillo property we touch.',
  },
];

const processSteps = [
  { title: 'Free Consultation', desc: 'We visit your property, listen to your goals, and review any HOA requirements.' },
  { title: 'Custom Design Plan', desc: 'You get a plan tailored to your lot, your style, and Camarillo conditions.' },
  { title: 'Professional Installation', desc: 'Our crews build it right, on schedule, and leave the site clean.' },
  { title: 'Ongoing Maintenance', desc: 'Optional programs keep your landscape sharp and HOA-compliant year-round.' },
];

const testimonials = [
  {
    name: 'Sandra & Mark R.',
    area: 'Las Posas Estates',
    text: 'We live in Las Posas Estates and had them redesign our entire front yard with drought-tolerant planting and new lighting. It sailed through HOA approval and the curb appeal is incredible. Easily the best contractor we have worked with.',
  },
  {
    name: 'Diane K.',
    area: 'Mission Oaks',
    text: 'Our HOA in Mission Oaks hired them for common-area maintenance and irrigation upgrades. Crews are reliable, communication is excellent, and the properties have never looked better. Highly recommend for any HOA board.',
  },
  {
    name: 'Anthony P.',
    area: 'Dos Vientos Ranch',
    text: 'Dos Vientos Ranch home, and we could not be happier with the turf installation and paver patio. They knew exactly what the HOA would approve and handled all the paperwork. The backyard is now our favorite room in the house.',
  },
];

export default function Home() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageMeta
        title="Landscaping Camarillo, CA | Camarillo Landscape Solutions"
        description="Camarillo Landscape Solutions offers professional landscaping, hardscaping, irrigation, and outdoor living services throughout Camarillo and surrounding communities. Call 805-398-6469 for a free estimate."
        canonical={business.baseUrl + '/'}
        schema={localBusinessSchema}
        ogImage={business.ogImage}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Camarillo, CA"
        title="Camarillo's Landscaping & Outdoor Living Experts"
        subtitle="Serving Mission Oaks, Las Posas Estates, Santa Rosa Valley, Dos Vientos Ranch, and the entire Camarillo area."
      >
        <Link to={routes.contact} className="btn btn-primary">
          Get a Free Estimate
        </Link>
        <Link to={routes.servicesOverview} className="btn btn-secondary">
          See Our Services
        </Link>
      </PageHero>

      {/* Trust badges */}
      <div className="bg-[#111d27] text-cream/80">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-sm">
          {trustBadges.map((b) => (
            <span key={b} className="font-heading uppercase tracking-wide">
              <span className="text-gold">✓</span> {b}
            </span>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <section className="section-pad">
        <div className="container-x">
          <SectionEyebrow
            eyebrow="What We Do"
            heading="Our Landscaping Services"
            subtitle="Everything your Camarillo property needs, from first design to ongoing care."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.slug} className="fade-up">
                <ServiceCard
                  to={routes.service(s.slug)}
                  title={s.name}
                  description={s.cardDescription}
                  icon={s.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-section-alt section-pad">
        <div className="container-x">
          <SectionEyebrow eyebrow="Why Camarillo Trusts Us" heading="Why Choose Us" align="center" />
          <div className="grid gap-8 md:grid-cols-3">
            {whyChooseUs.map((w) => (
              <div key={w.title} className="fade-up border-l-4 border-gold bg-white p-7 shadow-sm">
                <h3 className="text-navy">{w.title}</h3>
                <p className="mt-3 text-mid">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="container-x">
          <SectionEyebrow
            eyebrow="How It Works"
            heading="Our Simple Process"
            subtitle="Four straightforward steps from idea to a landscape you love."
            align="center"
          />
          <div className="fade-up">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-cream section-pad">
        <div className="container-x">
          <SectionEyebrow
            eyebrow="Where We Work"
            heading="Serving Camarillo & Every Surrounding Community"
            align="center"
          />
          <p className="mx-auto max-w-2xl text-center text-mid">
            From Leisure Village to Dos Vientos Ranch, we know every neighborhood in the Camarillo
            area and understand what local homeowners and HOAs expect.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 fade-up">
            {serviceAreas.map((a) => (
              <Link
                key={a.slug}
                to={routes.serviceArea(a.slug)}
                className="border border-rule bg-white px-5 py-2 font-heading text-sm uppercase tracking-wide text-navy transition-colors hover:border-gold hover:bg-navy hover:text-white"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="container-x">
          <SectionEyebrow eyebrow="Reviews" heading="What Camarillo Homeowners Say" align="center" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="fade-up border-l-4 border-gold bg-white p-7 shadow-sm">
                <div className="text-gold" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="mt-3 font-serif italic text-charcoal">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 font-heading text-sm uppercase tracking-wide text-navy">
                  {t.name}
                </p>
                <p className="text-sm text-mid">{t.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <CtaSection
        heading="Ready to Transform Your Camarillo Property?"
        subtext="Get a free, no-obligation estimate from your local landscaping team."
      />

      {/* Contact / estimate form */}
      <section className="bg-section-alt section-pad" id="estimate">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Free Estimate" heading="Request Your Estimate" />
            <p className="text-mid">
              Tell us about your project and we&apos;ll get back to you within one business day.
              Prefer to talk now? Call{' '}
              <a href={business.phoneHref} className="font-semibold text-gold">
                {business.phone}
              </a>
              .
            </p>
            <ul className="mt-6 space-y-3 text-charcoal">
              <li>
                <span className="font-heading uppercase text-navy">Phone:</span>{' '}
                <a href={business.phoneHref} className="text-gold">
                  {business.phone}
                </a>
              </li>
              <li>
                <span className="font-heading uppercase text-navy">Hours:</span> {business.hours}
              </li>
              <li>
                <span className="font-heading uppercase text-navy">Area:</span> Camarillo &amp;
                surrounding communities
              </li>
              <li>
                <span className="font-heading uppercase text-navy">Credentials:</span>{' '}
                {business.license}
              </li>
            </ul>
          </div>
          <div className="fade-up">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
