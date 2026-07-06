import { useEffect, useRef, useState } from "react";

function useCount(to: number) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return { n, ref };
}

function Stat({
  value,
  suffix = "",
  label,
  sub,
  text,
}: {
  value?: number;
  suffix?: string;
  label: string;
  sub: string;
  text?: string;
}) {
  const { n, ref } = useCount(value ?? 0);
  return (
    <div
      ref={ref}
      className="flex-1 flex flex-col items-center text-center px-6 py-8 rounded-2xl transition-all hover:scale-[1.02]"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="text-white"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(52px, 6vw, 80px)",
          fontWeight: 400,
          lineHeight: 1,
        }}
      >
        {text ?? `${n}${suffix}`}
      </div>
      <div
        className="mt-3"
        style={{
          fontSize: "10px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
          fontWeight: 600,
        }}
      >
        {label}
      </div>
      <div
        className="mt-1.5 text-center"
        style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}
      >
        {sub}
      </div>
    </div>
  );
}

export function Urgency() {
  return (
    <section
      className="py-[120px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--green-deep) 0%, #1e4020 50%, var(--green-mid) 100%)",
      }}
    >
      {/* Decorative radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(64,140,65,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <div
            className="inline-block mb-4"
            style={{
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              fontWeight: 600,
            }}
          >
            Nuestros números
          </div>
          <p
            className="text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 3.5vw, 40px)",
              lineHeight: 1.25,
              fontWeight: 400,
            }}
          >
            Disponibles las 24 horas,{" "}
            <em className="italic" style={{ color: "rgba(255,255,255,0.5)" }}>
              los 365 días del año
            </em>
          </p>
        </div>

        {/* Stat cards */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
          <Stat
            value={130}
            suffix="+"
            label="Especialistas"
            sub="El equipo más completo del país"
          />
          <Stat
            value={30}
            suffix="+"
            label="Especialidades"
            sub="Todas las áreas médicas"
          />
          <Stat
            text="In-House"
            label="Laboratorio"
            sub="Resultados el mismo día"
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="tel:+18095555555"
            className="inline-flex items-center gap-2 transition-all hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
            style={{
              background: "white",
              color: "var(--green-deep)",
              borderRadius: "100px",
              padding: "16px 32px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.01em",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            Llama ahora · 809 555 5555
          </a>
        </div>
      </div>
    </section>
  );
}
