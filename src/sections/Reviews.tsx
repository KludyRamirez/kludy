import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SectionHeader } from "../components/ui/SectionHeader";
import { REVIEWS } from "../data/reviews";
import { slugify } from "../lib/slugify";
import { focusAnchorEl } from "../lib/dom";
import type { FocusTarget, Review } from "../types";

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      id={`review-${slugify(review.author)}`}
      className="flex flex-col gap-5 rounded-lg border border-[var(--border)] bg-[var(--btn-bg)] p-5 scroll-mt-24"
    >
      <span className="text-sm leading-relaxed">“{review.quote}”</span>
      <div className="flex items-center gap-3 mt-auto">
        <img
          src={review.photo}
          alt={review.author}
          className="h-9 w-9 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm text-[var(--text-h)]">{review.author}</span>
          <span className="text-xs text-[var(--text)]">
            {review.position} · {review.company} · {review.year}
          </span>
        </div>
        <a
          href={review.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${review.author} on LinkedIn`}
          className="ml-auto text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}

export function Reviews({ focus }: { focus?: FocusTarget | null }) {
  const [year, setYear] = useState("all");
  const years = [...new Set(REVIEWS.map((r) => r.year))].sort((a, b) => b - a);
  const filtered =
    year === "all" ? REVIEWS : REVIEWS.filter((r) => r.year === Number(year));

  useEffect(() => {
    if (!focus || !focus.id.startsWith("review-")) return;
    setYear("all");
    focusAnchorEl(focus.id, 80);
  }, [focus]);

  return (
    <div>
      <SectionHeader
        title="My Reviews"
        subtitle="Kind words from people I've worked with."
        years={years}
        year={year}
        onYearChange={setYear}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((review) => (
          <ReviewCard key={review.author} review={review} />
        ))}
      </div>
    </div>
  );
}
