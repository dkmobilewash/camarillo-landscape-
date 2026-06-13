import { useEffect, useRef } from 'react';

/**
 * Observes `.fade-up` elements inside the returned ref and adds the
 * `.visible` class once each scrolls into view (threshold 0.15).
 * One-time trigger per element; observer disconnects after all are visible.
 */
export function useFadeUp<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>('.fade-up'));
    if (els.length === 0) return;

    // Respect reduced motion: reveal everything immediately.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    let remaining = els.length;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
            remaining -= 1;
            if (remaining <= 0) observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
