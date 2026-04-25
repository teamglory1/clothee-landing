import { SectionHeader } from "./SectionHeader";
import mockupSocial from "@/assets/mockup-social.png";

const points = [
  { title: "Learns your style", text: "From silhouette preference to color comfort zones." },
  { title: "Spots wardrobe gaps", text: "Suggests the missing piece that unlocks new looks." },
  { title: "Recommends complements", text: "Pairs new finds with what you already own." },
  { title: "Improves with every upload", text: "More pieces, smarter suggestions, always." },
  { title: "Champions reuse", text: "Maximizes your existing closet before suggesting buys." },
];

export const AIPersonalization = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-mauve-deep/20 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute inset-0 -m-6 bg-blush/20 rounded-full blur-3xl" />
              <img
                src={mockupSocial}
                alt="Clothee social fashion feed"
                loading="lazy"
                width={800}
                height={1280}
                className="relative w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/10 border border-background/20 text-[11px] uppercase tracking-[0.18em] text-background/70 mb-5">
              AI Personalization
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-balance">
              The more you wear, the <span className="italic text-blush">smarter</span> it gets.
            </h2>
            <p className="mt-5 text-lg text-background/65 max-w-xl leading-relaxed">
              Clothee's AI doesn't just analyze — it learns. Every outfit, every save, every swipe sharpens its taste in yours.
            </p>

            <div className="mt-10 space-y-3">
              {points.map((p, i) => (
                <div key={p.title} className="flex gap-5 p-5 rounded-2xl border border-background/10 hover:bg-background/5 transition">
                  <div className="font-display text-xl text-blush w-8">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <div className="text-sm text-background/60 mt-0.5">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
