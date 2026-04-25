import { useEffect } from "react";
import { Navbar } from "@/components/clothee/Navbar";
import { Hero } from "@/components/clothee/Hero";
import { Marquee } from "@/components/clothee/Marquee";
import { Problem } from "@/components/clothee/Problem";
import { Solution } from "@/components/clothee/Solution";
import { Features } from "@/components/clothee/Features";
import { HowItWorks } from "@/components/clothee/HowItWorks";
import { Journey } from "@/components/clothee/Journey";
import { Marketplace } from "@/components/clothee/Marketplace";
import { AIPersonalization } from "@/components/clothee/AIPersonalization";
import { BusinessModel } from "@/components/clothee/BusinessModel";
import { Pricing } from "@/components/clothee/Pricing";
import { CompetitiveAdvantage } from "@/components/clothee/CompetitiveAdvantage";
import { Sustainability } from "@/components/clothee/Sustainability";
import { TrustSafety } from "@/components/clothee/TrustSafety";
import { Metrics } from "@/components/clothee/Metrics";
import { WaitlistCTA } from "@/components/clothee/WaitlistCTA";
import { Footer } from "@/components/clothee/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Clothee — Your AI-Powered Personal Stylist";
    const desc =
      "Clothee organizes your wardrobe, scores every outfit with AI, and lets you buy or sell second-hand fashion in one elegant app.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    // canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.origin + "/";

    // JSON-LD
    const ldId = "clothee-jsonld";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = ldId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Clothee",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS, Android",
      description: desc,
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    });
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Journey />
      <Marketplace />
      <AIPersonalization />
      <BusinessModel />
      <Pricing />
      <CompetitiveAdvantage />
      <Sustainability />
      <TrustSafety />
      <Metrics />
      <WaitlistCTA />
      <Footer />
    </main>
  );
};

export default Index;
