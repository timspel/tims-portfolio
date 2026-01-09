import Section from "@/app/components/Section";
import Card from "@/app/components/Card";
import Badge from "@/app/components/Badge";

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <Section id="skills" title="Skills" subtitle="Keep this honest and aligned with the roles you want.">
      <Card>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </Card>
    </Section>
  );
}