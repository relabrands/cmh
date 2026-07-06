import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ─── Logo components — styled wordmarks matching each brand's identity ──────

function Logo({ name }: { name: string }) {
  const logos: Record<string, JSX.Element> = {
    "ARS Humano": (
      <svg viewBox="0 0 120 40" width="100" height="34" aria-label="ARS Humano">
        <text x="4" y="28" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="24" fill="#00A79D">H</text>
        <text x="24" y="28" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="18" fill="#00A79D">umano</text>
        <text x="4" y="38" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="8" fill="#999" letterSpacing="1">SEGUROS</text>
      </svg>
    ),
    "ARS Primera": (
      <svg viewBox="0 0 120 40" width="100" height="34" aria-label="ARS Primera">
        <text x="4" y="24" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="9" fill="#0066B3" letterSpacing="2">ARS</text>
        <text x="4" y="38" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="20" fill="#0066B3">Primera</text>
      </svg>
    ),
    "SeNaSa": (
      <svg viewBox="0 0 120 40" width="90" height="34" aria-label="SeNaSa">
        <rect x="0" y="6" width="28" height="28" rx="4" fill="#006837" />
        <text x="5" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="white">Se</text>
        <text x="33" y="28" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="18" fill="#006837">NaSa</text>
      </svg>
    ),
    "ARS Universal": (
      <svg viewBox="0 0 130 40" width="110" height="34" aria-label="ARS Universal">
        <circle cx="14" cy="20" r="13" fill="none" stroke="#004B9D" strokeWidth="2.5" />
        <text x="10" y="25" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#004B9D">U</text>
        <text x="32" y="24" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="14" fill="#004B9D">Universal</text>
        <text x="32" y="34" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="7" fill="#888" letterSpacing="1">SEGUROS</text>
      </svg>
    ),
    "ARS Reservas": (
      <svg viewBox="0 0 130 40" width="110" height="34" aria-label="ARS Reservas">
        <path d="M4 10 L18 10 L18 30 L4 30 Z" fill="#E2231A" />
        <text x="24" y="24" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="14" fill="#E2231A">RESERVAS</text>
        <text x="24" y="35" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="7" fill="#888" letterSpacing="1">ARS · SEGUROS</text>
      </svg>
    ),
    "ARS Yunen": (
      <svg viewBox="0 0 120 40" width="100" height="34" aria-label="ARS Yunen">
        <text x="4" y="20" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="8" fill="#E8821A" letterSpacing="2">ARS</text>
        <text x="4" y="36" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="20" fill="#E8821A">Yunen</text>
      </svg>
    ),
    "ARS Renacer": (
      <svg viewBox="0 0 130 40" width="110" height="34" aria-label="ARS Renacer">
        <path d="M4 8 Q14 2 24 8 L20 30 L4 30 Z" fill="#5B2D8E" />
        <text x="30" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#5B2D8E">Renacer</text>
      </svg>
    ),
    "ARS CMD": (
      <svg viewBox="0 0 120 40" width="100" height="34" aria-label="ARS CMD">
        <rect x="0" y="4" width="36" height="32" rx="4" fill="#004B9D" />
        <text x="6" y="25" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="15" fill="white">CMD</text>
        <text x="42" y="20" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="10" fill="#004B9D">ARS Colegio</text>
        <text x="42" y="32" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="9" fill="#666">Médico Dom.</text>
      </svg>
    ),
    "ARS Abel González": (
      <svg viewBox="0 0 130 40" width="110" height="34" aria-label="ARS Abel González">
        <circle cx="14" cy="20" r="13" fill="#2E7D32" />
        <text x="8" y="25" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="white">ag</text>
        <text x="32" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="#2E7D32">abel</text>
        <text x="32" y="34" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="10" fill="#555">gonzález</text>
      </svg>
    ),
    "ARS UASD": (
      <svg viewBox="0 0 120 40" width="100" height="34" aria-label="ARS UASD">
        <circle cx="16" cy="20" r="14" fill="#1A237E" />
        <text x="8" y="25" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="white">UASD</text>
        <text x="36" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="#1A237E">ARS</text>
        <text x="36" y="34" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="8" fill="#777" letterSpacing="0.5">UASD</text>
      </svg>
    ),
    "ARS Banco Central": (
      <svg viewBox="0 0 140 40" width="120" height="34" aria-label="ARS Banco Central">
        <rect x="0" y="6" width="30" height="28" rx="3" fill="#7B4F00" />
        <text x="5" y="18" fontFamily="serif" fontWeight="700" fontSize="8" fill="white">ARS</text>
        <text x="5" y="28" fontFamily="serif" fontWeight="700" fontSize="8" fill="#D4A017">BANCO</text>
        <text x="36" y="24" fontFamily="Georgia, serif" fontWeight="400" fontSize="12" fill="#7B4F00">Banco Central</text>
      </svg>
    ),
    "Seguros Reservas": (
      <svg viewBox="0 0 140 40" width="115" height="34" aria-label="Seguros Reservas">
        <path d="M4 10 L16 10 L16 30 L4 30 Z" fill="#E2231A" />
        <path d="M19 10 L31 10 L31 30 L19 30 Z" fill="#004B9D" />
        <text x="37" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="#1A1A1A">SEGUROS</text>
        <text x="37" y="34" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="#E2231A">RESERVAS</text>
      </svg>
    ),
    "Just": (
      <svg viewBox="0 0 100 40" width="80" height="34" aria-label="Just">
        <text x="4" y="30" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="26" fill="#E91E8C">Just</text>
        <text x="62" y="30" fontFamily="Arial, sans-serif" fontSize="22" fill="#E91E8C">♡</text>
      </svg>
    ),
    "Gold Med": (
      <svg viewBox="0 0 120 40" width="100" height="34" aria-label="Gold Med">
        <text x="4" y="28" fontFamily="Georgia, serif" fontWeight="700" fontSize="18" fill="#C5963A">GOLD</text>
        <text x="54" y="28" fontFamily="Georgia, serif" fontWeight="400" fontSize="18" fill="#666">Med</text>
      </svg>
    ),
    // Internacionales
    "WorldWide Seguros": (
      <svg viewBox="0 0 140 40" width="115" height="34" aria-label="WorldWide Seguros">
        <circle cx="15" cy="20" r="13" fill="none" stroke="#004B9D" strokeWidth="2" />
        <path d="M15 7 Q20 14 20 20 Q20 26 15 33 Q10 26 10 20 Q10 14 15 7Z" fill="none" stroke="#004B9D" strokeWidth="1.5" />
        <path d="M2 20 L28 20" stroke="#004B9D" strokeWidth="1.5" />
        <text x="34" y="19" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#004B9D">WorldWide</text>
        <text x="34" y="31" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="9" fill="#777">Seguros</text>
      </svg>
    ),
    "Aetna La Colonial": (
      <svg viewBox="0 0 140 40" width="115" height="34" aria-label="Aetna La Colonial">
        <text x="4" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="#7B1FA2">♥ aetna</text>
        <text x="4" y="34" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="#C62828">La Colonial</text>
      </svg>
    ),
    "BMI": (
      <svg viewBox="0 0 80 40" width="70" height="34" aria-label="BMI">
        <rect x="0" y="6" width="72" height="28" rx="4" fill="#0D47A1" />
        <text x="8" y="27" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="18" fill="white" letterSpacing="4">BMI</text>
      </svg>
    ),
    "Bupa": (
      <svg viewBox="0 0 80 40" width="70" height="34" aria-label="Bupa">
        <rect x="0" y="6" width="72" height="28" rx="4" fill="#BE0028" />
        <text x="10" y="27" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="20" fill="white">Bupa</text>
      </svg>
    ),
    "Sura": (
      <svg viewBox="0 0 90 40" width="75" height="34" aria-label="Sura">
        <text x="4" y="30" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="26" fill="#1B5E20">sura</text>
        <path d="M72 20 Q78 14 84 20 Q78 26 72 20Z" fill="#7CB342" />
      </svg>
    ),
    "VUMI": (
      <svg viewBox="0 0 90 40" width="75" height="34" aria-label="VUMI">
        <text x="4" y="30" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="24" fill="#1A237E" letterSpacing="2">VUMI</text>
        <circle cx="82" cy="8" r="5" fill="#1A237E" />
      </svg>
    ),
    "Caribbean Health": (
      <svg viewBox="0 0 140 40" width="115" height="34" aria-label="Caribbean Health">
        <circle cx="14" cy="20" r="13" fill="#006994" />
        <text x="7" y="24" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9" fill="white">CH</text>
        <text x="32" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="#006994">Caribbean</text>
        <text x="32" y="33" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="11" fill="#555">Health</text>
      </svg>
    ),
    "Universal Assistance": (
      <svg viewBox="0 0 140 40" width="120" height="34" aria-label="Universal Assistance">
        <rect x="0" y="6" width="30" height="28" rx="3" fill="#0066B3" />
        <text x="5" y="25" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="white">ua</text>
        <text x="36" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#0066B3">universal</text>
        <text x="36" y="32" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="9" fill="#777">assistance</text>
      </svg>
    ),
    "Cigna": (
      <svg viewBox="0 0 100 40" width="85" height="34" aria-label="Cigna">
        <text x="4" y="30" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" fill="#007B5E">Cigna</text>
        <circle cx="88" cy="14" r="6" fill="#5CB85C" />
      </svg>
    ),
    "Mapfre": (
      <svg viewBox="0 0 110 40" width="90" height="34" aria-label="Mapfre">
        <text x="4" y="18" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="8" fill="#C62828" letterSpacing="1">♥</text>
        <text x="16" y="30" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="20" fill="#C62828">mapfre</text>
      </svg>
    ),
  };

  return logos[name] ?? (
    <svg viewBox="0 0 120 40" width="100" height="34" aria-label={name}>
      <text x="4" y="26" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="14" fill="#555">{name}</text>
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const AMBULATORIO: { cat: string; names: string[] }[] = [
  {
    cat: "Locales",
    names: [
      "ARS Humano", "ARS Primera", "SeNaSa", "ARS Universal", "ARS Reservas",
      "ARS Yunen", "ARS Renacer", "ARS CMD", "ARS Abel González",
      "ARS UASD", "ARS Banco Central", "Seguros Reservas", "Just", "Gold Med",
    ],
  },
  {
    cat: "Internacionales",
    names: [
      "WorldWide Seguros", "Aetna La Colonial", "BMI", "Bupa", "Sura",
      "VUMI", "Caribbean Health", "Universal Assistance", "Cigna",
    ],
  },
];

const HOSPITALARIO: { cat: string; names: string[] }[] = [
  {
    cat: "Locales",
    names: [
      "ARS Humano", "ARS Primera", "SeNaSa", "Mapfre",
      "ARS Universal", "ARS Reservas", "ARS UASD", "Seguros Reservas",
    ],
  },
  {
    cat: "Internacionales",
    names: ["Cigna", "Bupa", "WorldWide Seguros", "Universal Assistance", "BMI", "Sura"],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CatTag({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "inline-block",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        background: "var(--cream)",
        borderRadius: "4px",
        padding: "3px 10px",
        marginBottom: "20px",
      }}
    >
      {label}
    </div>
  );
}

function LogoGrid({ names }: { names: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-6 mb-6">
      {names.map((n) => (
        <div
          key={n}
          className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          style={{ flexShrink: 0 }}
          title={n}
        >
          <Logo name={n} />
        </div>
      ))}
    </div>
  );
}

interface AccordionItemProps {
  icon: React.ReactNode;
  title: string;
  count: number;
  groups: { cat: string; names: string[] }[];
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ icon, title, count, groups, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: isOpen ? "1.5px solid var(--lime)" : "1px solid var(--hairline)",
        background: "white",
      }}
    >
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left p-6 hover:bg-[var(--off-white)] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div
            className="h-11 w-11 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background: isOpen ? "var(--green-deep)" : "var(--off-white)",
              border: "1px solid var(--hairline)",
              transition: "background 0.2s",
            }}
          >
            <span style={{ color: isOpen ? "white" : "var(--lime)" }}>{icon}</span>
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: "15px", color: "var(--text-primary)", lineHeight: 1.3 }}>
              {title}
            </div>
            <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "2px" }}>
              {count} aseguradoras disponibles
            </div>
          </div>
        </div>
        <ChevronDown
          className="h-5 w-5 flex-shrink-0 transition-transform duration-300"
          style={{ color: "var(--lime)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="px-6 pb-8" style={{ borderTop: "1px solid var(--hairline)" }}>
          <div className="pt-6">
            {groups.map((g) => (
              <div key={g.cat} className="mb-2">
                <CatTag label={g.cat} />
                <LogoGrid names={g.names} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const BedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3" />
    <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5" />
    <path d="M2 11h20" /><path d="M6 11V9h12v2" />
  </svg>
);

const HospitalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2" />
    <path d="M9 22V12h6v10" /><path d="M12 7v4" /><path d="M10 9h4" />
  </svg>
);

// ─── Main ─────────────────────────────────────────────────────────────────────

const totalAmbulatorio = AMBULATORIO.reduce((s, g) => s + g.names.length, 0);
const totalHospitalario = HOSPITALARIO.reduce((s, g) => s + g.names.length, 0);

export function Ars() {
  const [open, setOpen] = useState<"ambulatorio" | "hospitalario" | null>(null);
  const toggle = (key: "ambulatorio" | "hospitalario") =>
    setOpen((prev) => (prev === key ? null : key));

  return (
    <section id="ars" className="py-[100px] sm:py-[130px]" style={{ background: "var(--off-white)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.1, color: "var(--text-primary)" }}>
            Seguros Médicos Aceptados
          </h2>
          <p className="mt-3" style={{ fontSize: "15px", color: "var(--text-muted)" }}>
            Aceptamos{" "}
            <span style={{ color: "var(--lime)", fontWeight: 600 }}>
              Planes Básicos, Complementarios y Premium
            </span>
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <AccordionItem
            icon={<BedIcon />}
            title="Servicios Ambulatorios"
            count={totalAmbulatorio}
            groups={AMBULATORIO}
            isOpen={open === "ambulatorio"}
            onToggle={() => toggle("ambulatorio")}
          />
          <AccordionItem
            icon={<HospitalIcon />}
            title="Servicios Hospitalarios (Emergencias, Hospitalización, UCI)"
            count={totalHospitalario}
            groups={HOSPITALARIO}
            isOpen={open === "hospitalario"}
            onToggle={() => toggle("hospitalario")}
          />
        </div>

        {/* Footer note */}
        <p className="mt-10 text-[14px]" style={{ color: "var(--text-muted)" }}>
          ¿No encuentras tu seguro?{" "}
          <a
            href="#contacto"
            className="font-medium underline underline-offset-4 hover:text-[var(--green-deep)] transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            Contáctanos para verificar →
          </a>
        </p>
      </div>
    </section>
  );
}
