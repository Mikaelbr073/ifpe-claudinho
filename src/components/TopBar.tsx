import { BellIcon, LogoIcon } from "@/lib/icons";
import type { MockUser } from "@/lib/data";
import LogoutButton from "./LogoutButton";

interface Props {
  user: MockUser;
}

export default function TopBar({ user }: Props) {
  return (
    <header
      className="flex items-center justify-between shrink-0"
      style={{
        padding: "18px 32px",
        background: "#ffffff",
        borderBottom: "1px solid #dee2ec",
      }}
    >
      {/* Brand */}
      <div className="flex items-center" style={{ gap: 14 }}>
        <span style={{ color: "#1351b4", display: "flex" }}>
          <LogoIcon size={32} />
        </span>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#0f1a30", letterSpacing: "-0.01em" }}>
            SisVagas UBS
          </div>
          <div style={{ fontSize: 12, color: "#586478", marginTop: 1 }}>
            Sistema Único de Saúde · Município de São Paulo
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center" style={{ gap: 18 }}>
        <button
          className="flex items-center cursor-pointer"
          style={{
            gap: 8, padding: "8px 12px", borderRadius: 8,
            border: "1px solid #dee2ec", background: "#ffffff",
            color: "#586478", fontSize: 13, font: "inherit",
          }}
        >
          <BellIcon size={16} /> Notificações
        </button>

        <div
          className="flex items-center"
          style={{ gap: 10, padding: "4px 14px 4px 4px", borderRadius: 999, border: "1px solid #dee2ec" }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: 34, height: 34, borderRadius: "50%",
              background: "#e9eef9", color: "#1351b4",
              fontWeight: 700, fontSize: 13,
            }}
          >
            {user.initials}
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#0f1a30" }}>{user.name}</div>
            <div style={{ fontSize: 11, color: "#586478" }}>CNS {user.cns}</div>
          </div>
        </div>

        <LogoutButton />
      </div>
    </header>
  );
}
