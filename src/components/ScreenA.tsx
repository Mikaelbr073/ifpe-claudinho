"use client";

import { useState } from "react";
import { VAGAS, groupByDay, type Specialty, type Vaga } from "@/lib/data";
import { PinIcon, CheckIcon } from "@/lib/icons";
import UbsCallout from "./UbsCallout";
import Breadcrumb from "./Breadcrumb";

type Filter = "all" | Specialty;
const FILTERS: { label: string; value: Filter }[] = [
  { label: "Todas as especialidades", value: "all" },
  { label: "Clínico Geral", value: "Clínico Geral" },
  { label: "Pediatria", value: "Pediatria" },
  { label: "Ginecologia", value: "Ginecologia" },
];

function vagaKey(v: Vaga) { return `${v.date}-${v.time}-${v.doctor}`; }

function VagaCard({ vaga, booked, onBook }: { vaga: Vaga; booked: boolean; onBook: () => void }) {
  const [confirming, setConfirming] = useState(false);

  if (booked) {
    return (
      <article
        className="flex items-center"
        style={{ gap: 14, padding: "14px 22px", background: "#e9eef9", borderRadius: 14, border: "1px solid rgba(19,81,180,0.2)" }}
      >
        <span className="flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: "50%", background: "#1351b4", color: "#fff", flexShrink: 0 }}>
          <CheckIcon size={16} />
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#1351b4" }}>Agendamento confirmado!</div>
          <div style={{ fontSize: 13, color: "#586478", marginTop: 2 }}>{vaga.time} · {vaga.doctor} · {vaga.room}</div>
        </div>
        <div style={{ fontSize: 12, color: "#586478" }}>Lembrete via WhatsApp confirmado</div>
      </article>
    );
  }

  return (
    <article
      style={{
        display: "grid", gridTemplateColumns: "90px 1fr auto", alignItems: "center", gap: 18,
        padding: "18px 22px", background: "#ffffff", borderRadius: 14, border: "1px solid #dee2ec",
      }}
    >
      {/* Horário */}
      <div className="flex flex-col items-start">
        <div style={{ fontSize: 28, fontWeight: 700, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em", color: "#0f1a30" }}>
          {vaga.time}
        </div>
        <div style={{ fontSize: 12, color: "#586478", marginTop: 2 }}>{vaga.day} {vaga.date}</div>
      </div>

      {/* Info */}
      <div>
        <div className="flex items-center" style={{ gap: 8, marginBottom: 4 }}>
          <span style={{
            fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
            letterSpacing: "0.04em", textTransform: "uppercase",
            background: "#e9eef9", color: "#1351b4",
          }}>
            {vaga.specialty}
          </span>
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#0f1a30" }}>{vaga.doctor}</div>
        <div className="flex items-center" style={{ gap: 14, marginTop: 4, fontSize: 13, color: "#586478" }}>
          <span className="flex items-center" style={{ gap: 5 }}><PinIcon size={14} /> {vaga.ubs} · {vaga.dist}</span>
          <span>{vaga.room}</span>
        </div>
      </div>

      {/* Ação */}
      {confirming ? (
        <div className="flex flex-col" style={{ gap: 8, minWidth: 140 }}>
          <button
            onClick={onBook}
            style={{ padding: "11px 22px", borderRadius: 10, background: "#1351b4", color: "#fff", border: "none", fontWeight: 700, fontSize: 14, cursor: "pointer", font: "inherit" }}
          >
            Confirmar
          </button>
          <button
            onClick={() => setConfirming(false)}
            style={{ padding: "9px 22px", borderRadius: 10, background: "#ffffff", color: "#586478", border: "1px solid #dee2ec", fontWeight: 600, fontSize: 13, cursor: "pointer", font: "inherit" }}
          >
            Cancelar
          </button>
        </div>
      ) : (
        <button
          onClick={() => setConfirming(true)}
          style={{ padding: "14px 26px", borderRadius: 10, background: "#1351b4", color: "#fff", border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer", font: "inherit", minWidth: 140 }}
        >
          Agendar
        </button>
      )}
    </article>
  );
}

export default function ScreenA() {
  const [filter, setFilter] = useState<Filter>("all");
  const [booked, setBooked] = useState<Set<string>>(new Set());

  const filtered = filter === "all" ? VAGAS : VAGAS.filter((v) => v.specialty === filter);
  const grouped = groupByDay(filtered).slice(0, 4);

  return (
    <div
      className="flex flex-col h-full"
      style={{ background: "#f5f6f9", color: "#0f1a30", fontFamily: '"Atkinson Hyperlegible", system-ui, sans-serif' }}
    >
      <div
        className="flex flex-col"
        style={{ flex: 1, overflow: "hidden", padding: "24px 32px 32px", display: "flex", flexDirection: "column", gap: 18 }}
      >
        <Breadcrumb items={["Início", "Agendar consulta", "Vagas disponíveis"]} />

        <div>
          <h1 style={{ margin: 0, fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em", color: "#0f1a30" }}>
            Vagas disponíveis
          </h1>
          <p style={{ margin: "6px 0 0", fontSize: 15, color: "#586478", maxWidth: 680 }}>
            Veja os horários abertos nas próximas duas semanas. Toque em{" "}
            <b style={{ color: "#0f1a30" }}>Agendar</b> para reservar a vaga.
          </p>
        </div>

        <UbsCallout />

        {/* Filter strip */}
        <div className="flex items-center flex-wrap" style={{ gap: 10 }}>
          <span style={{ fontSize: 13, color: "#586478", marginRight: 4 }}>Filtrar por:</span>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              style={{
                padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600,
                border: `1px solid ${filter === f.value ? "#1351b4" : "#dee2ec"}`,
                background: filter === f.value ? "#1351b4" : "#ffffff",
                color: filter === f.value ? "#fff" : "#0f1a30",
                cursor: "pointer", font: "inherit",
              }}
            >
              {f.label}
            </button>
          ))}
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: 13, color: "#586478" }}>{filtered.length} vagas encontradas</span>
        </div>

        {/* Day groups */}
        <div className="flex flex-col" style={{ flex: 1, overflow: "auto", gap: 18, paddingRight: 4 }}>
          {grouped.map((g) => (
            <section key={g.date}>
              <div className="flex items-baseline" style={{ gap: 12, marginBottom: 10 }}>
                <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#0f1a30" }}>{g.dayLong}</h2>
                <span style={{ fontSize: 13, color: "#586478" }}>
                  {g.items.length} {g.items.length === 1 ? "vaga" : "vagas"}
                </span>
              </div>
              <div className="flex flex-col" style={{ gap: 10 }}>
                {g.items.map((v) => {
                  const key = vagaKey(v);
                  return (
                    <VagaCard
                      key={key}
                      vaga={v}
                      booked={booked.has(key)}
                      onBook={() => setBooked((s) => new Set([...s, key]))}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
