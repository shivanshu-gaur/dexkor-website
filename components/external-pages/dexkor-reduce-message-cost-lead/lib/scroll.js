const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function headerOffset() {
  if (typeof document === 'undefined') return 88;
  const header = document.querySelector('header[data-site-header]');
  return (header ? header.offsetHeight : 72) + 16;
}

/** Smooth-scroll to a section id, compensating for the sticky header. */
export function scrollToId(id) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}

/** Scroll to the lead form, optionally focusing the first field once there. */
export function scrollToForm(focusFirst = true) {
  scrollToId('lead-form');
  if (!focusFirst) return;
  const delay = prefersReducedMotion() ? 0 : 650;
  window.setTimeout(() => {
    if (typeof document === 'undefined') return;
    const first = document.querySelector('#lead-form input');
    if (first) first.focus({ preventScroll: true });
  }, delay);
}
