

export default function Navbar({ variant = 'optin' }) {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-rule"
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-[18px] flex justify-between items-center">
        <a href="#" aria-label="DexKor home">
          <img src="/images/landingpage1_logo.png" alt="DexKor" className="h-[34px] w-auto block" />
        </a>

        {variant === 'optin' ? (
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] tracking-[.14em] uppercase text-muted font-semibold">
            <span
              className="w-1.5 h-1.5 rounded-full bg-green animate-blink"
            />
            <span>2,847 SaaS leaders downloaded this</span>
          </div>
        ) : (
          <a
            href="https://dexkor.com"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] tracking-[.14em] uppercase text-ink font-semibold no-underline px-4 py-[9px] border-[1.5px] border-rule rounded-lg transition hover:border-accent hover:text-accent"
          >
            ← Back to DexKor
          </a>
        )}
      </div>
    </nav>
  );
}
