import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import SectionEyebrow from '../components/SectionEyebrow';
import ServiceCard from '../components/ServiceCard';
import ProcessSteps from '../components/ProcessSteps';
import CtaSection from '../components/CtaSection';
import { useFadeUp } from '../hooks/useFadeUp';
import { services } from '../data/services';
import { business } from '../data/business';
import { routes } from '../lib/routes';

const processSteps = [
  { title: 'Free Consultation', desc: 'We visit, listen, and review any HOA requirements.' },
  { title: 'Custom Design Plan', desc: 'A plan tailored to your lot and Camarillo conditions.' },
  { title: 'Professional Installation', desc: 'Built right, on schedule, with a clean site.' },
  { title: 'Ongoing Maintenance', desc: 'Optional programs keep it sharp year-round.' },
];

export default function ServicesOverview() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageMeta
        title="Landscaping Services in Camarillo, CA | Camarillo Landscape Solutions"
        description="Explore our full range of landscaping services in Camarillo: landscape design, hardscaping, irrigation, artificial turf, lighting, maintenance, sod, and outdoor kitchens. Call 805-398-6469."
        canonical={business.baseUrl + routes.servicesOverview}
      />
      <PageHero
        eyebrow="Our Services"
        title="Landscaping Services in Camarillo, CA"
        subtitle="Complete outdoor solutions for Camarillo homes and HOAs, from first design to ongoing care."
      >
        <Link to={routes.contact} className="btn btn-primary">
          Get a Free Estimate
        </Link>
        <a href={business.phoneHref} className="btn btn-secondary">
          Call {business.phone}
        </a>
      </PageHero>
      <Breadcrumb items={[{ label: 'Home', to: routes.home }, { label: 'Services' }]} />

      <section className="section-pad">
        <div className="container-x">
          <SectionEyebrow
            eyebrow="What We Do"
            heading="Everything Your Property Needs"
            subtitle="Eight core services, one accountable local team."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="bg-section-alt section-pad">
        <div className="container-x">
          <SectionEyebrow eyebrow="How It Works" heading="Our Simple Process" align="center" />
          <div className="fade-up">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      <CtaSection heading="Not Sure Where to Start?" subtext="Tell us about your property and we'll point you in the right direction." />
    </div>
  );
}
