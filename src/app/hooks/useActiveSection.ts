"use client";

import * as React from "react";

export function useActiveSection(sectionIds: string[], offsetPx = 140) {
  const [activeSection, setActiveSection] = React.useState(sectionIds[0] ?? "home");

  React.useEffect(() => {
    const handler = () => {
      const positions = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id, top: rect.top, bottom: rect.bottom };
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[];

      const candidate = positions.find((p) => p.top <= offsetPx && p.bottom > offsetPx);
      if (candidate && candidate.id !== activeSection) setActiveSection(candidate.id);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [activeSection, offsetPx, sectionIds]);

  return { activeSection, setActiveSection };
}