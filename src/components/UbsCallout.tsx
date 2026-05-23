import { PinIcon } from "@/lib/icons";

export default function UbsCallout() {
  return (
    <div
      className="flex items-center"
      style={{
        gap: 14, padding: "14px 18px",
        background: "#e9eef9", borderRadius: 12,
        border: "1px solid rgba(19,81,180,0.13)",
      }}
    >
      <span style={{ color: "#1351b4", display: "flex" }}>
        <PinIcon size={22} />
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, color: "#586478" }}>
          Sua UBS de referência (CEP 05426-010)
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#0f1a30", marginTop: 2 }}>
          UBS Vila Esperança · R. das Acácias, 142 · Atende seu endereço
        </div>
      </div>
      <button
        style={{
          background: "transparent", border: "none", color: "#1351b4",
          fontWeight: 600, fontSize: 13, cursor: "pointer", font: "inherit",
        }}
      >
        Trocar UBS
      </button>
    </div>
  );
}
