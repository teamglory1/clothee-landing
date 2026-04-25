import { SectionHeader } from "./SectionHeader";

const kpis = [
  { value: "3–6%", label: "Freemium → premium conversion" },
  { value: "10–15%", label: "Marketplace commission yield" },
  { value: "45+", label: "Net Promoter Score target" },
  { value: "92%+", label: "AI recognition accuracy" },
  { value: "95%+", label: "Marketplace transaction success" },
  { value: "<5%", label: "Monthly churn ceiling" },
];

export const Metrics = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-15 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[40rem] h-[40rem] rounded-full bg-mauve-deep/30 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/10 border border-background/20 text-[11px] uppercase tracking-[0.18em] text-background/70 mb-5">
            North-star metrics
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-balance">
            Targets we're <span className="italic text-blush">building toward.</span>
          </h2>
          <p className="mt-5 text-lg text-background/65 leading-relaxed max-w-xl">
            Clear KPIs keep us honest and the product on track for sustainable growth.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-[2rem] overflow-hidden border border-background/10">
          {kpis.map((k) => (
            <div key={k.label} className="p-8 bg-foreground hover:bg-mauve-deep/30 transition-colors duration-300">
              <div className="font-display text-6xl tracking-tight text-blush">{k.value}</div>
              <div className="mt-3 text-sm text-background/65 leading-relaxed">{k.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
