import { BsChevronDown } from "react-icons/bs";

export function SectionHeader({
  title,
  subtitle,
  years,
  year,
  onYearChange,
}: {
  title: string;
  subtitle: string;
  years?: number[];
  year?: string;
  onYearChange?: (year: string) => void;
}) {
  return (
    <div className="flex justify-between items-start gap-4 mb-10">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl text-[var(--text-h)]">{title}</h3>
        <span className="text-sm text-[var(--text)] leading-relaxed">
          {subtitle}
        </span>
      </div>
      {years && years.length > 0 && (
        <div className="relative shrink-0">
          <select
            value={year}
            onChange={(e) => onYearChange?.(e.target.value)}
            aria-label={`Filter ${title} by year`}
            className="appearance-none py-1.5 pl-3 pr-8 bg-[var(--btn-bg)] border border-[var(--border)] text-xs text-[var(--btn-text)] rounded cursor-pointer focus:outline-none"
          >
            <option value="all">All time</option>
            {years.map((y) => (
              <option key={y} value={String(y)}>
                {y}
              </option>
            ))}
          </select>
          <BsChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] text-[var(--text)]" />
        </div>
      )}
    </div>
  );
}
