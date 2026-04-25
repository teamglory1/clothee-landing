import { SectionHeader } from "./SectionHeader";
import {
  Camera, Star, MessageSquare, Palette, CloudSun, Heart,
  HelpCircle, Search, Store, Gavel, Crown, Bell,
} from "lucide-react";

const features = [
  { icon: Camera, title: "Upload outfit photos", text: "Snap, drop, or import — Clothee auto-detects each piece." },
  { icon: Star, title: "AI style score", text: "Every outfit graded on palette, fit, occasion, and trend." },
  { icon: MessageSquare, title: "Real-time feedback", text: "Live styling notes the moment you add a new piece." },
  { icon: Palette, title: "Smart categorization", text: "Sort by color palette, season, fabric, formality." },
  { icon: CloudSun, title: "Daily recommendations", text: "Outfits curated for your weather, mood, and plans." },
  { icon: Heart, title: "Likes & comments", text: "A feed designed for fashion, not noise." },
  { icon: HelpCircle, title: "Request style advice", text: "Ask the community — or a stylist — for honest input." },
  { icon: Search, title: "Find Similar", text: "Discover affordable alternatives to any piece you love." },
  { icon: Store, title: "C2C marketplace", text: "Sell unused pieces with secure in-app payments." },
  { icon: Gavel, title: "Outfit auctions", text: "Bid on rare looks, vintage finds, designer drops." },
  { icon: Crown, title: "Premium AI tools", text: "Advanced styling, capsule planning, color theory." },
  { icon: Bell, title: "Daily reminders", text: "Gentle nudges before you head out — never repeat by accident." },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Features"
          title={
            <>
              Everything you need, <span className="italic text-mauve-deep">nothing you don't.</span>
            </>
          }
          subtitle="A complete toolkit for the modern fashion-conscious mind."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="group relative p-6 rounded-2xl bg-card border border-border/60 hover:border-mauve/40 hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="h-10 w-10 rounded-xl bg-secondary group-hover:bg-mauve-gradient group-hover:text-background flex items-center justify-center transition-colors duration-300">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="mt-5 font-medium text-base tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
