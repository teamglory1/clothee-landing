import { Leaf, Recycle, ShoppingBag, Heart } from "lucide-react";

const stats = [
  { icon: Recycle, value: "−40%", label: "Average reduction in unused wardrobe items" },
  { icon: ShoppingBag, value: "3.2x", label: "More wear per item with AI suggestions" },
  { icon: Leaf, value: "100%", label: "Of marketplace sales extend a garment's life" },
  { icon: Heart, value: "Zero", label: "Pressure to buy — reuse always comes first" },
];

export const Sustainability = () => {
  return (
    <section className="py-24 md:py-32 bg-soft-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="container relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/30 text-[11px] uppercase tracking-[0.18em] text-foreground/70 mb-5">
            <Leaf className="h-3 w-3" /> Sustainability
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight text-balance">
            Smarter styling. <span className="italic text-mauve-deep">Less waste.</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/65 max-w-2xl leading-relaxed">
            The fashion industry is responsible for 10% of global carbon emissions. Clothee helps you wear what you own, sell what you don't, and buy second-hand first.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="p-7 rounded-3xl bg-background/70 backdrop-blur border border-border/60 hover:shadow-soft transition">
              <Icon className="h-6 w-6 text-mauve-deep" />
              <div className="mt-6 font-display text-5xl tracking-tight">{value}</div>
              <div className="mt-2 text-sm text-foreground/60 leading-relaxed">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
