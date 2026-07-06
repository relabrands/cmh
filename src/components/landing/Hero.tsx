import { Phone, MessageCircle } from "lucide-react";

export function Hero() {

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--green-deep)" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(64,140,65,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative flex-1 flex items-center w-full max-w-[1200px] mx-auto px-6 pt-[100px] pb-16 lg:py-0 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left column — starts directly with the headline */}
          <div>
            <h1
              className="text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 7.5vw, 104px)",
                fontWeight: 400,
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
              }}
            >
              <span className="block">Tu salud</span>
              <span
                className="block italic"
                style={{ color: "rgba(255,255,255,0.42)" }}
              >
                no puede
              </span>
              <span className="block">esperar.</span>
            </h1>

            <p
              className="mt-8 leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "16px",
                maxWidth: "440px",
              }}
            >
              Atención médica integral las 24 horas del día. Más de{" "}
              <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                130 especialistas
              </span>{" "}
              y laboratorio in-house en República Dominicana.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="tel:+18095555555"
                className="inline-flex items-center gap-2.5 transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                style={{
                  background: "white",
                  color: "var(--green-deep)",
                  borderRadius: "100px",
                  padding: "15px 28px",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                }}
              >
                <Phone className="h-4 w-4" />
                Llámanos ahora
              </a>
              <a
                href="https://wa.me/18095555555"
                className="inline-flex items-center gap-2.5 transition-all hover:bg-white/10 active:scale-[0.98]"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  borderRadius: "100px",
                  padding: "15px 28px",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            {/* Footnote */}
            <p
              className="mt-10"
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.02em",
                lineHeight: 1.8,
              }}
            >
              130+ especialistas · 30+ especialidades · laboratorio in-house
              <br />
              Calle Marginal Este #32, República Dominicana
            </p>
          </div>

          {/* Right column — stat cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { value: "+130", label: "Especialistas", sub: "El equipo médico más completo" },
              { value: "24/7", label: "Disponibles", sub: "Los 365 días del año" },
              { value: "+30", label: "Especialidades", sub: "Todas las áreas médicas" },
              { value: "In‑House", label: "Laboratorio", sub: "Resultados el mismo día" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col justify-between transition-all hover:scale-[1.02]"
                style={{
                  background: i % 2 === 0 ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  minHeight: "160px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "48px",
                    lineHeight: 1,
                    color: "white",
                    fontWeight: 400,
                  }}
                >
                  {s.value}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: "4px",
                    }}
                  >
                    {s.label}
                  </div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
                    {s.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(26,46,27,0.35))" }}
      />
    </section>
  );
}
