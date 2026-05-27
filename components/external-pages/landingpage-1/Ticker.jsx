import { useEffect, useRef, useState } from 'react';

export default function Ticker({ messages, rotateMs = 0 }) {
  const [idx, setIdx] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!rotateMs || messages.length <= 1) return undefined;
    intervalRef.current = setInterval(() => {
      setFade(false);
      // re-trigger animation on next tick
      setTimeout(() => {
        setIdx((i) => (i + 1) % messages.length);
        setFade(true);
      }, 30);
    }, rotateMs);
    return () => clearInterval(intervalRef.current);
  }, [rotateMs, messages.length]);

  if (hidden) return null;
  const m = messages[idx];

  return (
    <div
      className="fixed bottom-6 left-6 z-[90] flex items-center gap-3 max-w-[380px] sm:max-w-[380px] animate-ticker-in"
      style={{
        background: 'rgba(255,255,255,.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(44,138,229,.18)',
        borderRadius: 999,
        padding: '8px 22px 8px 8px',
        boxShadow:
          '0 24px 48px -20px rgba(15,27,61,.30), 0 0 0 1px rgba(255,255,255,.5) inset',
        opacity: fade ? 1 : 0,
        transition: 'opacity .25s ease',
        maxWidth: 'min(380px, calc(100vw - 32px))',
      }}
    >
      <button
        onClick={() => {
          setHidden(true);
          if (intervalRef.current) clearInterval(intervalRef.current);
        }}
        aria-label="Close"
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-paper border border-rule text-muted flex items-center justify-center text-sm leading-none font-sans transition hover:bg-ink hover:text-paper hover:border-ink"
        style={{ boxShadow: '0 4px 12px -4px rgba(15,27,61,.2)' }}
      >
        ×
      </button>

      <div
        className="ticker-avatar relative flex-shrink-0 flex items-center justify-center text-paper font-bold rounded-full"
        style={{
          width: 38,
          height: 38,
          background: 'linear-gradient(135deg, #2C8AE5, #1F6FBF)',
          fontSize: 13,
        }}
      >
        {m.initials}
      </div>

      <div className="flex-1 min-w-0 pr-1.5">
        <div
          className="text-[13px] text-ink leading-snug font-medium overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
          dangerouslySetInnerHTML={{ __html: m.msg }}
        />
        <div className="text-[11px] text-muted mt-0.5 font-medium flex items-center gap-1.5">
          <span className="live-indicator inline-flex items-center gap-1 text-green font-bold">
            Live
          </span>
          &nbsp;·&nbsp;
          <span>{m.time}</span>
        </div>
      </div>
    </div>
  );
}
