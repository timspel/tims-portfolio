import Section from "@/app/components/Section";
import Card from "@/app/components/Card";

type Link = { label: string; href: string };
type Profile = { name: string; email: string; links: Link[] };

export default function Contact({ profile }: { profile: Profile }) {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Make it easy for someone to reach you in one click."
    >
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <Card>
            <h3 className="text-lg font-bold text-slate-900">Let’s talk</h3>
            <p className="mt-2 text-sm text-slate-700">
              I’m open to full-time roles and freelance work. Email me and I’ll get back to you.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                href={"mailto:" + profile.email}
              >
                Email {profile.name.split(" ")[0] || "me"}
              </a>

              <button
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                onClick={() => {
                  if (navigator.clipboard) navigator.clipboard.writeText(profile.email);
                }}
              >
                Copy email
              </button>
            </div>
          </Card>
        </div>

        <div className="md:col-span-5">
          <Card>
            <div className="text-sm font-semibold text-slate-900">Quick links</div>
            <div className="mt-4 flex flex-col gap-2">
              {profile.links.map((l) => (
                <a
                  key={l.label}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}