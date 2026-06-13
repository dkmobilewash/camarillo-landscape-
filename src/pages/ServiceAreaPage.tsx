import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import SectionEyebrow from '../components/SectionEyebrow';
import ServiceCard from '../components/ServiceCard';
import FaqAccordion from '../components/FaqAccordion';
import CtaSection from '../components/CtaSection';
import Photo from '../components/Photo';
import { useFadeUp } from '../hooks/useFadeUp';
import type { ServiceArea } from '../data/serviceAreas';
import { serviceAreaMap } from '../data/serviceAreas';
import { serviceMap } from '../data/services';
import { business } from '../data/business';
import { routes } from '../lib/routes';

export default function ServiceAreaPage({ area }: { area: ServiceArea }) {
  const ref = useFadeUp<HTMLDivElement>();
  const canonical = `${business.baseUrl}${routes.serviceArea(area.slug)}`;
  const topServices = area.topServices.map((s) => serviceMap[s]).filter(Boolean);
  const nearby = area.nearby.map((s) => serviceAreaMap[s]).filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LandscapingBusiness',
    name: `${business.name} — ${area.name}`,
    telephone: '+18053986469',
    areaServed: area.displayName,
    url: canonical,
    priceRange: '$$',
  };

  return (
    <div ref={ref}>
      <PageMeta title={area.title} description={area.metaDescription} canonical={canonical} schema={schema} />
      <PageHero
        eyebrow="Service Area"
        title={`Landscaping Services in ${area.displayName}`}
        subtitle={area.heroLine}
        image={area.image}
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
          { label: 'Service Areas', to: routes.serviceAreas },
          { label: area.name },
        ]}
      />

      {/* Local intro */}
      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 fade-up">
            <SectionEyebrow eyebrow={area.tagline} heading={`Your Landscaper in ${area.name}`} />
            {area.intro.map((p, i) => (
              <p key={i} className="text-mid">
                {p}
              </p>
            ))}
          </div>
          <div className="fade-up">
            <Photo
              src={area.image}
              alt={`Landscaping in ${area.name}`}
              label={`${area.name} neighborhood landscaping`}
              ratio="3/4"
            />
          </div>
        </div>
      </section>

      {/* Services for this area */}
      <section className="bg-section-alt section-pad">
        <div className="container-x">
          <SectionEyebrow
            eyebrow="What We Offer"
            heading={`Services We Offer in ${area.name}`}
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topServices.map((s) => (
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

      {/* Why residents choose us */}
      <section className="section-pad">
        <div className="container-x">
          <SectionEyebrow
            eyebrow="Why Us"
            heading={`Why ${area.name} Residents Choose Us`}
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {area.why.map((w) => (
              <div key={w.title} className="fade-up border-l-4 border-gold bg-cream p-6 shadow-sm">
                <h3 className="text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-mid">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="bg-cream section-pad">
        <div className="container-x max-w-3xl">
          <SectionEyebrow eyebrow="Local Questions" heading={`${area.name} FAQ`} align="center" />
          <FaqAccordion faqs={area.faqs} />
        </div>
      </section>

      {/* Nearby areas */}
      <section className="section-pad">
        <div className="container-x">
          <SectionEyebrow eyebrow="Nearby" heading="Nearby Areas We Also Serve" align="center" />
          <div className="flex flex-wrap justify-center gap-3 fade-up">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                to={routes.serviceArea(n.slug)}
                className="border border-rule bg-white px-5 py-2 font-heading text-sm uppercase tracking-wide text-navy transition-colors hover:border-gold hover:bg-navy hover:text-white"
              >
                {n.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading={`Transform Your ${area.name} Property`} subtext={area.closingLine} />
    </div>
  );
}
