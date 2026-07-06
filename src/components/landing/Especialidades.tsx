import { useState } from "react";

const ALL = [
  { name: "Anestesiología", cat: "Otros" },
  { name: "Cardiología", cat: "Cardiología" },
  { name: "Cirugía General", cat: "Cirugía" },
  { name: "Cirugía Pediátrica", cat: "Cirugía" },
  { name: "Cirugía Vascular", cat: "Cirugía" },
  { name: "Dermatología", cat: "Otros" },
  { name: "Diabetología", cat: "Medicina Interna" },
  { name: "Endocrinología", cat: "Medicina Interna" },
  { name: "Gastroenterología", cat: "Medicina Interna" },
  { name: "Ginecología y Obstetricia", cat: "Ginecología" },
  { name: "Intensivista", cat: "Medicina Interna" },
  { name: "Maxilofacial", cat: "Cirugía" },
  { name: "Nefrología", cat: "Medicina Interna" },
  { name: "Neumología", cat: "Medicina Interna" },
  { name: "Neurología", cat: "Medicina Interna" },
  { name: "Neurocirugía", cat: "Cirugía" },
  { name: "Nutrición", cat: "Otros" },
  { name: "Oftalmología", cat: "Otros" },
  { name: "Ortopedia", cat: "Otros" },
  { name: "Otorrinolaringología", cat: "Otros" },
  { name: "Pediatría", cat: "Pediatría" },
  { name: "Psicología", cat: "Otros" },
  { name: "Psiquiatría", cat: "Otros" },
  { name: "Urología", cat: "Cirugía" },
];

const FILTERS = [
  "Todos",
  "Cirugía",
  "Ginecología",
  "Pediatría",
  "Cardiología",
  "Medicina Interna",
  "Otros",
];

export function Especialidades() {
  const [active, setActive] = useState("Todos");
  const visible =
    active === "Todos" ? ALL : ALL.filter((s) => s.cat === active);

  return (
    <section
      id="especialidades"
      className="py-[100px] sm:py-[140px]"
      style={{ background: "var(--off-white)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="label-eyebrow mb-6">Especialidades</div>
          <h2
            style={{ fontSize: "clamp(38px, 5vw, 62px)", lineHeight: 1.05 }}
            className="max-w-2xl"
          >
            Más de <em className="italic font-normal">30 áreas</em> médicas en
            un mismo lugar.
          </h2>
          <p
            className="mt-5 text-[15px] leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "480px" }}
          >
            Contamos con el mayor índice de especialidades disponibles en la
            región, todo bajo un mismo techo.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="transition-all duration-200 hover:scale-[1.03]"
                style={{
                  border: "1px solid",
                  borderColor: isActive ? "var(--green-deep)" : "var(--hairline)",
                  background: isActive ? "var(--green-deep)" : "white",
                  color: isActive ? "white" : "var(--text-primary)",
                  borderRadius: "100px",
                  padding: "9px 20px",
                  fontSize: "13px",
                  fontWeight: 500,
                  boxShadow: isActive ? "0 2px 12px rgba(26,46,27,0.25)" : "none",
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Specialty pills */}
        <div className="flex flex-wrap gap-2.5">
          {visible.map((s, i) => (
            <span
              key={s.name}
              className="animate-fade-up transition-all hover:border-[var(--green-mid)] hover:text-[var(--green-deep)]"
              style={{
                background: "white",
                color: "var(--text-primary)",
                borderRadius: "100px",
                padding: "10px 20px",
                fontSize: "13px",
                fontWeight: 500,
                border: "1px solid var(--hairline)",
                animationDelay: `${i * 20}ms`,
                cursor: "default",
              }}
            >
              {s.name}
            </span>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-12 border-t border-[var(--hairline)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>
            ¿No encuentras tu especialidad?{" "}
            <a
              href="#contacto"
              className="underline underline-offset-4 hover:text-[var(--green-deep)] transition-colors"
              style={{ color: "var(--text-primary)", fontWeight: 500 }}
            >
              Contáctanos →
            </a>
          </p>
          <a
            href="tel:+18095555555"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-medium transition-all hover:scale-[1.02]"
            style={{
              background: "var(--green-deep)",
              color: "white",
              flexShrink: 0,
            }}
          >
            Agenda tu cita
          </a>
        </div>
      </div>
    </section>
  );
}
