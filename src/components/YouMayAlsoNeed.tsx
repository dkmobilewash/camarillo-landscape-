import ServiceCard from './ServiceCard';
import SectionEyebrow from './SectionEyebrow';
import type { Service } from '../data/services';
import { routes } from '../lib/routes';

export default function YouMayAlsoNeed({ services }: { services: Service[] }) {
  return (
    <section className="bg-cream section-pad">
      <div className="container-x">
        <SectionEyebrow
          eyebrow="Related Services"
          heading="You May Also Need"
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
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
  );
}
