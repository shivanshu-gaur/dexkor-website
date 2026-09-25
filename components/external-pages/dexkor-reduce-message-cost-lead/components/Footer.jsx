'use client';

const LINKS = [
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms-of-service' },
  { label: 'DPA', href: '/dpa' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-10 text-center text-white">
      <div className="container-x flex flex-col items-center justify-center">
        <a
          href="#main"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="rounded-md"
          aria-label="DexKor, back to top"
        >
          <img
            src="/external-pages/cost-lead/logo.svg"
            alt="DexKor"
            className="h-10 w-auto brightness-0 invert"
          />
        </a>

        <p className="mt-5 max-w-xl text-sm text-white/55">
          &copy; {year} DexKor. The WhatsApp-first CRM &amp; support platform for growing teams.
        </p>

        <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="text-white/65 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
