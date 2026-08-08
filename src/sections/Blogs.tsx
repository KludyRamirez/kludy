import { useState } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ShowMoreButton } from "../components/ui/ShowMoreButton";
import { BlogTile } from "../components/BlogTile";
import { BLOG_POSTS } from "../data/blog";
import type { BlogPost } from "../types";

export function Blogs() {
  const [showMore, setShowMore] = useState(false);
  const [year, setYear] = useState("all");
  const postYear = (post: BlogPost) => new Date(post.date).getFullYear();
  const years = [...new Set(BLOG_POSTS.map(postYear))].sort((a, b) => b - a);
  const filtered =
    year === "all"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => postYear(post) === Number(year));
  const visible = filtered.slice(0, 3);
  const more = filtered.slice(3);

  return (
    <div>
      <SectionHeader
        title="My Blogs"
        subtitle="Notes on AI, automation, and building systems that just work."
        years={years}
        year={year}
        onYearChange={setYear}
      />
      <div className="flex flex-col gap-4">
        {visible.map((post) => (
          <BlogTile key={post.title} post={post} showImage={false} />
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
              <div className="flex flex-col gap-4 pt-4">
                {more.map((post) => (
                  <BlogTile key={post.title} post={post} showImage={false} />
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
