"use client";

import { useState } from "react";
import { type Specialty } from "@/lib/data";
import { StethIcon, BabyIcon, HeartIcon, CheckIcon, ChevIcon, BellIcon, PinIcon } from "@/lib/icons";

type SpecDef = { name: Specialty; desc: string; icon: (p: { s: number }) => React.ReactNode };
const SPECS: SpecDef[] = [
  { name: "Clínico Geral", desc: "Para sintomas comuns, exames de rotina e acompanhamento.", icon: (p) => <StethIcon size={p.s} /> },
  { name: "Pediatria",     desc: "Para consultas de crianças e adolescentes até 12 anos.",  icon: (p) => <BabyIcon size={p.s} /> },
  { name: "Ginecologia",   desc: "Para saúde da mulher, preventivo e acompanhamento.",      icon: (p) => <HeartIcon size={p.s} /> },
];

type Offer = { time: string; when: string; date: string; doctor: string; ubs: string; best?: boolean };
const OFFERS: Record<Specialty, Offer[]> = {
  "Clínico Geral": [
    { time: "08:00", when: "Amanhã, terça-feira",  date: "26 mai", doctor: "Dr. Paulo Mendonça",     ubs: "UBS Vila Esperança · 0,8 km", best: true },
    { time: "14:00", when: "Amanhã, terça-feira",  date: "26 mai", doctor: "Dra. Renata Lima",       ubs: "UBS Vila Esperança · 0,8 km" },
    { time: "10:00", when: "Quinta-feira",          date: "28 mai", doctor: "Dr. Paulo Mendonça",     ubs: "UBS Vila Esperança · 0,8 km" },
  ],
  "Pediatria": [
    { time: "14:00", when: "Amanhã, terça-feira",  date: "26 mai", doctor: "Dr. Henrique Salles",    ubs: "UBS Vila Esperança · 0,8 km", best: true },
    { time: "07:30", when: "Quarta-feira",          date: "27 mai", doctor: "Dr. Henrique Salles",    ubs: "UBS Vila Esperança · 0,8 km" },
  ],
  "Ginecologia": [
    { time: "15:30", when: "Quarta-feira",          date: "27 mai", doctor: "Dra. Aparecida Tavares", ubs: "UBS Centro · 2,3 km", best: true },
    { time: "08:00", when: "Quinta-feira",          date: "28 mai", doctor: "Dra. Aparecida Tavares", ubs: "UBS Centro · 2,3 km" },
  ],
};

function StepDot({ n, active }: { n: number; active: boolean }) {
  return (
    <span
      className="inline-flex items-center justify-center"
      style={{
        width: 24, height: 24, borderRadius: "50%", fontWeight: 700, fontSize: 12,
        background: active ? "#1351b4" : "#ffffff",
        color: active ? "#fff" : "#586478",
        border: active ? "none" : "1px solid #dee2ec",
      }}
    >
      {n}
    </span>
  );
}

export default function ScreenC() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [specialty, setSpecialty] = useState<Specialty | null>(null);
  const [selected, setSelected] = useState<Offer | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed && selected && specialty) {
    return (
      <div className="flex flex-1 items-center justify-center" style={{ background: "#f5f6f9", padding: 32 }}>
        <div
          className="flex flex-col items-center text-center"
          style={{ maxWidth: 480, width: "100%", background: "#ffffff", borderRadius: 24, border: "1px solid #dee2ec", padding: 40, gap: 20 }}
        >
          <div className="flex items-center justify-center" style={{ width: 64, height: 64, borderRadius: "50%", background: "#1351b4", color: "#fff" }}>
            <CheckIcon size={32} />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#0f1a30" }}>Agendamento confirmado!</h2>
            <p style={{ margin: "8px 0 0", fontSize: 14, color: "#586478" }}>Você receberá um lembrete por WhatsApp 48h e 24h antes da consulta.</p>
          </div>
          <div className="w-full text-left flex flex-col" style={{ background: "#f5f6f9", borderRadius: 16, padding: 20, gap: 6 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0f1a30" }}>{specialty}</div>
            <div style={{ fontSize: 13, color: "#586478" }}>{selected.when}, {selected.date} às {selected.time}</div>
            <div style={{ fontSize: 13, color: "#586478" }}>com {selected.doctor}</div>
            <div className="flex items-center" style={{ gap: 6, fontSize: 13, color: "#586478" }}><PinIcon size={13} /> {selected.ubs}</div>
          </div>
          <button onClick={() => { setStep(1); setSpecialty(null); setSelected(null); setConfirmed(false); }} style={{ background: "transparent", border: "none", color: "#1351b4", fontWeight: 600, fontSize: 13, cursor: "pointer", font: "inherit" }}>
            Fazer outro agendamento
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col overflow-auto"
      style={{ flex: 1, background: "#f5f6f9", color: "#0f1a30", fontFamily: '"Atkinson Hyperlegible", system-ui, sans-serif', padding: "32px 32px 32px", display: "flex", justifyContent: "center" }}
    >
      <div className="flex flex-col mx-auto w-full" style={{ maxWidth: 780, gap: 24 }}>

        {/* Saudação */}
        <div>
          <div style={{ fontSize: 14, color: "#586478", fontWeight: 600, letterSpacing: "0.02em", textTransform: "uppercase" }}>Olá, Maria</div>
          <h1 style={{ margin: "6px 0 0", fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: "#0f1a30" }}>
            Que atendimento você procura hoje?
          </h1>
          <p style={{ margin: "10px 0 0", fontSize: 16, color: "#586478" }}>
            Escolha uma opção abaixo. Em seguida mostramos as próximas vagas livres perto de você.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center" style={{ gap: 10, fontSize: 13, color: "#586478" }}>
          <StepDot n={1} active={step >= 1} />
          <span style={{ fontWeight: 600, color: "#0f1a30" }}>Especialidade</span>
          <span style={{ flex: 1, height: 1, background: "#dee2ec", margin: "0 6px" }} />
          <StepDot n={2} active={step >= 2} />
          <span>Vaga</span>
          <span style={{ flex: 1, height: 1, background: "#dee2ec", margin: "0 6px" }} />
          <StepDot n={3} active={step >= 3} />
          <span>Confirmação</span>
        </div>

        {/* Step 1 — Especialidade */}
        {step === 1 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {SPECS.map((s) => {
              const isActive = specialty === s.name;
              return (
                <button
                  key={s.name}
                  onClick={() => { setSpecialty(s.name); setStep(2); }}
                  className="flex flex-col items-start text-left relative"
                  style={{
                    gap: 10, padding: 20, borderRadius: 16,
                    border: `2px solid ${isActive ? "#1351b4" : "#dee2ec"}`,
                    background: isActive ? "#e9eef9" : "#ffffff",
                    cursor: "pointer", font: "inherit", minHeight: 170,
                  }}
                >
                  <div className="flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: 12, background: isActive ? "#1351b4" : "#e9eef9", color: isActive ? "#fff" : "#1351b4" }}>
                    {s.icon({ s: 26 })}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#0f1a30" }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: "#586478", lineHeight: 1.45 }}>{s.desc}</div>
                  {isActive && (
                    <div className="absolute flex items-center justify-center" style={{ top: 14, right: 14, width: 26, height: 26, borderRadius: "50%", background: "#1351b4", color: "#fff" }}>
                      <CheckIcon size={16} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Step 2 — Vagas */}
        {step === 2 && specialty && (
          <div style={{ background: "#ffffff", borderRadius: 16, border: "1px solid #dee2ec", overflow: "hidden" }}>
            <div className="flex items-center justify-between" style={{ padding: "18px 22px", borderBottom: "1px solid #dee2ec" }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>Próximas vagas de {specialty}</div>
                <div style={{ fontSize: 13, color: "#586478", marginTop: 2 }}>Encontradas perto de você · UBS Vila Esperança</div>
              </div>
              <button onClick={() => setStep(1)} className="flex items-center" style={{ background: "transparent", border: "none", color: "#1351b4", fontWeight: 600, fontSize: 13, cursor: "pointer", font: "inherit", gap: 4 }}>
                <span style={{ transform: "rotate(180deg)", display: "flex" }}><ChevIcon size={14} /></span> Voltar
              </button>
            </div>

            <div className="flex flex-col">
              {OFFERS[specialty].map((o, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid", gridTemplateColumns: "108px 1fr auto", alignItems: "center", gap: 18,
                    padding: "18px 22px", borderTop: i > 0 ? "1px solid #dee2ec" : "none",
                    background: o.best ? "rgba(233,238,249,0.53)" : "transparent",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 30, fontWeight: 700, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em", lineHeight: 1, color: "#0f1a30" }}>{o.time}</div>
                    <div style={{ fontSize: 12, color: "#586478", marginTop: 6 }}>{o.date}</div>
                  </div>
                  <div>
                    {o.best && (
                      <div style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "#1351b4", background: "#ffffff", padding: "3px 8px", borderRadius: 6, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 6, border: "1px solid rgba(19,81,180,0.2)" }}>
                        Mais próxima
                      </div>
                    )}
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#0f1a30" }}>{o.when}</div>
                    <div style={{ fontSize: 13, color: "#586478", marginTop: 3 }}>com {o.doctor} · {o.ubs}</div>
                  </div>
                  <button
                    onClick={() => { setSelected(o); setStep(3); }}
                    style={{
                      padding: "14px 26px", borderRadius: 10,
                      background: o.best ? "#1351b4" : "#ffffff",
                      color: o.best ? "#fff" : "#1351b4",
                      border: o.best ? "none" : "2px solid #1351b4",
                      fontWeight: 700, fontSize: 15, cursor: "pointer", font: "inherit", minWidth: 140,
                    }}
                  >
                    Reservar
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center" style={{ padding: "14px 22px", borderTop: "1px solid #dee2ec", background: "#f5f6f9", gap: 10, fontSize: 13, color: "#586478" }}>
              <BellIcon size={16} />
              Você receberá lembretes por WhatsApp 48h e 24h antes da consulta.
            </div>
          </div>
        )}

        {/* Step 3 — Confirmação */}
        {step === 3 && selected && specialty && (
          <div style={{ background: "#ffffff", borderRadius: 16, border: "1px solid #dee2ec", overflow: "hidden" }}>
            <div className="flex items-center justify-between" style={{ padding: "18px 22px", borderBottom: "1px solid #dee2ec" }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>Confirmar agendamento</div>
              <button onClick={() => setStep(2)} className="flex items-center" style={{ background: "transparent", border: "none", color: "#1351b4", fontWeight: 600, fontSize: 13, cursor: "pointer", font: "inherit", gap: 4 }}>
                <span style={{ transform: "rotate(180deg)", display: "flex" }}><ChevIcon size={14} /></span> Voltar
              </button>
            </div>
            <div className="flex flex-col" style={{ padding: 20, gap: 16 }}>
              <div className="flex flex-col" style={{ background: "#f5f6f9", borderRadius: 12, padding: 16, gap: 6 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#0f1a30" }}>{specialty}</div>
                <div style={{ fontSize: 13, color: "#586478" }}>{selected.when}, {selected.date} às {selected.time}</div>
                <div style={{ fontSize: 13, color: "#586478" }}>com {selected.doctor}</div>
                <div className="flex items-center" style={{ gap: 6, fontSize: 13, color: "#586478" }}><PinIcon size={13} /> {selected.ubs}</div>
              </div>
              <div className="flex items-center" style={{ gap: 10, fontSize: 13, color: "#586478", background: "rgba(233,238,249,0.6)", borderRadius: 12, padding: 14 }}>
                <BellIcon size={15} />
                Lembretes por WhatsApp serão enviados 48h e 24h antes da consulta.
              </div>
              <button
                onClick={() => setConfirmed(true)}
                style={{ width: "100%", padding: "16px 0", borderRadius: 10, background: "#1351b4", color: "#fff", border: "none", fontWeight: 700, fontSize: 16, cursor: "pointer", font: "inherit" }}
              >
                Confirmar agendamento
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
