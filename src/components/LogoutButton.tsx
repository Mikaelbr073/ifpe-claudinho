"use client";

import { logout } from "@/lib/actions";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="text-sm text-muted hover:text-foreground font-medium transition-colors cursor-pointer"
      >
        Sair
      </button>
    </form>
  );
}
