import { BsChevronDown } from "react-icons/bs";

export function ShowMoreButton({
  expanded,
  onClick,
  className = "",
}: {
  expanded: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-expanded={expanded}
      className={`flex items-center gap-1.5 mx-auto py-1.5 px-4 rounded-full text-xs border border-[var(--border)] bg-[var(--btn-bg)] text-[var(--text)] hover:text-[var(--text-h)] hover:shadow-[var(--shadow)] transition-all duration-300 cursor-pointer ${className}`}
    >
      <span className="mt-[1px]">{expanded ? "Show less" : "Show more"}</span>
      <BsChevronDown
        className={`transition-transform duration-300 ${
          expanded ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}
