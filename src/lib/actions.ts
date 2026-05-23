"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MOCK_USER } from "./data";

export async function login(_prev: unknown, formData: FormData) {
  const raw = String(formData.get("cns") ?? "").replace(/\D/g, "");

  if (raw.length < 11) {
    return { error: "Digite um CPF (11 dígitos) ou CNS (15 dígitos) válido." };
  }

  const store = await cookies();
  store.set("sisvagasAuth", JSON.stringify(MOCK_USER), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/");
}

export async function logout() {
  const store = await cookies();
  store.delete("sisvagasAuth");
  redirect("/login");
}
