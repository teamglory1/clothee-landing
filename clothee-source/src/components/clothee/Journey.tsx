import { SectionHeader } from "./SectionHeader";
import zeynep from "@/assets/zeynep.jpg";
import { Music2, UserCircle2, Sun, Star, Heart, Tag, Crown } from "lucide-react";

const journey = [
  { icon: Music2, time: "Day 1", title: "Discovers Clothee on TikTok", text: "A 15-second outfit-grading clip stops her thumb." },
  { icon: UserCircle2, time: "Day 2", title: "Creates a profile, uploads her closet", text: "47 items photographed in under 20 minutes." },
  { icon: Sun, time: "Day 5", title: "Daily outfits before class", text: "Weather-aware looks waiting in her morning notification." },
  { icon: Star, time: "Day 14", title: "Style score: 78 → 89", text: "AI tips on layering and palette balance start clicking." },
  { icon: Heart, time: "Day 21", title: "First post hits the feed", text: "320 likes, 14 comments, and a new style buddy." },
  { icon: Tag, time: "Day 30", title: "Sells two unused pieces", text: "€68 earned in the marketplace, hassle-free." },
  { icon: Crown, time: "Day 45", title: "Upgrades to Fashionista", text: "Unlocks advanced AI, color theory, and capsule planning." },
];

export const Journey = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="A real journey"
          title={
            <>
              Meet <span className="italic text-mauve-deep">Zeynep</span>, 21.
            </>
          }
          subtitle="A university student in Istanbul who never knew what to wear. Here's what changed in 45 days."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-start">
          {/* Profile card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="rounded-[2rem] overflow-hidden bg-card-gradient border border-border/60 shadow-elegant">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={zeynep}
                  alt="Portrait of Zeynep, a 21-year-old Clothee user"
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-[11px] uppercase tracking-[0.18em] text-foreground/50">User story</div>
                <h3 className="mt-2 font-display text-3xl">Zeynep K.</h3>
                <p className="mt-1 text-sm text-foreground/60">Student · Istanbul · Fashionista plan</p>
                <div className="mt-5 flex gap-3">
                  <div className="flex-1 p-3 rounded-xl bg-background/70">
                    <div className="text-2xl font-display">+11</div>
                    <div className="text-[11px] text-foreground/55">Style score</div>
                  </div>
                  <div className="flex-1 p-3 rounded-xl bg-background/70">
                    <div className="text-2xl font-display">€68</div>
                    <div className="text-[11px] text-foreground/55">Earned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8 relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-border via-mauve/40 to-border" />
            <div className="space-y-3">
              {journey.map(({ icon: Icon, time, title, text }, i) => (
                <div key={i} className="relative flex gap-5 pl-0">
                  <div className="relative z-10 flex-shrink-0 h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center shadow-soft">
                    <Icon className="h-4 w-4 text-mauve-deep" />
                  </div>
                  <div className="flex-1 p-5 rounded-2xl bg-card border border-border/60 hover:shadow-soft transition">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-mauve-deep/80">{time}</div>
                    <h4 className="mt-1 font-medium text-lg">{title}</h4>
                    <p className="mt-1 text-sm text-foreground/65">{text}</p>
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
