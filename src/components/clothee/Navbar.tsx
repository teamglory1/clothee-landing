import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#marketplace", label: "Marketplace" },
  { href: "#pricing", label: "Pricing" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <div
          className={`flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 transition-all duration-500 ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl border border-border/60 shadow-soft"
              : "bg-transparent"
          }`}
        >
          <a href="#top" aria-label="Clothee home">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="#waitlist">Sign in</a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="#waitlist">Join waitlist</a>
            </Button>
          </div>
          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-3xl bg-background/95 backdrop-blur-xl border border-border/60 shadow-soft p-6 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground/80"
                >
                  {l.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <a href="#waitlist" onClick={() => setOpen(false)}>
                  Join waitlist
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
