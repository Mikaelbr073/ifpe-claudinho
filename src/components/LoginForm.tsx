"use client";

import { useActionState } from "react";
import { login } from "@/lib/actions";
import { LogoIcon } from "@/lib/icons";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, null);

  return (
    <div style={{ width: "100%", maxWidth: 440 }}>
      <div
        style={{
          background: "#ffffff", borderRadius: 20, border: "1px solid #dee2ec",
          padding: 40, boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}
      >
        {/* Brand */}
        <div className="flex items-center" style={{ gap: 12, marginBottom: 28 }}>
          <span style={{ color: "#1351b4", display: "flex" }}><LogoIcon size={36} /></span>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#0f1a30", letterSpacing: "-0.01em" }}>SisVagas UBS</div>
            <div style={{ fontSize: 12, color: "#586478" }}>Sistema Único de Saúde</div>
          </div>
        </div>

        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#0f1a30", letterSpacing: "-0.01em" }}>Bem-vindo</h1>
        <p style={{ margin: "6px 0 24px", fontSize: 14, color: "#586478" }}>
          Entre com seu CPF ou CNS para agendar consultas.
        </p>

        <form action={action} className="flex flex-col" style={{ gap: 16 }}>
          <div className="flex flex-col" style={{ gap: 6 }}>
            <label htmlFor="cns" style={{ fontSize: 13, fontWeight: 600, color: "#0f1a30" }}>
              CPF ou Cartão Nacional de Saúde (CNS)
            </label>
            <input
              id="cns"
              name="cns"
              type="text"
              inputMode="numeric"
              placeholder="000.000.000-00 ou 000 0000 0000 0000"
              required
              style={{
                padding: "12px 14px", borderRadius: 10, border: "1px solid #dee2ec",
                background: "#f5f6f9", color: "#0f1a30", fontSize: 14,
                outline: "none", font: "inherit",
              }}
            />
          </div>

          <div className="flex flex-col" style={{ gap: 6 }}>
            <label htmlFor="senha" style={{ fontSize: 13, fontWeight: 600, color: "#0f1a30" }}>
              Senha
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="••••••••"
              required
              style={{
                padding: "12px 14px", borderRadius: 10, border: "1px solid #dee2ec",
                background: "#f5f6f9", color: "#0f1a30", fontSize: 14,
                outline: "none", font: "inherit",
              }}
            />
          </div>

          {state?.error && (
            <div style={{ padding: "10px 14px", borderRadius: 8, background: "#fef2f2", border: "1px solid #fecaca", fontSize: 13, color: "#dc2626" }}>
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            style={{
              marginTop: 8, padding: "14px 0", borderRadius: 10,
              background: "#1351b4", color: "#ffffff", border: "none",
              fontWeight: 700, fontSize: 15, cursor: "pointer", font: "inherit",
              opacity: pending ? 0.6 : 1,
            }}
          >
            {pending ? "Entrando…" : "Entrar"}
          </button>
        </form>

        <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid #dee2ec", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 12, color: "#586478", lineHeight: 1.6 }}>
            <b style={{ color: "#0f1a30" }}>Demonstração:</b> use qualquer CPF ou CNS<br />(mín. 11 dígitos) e qualquer senha.
          </p>
        </div>
      </div>
    </div>
  );
}
