export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Glowing blobs */}
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, var(--primary-glow), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl animate-float-slow"
        style={{
          background: "radial-gradient(circle, var(--secondary-glow), transparent 70%)",
          animationDelay: "-7s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{
          background: "radial-gradient(circle, var(--primary-glow), transparent 70%)",
          animationDelay: "-3s",
        }}
      />

      {/* Subtle noise overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.015]">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
