"use client";

import type { SectionId } from "@/app/lib/portfolio";

type NavItem = { id: SectionId; label: string };
type Profile = { name: string; email: string };

export default function Header({
  profile,
  nav,
  activeSection,
  onNavigate
}: {
  profile: Profile;
  nav: readonly NavItem[];
  activeSection: string;
  onNavigate: (id: SectionId) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <button
          className="font-extrabold tracking-tight text-slate-900"
          onClick={() => onNavigate("home")}
        >
          {profile.name}
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={
                  "px-3 py-2 rounded-xl text-sm font-medium transition " +
                  (active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100")
                }
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden sm:inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            href={"mailto:" + profile.email}
          >
            Contact
          </a>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
            onClick={() => {
              const idx = nav.findIndex((n) => n.id === activeSection);
              const next = nav[(idx + 1) % nav.length]?.id || "home";
              onNavigate(next);
            }}
            aria-label="Jump to next section"
            title="Jump to next section"
          >
            Next
          </button>
        </div>
      </div>
    </header>
  );
}