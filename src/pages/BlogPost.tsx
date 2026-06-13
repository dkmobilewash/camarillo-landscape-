import { Link, useParams, Navigate } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import CtaSection from '../components/CtaSection';
import { useFadeUp } from '../hooks/useFadeUp';
import { blogPostMap, type Section } from '../data/blogPosts';
import { business } from '../data/business';
import { routes } from '../lib/routes';

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderSection(section: Section, i: number) {
  switch (section.type) {
    case 'h2':
      return (
        <h2 key={i} className="mt-10 text-navy" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
          {section.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={i} className="mt-8 text-navy">
          {section.text}
        </h3>
      );
    case 'p':
      return (
        <p key={i} className="mt-4 text-mid">
          {section.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={i} className="mt-4 list-disc space-y-2 pl-6 text-mid">
          {section.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i} className="mt-4 list-decimal space-y-2 pl-6 text-mid">
          {section.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ol>
      );
    case 'callout':
      return (
        <div key={i} className="mt-6 border-l-4 border-gold bg-cream p-5 font-serif italic text-charcoal">
          {section.text}
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug = '' } = useParams();
  const ref = useFadeUp<HTMLDivElement>();
  const post = blogPostMap[slug];

  if (!post) return <Navigate to={routes.blog} replace />;

  const canonical = `${business.baseUrl}${routes.blogPost(slug)}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: business.name },
    publisher: { '@type': 'Organization', name: business.name },
    mainEntityOfPage: canonical,
    url: canonical,
  };

  return (
    <div ref={ref}>
      <PageMeta title={`${post.title} | Camarillo Landscape Solutions`} description={post.excerpt} canonical={canonical} schema={schema} />
      <PageHero eyebrow={post.tag} title={post.title} subtitle={post.excerpt} />
      <Breadcrumb
        items={[
          { label: 'Home', to: routes.home },
          { label: 'Blog', to: routes.blog },
          { label: post.title },
        ]}
      />

      <article className="section-pad">
        <div className="container-x max-w-3xl fade-up">
          <div className="mb-6 flex items-center gap-3 text-sm text-mid">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          {post.content.map(renderSection)}

          <div className="mt-12 border-t border-rule pt-6">
            <Link to={routes.blog} className="text-gold-deep hover:text-navy">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <CtaSection heading="Have a Project in Mind?" subtext="Let's talk about your Camarillo landscape." />
    </div>
  );
}
