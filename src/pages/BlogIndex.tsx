import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import SectionEyebrow from '../components/SectionEyebrow';
import CtaSection from '../components/CtaSection';
import { useFadeUp } from '../hooks/useFadeUp';
import { blogPosts } from '../data/blogPosts';
import { business } from '../data/business';
import { routes } from '../lib/routes';

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageMeta
        title="Landscaping Blog | Camarillo Landscape Solutions"
        description="Tips, guides, and advice on landscaping in Camarillo: drought-tolerant design, turf vs. grass, paver costs, HOA approval, irrigation savings, and more. Call 805-398-6469."
        canonical={business.baseUrl + routes.blog}
      />
      <PageHero
        eyebrow="Resources"
        title="The Camarillo Landscaping Blog"
        subtitle="Practical, local advice to help you plan a better outdoor space."
      />
      <Breadcrumb items={[{ label: 'Home', to: routes.home }, { label: 'Blog' }]} />

      <section className="section-pad">
        <div className="container-x">
          <SectionEyebrow eyebrow="Latest Articles" heading="Tips & Guides" align="center" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={routes.blogPost(post.slug)}
                className="group fade-up flex h-full flex-col border-t-4 border-gold bg-white p-7 shadow-sm transition-colors hover:bg-cream"
              >
                <div className="flex items-center gap-3 text-xs text-mid">
                  <span className="bg-navy px-2 py-1 font-heading uppercase tracking-wide text-cream">
                    {post.tag}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 text-navy">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-mid">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-mid">{formatDate(post.date)}</span>
                  <span className="font-heading text-sm uppercase tracking-wide text-gold group-hover:text-gold-lt">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Ready to Put These Ideas to Work?" />
    </div>
  );
}
