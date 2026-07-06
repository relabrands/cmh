import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const inputBase: React.CSSProperties = {
  border: "1px solid var(--hairline)",
  borderRadius: "8px",
  background: "var(--off-white)",
  padding: "13px 16px",
  fontSize: "14px",
  width: "100%",
  outline: "none",
  color: "var(--text-primary)",
  transition: "border-color 0.2s",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Calle Marginal Este #32",
    sub: "República Dominicana",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "809 555 5555",
    sub: "Disponible 24/7",
    href: "tel:+18095555555",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Escríbenos →",
    sub: "Respuesta inmediata",
    href: "https://wa.me/18095555555",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "24 horas",
    sub: "Los 365 días del año",
    href: undefined,
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section
      id="contacto"
      className="py-[100px] sm:py-[140px]"
      style={{ background: "var(--off-white)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="label-eyebrow mb-6">Contacto</div>
          <h2 style={{ fontSize: "clamp(38px, 5vw, 62px)", lineHeight: 1.05 }}>
            Estamos <em className="italic font-normal">cerca</em> de ti.
          </h2>
          <p
            className="mt-5 text-[15px] leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "440px" }}
          >
            Agenda tu cita, consúltanos o simplemente escríbenos. Estamos aquí
            para ti, ahora mismo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left — info cards */}
          <div className="flex flex-col gap-4">
            {/* Main CTA card */}
            <div
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--green-deep) 0%, #1e4020 100%)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(64,140,65,0.2) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(26px, 3vw, 36px)",
                    color: "white",
                    lineHeight: 1.2,
                    marginBottom: "24px",
                  }}
                >
                  ¿Tienes una emergencia?
                </div>
                <a
                  href="tel:+18095555555"
                  className="inline-flex items-center gap-3 transition-all hover:scale-[1.03] active:scale-[0.98]"
                  style={{
                    background: "white",
                    color: "var(--green-deep)",
                    borderRadius: "100px",
                    padding: "14px 26px",
                    fontSize: "15px",
                    fontWeight: 700,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                  }}
                >
                  <Phone className="h-4 w-4" />
                  Llama ahora · 809 555 5555
                </a>
              </div>
            </div>

            {/* Info grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((c) => {
                const Content = (
                  <div
                    key={c.label}
                    className="rounded-2xl p-6 flex items-start gap-4 border transition-all hover:border-[var(--green-deep)] hover:shadow-sm"
                    style={{
                      background: "white",
                      border: "1px solid var(--hairline)",
                    }}
                  >
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--off-white)" }}
                    >
                      <c.icon
                        className="h-5 w-5"
                        strokeWidth={1.5}
                        style={{ color: "var(--green-deep)" }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "10px",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                          marginBottom: "4px",
                          fontWeight: 600,
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "20px",
                          lineHeight: 1.2,
                          color: "var(--text-primary)",
                        }}
                      >
                        {c.value}
                      </div>
                      <div
                        style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "3px" }}
                      >
                        {c.sub}
                      </div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block hover:no-underline">
                    {Content}
                  </a>
                ) : (
                  <div key={c.label}>{Content}</div>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="rounded-2xl p-8 sm:p-10 border"
            style={{ background: "white", border: "1px solid var(--hairline)" }}
          >
            <h3
              className="mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                lineHeight: 1.15,
              }}
            >
              Solicitar cita
            </h3>
            {sent ? (
              <div
                className="flex flex-col items-center justify-center text-center py-16 gap-4"
              >
                <div
                  className="h-14 w-14 rounded-full flex items-center justify-center mb-2"
                  style={{ background: "var(--green-deep)" }}
                >
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h4
                  style={{ fontFamily: "var(--font-display)", fontSize: "24px" }}
                >
                  Mensaje enviado
                </h4>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "280px" }}>
                  Te contactaremos en breve. Recuerda que estamos disponibles
                  24/7.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-[13px] underline underline-offset-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label-eyebrow block mb-2">Nombre</label>
                    <input
                      required
                      placeholder="Tu nombre completo"
                      style={{
                        ...inputBase,
                        borderColor: focused === "name" ? "var(--green-deep)" : "var(--hairline)",
                      }}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label className="label-eyebrow block mb-2">Teléfono</label>
                    <input
                      required
                      type="tel"
                      placeholder="809 000 0000"
                      style={{
                        ...inputBase,
                        borderColor: focused === "tel" ? "var(--green-deep)" : "var(--hairline)",
                      }}
                      onFocus={() => setFocused("tel")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>
                <div>
                  <label className="label-eyebrow block mb-2">Especialidad</label>
                  <select
                    style={{
                      ...inputBase,
                      appearance: "none",
                      borderColor: focused === "esp" ? "var(--green-deep)" : "var(--hairline)",
                    }}
                    defaultValue=""
                    onFocus={() => setFocused("esp")}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="" disabled>
                      Selecciona una especialidad
                    </option>
                    <option>Consulta General</option>
                    <option>Pediatría</option>
                    <option>Ginecología</option>
                    <option>Cardiología</option>
                    <option>Cirugía</option>
                    <option>Laboratorio</option>
                    <option>Otra</option>
                  </select>
                </div>
                <div>
                  <label className="label-eyebrow block mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    style={{
                      ...inputBase,
                      resize: "none",
                      borderColor: focused === "msg" ? "var(--green-deep)" : "var(--hairline)",
                    }}
                    onFocus={() => setFocused("msg")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full transition-all duration-200 hover:bg-[var(--green-mid)] hover:scale-[1.01] active:scale-[0.99]"
                  style={{
                    background: "var(--green-deep)",
                    color: "white",
                    padding: "16px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    marginTop: "4px",
                    boxShadow: "0 4px 16px rgba(26,46,27,0.25)",
                  }}
                >
                  Enviar solicitud de cita
                </button>
                <p className="text-center text-[12px]" style={{ color: "var(--text-muted)" }}>
                  O llámanos directamente al{" "}
                  <a
                    href="tel:+18095555555"
                    className="font-medium underline underline-offset-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    809 555 5555
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
