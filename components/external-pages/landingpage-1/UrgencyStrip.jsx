export default function UrgencyStrip() {
  return (
    <div
      className="!text-white text-center font-medium relative overflow-hidden animate-gradient-shift"
      style={{
        background:
          'linear-gradient(90deg, #0F1B3D 0%, #1A2C5A 50%, #0F1B3D 100%)',
        backgroundSize: '200% 100%',
        padding: '11px 24px',
        fontSize: '12.5px',
        letterSpacing: '.04em',
        color: "white !important"
      }}
    >
      <span className="text-white inline-block animate-bolt mr-1.5">⚡</span>
      <b className="text-accent-light font-bold">FREE FIELD GUIDE</b>
      &nbsp;·&nbsp; 15 pages · 22-minute read · Instant PDF download
    </div>
  );
}
