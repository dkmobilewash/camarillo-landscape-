import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import SectionEyebrow from '../components/SectionEyebrow';
import CtaSection from '../components/CtaSection';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { useFadeUp } from '../hooks/useFadeUp';
import { serviceAreas } from '../data/serviceAreas';
import { business } from '../data/business';
import { routes } from '../lib/routes';

const values = [
  {
    title: 'Craftsmanship First',
    desc: 'We build every project the right way, with proper prep and quality materials, because shortcuts always show up later.',
  },
  {
    title: 'Local Accountability',
    desc: 'We live and work in the Camarillo area. Our reputation is built one neighbor and one yard at a time.',
  },
  {
    title: 'Water Responsibility',
    desc: 'Every design respects our climate and Calleguas conservation, so beautiful landscapes do not mean wasteful ones.',
  },
  {
    title: 'Honest Communication',
    desc: 'Clear estimates, realistic timelines, and straight answers, before, during, and after the project.',
  },
];

export default function About() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageMeta
        title="About Us | Camarillo Landscape Solutions"
        description="Learn about Camarillo Landscape Solutions, a local landscaping company serving Camarillo and surrounding communities with design, installation, and maintenance. Call 805-398-6469."
        canonical={business.baseUrl + routes.about}
      />
      <PageHero
        eyebrow="About Us"
        title="Your Local Camarillo Landscaping Team"
        subtitle={business.tagline}
      >
        <Link to={routes.contact} className="btn btn-primary">
          Get a Free Estimate
        </Link>
      </PageHero>
      <Breadcrumb items={[{ label: 'Home', to: routes.home }, { label: 'About' }]} />

      {/* Story */}
      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Our Story" heading="Rooted in the Camarillo Community" />
            <p className="text-mid">
              Camarillo Landscape Solutions was built on a simple idea: this community deserves a
              landscaping company that truly knows it. Camarillo is a master-planned city of
              Spanish-style homes, manicured streets, and proud homeowners who hold their
              neighborhoods to a high standard, and we set out to meet that standard on every
              property we touch.
            </p>
            <p className="text-mid">
              From the established neighborhoods around Pleasant Valley to newer master-planned
              tracts in Springville and Dos Vientos Ranch, we have learned what works here: clean,
              HOA-ready designs, water-wise irrigation suited to the Calleguas district, and
              craftsmanship that holds up to Southern California sun. We bring that knowledge to
              every consultation.
            </p>
            <p className="text-mid">
              Whether we are refreshing a front yard, building an outdoor kitchen, or maintaining an
              HOA community&apos;s common areas, our goal is the same: a landscape you are proud of
              and never have to worry about.
            </p>
          </div>
          <div className="fade-up">
            <ImagePlaceholder label="Camarillo Landscape Solutions crew on site" ratio="4/3" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-section-alt section-pad">
        <div className="container-x">
          <SectionEyebrow eyebrow="What We Stand For" heading="Our Values" align="center" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="fade-up border-l-4 border-gold bg-white p-6 shadow-sm">
                <h3 className="text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-mid">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area + commitment */}
      <section className="section-pad">
        <div className="container-x">
          <SectionEyebrow
            eyebrow="Where We Serve"
            heading="Our Service Area"
            subtitle="Proudly serving Camarillo and every surrounding community."
          />
          <div className="flex flex-wrap gap-3 fade-up">
            {serviceAreas.map((a) => (
              <Link
                key={a.slug}
                to={routes.serviceArea(a.slug)}
                className="border border-rule bg-cream px-5 py-2 font-heading text-sm uppercase tracking-wide text-navy transition-colors hover:border-gold hover:bg-navy hover:text-white"
              >
                {a.name}
              </Link>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-mid fade-up">
            Our commitment to this community goes beyond individual projects. We work with
            homeowners, property managers, and HOA boards across the Camarillo area, and we treat
            every property as if it were on our own street, because chances are, it is close.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Let's Work Together"
        subtext="Experience the difference a local, community-rooted team makes."
      />
    </div>
  );
}
