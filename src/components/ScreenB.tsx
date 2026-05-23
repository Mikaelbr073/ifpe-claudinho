"use client";

import { useState } from "react";
import { type Specialty } from "@/lib/data";
import { CalIcon, ChevIcon, StethIcon, BabyIcon, HeartIcon, CheckIcon, SearchIcon } from "@/lib/icons";
import UbsCallout from "./UbsCallout";
import Breadcrumb from "./Breadcrumb";

type SpecialtyDef = { name: Specialty; icon: (p: { s: number }) => React.ReactNode; count: number };

const SPECIALTIES: SpecialtyDef[] = [
  { name: "Clínico Geral", icon: (p) => <StethIcon size={p.s} />, count: 5 },
  { name: "Pediatria",     icon: (p) => <BabyIcon size={p.s} />,  count: 3 },
  { name: "Ginecologia",   icon: (p) => <HeartIcon size={p.s} />, count: 2 },
];

const DAYS = [
  { key: "26/05", long: "Ter, 26 mai" },
  { key: "27/05", long: "Qua, 27 mai" },
  { key: "28/05", long: "Qui, 28 mai" },
  { key: "29/05", long: "Sex, 29 mai" },
  { key: "01/06", long: "Seg, 01 jun" },
  { key: "02/06", long: "Ter, 02 jun" },
  { key: "03/06", long: "Qua, 03 jun" },
];

const GRID: Record<string, Array<{ time: string; doc: string; room: string }>> = {
  "26/05": [{ time: "08:00", doc: "Dr. Paulo Mendonça", room: "C3" }, { time: "09:30", doc: "Dra. Renata Lima", room: "C1" }, { time: "11:00", doc: "Dr. Paulo Mendonça", room: "C3" }],
  "27/05": [{ time: "10:00", doc: "Dra. Renata Lima", room: "C1" }, { time: "14:30", doc: "Dra. Renata Lima", room: "C1" }],
  "28/05": [{ time: "08:00", doc: "Dr. Paulo Mendonça", room: "C3" }, { time: "10:00", doc: "Dr. Paulo Mendonça", room: "C3" }],
  "29/05": [{ time: "09:00", doc: "Dra. Renata Lima", room: "C1" }, { time: "15:30", doc: "Dr. Paulo Mendonça", room: "C3" }],
  "01/06": [{ time: "07:30", doc: "Dr. Paulo Mendonça", room: "C3" }, { time: "09:00", doc: "Dra. Renata Lima", room: "C1" }, { time: "11:30", doc: "Dra. Renata Lima", room: "C1" }, { time: "14:00", doc: "Dr. Paulo Mendonça", room: "C3" }],
  "02/06": [{ time: "08:30", doc: "Dr. Paulo Mendonça", room: "C3" }, { time: "10:30", doc: "Dra. Renata Lima", room: "C1" }],
  "03/06": [],
};

export default function ScreenB() {
  const [active, setActive] = useState<Specialty>("Clínico Geral");
  const [booked, setBooked] = useState<string | null>(null);

  return (
    <div
      className="flex flex-col h-full"
      style={{ background: "#f5f6f9", color: "#0f1a30", fontFamily: '"Atkinson Hyperlegible", system-ui, sans-serif' }}
    >
      <div style={{ flex: 1, overflow: "hidden", padding: "24px 32px 32px", display: "flex", flexDirection: "column", gap: 18 }}>
        <Breadcrumb items={["Início", "Agendar consulta", "Vagas disponíveis"]} />

        {/* Header row */}
        <div className="flex items-end justify-between" style={{ gap: 24 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>Encontre uma vaga</h1>
            <p style={{ margin: "6px 0 0", fontSize: 15, color: "#586478", maxWidth: 680 }}>
              Escolha a especialidade e o dia. Os horários aparecem em azul quando estão livres.
            </p>
          </div>
          <div className="flex items-center" style={{ gap: 10, padding: "10px 14px", borderRadius: 10, border: "1px solid #dee2ec", background: "#ffffff", color: "#586478", fontSize: 13, minWidth: 280 }}>
            <SearchIcon size={18} />
            <span>Buscar por profissional ou local…</span>
          </div>
        </div>

        {/* Specialty chips */}
        <div className="flex" style={{ gap: 12 }}>
          {SPECIALTIES.map((s) => {
            const isActive = active === s.name;
            return (
              <button
                key={s.name}
                onClick={() => setActive(s.name)}
                className="flex items-center text-left"
                style={{
                  flex: 1, gap: 14, padding: "18px 20px", borderRadius: 14,
                  border: `2px solid ${isActive ? "#1351b4" : "#dee2ec"}`,
                  background: isActive ? "#e9eef9" : "#ffffff",
                  cursor: "pointer", font: "inherit",
                }}
              >
                <div className="flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: 12, background: isActive ? "#1351b4" : "#e9eef9", color: isActive ? "#fff" : "#1351b4" }}>
                  {s.icon({ s: 26 })}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#0f1a30" }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: "#586478", marginTop: 2 }}>{s.count} profissionais · {s.count * 4} vagas</div>
                </div>
                {isActive && <span style={{ color: "#1351b4", display: "flex" }}><CheckIcon size={20} /></span>}
              </button>
            );
          })}
        </div>

        <UbsCallout />

        {booked && (
          <div className="flex items-center" style={{ gap: 10, padding: "12px 18px", background: "#e9eef9", borderRadius: 10, border: "1px solid rgba(19,81,180,0.2)", fontSize: 13, color: "#1351b4", fontWeight: 600 }}>
            <CheckIcon size={16} /> Agendamento confirmado: {booked}
          </div>
        )}

        {/* Day grid */}
        <div className="flex flex-col" style={{ flex: 1, background: "#ffffff", borderRadius: 14, border: "1px solid #dee2ec", overflow: "hidden" }}>
          <div className="flex items-center justify-between" style={{ padding: "14px 20px", borderBottom: "1px solid #dee2ec" }}>
            <div className="flex items-center" style={{ gap: 10 }}>
              <span style={{ color: "#1351b4", display: "flex" }}><CalIcon size={20} /></span>
              <div style={{ fontSize: 15, fontWeight: 700 }}>Semana de 26 mai – 03 jun</div>
            </div>
            <div className="flex" style={{ gap: 6 }}>
              <button style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid #dee2ec", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(180deg)", color: "#0f1a30" }}><ChevIcon size={14} /></button>
              <button style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid #dee2ec", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#0f1a30" }}><ChevIcon size={14} /></button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: `repeat(${DAYS.length}, 1fr)`, flex: 1, overflow: "hidden" }}>
            {DAYS.map((d, i) => {
              const slots = GRID[d.key] ?? [];
              return (
                <div key={d.key} className="flex flex-col min-w-0" style={{ borderRight: i < DAYS.length - 1 ? "1px solid #dee2ec" : "none" }}>
                  <div style={{ padding: "12px 14px", borderBottom: "1px solid #dee2ec", background: "#f5f6f9" }}>
                    <div style={{ fontSize: 11, color: "#586478", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      {d.long.split(",")[0]}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700, marginTop: 2 }}>
                      {d.long.split(",")[1].trim()}
                    </div>
                    <div style={{ fontSize: 11, color: slots.length ? "#1351b4" : "#586478", marginTop: 4, fontWeight: 600 }}>
                      {slots.length ? `${slots.length} ${slots.length === 1 ? "vaga" : "vagas"}` : "Sem vagas"}
                    </div>
                  </div>
                  <div className="flex flex-col overflow-auto" style={{ flex: 1, padding: "10px 8px", gap: 6 }}>
                    {slots.length === 0 ? (
                      <div className="flex flex-1 items-center justify-center text-center" style={{ color: "#586478", fontSize: 12, padding: "20px 6px", lineHeight: 1.4 }}>
                        Entrar em lista de espera
                      </div>
                    ) : slots.map((slot, j) => (
                      <button
                        key={j}
                        onClick={() => setBooked(`${slot.time} · ${slot.doc}`)}
                        className="flex flex-col items-start text-left"
                        style={{
                          gap: 2, padding: "10px 12px", borderRadius: 10,
                          border: "1px solid rgba(19,81,180,0.2)",
                          background: "#e9eef9", color: "#1351b4",
                          cursor: "pointer", font: "inherit",
                        }}
                      >
                        <div style={{ fontSize: 17, fontWeight: 700, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.01em" }}>{slot.time}</div>
                        <div className="truncate w-full" style={{ fontSize: 11, color: "#0f1a30", opacity: 0.75, fontWeight: 500, lineHeight: 1.25 }}>
                          {slot.doc.replace(/^Dra?\.\s/, "")}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
