import { useEffect, useState } from "react";

function useLiveTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const raw = time.getHours();
  const h = raw % 12 || 12;
  const mm = time.getMinutes().toString().padStart(2, "0");
  const ampm = raw >= 12 ? "PM" : "AM";
  return { h, mm, ampm };
}

export function TopBar() {
  const { h, mm, ampm } = useLiveTime();

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-6"
      style={{
        height: "36px",
        background: "var(--green-mid)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Left — open status */}
      <div className="flex items-center gap-2.5">
        <span
          className="h-1.5 w-1.5 rounded-full flex-shrink-0"
          style={{ background: "#5ecb60", boxShadow: "0 0 0 3px rgba(94,203,96,0.2)" }}
        />
        <span
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.01em",
          }}
        >
          Abierto ahora — atendemos las 24 horas
        </span>
      </div>

      {/* Right — live clock + CTA */}
      <div className="hidden sm:flex items-center gap-5">
        <span
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.45)",
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "0.04em",
          }}
        >
          {h}:{mm}{" "}
          <span style={{ fontSize: "10px" }}>{ampm}</span>
        </span>
        <a
          href="tel:+18095555555"
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
            letterSpacing: "0.04em",
            textDecoration: "none",
          }}
          className="hover:text-white transition-colors"
        >
          809 555 5555 →
        </a>
      </div>
    </div>
  );
}
