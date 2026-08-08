import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ShowMoreButton } from "../components/ui/ShowMoreButton";
import { REVIEWS } from "../data/reviews";
import { slugify } from "../lib/slugify";
import { focusAnchorEl } from "../lib/dom";
import type { FocusTarget, Review } from "../types";

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      id={`review-${slugify(review.author)}`}
      className="flex flex-col gap-5 rounded-lg border border-[var(--border)] bg-[var(--btn-bg)] p-5 scroll-mt-24 md:h-48 overflow-hidden"
    >
      <span className="text-sm leading-relaxed line-clamp-3">
        {review.quote}
      </span>
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
  const [showMore, setShowMore] = useState(false);
  const [year, setYear] = useState("all");
  const years = [...new Set(REVIEWS.map((r) => r.year))].sort((a, b) => b - a);
  const filtered =
    year === "all" ? REVIEWS : REVIEWS.filter((r) => r.year === Number(year));
  const visible = filtered.slice(0, 4);
  const more = filtered.slice(4);

  useEffect(() => {
    if (!focus || !focus.id.startsWith("review-")) return;
    setYear("all");
    const idx = REVIEWS.findIndex(
      (r) => `review-${slugify(r.author)}` === focus.id,
    );
    const needsExpand = idx >= 4;
    if (needsExpand) setShowMore(true);
    focusAnchorEl(focus.id, needsExpand ? 560 : 80);
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
        {visible.map((review) => (
          <ReviewCard key={review.author} review={review} />
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {more.map((review) => (
                  <ReviewCard key={review.author} review={review} />
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
