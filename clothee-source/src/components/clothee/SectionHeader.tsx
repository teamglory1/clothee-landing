interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/70 text-[11px] uppercase tracking-[0.18em] text-foreground/60 mb-5`}>
        {eyebrow}
      </div>
    )}
    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-balance">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-5 text-lg text-foreground/60 leading-relaxed">{subtitle}</p>
    )}
  </div>
);
