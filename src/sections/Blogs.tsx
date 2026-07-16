import { useState } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { BlogTile } from "../components/BlogTile";
import { BLOG_POSTS } from "../data/blog";
import type { BlogPost } from "../types";

export function Blogs() {
  const [year, setYear] = useState("all");
  const postYear = (post: BlogPost) => new Date(post.date).getFullYear();
  const years = [...new Set(BLOG_POSTS.map(postYear))].sort((a, b) => b - a);
  const filtered =
    year === "all"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => postYear(post) === Number(year));

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
        {filtered.map((post) => (
          <BlogTile key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
}
