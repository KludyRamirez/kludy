import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { slugify } from "../lib/slugify";
import type { BlogPost } from "../types";

export function BlogTile({
  post,
  showImage = true,
}: {
  post: BlogPost;
  showImage?: boolean;
}) {
  return (
    <Link
      to={`/blog/${slugify(post.title)}`}
      className="group flex flex-col rounded-lg border border-[var(--border)] bg-[var(--btn-bg)] overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-1"
    >
      {showImage && (
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full aspect-video object-cover border-b border-[var(--border)]"
        />
      )}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex justify-between items-start">
          <div className="flex flex-wrap items-center gap-x-2 text-xs text-[var(--text)] tracking-wide">
            <span>{post.date}</span>
            <span className="opacity-40">•</span>
            <span>{post.readTime}</span>
          </div>
          <BsArrowUpRight className="text-[var(--text)] group-hover:text-[var(--text-h)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </div>
        <span className="text-xl text-[var(--text-h)] leading-tight">
          {post.title}
        </span>
        <span className="text-sm leading-relaxed">{post.excerpt}</span>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          {post.tags.map((tag) => (
            <div
              key={tag}
              className="py-1 px-2.5 bg-[var(--btn-bg)] border border-[var(--border)] text-xs rounded"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
