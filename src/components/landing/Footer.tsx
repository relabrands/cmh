import { Phone, MessageCircle } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "ARS", href: "#ars" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer
      style={{ background: "var(--green-deep)", color: "rgba(255,255,255,0.5)" }}
    >
      {/* Main footer content */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo-cmh.png"
                alt="Centro Médico Hispánico"
                className="h-10 w-auto brightness-0 invert"
              />
              <span
                className="text-white font-medium text-[14px]"
                style={{ letterSpacing: "0.01em" }}
              >
                Centro Médico Hispánico
              </span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, maxWidth: "260px" }}>
              Atención médica integral las 24 horas, los 365 días del año. Tu
              salud es nuestra prioridad.
            </p>
            {/* Contact quick-links */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+18095555555"
                className="inline-flex items-center gap-2.5 text-white hover:opacity-70 transition-opacity text-[13px]"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                809 555 5555
              </a>
              <a
                href="https://wa.me/18095555555"
                className="inline-flex items-center gap-2.5 text-white hover:opacity-70 transition-opacity text-[13px]"
              >
                <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Navegación
            </div>
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[14px] hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Availability */}
          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Disponibilidad
            </div>
            <div className="space-y-3">
              {[
                ["Consultas", "24/7 · 365 días"],
                ["Emergencias", "Siempre abierto"],
                ["Laboratorio", "Resultados mismo día"],
                ["Cirugía", "Disponible siempre"],
              ].map(([service, time]) => (
                <div key={service} className="flex justify-between text-[13px] max-w-[240px]">
                  <span style={{ color: "rgba(255,255,255,0.55)" }}>{service}</span>
                  <span className="text-white">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        className="py-6"
      >
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px]">
          <div style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Centro Médico Hispánico, SRL. Todos los derechos reservados.
          </div>
          <div
            className="inline-flex items-center gap-2"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#5ecb60", boxShadow: "0 0 5px #5ecb60" }}
            />
            Abierto ahora · Atención 24 horas
          </div>
        </div>
      </div>
    </footer>
  );
}
