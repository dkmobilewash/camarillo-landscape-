import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import SectionEyebrow from '../components/SectionEyebrow';
import CtaSection from '../components/CtaSection';
import Photo from '../components/Photo';
import { useFadeUp } from '../hooks/useFadeUp';
import { business } from '../data/business';
import { routes } from '../lib/routes';

const projects: { label: string; src: string }[] = [
  {
    label: 'Drought-Tolerant Front Yard — Las Posas Estates',
    src: 'https://media.istockphoto.com/id/2156689384/photo/water-conservation-featured-in-a-simple-well-designed-xeriscaped-garden.jpg?s=612x612&w=0&k=20&c=zDu30qvg8vIJKLvLduHJ5edcLbIHPkpwcl0ndq9prtg=',
  },
  {
    label: 'Paver Patio & Seating Wall — Springville',
    src: 'https://media.istockphoto.com/id/1428026698/photo/hardscape-details-of-a-tumbled-paver-patio-flagstone-stepping-stones-and-horizontal-cedar.jpg?s=612x612&w=0&k=20&c=jchvL0WPgknOrxigRVwH-Latj6RWsDP7lrWUuSXiSyw=',
  },
  {
    label: 'Artificial Turf Backyard — Dos Vientos Ranch',
    src: 'https://www.patioproductions.com/cdn/shop/articles/Choosing_the_Best_Fake_Grass_for_a_Stylish_Backyard_Design-main-image_af3471c6-e6cd-466d-a414-f085bd5515e7.jpg?v=1769087122&width=2560',
  },
  {
    label: 'Outdoor Kitchen & Dining — Santa Rosa Valley',
    src: 'https://media.istockphoto.com/id/2175974253/photo/modern-outdoor-kitchen-and-dining-area.jpg?s=612x612&w=0&k=20&c=eCNsPRDfUVKMmad9WRg3ub68Ox2EphECxCP1g9EXUU0=',
  },
  {
    label: 'Landscape Lighting at Dusk — Camarillo',
    src: 'https://media.istockphoto.com/id/2150168202/photo/elegant-and-modern-garden-led-lighting.jpg?s=612x612&w=0&k=20&c=QsS03RA0FvXo7JQ91cCourIBIxpjLHAS040Fo8UWPsc=',
  },
  {
    label: 'Hillside Retaining Walls — Camarillo Heights',
    src: 'https://media.istockphoto.com/id/117187022/photo/filtered-golden-sunlight-iluminates-rock-retaining-wall.jpg?s=612x612&w=0&k=20&c=qtnxwfdFGQp70HLBvRs-rEuokCfeld7iQWLmxvt7bvs=',
  },
  {
    label: 'Smart Irrigation Conversion — Mission Oaks',
    src: 'https://media.istockphoto.com/id/1224801898/photo/garden-water-system.jpg?s=612x612&w=0&k=20&c=SW8zfORUN6Ur7DP6UuEcciwXN-32SpY08TWZLJlZoj4=',
  },
  {
    label: 'Low-Maintenance Garden — Leisure Village',
    src: 'https://media.istockphoto.com/id/2245287606/photo/modern-minimalist-garden-with-stepping-stones-and-colorful-flowers.jpg?s=612x612&w=0&k=20&c=UU-UJNNEVZ_iwImfCpDex-Y0zGXA8h39qWBs2xUGsSY=',
  },
  {
    label: 'New Sod Lawn Installation — Calleguas',
    src: 'https://media.istockphoto.com/id/1387980624/photo/grass-field-meadow-green-on-the-garden-front-of-the-house.jpg?s=612x612&w=0&k=20&c=DeCFI5D28BmbzQMefRK9WZBd_2dSLMsiAg4aSrlnpHU=',
  },
  {
    label: 'Fire Pit & Patio at Sunset — Dos Vientos Ranch',
    src: 'https://media.istockphoto.com/id/2185699288/photo/modern-patio-with-vibrant-sunset-sky.jpg?s=612x612&w=0&k=20&c=XeUAGuVCURbqzC1HjWlM-KrcDTa0-j5Te8I04wCRp8Y=',
  },
  {
    label: 'Pergola & Stone Fireplace — Santa Rosa Valley',
    src: 'https://media.istockphoto.com/id/2168487231/photo/large-gray-pergola-on-pavers-with-stone-fireplace-and-waterfall-urns-for-backyard-oasis.jpg?s=612x612&w=0&k=20&c=r73pWzPWRGdZ7yl12LXrDZsErUIk1UEywS8P-NHW-Aw=',
  },
  {
    label: 'Colorful Seasonal Plantings — Mission Oaks',
    src: 'https://media.istockphoto.com/id/153194946/photo/colorful-flower-garden.jpg?s=612x612&w=0&k=20&c=dPDsyi3bTz9iRIuRYKAxloHkINauALfXezrydhI006U=',
  },
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
        image="https://media.istockphoto.com/id/2183289459/photo/design-of-landscaping-in-the-garden-park-square-recreation-area.jpg?s=612x612&w=0&k=20&c=A4nCdEJAAUGh9aqT4U3q-3NbAMupKhjLDG8abTeZI9M="
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
              <figure
                key={p.label}
                className="fade-up overflow-hidden border-l-4 border-gold shadow-sm"
              >
                <Photo src={p.src} alt={p.label} label={p.label} ratio="4/3" />
                <figcaption className="bg-white p-4 text-sm font-heading uppercase tracking-wide text-navy">
                  {p.label}
                </figcaption>
              </figure>
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
