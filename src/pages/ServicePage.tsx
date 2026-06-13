import { Link, useParams, Navigate } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import SectionEyebrow from '../components/SectionEyebrow';
import ProcessSteps from '../components/ProcessSteps';
import FaqAccordion from '../components/FaqAccordion';
import CtaSection from '../components/CtaSection';
import YouMayAlsoNeed from '../components/YouMayAlsoNeed';
import Photo from '../components/Photo';
import { useFadeUp } from '../hooks/useFadeUp';
import { serviceMap, relatedServices } from '../data/services';
import { serviceAreas } from '../data/serviceAreas';
import { business } from '../data/business';
import { routes } from '../lib/routes';

export default function ServicePage() {
  const { slug = '' } = useParams();
  const ref = useFadeUp<HTMLDivElement>();
  const service = serviceMap[slug];

  if (!service) return <Navigate to={routes.home} replace />;

  const related = relatedServices(slug, 3);
  const canonical = `${business.baseUrl}${routes.service(slug)}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.h1,
    provider: {
      '@type': 'LandscapingBusiness',
      name: business.name,
      telephone: '+18053986469',
    },
    areaServed: business.areaServed,
    url: canonical,
  };

  return (
    <div ref={ref}>
      <PageMeta
        title={service.title}
        description={service.metaDescription}
        canonical={canonical}
        schema={schema}
      />
      <PageHero
        eyebrow="Our Services"
        title={service.h1}
        subtitle={service.cardDescription}
        image={service.images[0]}
      >
        <Link to={routes.contact} className="btn btn-primary">
          Get a Free Estimate
        </Link>
        <a href={business.phoneHref} className="btn btn-secondary">
          Call {business.phone}
        </a>
      </PageHero>
      <Breadcrumb
        items={[
          { label: 'Home', to: routes.home },
          { label: 'Services', to: routes.servicesOverview },
          { label: service.name },
        ]}
      />

      {/* Intro */}
      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 fade-up">
            <SectionEyebrow eyebrow={`${service.name} in Camarillo`} heading={`About Our ${service.name}`} />
            {service.intro.map((p, i) => (
              <p key={i} className="text-mid">
                {p}
              </p>
            ))}
          </div>
          <div className="fade-up">
            <Photo
              src={service.images[1] ?? service.images[0]}
              alt={`${service.name} project in Camarillo`}
              label={`${service.name} project photo`}
              ratio="3/4"
            />
            <div className="mt-4 border-l-4 border-gold bg-cream p-5">
              <p className="font-heading uppercase text-navy">Free Estimates</p>
              <p className="mt-1 text-sm text-mid">
                Licensed &amp; insured, local to Camarillo, and happy to answer your questions.
              </p>
              <a href={business.phoneHref} className="mt-3 inline-block font-heading text-lg text-gold">
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-section-alt section-pad">
        <div className="container-x">
          <SectionEyebrow eyebrow="The Payoff" heading={`Benefits of ${service.name}`} align="center" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b) => (
              <div key={b.title} className="fade-up border-l-4 border-gold bg-white p-6 shadow-sm">
                <h3 className="text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-mid">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="container-x">
          <SectionEyebrow eyebrow="What to Expect" heading={`Our ${service.name} Process`} align="center" />
          <div className="fade-up">
            <ProcessSteps steps={service.process} />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-navy text-white section-pad">
        <div className="container-x">
          <SectionEyebrow
            eyebrow="Why Us"
            heading="Why Choose Camarillo Landscape Solutions"
            variant="dark"
            align="center"
          />
          <p className="mx-auto mb-10 max-w-2xl text-center text-cream/80">
            We bring local knowledge, quality craftsmanship, and a genuine commitment to every
            Camarillo property we work on.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: 'Licensed & Insured',
                d: 'Fully licensed and insured for your protection and peace of mind on every project.',
              },
              {
                t: 'Local Camarillo Knowledge',
                d: 'We know the neighborhoods, the HOAs, the climate, and the Calleguas water realities.',
              },
              {
                t: 'Premium Materials & Craftsmanship',
                d: 'Quality materials and proper installation that hold up beautifully in our climate.',
              },
            ].map((x) => (
              <div key={x.t} className="fade-up border-l-4 border-gold bg-white/5 p-6">
                <h3 className="text-white">{x.t}</h3>
                <p className="mt-2 text-sm text-cream/80">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-section-alt section-pad">
        <div className="container-x">
          <SectionEyebrow eyebrow="Our Work" heading={`${service.name} in Action`} align="center" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.images.map((src, i) => (
              <div key={i} className="fade-up overflow-hidden border-l-4 border-gold shadow-sm">
                <Photo src={src} alt={`${service.name} example ${i + 1}`} ratio="4/3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <SectionEyebrow eyebrow="Questions" heading="Frequently Asked Questions" align="center" />
          <FaqAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-cream section-pad">
        <div className="container-x">
          <SectionEyebrow
            eyebrow="Where We Work"
            heading={`${service.name} Across the Camarillo Area`}
          />
          <p className="max-w-3xl text-mid">
            We provide {service.name.toLowerCase()} throughout Camarillo and every surrounding
            community, including{' '}
            {serviceAreas.map((a, i) => (
              <span key={a.slug}>
                <Link to={routes.serviceArea(a.slug)} className="text-gold hover:text-gold-lt">
                  {a.name}
                </Link>
                {i < serviceAreas.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        </div>
      </section>

      <YouMayAlsoNeed services={related} />

      <CtaSection heading={`Ready for ${service.name} in Camarillo?`} />
    </div>
  );
}
