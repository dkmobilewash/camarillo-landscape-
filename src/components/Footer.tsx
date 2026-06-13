import { Link } from 'react-router-dom';
import { business } from '../data/business';
import { services } from '../data/services';
import { serviceAreas } from '../data/serviceAreas';
import { routes } from '../lib/routes';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111d27] text-cream/75">
      <div className="container-x py-14">
        <div
          className="grid gap-10"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          {/* Brand */}
          <div>
            <div className="leading-none">
              <span className="block font-heading text-lg font-bold uppercase tracking-wide text-white">
                Camarillo Landscape
              </span>
              <span className="font-serif text-sm italic text-gold">Solutions</span>
            </div>
            <p className="mt-4 font-serif italic text-cream/70">{business.tagline}</p>
            <p className="mt-4 text-sm text-cream/60">{business.license}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-gold">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={routes.service(s.slug)} className="text-cream/75 hover:text-gold">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-gold">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link to={routes.serviceArea(a.slug)} className="text-cream/75 hover:text-gold">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-gold">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                📞{' '}
                <a href={business.phoneHref} className="text-cream/75 hover:text-gold">
                  {business.phone}
                </a>
              </li>
              <li>🕐 {business.hours}</li>
              <li>📍 Camarillo, CA</li>
            </ul>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to={routes.home} className="text-cream/75 hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link to={routes.about} className="text-cream/75 hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link to={routes.contact} className="text-cream/75 hover:text-gold">
                  Free Estimate
                </Link>
              </li>
            </ul>
            <Link to={routes.contact} className="btn btn-primary mt-5 !px-6 !py-3">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-cream/55 md:flex-row md:items-center md:justify-between">
          <span>© {year} {business.name}. All Rights Reserved.</span>
          <span className="md:text-right">
            Proudly serving Mission Oaks, Leisure Village, Las Posas Estates, Santa Rosa Valley, and
            all of Camarillo.
          </span>
        </div>
      </div>
    </footer>
  );
}
