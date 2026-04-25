import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import mockupHero from "@/assets/mockup-hero.png";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden bg-hero"
    >
      <div className="absolute inset-0 grain pointer-events-none" />
      {/* Decorative glow */}
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-blush/30 blur-3xl pointer-events-none" />
      <div className="absolute top-20 -right-40 w-[36rem] h-[36rem] rounded-full bg-mauve/20 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/70 border border-border/70 backdrop-blur text-xs font-medium text-foreground/70 animate-fade-in">
              <Sparkles className="h-3.5 w-3.5 text-mauve-deep" />
              Fashion, reimagined by AI
            </div>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-balance animate-fade-up">
              Your AI-Powered{" "}
              <span className="italic text-mauve-deep">Personal</span> Stylist
            </h1>

            <p
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-foreground/65 leading-relaxed animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              Clothee organizes your wardrobe, scores every outfit, surfaces
              smarter combinations, and lets you buy or sell second-hand
              fashion — all in one elegant app.
            </p>

            <div
              className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#waitlist">
                  Join the Waitlist <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#features">Explore Features</a>
              </Button>
            </div>

            <div
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex -space-x-2">
                {[
                  "hsl(350 45% 82%)",
                  "hsl(285 22% 70%)",
                  "hsl(32 35% 80%)",
                  "hsl(95 15% 75%)",
                ].map((c, i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-background"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-medium">12,400+ on the list</div>
                <div className="text-xs text-foreground/55">
                  Beta launching soon · iOS & Android
                </div>
              </div>
            </div>
          </div>

          {/* Right: mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md animate-scale-in">
              <div className="absolute inset-0 -m-10 bg-mauve-gradient opacity-20 rounded-full blur-3xl" />
              <img
                src={mockupHero}
                alt="Clothee app showing AI outfit style score of 92 with feedback chips"
                width={800}
                height={1280}
                className="relative w-full animate-float drop-shadow-2xl"
              />

              {/* Floating chips */}
              <div className="absolute -left-4 top-20 hidden sm:block bg-background rounded-2xl shadow-elegant px-4 py-3 animate-fade-in border border-border/60" style={{ animationDelay: "600ms" }}>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sage" />
                  <span className="text-xs font-medium">Cozy · Autumn</span>
                </div>
              </div>
              <div className="absolute -right-2 bottom-32 hidden sm:block bg-background rounded-2xl shadow-elegant px-4 py-3 animate-fade-in border border-border/60" style={{ animationDelay: "800ms" }}>
                <div className="text-[10px] uppercase tracking-widest text-foreground/50">Find similar</div>
                <div className="text-sm font-medium mt-0.5">From €24</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
