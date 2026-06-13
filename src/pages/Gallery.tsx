import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import SectionEyebrow from '../components/SectionEyebrow';
import CtaSection from '../components/CtaSection';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { useFadeUp } from '../hooks/useFadeUp';
import { business } from '../data/business';
import { routes } from '../lib/routes';

const projects = [
  { label: 'Drought-Tolerant Front Yard — Las Posas Estates' },
  { label: 'Paver Patio & Seating Wall — Springville' },
  { label: 'Artificial Turf Backyard — Dos Vientos Ranch' },
  { label: 'Outdoor Kitchen & Pergola — Santa Rosa Valley' },
  { label: 'Landscape Lighting at Dusk — Camarillo' },
  { label: 'Hillside Retaining Walls — Camarillo Heights' },
  { label: 'Smart Irrigation Conversion — Mission Oaks' },
  { label: 'Low-Maintenance Courtyard — Leisure Village' },
  { label: 'New Sod Lawn Installation — Calleguas' },
];

export default function Gallery() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageMeta
        title="Project Gallery | Camarillo Landscape Solutions"
        description="Browse landscaping projects across Camarillo and surrounding communities: paver patios, drought-tolerant designs, turf, outdoor kitchens, lighting, and more. Call 805-398-6469."
        canonical={business.baseUrl + routes.gallery}
      />
      <PageHero
        eyebrow="Our Work"
        title="Project Gallery"
        subtitle="A look at landscapes we've designed and built across the Camarillo area."
      >
        <Link to={routes.contact} className="btn btn-primary">
          Start Your Project
        </Link>
      </PageHero>
      <Breadcrumb items={[{ label: 'Home', to: routes.home }, { label: 'Gallery' }]} />

      <section className="section-pad">
        <div className="container-x">
          <SectionEyebrow
            eyebrow="Recent Projects"
            heading="Camarillo-Area Transformations"
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.label} className="fade-up overflow-hidden border-l-4 border-gold shadow-sm">
                <ImagePlaceholder label={p.label} ratio="4/3" />
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-mid">
            Want to see something specific?{' '}
            <Link to={routes.contact} className="text-gold hover:text-gold-lt">
              Get in touch
            </Link>{' '}
            and we&apos;ll share relevant project examples for your neighborhood.
          </p>
        </div>
      </section>

      <CtaSection heading="Ready to Create Your Own?" />
    </div>
  );
}
