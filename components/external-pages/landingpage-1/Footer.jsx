

export default function Footer() {
  return (
    <footer
      className="text-[13px] border-t border-white/5"
      style={{
        background: '#07112B',
        color: 'rgba(255,255,255,.6)',
        padding: '48px 32px 32px',
      }}
    >
      <div className="max-w-[1240px] mx-auto flex flex-wrap justify-between items-center gap-4 sm:flex-row flex-col sm:items-center items-start">
        <div className="flex items-center gap-3.5">
          <img
            src="/images/landingpage1_logo.png"
            alt="DexKor"
            className="h-[26px] w-auto opacity-90"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p className="text-[12.5px]" style={{ color: 'rgba(255,255,255,.5)' }}>
            © 2026 DexKorCRM Pvt. Ltd. · Gurugram, India
          </p>
        </div>
        <div
          className="flex gap-[18px] items-center text-[12.5px]"
          style={{ color: 'rgba(255,255,255,.5)' }}
        >
          <a
            href="#"
            className="no-underline transition-colors hover:text-paper"
            style={{ color: 'rgba(255,255,255,.6)' }}
          >
            Privacy
          </a>
          <span>·</span>
          <a
            href="#"
            className="no-underline transition-colors hover:text-paper"
            style={{ color: 'rgba(255,255,255,.6)' }}
          >
            Terms
          </a>
          <span>·</span>
          <a
            href="mailto:contact@dexkor.com"
            className="no-underline transition-colors hover:text-paper"
            style={{ color: 'rgba(255,255,255,.6)' }}
          >
            contact@dexkor.com
          </a>
        </div>
      </div>
    </footer>
  );
}
