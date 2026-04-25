import { SectionHeader } from "./SectionHeader";

const streams = [
  { title: "Free Plan", text: "Hook users into the ecosystem with the core wardrobe and feed.", tag: "Acquisition" },
  { title: "Fashionista Premium", text: "Monthly/yearly subscription for advanced AI styling.", tag: "Subscription" },
  { title: "Professional Tier", text: "Pro stylists and serious fashion enthusiasts.", tag: "Subscription" },
  { title: "Marketplace Commission", text: "8–12% on every second-hand sale and auction.", tag: "C2C" },
  { title: "Affiliate Partnerships", text: "Revenue from 'Find Similar' brand referrals.", tag: "Affiliate" },
  { title: "Sponsored Placements", text: "Curated brand partnerships in feed and recommendations.", tag: "Brand" },
];

export const BusinessModel = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Business model"
          title={
            <>
              A diversified, <span className="italic text-mauve-deep">scalable</span> revenue engine.
            </>
          }
          subtitle="Hybrid B2C + C2C with six independent streams that compound as the community grows."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {streams.map((s, i) => (
            <div
              key={s.title}
              className="p-7 rounded-3xl bg-card-gradient border border-border/60 hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="font-display text-3xl text-mauve-deep/40">{String(i + 1).padStart(2, "0")}</div>
                <span className="text-[10px] uppercase tracking-[0.2em] bg-secondary px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
