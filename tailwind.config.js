/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: 'var(--color-navy)',
        gold: 'var(--color-gold)',
        'gold-lt': 'var(--color-gold-lt)',
        'gold-deep': 'var(--color-gold-deep)',
        cream: 'var(--color-cream)',
        charcoal: 'var(--color-charcoal)',
        mid: 'var(--color-mid)',
        rule: 'var(--color-rule)',
        'section-alt': 'var(--color-section-alt)',
      },
      fontFamily: {
        heading: ['Oswald', 'Arial Narrow', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1160px',
      },
    },
  },
  plugins: [],
};
