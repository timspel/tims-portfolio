export default function IconLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:shadow transition"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <span className="h-2 w-2 rounded-full bg-slate-900" aria-hidden="true" />
      {label}
    </a>
  );
}