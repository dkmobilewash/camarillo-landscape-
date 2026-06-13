import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  /** Absolute or path-only canonical; combined with base if path-only handled by caller */
  canonical: string;
  schema?: object | object[];
  ogImage?: string;
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
  return el;
}

export default function PageMeta({ title, description, canonical, schema, ogImage }: PageMetaProps) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const desc = setMeta('meta[name="description"]', 'name', 'description', description);
    const ogTitle = setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    const ogDesc = setMeta(
      'meta[property="og:description"]',
      'property',
      'og:description',
      description
    );

    let ogImg: HTMLMetaElement | null = null;
    if (ogImage) {
      ogImg = setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    }

    // Canonical link
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const createdLink = !link;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    // JSON-LD schema
    let script: HTMLScriptElement | null = null;
    if (schema) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      document.title = prevTitle;
      if (script) script.remove();
      if (createdLink && link) link.remove();
      // Leave description/og tags in place; they are overwritten by the next page.
      void desc;
      void ogTitle;
      void ogDesc;
      void ogImg;
    };
  }, [title, description, canonical, schema, ogImage]);

  return null;
}
