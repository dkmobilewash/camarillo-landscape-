import {
  SERVICES_OVERVIEW_SLUG,
  ABOUT_SLUG,
  CONTACT_SLUG,
  BLOG_SLUG,
} from '../data/business';

export const routes = {
  home: '/',
  servicesOverview: `/${SERVICES_OVERVIEW_SLUG}`,
  service: (slug: string) => `/${slug}`,
  about: `/${ABOUT_SLUG}`,
  gallery: '/gallery',
  contact: `/${CONTACT_SLUG}`,
  blog: `/${BLOG_SLUG}`,
  blogPost: (slug: string) => `/${BLOG_SLUG}/${slug}`,
  serviceAreas: '/service-areas',
  serviceArea: (slug: string) => `/service-areas/${slug}`,
};
