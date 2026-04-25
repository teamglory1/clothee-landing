import { SectionHeader } from "./SectionHeader";
import { Sparkles, Layers3, Heart, Gavel } from "lucide-react";

const solutions = [
  {
    icon: Sparkles,
    tag: "AI",
    title: "AI Outfit Analysis",
    text: "Snap a photo. Get a style score, palette read, and instant feedback on fit, balance, and proportion.",
    gradient: "from-blush/40 to-mauve/30",
  },
  {
    icon: Layers3,
    tag: "Wardrobe",
    title: "Digital Wardrobe",
    text: "Every piece, organized by color, season, and type — searchable, mixable, beautifully visual.",
    gradient: "from-sand to-secondary",
  },
  {
    icon: Heart,
    tag: "Community",
    title: "Social Fashion Feed",
    text: "Share looks, exchange feedback, and crowdsource the perfect outfit from a community that gets you.",
    gradient: "from-accent to-blush/30",
  },
  {
    icon: Gavel,
    tag: "Resale",
    title: "Marketplace & Auctions",
    text: "List unused pieces, set your price, accept bids. Sustainable fashion with seller protection built in.",
    gradient: "from-sage/40 to-secondary",
  },
];

export const Solution = () => {
  return (
    <section className="py-24 md:py-32 bg-soft-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="container relative">
        <SectionHeader
          eyebrow="The solution"
          title={
            <>
              One app for <span className="italic">styling</span>, wardrobe, community, and{" "}
              <span className="italic text-mauve-deep">resale.</span>
            </>
          }
          subtitle="Clothee combines four powerful experiences into a single fashion ecosystem."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {solutions.map(({ icon: Icon, tag, title, text, gradient }) => (
            <div
              key={title}
              className={`group relative p-8 md:p-10 rounded-[2rem] bg-gradient-to-br ${gradient} border border-background/40 hover:scale-[1.01] transition-all duration-500 shadow-soft hover:shadow-elegant`}
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] bg-background/60 backdrop-blur px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl md:text-4xl leading-tight">{title}</h3>
              <p className="mt-3 text-foreground/70 text-base leading-relaxed max-w-md">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
