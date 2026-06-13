import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Faq } from '../data/services';

interface FaqAccordionProps {
  faqs: Faq[];
  variant?: 'light' | 'dark';
}

export default function FaqAccordion({ faqs, variant = 'light' }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const dark = variant === 'dark';

  return (
    <div className="divide-y divide-rule border-y border-rule">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span
                className={`font-serif text-lg font-semibold ${dark ? 'text-white' : 'text-navy'}`}
              >
                {faq.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className={`shrink-0 text-2xl leading-none ${dark ? 'text-gold' : 'text-gold-deep'}`}
                aria-hidden
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className={`pb-5 pr-8 ${dark ? 'text-cream/80' : 'text-mid'}`}>
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
