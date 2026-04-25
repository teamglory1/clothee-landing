import { ShieldCheck, Lock, Eye, Star, MessageCircle, LifeBuoy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Lock, title: "Secure payments", text: "PCI-compliant escrow with fraud protection on every transaction." },
  { icon: ShieldCheck, title: "Privacy-first wardrobe data", text: "Your closet data never sold. End-to-end encrypted backups." },
  { icon: Eye, title: "Condition transparency", text: "Standardized product condition labels across the marketplace." },
  { icon: Star, title: "Buyer & seller ratings", text: "Reputation systems that surface honest, accountable members." },
  { icon: MessageCircle, title: "Content moderation", text: "Real humans plus ML to keep the feed kind and on-topic." },
  { icon: LifeBuoy, title: "Always-on support", text: "Real people, real answers — typically under 4 hours." },
];

export const TrustSafety = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Trust & safety"
          title={
            <>
              Built to be <span className="italic text-mauve-deep">trusted.</span>
            </>
          }
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-7 rounded-2xl border border-border/60 bg-card hover:bg-card-gradient transition">
              <Icon className="h-5 w-5 text-mauve-deep" />
              <div className="mt-5 font-medium text-lg">{title}</div>
              <div className="mt-2 text-sm text-foreground/60 leading-relaxed">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
