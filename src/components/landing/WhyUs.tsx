import { Clock, Stethoscope, FlaskConical, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Disponibles 24/7",
    desc: "Nunca cerramos. Tu emergencia no tiene horario, y nosotros tampoco.",
    tag: "Siempre abiertos",
  },
  {
    icon: Stethoscope,
    title: "130+ Especialistas",
    desc: "El equipo médico más completo y diverso de la región, en un solo lugar.",
    tag: "Máxima cobertura",
  },
  {
    icon: FlaskConical,
    title: "Laboratorio Propio",
    desc: "Resultados el mismo día sin salir del centro. Diagnóstico rápido y preciso.",
    tag: "In-house",
  },
  {
    icon: ShieldCheck,
    title: "Calidad Garantizada",
    desc: "Protocolos de atención de primer nivel y equipamiento médico de última generación.",
    tag: "Estándar superior",
  },
];

export function WhyUs() {
  return (
    <section
      className="py-[100px] sm:py-[140px]"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="label-eyebrow mb-6">Por qué nosotros</div>
          <h2 style={{ fontSize: "clamp(38px, 5vw, 62px)", lineHeight: 1.05 }}>
            Cuidado <em className="italic font-normal">preciso</em>, hecho
            cercano.
          </h2>
          <p
            className="mt-5 text-[16px] leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "460px" }}
          >
            No somos solo un centro médico. Somos tu aliado de salud, disponible
            cuando más nos necesitas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
              style={{
                background: "white",
                border: "1px solid var(--hairline)",
              }}
            >
              {/* Icon */}
              <div
                className="h-11 w-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: "var(--green-deep)" }}
              >
                <it.icon
                  className="h-5 w-5"
                  strokeWidth={1.5}
                  style={{ color: "white" }}
                />
              </div>

              {/* Tag */}
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--lime)",
                  fontWeight: 600,
                }}
              >
                {it.tag}
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    lineHeight: 1.15,
                  }}
                >
                  {it.title}
                </h3>
                <p
                  className="mt-3 text-[14px] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
