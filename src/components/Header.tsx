import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { business } from '../data/business';
import { services } from '../data/services';
import { serviceAreas } from '../data/serviceAreas';
import { routes } from '../lib/routes';

type Dropdown = 'services' | 'areas' | null;

export default function Header() {
  const [openDesktop, setOpenDesktop] = useState<Dropdown>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<Dropdown>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdowns on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setOpenDesktop(null);
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-heading uppercase text-sm tracking-wide transition-colors ${
      isActive ? 'text-gold' : 'text-white hover:text-gold-lt'
    }`;

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#111d27] text-cream/80">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <span className="hidden sm:block font-serif italic">{business.tagline}</span>
          <a
            href={business.phoneHref}
            className="font-heading uppercase tracking-wide text-gold hover:text-gold-lt"
          >
            📞 {business.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-navy shadow-md" ref={navRef}>
        <div className="container-x flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
          {/* Logo */}
          <Link to={routes.home} className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold uppercase tracking-wide text-white md:text-xl">
              Camarillo Landscape
            </span>
            <span className="font-serif text-sm italic text-gold">Solutions</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            <NavLink to={routes.home} className={navLinkClass} end>
              Home
            </NavLink>

            {/* Services dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDesktop(openDesktop === 'services' ? null : 'services')}
                className={`font-heading uppercase text-sm tracking-wide transition-colors ${
                  openDesktop === 'services' ? 'text-gold' : 'text-white hover:text-gold-lt'
                }`}
                aria-expanded={openDesktop === 'services'}
              >
                Services ▾
              </button>
              {openDesktop === 'services' && (
                <div className="absolute left-0 top-full mt-3 w-64 border-t-4 border-gold bg-white py-2 shadow-xl">
                  <Link
                    to={routes.servicesOverview}
                    className="block px-5 py-2 font-heading text-sm uppercase text-navy hover:bg-cream"
                  >
                    All Services
                  </Link>
                  <div className="my-1 border-t border-rule" />
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={routes.service(s.slug)}
                      className="block px-5 py-2 text-sm text-charcoal hover:bg-cream hover:text-navy"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDesktop(openDesktop === 'areas' ? null : 'areas')}
                className={`font-heading uppercase text-sm tracking-wide transition-colors ${
                  openDesktop === 'areas' ? 'text-gold' : 'text-white hover:text-gold-lt'
                }`}
                aria-expanded={openDesktop === 'areas'}
              >
                Service Areas ▾
              </button>
              {openDesktop === 'areas' && (
                <div className="absolute left-0 top-full mt-3 grid w-[28rem] grid-cols-2 gap-x-2 border-t-4 border-gold bg-white py-2 shadow-xl">
                  <Link
                    to={routes.serviceAreas}
                    className="col-span-2 block px-5 py-2 font-heading text-sm uppercase text-navy hover:bg-cream"
                  >
                    All Service Areas
                  </Link>
                  <div className="col-span-2 my-1 border-t border-rule" />
                  {serviceAreas.map((a) => (
                    <Link
                      key={a.slug}
                      to={routes.serviceArea(a.slug)}
                      className="block px-5 py-2 text-sm text-charcoal hover:bg-cream hover:text-navy"
                    >
                      {a.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to={routes.about} className={navLinkClass}>
              About
            </NavLink>
            <NavLink to={routes.gallery} className={navLinkClass}>
              Gallery
            </NavLink>
            <NavLink to={routes.blog} className={navLinkClass}>
              Blog
            </NavLink>
            <Link to={routes.contact} className="btn btn-primary !px-6 !py-3">
              Get Free Estimate
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy max-h-[calc(100vh-var(--header-height)-2.25rem)] overflow-y-auto border-t border-white/10">
          <nav className="container-x flex flex-col py-4">
            <Link to={routes.home} className="border-b border-white/10 py-3 font-heading uppercase text-white">
              Home
            </Link>

            <MobileAccordion
              label="Services"
              open={mobileAccordion === 'services'}
              onToggle={() => setMobileAccordion(mobileAccordion === 'services' ? null : 'services')}
            >
              <Link to={routes.servicesOverview} className="block py-2 text-gold">
                All Services
              </Link>
              {services.map((s) => (
                <Link key={s.slug} to={routes.service(s.slug)} className="block py-2 text-cream/90">
                  {s.name}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion
              label="Service Areas"
              open={mobileAccordion === 'areas'}
              onToggle={() => setMobileAccordion(mobileAccordion === 'areas' ? null : 'areas')}
            >
              <Link to={routes.serviceAreas} className="block py-2 text-gold">
                All Service Areas
              </Link>
              {serviceAreas.map((a) => (
                <Link key={a.slug} to={routes.serviceArea(a.slug)} className="block py-2 text-cream/90">
                  {a.name}
                </Link>
              ))}
            </MobileAccordion>

            <Link to={routes.about} className="border-b border-white/10 py-3 font-heading uppercase text-white">
              About
            </Link>
            <Link to={routes.gallery} className="border-b border-white/10 py-3 font-heading uppercase text-white">
              Gallery
            </Link>
            <Link to={routes.blog} className="border-b border-white/10 py-3 font-heading uppercase text-white">
              Blog
            </Link>
            <Link to={routes.contact} className="btn btn-primary mt-4">
              Get Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3 font-heading uppercase text-white"
        aria-expanded={open}
      >
        {label}
        <span className={`text-gold transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && <div className="pb-3 pl-4">{children}</div>}
    </div>
  );
}
