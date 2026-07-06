import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "ARS", href: "#ars" },
  { label: "Contacto", href: "#contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-[36px] inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(250,250,248,0.92)"
            : "rgba(250,250,248,0)",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--hairline)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/logo-cmh.png"
              alt="Centro Médico Hispánico"
              className="h-11 w-auto"
            />
            <span
              className="hidden sm:block text-[13px] font-medium tracking-wide transition-colors"
              style={{ color: scrolled ? "var(--text-primary)" : "white" }}
            >
              Centro Médico Hispánico
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-[13px]">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="transition-colors hover:opacity-80"
                style={{ color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.65)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+18095555555"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all hover:scale-[1.02]"
              style={{
                background: scrolled ? "var(--green-deep)" : "rgba(255,255,255,0.12)",
                border: scrolled ? "none" : "1px solid rgba(255,255,255,0.25)",
                color: "white",
              }}
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Llámanos</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-md transition"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Menú"
              style={{ color: scrolled ? "var(--text-primary)" : "white" }}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-[100px] md:hidden"
          style={{ background: "var(--green-deep)" }}
          onClick={() => setMobileOpen(false)}
        >
          <nav className="flex flex-col px-8 py-10 gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white text-2xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+18095555555"
              className="mt-6 inline-flex items-center gap-2 text-white border border-white/25 rounded-full px-6 py-3 text-[14px] font-medium w-fit"
            >
              <Phone className="h-4 w-4" />
              Llámanos ahora
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
