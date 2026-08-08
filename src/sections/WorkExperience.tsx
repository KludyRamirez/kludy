import { useEffect, useState } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ShowMoreButton } from "../components/ui/ShowMoreButton";
import { WORK, jobYears } from "../data/work";
import { slugify } from "../lib/slugify";
import { focusAnchorEl } from "../lib/dom";
import type { FocusTarget, Job } from "../types";

function JobCard({ job }: { job: Job }) {
  return (
    <div
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
  );
}

export function WorkExperience({ focus }: { focus?: FocusTarget | null }) {
  const [showMore, setShowMore] = useState(false);
  const [year, setYear] = useState("all");
  const years = [...new Set(WORK.flatMap((job) => jobYears(job.period)))].sort(
    (a, b) => b - a,
  );
  const filtered =
    year === "all"
      ? WORK
      : WORK.filter((job) => jobYears(job.period).includes(Number(year)));
  const visible = filtered.slice(0, 3);
  const more = filtered.slice(3);

  useEffect(() => {
    if (!focus || !focus.id.startsWith("work-")) return;
    setYear("all");
    const idx = WORK.findIndex((j) => `work-${slugify(j.company)}` === focus.id);
    const needsExpand = idx >= 3;
    if (needsExpand) setShowMore(true);
    focusAnchorEl(focus.id, needsExpand ? 560 : 80);
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
        {visible.map((job) => (
          <JobCard key={job.company} job={job} />
        ))}
      </div>

      {more.length > 0 && (
        <>
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              showMore
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0 pointer-events-none"
            }`}
            aria-hidden={!showMore}
          >
            <div className="overflow-hidden min-h-0">
              <div className="flex flex-col gap-12 pt-12">
                {more.map((job) => (
                  <JobCard key={job.company} job={job} />
                ))}
              </div>
            </div>
          </div>

          <ShowMoreButton
            expanded={showMore}
            onClick={() => setShowMore((v) => !v)}
            className="mt-10"
          />
        </>
      )}
    </div>
  );
}
