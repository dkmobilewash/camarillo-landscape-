import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileCta from './components/MobileCta';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import {
  SERVICES_OVERVIEW_SLUG,
  ABOUT_SLUG,
  CONTACT_SLUG,
  BLOG_SLUG,
} from './data/business';

const Home = lazy(() => import('./pages/Home'));
const ServicesOverview = lazy(() => import('./pages/ServicesOverview'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ServiceAreasIndex = lazy(() => import('./pages/ServiceAreasIndex'));
const ServiceAreaRoute = lazy(() => import('./pages/ServiceAreaRoute'));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/${SERVICES_OVERVIEW_SLUG}`} element={<ServicesOverview />} />
            <Route path={`/${ABOUT_SLUG}`} element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path={`/${CONTACT_SLUG}`} element={<Contact />} />
            <Route path={`/${BLOG_SLUG}`} element={<BlogIndex />} />
            <Route path={`/${BLOG_SLUG}/:slug`} element={<BlogPost />} />
            <Route path="/service-areas" element={<ServiceAreasIndex />} />
            <Route path="/service-areas/:slug" element={<ServiceAreaRoute />} />
            {/* Individual service pages live at the root, e.g. /landscape-design */}
            <Route path="/:slug" element={<ServicePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileCta />
      {/* Spacer so the fixed mobile CTA never covers footer content */}
      <div className="h-12 lg:hidden" aria-hidden />
    </>
  );
}
