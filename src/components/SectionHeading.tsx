interface SectionHeadingProps {
  /** small uppercase label (the brand's section-heading pattern) */
  label: string;
  /** divider line side */
  align?: 'left' | 'right';
  /** render on dark background (Trust strip etc.) */
  dark?: boolean;
  className?: string;
}

/**
 * The brand section-heading pattern: a small uppercase primary label next to a
 * thin divider line. Extracted verbatim from the original homepage sections.
 */
export default function SectionHeading({
  label,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const line = `h-[1px] flex-1 ${dark ? 'bg-white/10' : 'bg-dark/10'}`;
  return (
    <div className={`flex items-center ${className}`}>
      {align === 'right' && <div className={`${line} mr-6 hidden md:block`} />}
      <h2 className="text-sm md:text-base font-black font-heading tracking-[0.3em] text-primary uppercase shrink-0">
        {label}
      </h2>
      <div className={`${line} ${align === 'right' ? 'ml-6 md:hidden' : 'ml-6'}`} />
    </div>
  );
}
