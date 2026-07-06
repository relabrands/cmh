import {
  Stethoscope,
  FlaskConical,
  ScanLine,
  Scissors,
  Baby,
  HeartPulse,
} from "lucide-react";

const services = [
  {
    n: "01",
    icon: Stethoscope,
    title: "Consulta Médica",
    desc: "Especialistas en todas las áreas disponibles para atenderte sin demora.",
  },
  {
    n: "02",
    icon: FlaskConical,
    title: "Laboratorio Clínico",
    desc: "Resultados el mismo día con tecnología avanzada in-house.",
  },
  {
    n: "03",
    icon: ScanLine,
    title: "Rayos X e Imágenes",
    desc: "Diagnóstico preciso de imagen cuando más lo necesitas.",
  },
  {
    n: "04",
    icon: Scissors,
    title: "Cirugía General",
    desc: "Procedimientos quirúrgicos con los mejores especialistas del país.",
  },
  {
    n: "05",
    icon: HeartPulse,
    title: "Ginecología & Obstetricia",
    desc: "Atención integral a la salud de la mujer en todas las etapas.",
  },
  {
    n: "06",
    icon: Baby,
    title: "Pediatría",
    desc: "Cuidamos a tus hijos con ternura y la más alta competencia médica.",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="py-[100px] sm:py-[140px]"
      style={{ background: "var(--off-white)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="label-eyebrow mb-6">Servicios</div>
          <h2
            style={{ fontSize: "clamp(38px, 5vw, 62px)", lineHeight: 1.05 }}
          >
            Atención médica{" "}
            <em className="italic font-normal">completa</em>, bajo un mismo
            techo.
          </h2>
          <p
            className="mt-5 text-[16px] leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "480px" }}
          >
            De la consulta al laboratorio, todo en un solo lugar. Sin esperas,
            sin traslados, sin complicaciones.
          </p>
        </div>

        {/* Services list */}
        <div>
          {services.map((s, idx) => (
            <a
              key={s.n}
              href="#contacto"
              className="group grid grid-cols-12 gap-6 items-center py-8 border-t border-[var(--hairline)] last:border-b transition-all duration-300 hover:bg-white px-4 -mx-4 rounded-lg"
              style={{
                animationDelay: `${idx * 60}ms`,
              }}
            >
              {/* Number */}
              <div
                className="col-span-1 hidden sm:block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "36px",
                  lineHeight: 1,
                  color: "#D4D0C8",
                  transition: "color 0.3s",
                }}
              >
                {s.n}
              </div>

              {/* Icon */}
              <div
                className="col-span-2 sm:col-span-1 flex"
              >
                <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "var(--green-deep)",
                    color: "white",
                  }}
                >
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title + desc */}
              <div className="col-span-8 sm:col-span-9">
                <div
                  className="transition-colors group-hover:text-[var(--green-deep)]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.2vw, 30px)",
                    lineHeight: 1.15,
                  }}
                >
                  {s.title}
                </div>
                <div
                  className="mt-1.5 text-[14px] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {s.desc}
                </div>
              </div>

              {/* Arrow */}
              <div
                className="col-span-1 hidden sm:flex justify-end text-[var(--text-muted)] group-hover:text-[var(--green-deep)] transition-all group-hover:translate-x-1"
                style={{ fontSize: "20px" }}
              >
                →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
