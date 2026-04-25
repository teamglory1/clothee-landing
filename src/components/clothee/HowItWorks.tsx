import { SectionHeader } from "./SectionHeader";
import mockupWardrobe from "@/assets/mockup-wardrobe.png";

const steps = [
  {
    n: "01",
    title: "Upload your clothes",
    text: "Photograph or import items. Clothee removes backgrounds and tags everything automatically.",
  },
  {
    n: "02",
    title: "Build your digital wardrobe",
    text: "Browse a beautifully organized closet sorted by color, season, type, and frequency of use.",
  },
  {
    n: "03",
    title: "Get AI outfit recommendations",
    text: "Daily looks tuned to weather, calendar, mood — with style scores and instant feedback.",
  },
  {
    n: "04",
    title: "Share, improve, buy, or sell",
    text: "Post outfits, gather feedback, find affordable lookalikes, or list unused pieces for resale.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-24 md:py-32 bg-secondary/30">
      <div className="container">
        <SectionHeader
          eyebrow="How it works"
          title={
            <>
              From closet to <span className="italic text-mauve-deep">curated</span>, in four steps.
            </>
          }
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 -m-8 bg-blush/30 rounded-full blur-3xl" />
            <img
              src={mockupWardrobe}
              alt="Clothee digital wardrobe app screen"
              loading="lazy"
              width={800}
              height={1280}
              className="relative w-full max-w-sm mx-auto"
            />
          </div>

          <div className="lg:col-span-7 space-y-2">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="group flex gap-6 p-6 rounded-2xl hover:bg-background transition-all duration-300"
              >
                <div className="flex-shrink-0 font-display text-4xl text-mauve-deep/40 group-hover:text-mauve-deep transition-colors">
                  {s.n}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 text-foreground/65 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
