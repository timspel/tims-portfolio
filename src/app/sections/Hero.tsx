"use client";

import Card from "@/app/components/Card";
import Badge from "@/app/components/Badge";
import IconLink from "@/app/components/IconLink";
import type { SectionId } from "@/app/lib/portfolio";

type Link = { label: string; href: string };
type Profile = {
  name: string;
  title: string;
  location: string;
  summary: string;
  email: string;
  links: Link[];
};

export default function Hero({
  profile,
  skills,
  onNavigate
}: {
  profile: Profile;
  skills: string[];
  onNavigate: (id: SectionId) => void;
}) {
  const initials = profile.name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return (
    <section id="home" className="scroll-mt-24">
      <div className="grid gap-8 md:grid-cols-12 items-start">
        <div className="md:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Available for opportunities
          </p>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            {profile.title}
            <span className="block text-slate-600 text-2xl md:text-3xl font-semibold mt-2">
              {profile.location}
            </span>
          </h1>

          <p className="mt-5 text-lg text-slate-700 max-w-2xl">{profile.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {profile.links.map((l) => (
              <IconLink key={l.label} label={l.label} href={l.href} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.slice(0, 6).map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              onClick={() => onNavigate("projects")}
            >
              View projects
            </button>

            <a
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              href={"mailto:" + profile.email}
            >
              Email me
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <Card>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-extrabold">
                {initials}
              </div>
              <div>
                <div className="font-bold text-slate-900">{profile.name}</div>
                <div className="text-sm text-slate-600">{profile.title}</div>
                <div className="text-sm text-slate-600">{profile.email}</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                <div className="text-xs text-slate-600">Focus</div>
                <div className="mt-1 text-sm font-semibold">UI + DX</div>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                <div className="text-xs text-slate-600">Strength</div>
                <div className="mt-1 text-sm font-semibold">Clean code</div>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                <div className="text-xs text-slate-600">Style</div>
                <div className="mt-1 text-sm font-semibold">Accessible</div>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-700">
              Tip: replace the initials box with your photo, and update the links to real URLs.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}