import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BsArrowLeft,
  BsArrowUpRight,
  BsChevronRight,
  BsGithub,
} from "react-icons/bs";
import { Footer } from "../components/Footer";
import { ShareButtons } from "../components/ShareButtons";
import { PROJECTS } from "../data/projects";
import { slugify } from "../lib/slugify";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => slugify(p.title) === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col items-center justify-start">
      <article className="flex flex-col items-start max-w-3xl w-full px-5 md:px-0 text-[var(--btn-text)] mt-12 max-md:mt-0 mb-14 flex-1">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-xs text-[var(--text)] hover:text-[var(--text-h)] transition-colors max-md:self-stretch max-md:sticky max-md:top-0 max-md:z-40 max-md:-mx-5 max-md:px-5 max-md:py-3.5 max-md:bg-[var(--bg)]/85 max-md:backdrop-blur-md max-md:border-b max-md:border-[var(--border)]"
        >
          <BsArrowLeft />
          <span className="mt-[1px]">Back to home</span>
        </Link>

        {project ? (
          <>
            <div className="flex flex-wrap items-center gap-x-2 text-xs text-[var(--text)] tracking-wide mt-10">
              <span>Project</span>
              <span className="opacity-40">•</span>
              <span>{project.year}</span>
            </div>
            <h1 className="text-2xl font-bold text-[var(--text-h)] leading-tight mt-3">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-4">
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
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover object-top rounded-lg border border-[var(--border)] mt-8"
            />
            <p className="text-sm leading-relaxed mt-8">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {project.url.startsWith("/") ? (
                <Link
                  to={project.url}
                  className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2 hover:text-[var(--text-h)] transition-colors"
                >
                  <span className="mt-[1px]">Read the story</span>
                  <BsChevronRight />
                </Link>
              ) : (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2 hover:text-[var(--text-h)] transition-colors"
                >
                  <BsArrowUpRight />
                  <span className="mt-[1px]">Visit live site</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2 hover:text-[var(--text-h)] transition-colors"
                >
                  <BsGithub />
                  <span className="mt-[1px]">View on GitHub</span>
                </a>
              )}
            </div>
            <div className="w-full flex flex-col gap-4 mt-12 pt-8 border-t border-[var(--border)]">
              <span className="text-xs text-[var(--text)] tracking-wide">
                Share this project
              </span>
              <ShareButtons
                title={project.title}
                path={`/projects/${slugify(project.title)}`}
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-start gap-3 mt-10">
            <h1 className="text-2xl font-bold text-[var(--text-h)] leading-tight">
              Project not found
            </h1>
            <span className="text-sm leading-relaxed">
              This project doesn't exist or may have been moved.
            </span>
          </div>
        )}
      </article>
      <Footer />
    </main>
  );
}
