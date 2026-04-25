export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative h-8 w-8">
      <div className="absolute inset-0 rounded-full bg-mauve-gradient" />
      <div className="absolute inset-[3px] rounded-full bg-background flex items-center justify-center">
        <span className="font-display text-sm italic font-semibold text-foreground">C</span>
      </div>
    </div>
    <span className="font-display text-xl font-medium tracking-tight">Clothee</span>
  </div>
);
