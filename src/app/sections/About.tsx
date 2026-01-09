import Section from "@/app/components/Section";
import Card from "@/app/components/Card";

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="A quick introduction that makes it easy for recruiters and clients to understand what you do."
    >
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <Card>
            <p className="text-slate-700 leading-relaxed">
              I’m a developer who cares about product quality: performance, accessibility, and
              maintainable systems. I like collaborating with design to really understand use cases of each functionality.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Outside of work, I enjoy learning, reading, bouldering, problem-solving and puzzles.
            </p>
          </Card>
        </div>

        <div className="md:col-span-5">
          {/* <Card>
            <div className="text-sm font-semibold text-slate-900">Highlights</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Built React apps from 0 → 1</li>
              <li>Improved performance and UX</li>
              <li>Comfortable with TypeScript and design systems</li>
            </ul>
          </Card> */}
        </div>
      </div>
    </Section>
  );
}