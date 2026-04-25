import { SectionHeader } from "./SectionHeader";
import { Clock, Shirt, Compass, ShoppingBag, Layers } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Decision fatigue, daily.",
    text: "The average person spends 17 minutes every morning just deciding what to wear.",
  },
  {
    icon: Shirt,
    title: "Closets full, nothing to wear.",
    text: "Up to 80% of a typical wardrobe sits unused — forgotten, mismatched, or overlooked.",
  },
  {
    icon: Compass,
    title: "No honest stylist on call.",
    text: "Personal styling is expensive, slow, and rarely tailored to who you actually are.",
  },
  {
    icon: ShoppingBag,
    title: "Resale is fragmented.",
    text: "Selling unused pieces means juggling five apps, ten platforms, and endless friction.",
  },
  {
    icon: Layers,
    title: "One feature isn't enough.",
    text: "Existing apps do styling, or wardrobe, or resale — never the whole fashion ecosystem.",
  },
];

export const Problem = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="The problem"
          title={
            <>
              Fashion is full of <span className="italic text-mauve-deep">friction.</span>
            </>
          }
          subtitle="Most of us own more than we wear, wear less than we want, and spend more than we should. We're fixing that."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`group relative p-7 rounded-3xl bg-card-gradient border border-border/60 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 ${
                i === 0 ? "lg:row-span-2 lg:bg-mauve-gradient lg:text-background lg:border-transparent" : ""
              }`}
            >
              <div
                className={`h-11 w-11 rounded-2xl flex items-center justify-center ${
                  i === 0
                    ? "lg:bg-background/20 bg-secondary"
                    : "bg-secondary"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl leading-tight">{title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "lg:text-background/80 text-foreground/65" : "text-foreground/65"}`}>
                {text}
              </p>
              {i === 0 && (
                <div className="hidden lg:block mt-10 text-6xl font-display italic opacity-90">17m</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
