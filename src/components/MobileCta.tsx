import { business } from '../data/business';

export default function MobileCta() {
  return (
    <a
      href={business.phoneHref}
      className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-center gap-2 bg-gold py-3 font-heading uppercase tracking-wide text-navy shadow-lg lg:hidden"
    >
      📞 Call Now: {business.phone}
    </a>
  );
}
