const items = [
  "AI Style Score",
  "Digital Wardrobe",
  "Outfit Auctions",
  "Find Similar",
  "Weather-aware Looks",
  "Sustainable Fashion",
  "Community Feedback",
  "Resale Marketplace",
];

export const Marquee = () => {
  return (
    <section className="py-10 border-y border-border/60 bg-secondary/40 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-8 text-foreground/50">
            <span className="font-display text-2xl italic">{item}</span>
            <span className="mx-8 text-mauve">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};
