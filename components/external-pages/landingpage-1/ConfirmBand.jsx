export default function ConfirmBand() {
  return (
    <div
      className="text-paper text-center relative overflow-hidden animate-gradient-shift"
      style={{
        background: 'linear-gradient(90deg, #0F1B3D 0%, #1A2C5A 50%, #0F1B3D 100%)',
        backgroundSize: '200% 100%',
        padding: '11px 24px',
        fontSize: '12.5px',
        letterSpacing: '.04em',
        fontWeight: 600,
      }}
    >
      <span
        className="inline-flex items-center justify-center rounded-full mr-2 align-middle text-paper"
        style={{
          width: 16,
          height: 16,
          background: '#10B981',
          fontSize: 10,
          fontWeight: 700,
        }}
      >
        ✓
      </span>
      Working session confirmed · Calendar invite sent to your inbox
    </div>
  );
}
