import { SectionHeader } from "./SectionHeader";
import mockupMarketplace from "@/assets/mockup-marketplace.png";
import { Tag, Gavel, ShieldCheck, Star, Leaf, Wallet } from "lucide-react";

const features = [
  { icon: Tag, title: "List in seconds", text: "Photo, condition, price — done." },
  { icon: Gavel, title: "Live auctions", text: "Accept bids on rare or designer pieces." },
  { icon: ShieldCheck, title: "Secure payments", text: "Funds held in escrow until delivery." },
  { icon: Star, title: "Buyer & seller ratings", text: "Trust built into every transaction." },
  { icon: Leaf, title: "Sustainable by design", text: "Every resale is one less item produced." },
  { icon: Wallet, title: "Instant payouts", text: "Withdraw earnings to your account." },
];

export const Marketplace = () => {
  return (
    <section id="marketplace" className="py-24 md:py-32 bg-soft-gradient relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-blush/40 blur-3xl pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <SectionHeader
              align="left"
              eyebrow="Marketplace"
              title={
                <>
                  Turn your unused wardrobe <span className="italic text-mauve-deep">into value.</span>
                </>
              }
              subtitle="Sell second-hand pieces or auction your favorites. Sustainable fashion with the polish of a premium store."
            />

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="p-5 rounded-2xl bg-background/70 backdrop-blur border border-border/60">
                  <Icon className="h-5 w-5 text-mauve-deep" />
                  <div className="mt-3 font-medium">{title}</div>
                  <div className="mt-1 text-sm text-foreground/60">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 -m-8 bg-mauve/20 rounded-full blur-3xl" />
            <img
              src={mockupMarketplace}
              alt="Clothee second-hand marketplace screen with auctions"
              loading="lazy"
              width={800}
              height={1280}
              className="relative w-full max-w-sm mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
