export const business = {
  name: 'Camarillo Landscape Solutions',
  shortName: 'Camarillo Landscape',
  phone: '805-398-6469',
  phoneHref: 'tel:8053986469',
  email: 'info@camarillolandscapesolutions.com',
  city: 'Camarillo',
  region: 'CA',
  hours: 'Mon–Sat: 7am–6pm',
  license: 'Licensed & Insured · CA C-27 Landscape Contractor',
  tagline: 'Serving Camarillo & Surrounding Communities Since Day One',
  baseUrl: 'https://camarillolandscapesolutions.com',
  ogImage: 'https://camarillolandscapesolutions.com/og-image.jpg',
  geo: { lat: 34.2164, lng: -119.0376 },
  areaServed:
    'Camarillo, Mission Oaks, Leisure Village, Springville, Las Posas Estates, Somis, Santa Rosa Valley, Calleguas, Dos Vientos Ranch, and Camarillo Heights, CA',
};

export const trustBadges = [
  'Licensed & Insured',
  'Camarillo Local',
  'Free Estimates',
  '5-Star Rated',
];

/** Slug used for the services overview route, e.g. /landscaping-services */
export const SERVICES_OVERVIEW_SLUG = 'landscaping-services';
/** About route slug */
export const ABOUT_SLUG = 'about-camarillo-landscape-solutions';
/** Contact route slug */
export const CONTACT_SLUG = 'free-estimate-camarillo';
/** Blog index route slug */
export const BLOG_SLUG = 'landscaping-blog';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  name: business.name,
  telephone: '+18053986469',
  url: business.baseUrl,
  image: business.ogImage,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Camarillo',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  areaServed: 'Camarillo, CA and surrounding communities',
  openingHours: 'Mo-Sa 07:00-18:00',
  priceRange: '$$',
};
