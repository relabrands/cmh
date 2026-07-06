const items = [
  "Consulta Médica",
  "Laboratorio Clínico",
  "Rayos X e Imágenes",
  "Cirugía General",
  "Ginecología & Obstetricia",
  "Pediatría",
  "Cardiología",
  "Ortopedia",
  "ARS UASD",
  "Atención de Emergencias",
  "Neurología",
  "Dermatología",
];

export function Ticker() {
  const list = [...items, ...items, ...items];
  return (
    <div
      className="overflow-hidden py-4"
      style={{ background: "var(--green-mid)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {list.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-5 px-5"
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {t}
            <span
              className="h-1 w-1 rounded-full inline-block"
              style={{ background: "rgba(255,255,255,0.3)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
