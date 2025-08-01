import { useEffect, useState } from "react";

export default function SprinkleParticles() {
  const [particles, setParticles] = useState<{ left: string; delay: string }[]>(
    []
  );

  useEffect(() => {
    const generated = Array.from({ length: 10 }).map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-sprinkle"
          style={{
            left: p.left,
            animationDelay: p.delay,
          }}
        ></span>
      ))}
    </div>
  );
}
