import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ShowMoreButton } from "../components/ui/ShowMoreButton";
import { PROJECTS } from "../data/projects";
import { slugify } from "../lib/slugify";
import { focusAnchorEl } from "../lib/dom";
import type { FocusTarget, Project } from "../types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      id={`project-${slugify(project.title)}`}
      className="flex flex-col rounded-lg border border-[var(--border)] bg-[var(--btn-bg)] overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-1 scroll-mt-24"
    >
      <div className="flex flex-col gap-3 p-5">
        <div className="flex justify-between items-start">
          <span className="text-xs text-[var(--text)] tracking-wide">
            {project.year}
          </span>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
              >
                <BsGithub />
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live site`}
              className="text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
            >
              <BsArrowUpRight />
            </a>
          </div>
        </div>
        <Link
          to={`/projects/${slugify(project.title)}`}
          className="text-xl text-[var(--text-h)] leading-tight"
        >
          {project.title}
        </Link>
        <span className="text-sm leading-relaxed">{project.description}</span>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          {project.tech.map((t) => (
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
    </div>
  );
}

export function Projects({ focus }: { focus?: FocusTarget | null }) {
  const [showMore, setShowMore] = useState(false);
  const [year, setYear] = useState("all");
  const years = [...new Set(PROJECTS.map((p) => p.year))].sort((a, b) => b - a);
  const filtered =
    year === "all" ? PROJECTS : PROJECTS.filter((p) => p.year === Number(year));
  const visible = filtered.slice(0, 3);
  const more = filtered.slice(3);

  useEffect(() => {
    if (!focus || !focus.id.startsWith("project-")) return;
    setYear("all");
    const idx = PROJECTS.findIndex(
      (p) => `project-${slugify(p.title)}` === focus.id,
    );
    const needsExpand = idx >= 4;
    if (needsExpand) setShowMore(true);
    focusAnchorEl(focus.id, needsExpand ? 560 : 80);
  }, [focus]);

  return (
    <div>
      <SectionHeader
        title="My Projects"
        subtitle="Things I've designed, built, and shipped, from thesis work to production sites."
        years={years}
        year={year}
        onYearChange={setYear}
      />
      <div className="grid grid-cols-1 gap-4">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
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
              <div className="grid grid-cols-1 gap-4 pt-4">
                {more.map((project) => (
                  <ProjectCard key={project.title} project={project} />
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
