"use client";

import type { SectionId } from "@/app/lib/portfolio";

type NavItem = { id: SectionId; label: string };
type Profile = { name: string };

export default function Footer({
  profile,
  nav,
  onNavigate
}: {
  profile: Profile;
  nav: readonly NavItem[];
  onNavigate: (id: SectionId) => void;
}) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </div>

        <div className="flex flex-wrap gap-3">
          {nav.map((item) => (
            <button
              key={item.id}
              className="text-sm font-semibold text-slate-700 hover:underline"
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}