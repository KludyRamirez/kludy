import { useEffect, useState } from "react";
import { ShowMoreButton } from "../components/ui/ShowMoreButton";
import { TECH_STACK } from "../data/tech-stack";
import type { TechCategory } from "../data/tech-stack";
import { slugify } from "../lib/slugify";
import { focusAnchorEl } from "../lib/dom";
import type { FocusTarget } from "../types";

function TechGroup({ group }: { group: TechCategory }) {
  return (
    <div
      id={`techgroup-${slugify(group.category)}`}
      className="flex flex-col gap-3 scroll-mt-24"
    >
      <h3 className="text-xl text-[var(--text-h)] mb-1">{group.category}</h3>
      <div className="flex flex-wrap items-center gap-2">
        {group.items.map((tech) => (
          <div
            key={`${group.category}-${tech.name}`}
            className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs rounded"
          >
            <span className="flex items-center text-[15px] text-[var(--btn-text)]">
              {tech.icon}
            </span>
            <span className="mt-[1px]">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack({ focus }: { focus?: FocusTarget | null }) {
  const [showMore, setShowMore] = useState(false);
  const visible = TECH_STACK.filter((g) => !g.collapsible);
  const collapsible = TECH_STACK.filter((g) => g.collapsible);

  useEffect(() => {
    if (!focus || !focus.id.startsWith("techgroup-")) return;
    const group = TECH_STACK.find(
      (g) => `techgroup-${slugify(g.category)}` === focus.id,
    );
    const needsExpand = Boolean(group?.collapsible);
    if (needsExpand) setShowMore(true);
    focusAnchorEl(focus.id, needsExpand ? 560 : 80);
  }, [focus]);

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-1.5 mb-3">
        <h3 className="text-xl text-[var(--text-h)]">My Stack</h3>
        <span className="text-sm text-[var(--text)] leading-relaxed">
          The tools, frameworks, and platforms I build and automate with.
        </span>
      </div>

      {visible.map((group) => (
        <TechGroup key={group.category} group={group} />
      ))}

      <ShowMoreButton
        expanded={showMore}
        onClick={() => setShowMore((v) => !v)}
        className="mt-3"
      />

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          showMore
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
        aria-hidden={!showMore}
      >
        <div className="overflow-hidden min-h-0">
          <div className="flex flex-col gap-7">
            {collapsible.map((group) => (
              <TechGroup key={group.category} group={group} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
