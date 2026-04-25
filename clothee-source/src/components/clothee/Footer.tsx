import { Logo } from "./Logo";
import { Instagram, Twitter, Youtube, Music2 } from "lucide-react";

const groups = [
  {
    title: "Product",
    links: ["Features", "How it works", "AI Personalization", "Pricing"],
  },
  {
    title: "Marketplace",
    links: ["Browse", "Sell an item", "Auctions", "Seller protection"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help center", "Privacy", "Terms"],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b border-background/10">
          <div className="lg:col-span-4">
            <Logo className="text-background [&_div]:bg-background/10 [&_div_div]:bg-foreground" />
            <p className="mt-5 text-background/60 max-w-sm leading-relaxed">
              An AI-powered fashion ecosystem for wardrobe management, personal styling, social fashion, and second-hand resale.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Music2, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="text-[11px] uppercase tracking-[0.2em] text-background/50">{g.title}</div>
                <ul className="mt-5 space-y-3">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-background/80 hover:text-blush transition">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-background/50">
          <div>© {new Date().getFullYear()} Clothee. Made for the next generation of fashion.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background">Privacy</a>
            <a href="#" className="hover:text-background">Terms</a>
            <a href="#" className="hover:text-background">Cookies</a>
          </div>
        </div>

        <div className="mt-16 -mb-32 select-none pointer-events-none">
          <div className="font-display italic text-[18vw] leading-none text-background/[0.04] text-center tracking-tighter">
            Clothee
          </div>
        </div>
      </div>
    </footer>
  );
};
