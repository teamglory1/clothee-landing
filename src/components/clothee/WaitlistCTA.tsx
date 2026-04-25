import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight, Sparkles } from "lucide-react";

export const WaitlistCTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !interest) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("You're on the list ✦", {
      description: `Welcome, ${name.split(" ")[0]}. We'll be in touch soon.`,
    });
    setName("");
    setEmail("");
    setInterest("");
  };

  return (
    <section id="waitlist" className="py-24 md:py-32">
      <div className="container">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-mauve-gradient p-8 md:p-16 lg:p-24 text-background shadow-pop">
          <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-[30rem] h-[30rem] rounded-full bg-blush/40 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[25rem] h-[25rem] rounded-full bg-foreground/20 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/15 backdrop-blur text-[11px] uppercase tracking-[0.18em]">
                <Sparkles className="h-3 w-3" /> Beta · iOS & Android
              </div>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1] tracking-tight text-balance">
                Ready to rethink <span className="italic">your wardrobe?</span>
              </h2>
              <p className="mt-5 text-lg text-background/80 leading-relaxed max-w-md">
                Join Clothee and experience the future of AI-powered fashion. Early members get free Fashionista access for 3 months.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="bg-background text-foreground rounded-3xl p-7 md:p-8 shadow-elegant space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-foreground/55">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="h-12 rounded-xl border-border/70 bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-foreground/55">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 rounded-xl border-border/70 bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest" className="text-xs uppercase tracking-[0.15em] text-foreground/55">
                  Style interest
                </Label>
                <Select value={interest} onValueChange={setInterest}>
                  <SelectTrigger id="interest" className="h-12 rounded-xl border-border/70">
                    <SelectValue placeholder="Pick one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minimal">Minimal & elegant</SelectItem>
                    <SelectItem value="streetwear">Streetwear</SelectItem>
                    <SelectItem value="vintage">Vintage & second-hand</SelectItem>
                    <SelectItem value="trend">Trend-forward</SelectItem>
                    <SelectItem value="workwear">Workwear & professional</SelectItem>
                    <SelectItem value="experimental">Experimental</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={submitting}
                className="w-full mt-2"
              >
                {submitting ? "Adding you..." : (
                  <>
                    Join the Waitlist <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
              <p className="text-[11px] text-foreground/50 text-center">
                We'll only email you about Clothee. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
