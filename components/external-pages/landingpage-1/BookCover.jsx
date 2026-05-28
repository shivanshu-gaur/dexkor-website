

export default function BookCover() {
  return (
    <div className="sticky top-[100px] flex flex-col items-center gap-4 lg:sticky max-lg:static max-lg:p-0">
      <div className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[.16em] uppercase font-bold text-accent bg-accent/10 rounded-full px-4 py-2">
        <span className="w-3 h-3 bg-accent diamond-icon" />
        Issue No. 01 · 2026
      </div>

      <div className="relative inline-block">
        {/* Shadow */}
        <div
          className="absolute top-[18px] left-[18px] w-full h-full rounded-2xl z-0 pointer-events-none"
          style={{
            background: 'rgba(15,27,61,.22)',
            filter: 'blur(34px)',
          }}
        />

        {/* Card */}
        <div
          className="relative z-[2] text-paper overflow-hidden flex flex-col rounded-lg transition-transform duration-300 hover:-translate-y-1"
          style={{
            width: 380,
            maxWidth: '90vw',
            height: 535,
            background:
              'linear-gradient(168deg, #0F1B3D 0%, #122348 60%, #1A3162 100%)',
            padding: '28px 28px 24px',
            boxShadow:
              '0 1px 0 rgba(255,255,255,.06) inset, 0 40px 70px -28px rgba(15,27,61,.5), 0 20px 40px -16px rgba(15,27,61,.3)',
          }}
        >
          {/* Decorative blue circle */}
          <div
            className="absolute rounded-full z-[1] pointer-events-none"
            style={{
              top: '38%',
              right: -52,
              width: 150,
              height: 150,
              background: '#2C8AE5',
              boxShadow: '0 0 60px rgba(44,138,229,.4)',
            }}
          />
          <div
            className="absolute rounded-full z-[2] pointer-events-none"
            style={{
              top: '44%',
              right: 18,
              width: 80,
              height: 80,
              border: '1.5px solid rgba(91,168,236,.55)',
            }}
          />

          {/* Top: logo + meta */}
          <div className="flex justify-between items-start relative z-[3] pb-3.5 mb-4">
            <img
              src="/images/landingpage1_logo.png"
              alt="DexKor"
              className="h-[22px] w-auto opacity-95"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div
              className="font-mono text-right leading-relaxed font-semibold"
              style={{ fontSize: 8, letterSpacing: '.18em' }}
            >
              <div
                className="uppercase font-bold"
                style={{ color: '#5BA8EC' }}
              >
                Field Guide
              </div>
              <div className="uppercase" style={{ color: 'rgba(255,255,255,.62)', fontWeight: 500 }}>
                Volume One / 2026
              </div>
              <div className="uppercase" style={{ color: 'rgba(255,255,255,.62)', fontWeight: 500 }}>
                Customer Operations
              </div>
            </div>
          </div>

          <div className="h-px relative z-[3]" style={{ background: 'rgba(255,255,255,.14)' }} />

          {/* Three-column strip */}
          <div
            className="flex justify-between items-start font-mono font-semibold relative z-[3]"
            style={{
              fontSize: 8,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,.6)',
              padding: '16px 0 18px',
              gap: 8,
            }}
          >
            <div className="flex-1">Issue No. 01</div>
            <div className="flex-1 text-center">For B2B SaaS Leaders</div>
            <div className="flex-1 text-right">Read Time · 22 Min</div>
          </div>

          {/* Title */}
          <div className="relative z-[3] flex-1 flex flex-col justify-center my-2">
            <div
              className="cover-kicker font-mono font-semibold mb-5 flex items-center gap-2.5"
              style={{
                fontSize: 9,
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: '#5BA8EC',
              }}
            >
              A Playbook for the AI Era
            </div>
            <h2
              className="font-serif text-paper mb-5"
              style={{
                fontWeight: 400,
                fontSize: 56,
                lineHeight: 0.92,
                letterSpacing: '-.03em',
                color:"white"
              }}
            >
              <span className="block">The</span>
              <span className="block italic">
                Scaling{' '}
                <em className="italic font-medium" style={{ color: '#5BA8EC' }}>
                  CX
                </em>
              </span>
              <span className="block">Playbook</span>
            </h2>
            <p
              className="font-serif italic font-light"
              style={{
                fontSize: 12.5,
                lineHeight: 1.5,
                color: 'rgba(255,255,255,.72)',
                maxWidth: '30ch',
              }}
            >
              How B2B SaaS leaders are rebuilding their support function for half
              the cost, twice the output, and a fraction of the burnout.
            </p>
          </div>

          <div className="h-px relative z-[3] mt-4" style={{ background: 'rgba(255,255,255,.14)' }} />

          <div
            className="flex justify-between items-end font-mono font-semibold relative z-[3] pt-3.5"
            style={{
              fontSize: 7.5,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,.55)',
              lineHeight: 1.7,
              gap: 12,
            }}
          >
            <div className="flex-1">
              9 Plays · 1 Modern Stack ·<br />
              <span className="font-bold" style={{ color: '#5BA8EC' }}>
                Field-Tested With SaaS Operators
              </span>
            </div>
            <div className="flex-1 text-right">
              Published by{' '}
              <span className="font-bold" style={{ color: '#5BA8EC' }}>
                DexKor
              </span>
              <br />
              Gurugram · 2026
            </div>
          </div>
        </div>
      </div>

      {/* Proof row */}
      <div className="flex gap-3 flex-wrap justify-center max-sm:flex-col max-sm:items-stretch">
        {[
          { num: '2,847', label: 'Downloads' },
          { num: '22 min', label: 'Avg read time' },
          { num: '15 pgs', label: 'Field guide' },
        ].map((p) => (
          <div
            key={p.label}
            className="bg-paper border border-rule rounded-xl inline-flex items-center gap-3 text-[12.5px] font-medium text-ink whitespace-nowrap"
            style={{
              padding: '12px 16px',
              boxShadow: '0 14px 32px -14px rgba(15,27,61,.22)',
            }}
          >
            <div>
              <div
                className="font-serif font-semibold leading-none text-accent"
                style={{ fontSize: 20 }}
              >
                {p.num}
              </div>
              <div
                className="font-mono uppercase text-muted font-semibold mt-0.5"
                style={{ fontSize: 10, letterSpacing: '.08em' }}
              >
                {p.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
