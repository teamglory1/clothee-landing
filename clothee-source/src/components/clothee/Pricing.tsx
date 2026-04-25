import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const tiers = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    description: "Get organized and join the community.",
    features: [
      "Basic wardrobe storage",
      "Limited AI suggestions",
      "Social feed access",
      "Marketplace browsing",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Fashionista",
    price: "€7.99",
    period: "per month",
    description: "Unlock unlimited AI styling and analysis.",
    features: [
      "Unlimited AI outfit recommendations",
      "Detailed outfit analysis & scoring",
      "Personalized styling tools",
      "Find Similar — unlimited",
      "Auction priority",
    ],
    cta: "Go Fashionista",
    featured: true,
  },
  {
    name: "Professional",
    price: "€19.99",
    period: "per month",
    description: "For stylists, creators, and pros.",
    features: [
      "Advanced AI styling engine",
      "Capsule & seasonal planning",
      "Expert-style recommendations",
      "Priority support",
      "Reduced marketplace fees",
    ],
    cta: "Go Pro",
    featured: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Pick the plan that <span className="italic text-mauve-deep">fits.</span>
            </>
          }
          subtitle="Start free. Upgrade when you're ready for serious styling firepower."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-8 rounded-[2rem] border transition-all duration-500 ${
                t.featured
                  ? "bg-foreground text-background border-foreground shadow-pop md:-translate-y-4 md:scale-[1.02]"
                  : "bg-card border-border/60 hover:shadow-elegant"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blush text-foreground text-[10px] uppercase tracking-[0.2em] font-medium">
                  Most popular
                </div>
              )}
              <div className="font-display text-2xl">{t.name}</div>
              <div className={`text-sm mt-1 ${t.featured ? "text-background/60" : "text-foreground/55"}`}>
                {t.description}
              </div>

              <div className="mt-7 flex items-baseline gap-2">
                <span className="font-display text-5xl">{t.price}</span>
                <span className={`text-sm ${t.featured ? "text-background/55" : "text-foreground/55"}`}>
                  / {t.period}
                </span>
              </div>

              <Button
                variant={t.featured ? "blush" : "hero"}
                className="mt-7 w-full"
                size="lg"
                asChild
              >
                <a href="#waitlist">{t.cta}</a>
              </Button>

              <div className={`mt-7 h-px ${t.featured ? "bg-background/15" : "bg-border"}`} />

              <ul className="mt-7 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${t.featured ? "text-blush" : "text-mauve-deep"}`} />
                    <span className={t.featured ? "text-background/85" : "text-foreground/75"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
