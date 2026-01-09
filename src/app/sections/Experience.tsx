import Section from "@/app/components/Section";
import Card from "@/app/components/Card";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets?: string[];
};

export default function Experience({ experience }: { experience: ExperienceItem[] }) {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="A quick summary of roles and what you delivered."
    >
      <div className="space-y-6">
        {experience.length === 0 ? (
          <p className="text-sm text-slate-600">No experience yet.</p>
        ) : (
          experience.map((exp, idx) => (
            <Card key={idx}>
              <div className="text-base font-bold text-slate-900">
                {exp.role} · {exp.company}
              </div>
              <div className="mt-1 text-sm text-slate-600">{exp.period}</div>

              {exp.bullets?.length ? (
                <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))
        )}
      </div>
    </Section>
  );
}