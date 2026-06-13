import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import SectionEyebrow from '../components/SectionEyebrow';
import CtaSection from '../components/CtaSection';
import { useFadeUp } from '../hooks/useFadeUp';
import { serviceAreas } from '../data/serviceAreas';
import { business } from '../data/business';
import { routes } from '../lib/routes';

export default function ServiceAreasIndex() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageMeta
        title="Service Areas | Camarillo Landscape Solutions"
        description="Camarillo Landscape Solutions serves Camarillo, Mission Oaks, Leisure Village, Springville, Las Posas Estates, Somis, Santa Rosa Valley, Calleguas, Dos Vientos Ranch, and Camarillo Heights. Call 805-398-6469."
        canonical={business.baseUrl + routes.serviceAreas}
      />
      <PageHero
        eyebrow="Where We Work"
        title="Our Service Areas"
        subtitle="Local landscaping expertise across Camarillo and every surrounding community."
      >
        <Link to={routes.contact} className="btn btn-primary">
          Get a Free Estimate
        </Link>
      </PageHero>
      <Breadcrumb items={[{ label: 'Home', to: routes.home }, { label: 'Service Areas' }]} />

      <section className="section-pad">
        <div className="container-x">
          <SectionEyebrow
            eyebrow="Communities We Serve"
            heading="Camarillo & Surrounding Neighborhoods"
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((a) => (
              <Link
                key={a.slug}
                to={routes.serviceArea(a.slug)}
                className="group fade-up flex h-full flex-col border-t-4 border-gold bg-white p-7 shadow-sm transition-colors hover:bg-cream"
              >
                <h3 className="text-navy">{a.name}</h3>
                <p className="mt-2 flex-1 text-sm text-mid">{a.tagline}</p>
                <span className="mt-4 font-heading text-sm uppercase tracking-wide text-gold group-hover:text-gold-lt">
                  View Area →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Don't See Your Neighborhood?" subtext="We serve the greater Camarillo area. Give us a call and ask." />
    </div>
  );
}
