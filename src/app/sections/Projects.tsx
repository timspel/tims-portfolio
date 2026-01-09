import Section from "@/app/components/Section";
import Card from "@/app/components/Card";
import Badge from "@/app/components/Badge";

type Project = {
  name: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Pick 3–6 strong projects. Use outcomes, screenshots, and clear links."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.name}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-700">{p.description}</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-slate-900" aria-hidden="true" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  className="text-sm font-semibold text-slate-900 hover:underline"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}