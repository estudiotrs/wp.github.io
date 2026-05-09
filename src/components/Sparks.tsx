export function Sparks({ count = 18 }: { count?: number }) {
  const sparks = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {sparks.map((_, i) => {
        const top = (i * 53) % 100;
        const left = (i * 37) % 100;
        const size = (i % 3) + 1;
        const delay = (i % 7) * 0.4;
        const duration = 3 + (i % 5);
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              background: i % 4 === 0 ? "var(--color-gold)" : "var(--color-silver)",
              boxShadow: i % 4 === 0 ? "0 0 8px var(--color-gold)" : "0 0 4px var(--color-silver)",
              animation: `spark ${duration}s ease-in-out ${delay}s infinite`,
              opacity: 0.5,
            }}
          />
        );
      })}
    </div>
  );
}
