import { SectionHeader } from "./SectionHeader";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "AI styling", clothee: true, others: "Some" },
  { feature: "Digital wardrobe", clothee: true, others: "Some" },
  { feature: "Social fashion feed", clothee: true, others: "Some" },
  { feature: "Second-hand marketplace", clothee: true, others: "Separate apps" },
  { feature: "Live outfit auctions", clothee: true, others: false },
  { feature: "Find Similar (affordable alternatives)", clothee: true, others: false },
  { feature: "Sustainability focus", clothee: true, others: "Rare" },
  { feature: "Mobile-first community", clothee: true, others: "Mixed" },
];

export const CompetitiveAdvantage = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Why Clothee"
          title={
            <>
              The only app that does <span className="italic text-mauve-deep">all of it.</span>
            </>
          }
          subtitle="Other apps pick one slice. Clothee delivers the entire fashion ecosystem."
        />

        <div className="mt-14 max-w-4xl mx-auto rounded-[2rem] overflow-hidden border border-border/60 shadow-elegant bg-card">
          <div className="grid grid-cols-3 bg-secondary/60 px-6 py-5 text-sm font-medium">
            <div className="text-foreground/60">Capability</div>
            <div className="text-center font-display text-base">Clothee</div>
            <div className="text-center text-foreground/60">Others</div>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 px-6 py-5 items-center text-sm ${
                i % 2 === 0 ? "bg-background" : "bg-secondary/20"
              }`}
            >
              <div className="text-foreground/85">{row.feature}</div>
              <div className="flex justify-center">
                {row.clothee === true ? (
                  <div className="h-7 w-7 rounded-full bg-mauve-gradient flex items-center justify-center">
                    <Check className="h-4 w-4 text-background" />
                  </div>
                ) : (
                  <X className="h-5 w-5 text-foreground/30" />
                )}
              </div>
              <div className="text-center text-foreground/55">
                {row.others === false ? <X className="h-5 w-5 mx-auto text-foreground/30" /> : row.others}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
