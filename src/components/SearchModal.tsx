import { useEffect, useMemo, useState } from "react";
import type { KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { SEARCH_INDEX } from "../data/search";
import { TAB_ICONS } from "../data/tabs";
import type { SearchEntry } from "../types";

export function SearchModal({
  open,
  onClose,
  onSelect,
}: {
  open: boolean;
  onClose: () => void;
  onSelect: (entry: SearchEntry) => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!q) return [];
    return SEARCH_INDEX.filter((entry) =>
      entry.haystack.toLowerCase().includes(q),
    )
      .sort((a, b) => {
        const aTitle = a.title.toLowerCase().includes(q) ? 0 : 1;
        const bTitle = b.title.toLowerCase().includes(q) ? 0 : 1;
        return aTitle - bTitle;
      })
      .slice(0, 8);
  }, [q]);

  if (!open) return null;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    }
    if (e.key === "Enter" && results[active]) onSelect(results[active]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 bg-black/50"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-label="Search"
        className="w-full max-w-xl rounded-lg border border-[var(--border)] bg-[var(--bg)] shadow-[var(--shadow)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border)]">
          <BsSearch className="shrink-0 text-[var(--text)]" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search work, projects, blogs, reviews, techs…"
            className="w-full bg-transparent text-base md:text-sm text-[var(--text-h)] placeholder:text-[var(--text)] focus:outline-none"
          />
          <kbd className="max-md:hidden shrink-0 text-[10px] text-[var(--text)] border border-[var(--border)] rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            q
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
          aria-hidden={!q}
        >
          <div className="overflow-hidden min-h-0">
            <ul className="max-h-80 overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-4 py-6 text-sm text-[var(--text)] text-center">
                  No results for “{query}”
                </li>
              )}
              {results.map((entry, i) => (
                <li key={`${entry.tab}-${entry.title}`}>
                  <button
                    onClick={() => onSelect(entry)}
                    onMouseEnter={() => setActive(i)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left cursor-pointer ${
                      i === active ? "bg-[var(--social-bg)]" : ""
                    }`}
                  >
                    <span className="shrink-0 text-[var(--text)]">
                      {TAB_ICONS[entry.tab]}
                    </span>
                    <span className="flex flex-col min-w-0">
                      <span className="text-sm text-[var(--text-h)] truncate">
                        {entry.title}
                      </span>
                      <span className="text-xs text-[var(--text)] truncate">
                        {entry.detail}
                      </span>
                    </span>
                    <span className="ml-auto shrink-0 text-[10px] text-[var(--text)] border border-[var(--border)] rounded px-1.5 py-0.5">
                      {entry.tab}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
