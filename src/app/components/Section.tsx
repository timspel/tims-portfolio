export default function Section({
  id,
  title,
  subtitle,
  children
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
        {subtitle ? <p className="mt-2 text-slate-600 max-w-2xl">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}