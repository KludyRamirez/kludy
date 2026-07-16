import { useEffect, useState } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { WORK, jobYears } from "../data/work";
import { slugify } from "../lib/slugify";
import { focusAnchorEl } from "../lib/dom";
import type { FocusTarget } from "../types";

export function WorkExperience({ focus }: { focus?: FocusTarget | null }) {
  const [year, setYear] = useState("all");
  const years = [...new Set(WORK.flatMap((job) => jobYears(job.period)))].sort(
    (a, b) => b - a,
  );
  const filtered =
    year === "all"
      ? WORK
      : WORK.filter((job) => jobYears(job.period).includes(Number(year)));

  useEffect(() => {
    if (!focus || !focus.id.startsWith("work-")) return;
    setYear("all");
    focusAnchorEl(focus.id, 80);
  }, [focus]);

  return (
    <div>
      <SectionHeader
        title="My Career"
        subtitle="A look at where I've built systems, shipped features, and grown as an engineer."
        years={years}
        year={year}
        onYearChange={setYear}
      />
      <div className="flex flex-col gap-12">
        {filtered.map((job) => (
          <div
            key={job.company}
            id={`work-${slugify(job.company)}`}
            className="flex flex-col items-start gap-1 text-[var(--btn-text)] scroll-mt-24"
          >
            <span className="text-xl text-[var(--text-h)] leading-tight">
              {job.company}
            </span>
            <span className="text-sm text-[var(--text-h)]">{job.role}</span>
            <div className="flex flex-wrap items-center gap-x-2 text-xs text-[var(--text)] mt-0.5 tracking-wide">
              <span>{job.period}</span>
              <span className="opacity-40">•</span>
              <span>{job.location}</span>
            </div>
            <ul className="flex flex-col gap-2 mt-4 list-disc pl-5 marker:text-[var(--text)]">
              {job.points.map((point) => (
                <li key={point} className="text-sm leading-relaxed pl-1">
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-2 mt-5">
              {job.tech.map((t) => (
                <div
                  key={t.name}
                  className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs rounded"
                >
                  <span className="flex items-center text-[15px] text-[var(--btn-text)]">
                    {t.icon}
                  </span>
                  <span className="mt-[1px]">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
