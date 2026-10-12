import { highlights } from "../constants";

const Highlights = () => (
  <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {highlights.map((item) => (
        <div key={item.id} className="rounded-card border border-line bg-surface p-5 shadow-card">
          <p className="font-display text-3xl font-extrabold text-ink">
            {item.value}
            <span className="text-brand-600">{item.suffix}</span>
          </p>
          <p className="mt-1 text-sm leading-snug text-muted">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Highlights;
