"use client";

import { useState } from "react";
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import ScreenC from "./ScreenC";

const TABS = [
  { id: "c" as const, label: "Guiado (recomendado)" },
  { id: "a" as const, label: "Lista cronológica" },
  { id: "b" as const, label: "Por especialidade" },
];

type TabId = (typeof TABS)[number]["id"];

export default function SchedulingTabs() {
  const [active, setActive] = useState<TabId>("c");

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-0.5 px-8 bg-surface border-b border-line shrink-0">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              active === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-hidden flex flex-col">
        {active === "c" && <ScreenC />}
        {active === "a" && <ScreenA />}
        {active === "b" && <ScreenB />}
      </div>
    </div>
  );
}
