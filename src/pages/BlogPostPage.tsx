import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Footer } from "../components/Footer";
import { ShareButtons } from "../components/ShareButtons";
import { BLOG_POSTS } from "../data/blog";
import { slugify } from "../lib/slugify";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => slugify(p.title) === slug);

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

        {post ? (
          <>
            <div className="flex flex-wrap items-center gap-x-2 text-xs text-[var(--text)] tracking-wide mt-10">
              <span>{post.date}</span>
              <span className="opacity-40">•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-2xl font-bold text-[var(--text-h)] leading-tight mt-3">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {post.tags.map((tag) => (
                <div
                  key={tag}
                  className="py-1 px-2.5 bg-[var(--btn-bg)] border border-[var(--border)] text-xs rounded"
                >
                  {tag}
                </div>
              ))}
            </div>
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-video object-cover rounded-lg border border-[var(--border)] mt-8"
            />
            <div className="flex flex-col gap-5 mt-8">
              {post.content.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="w-full flex flex-col gap-4 mt-12 pt-8 border-t border-[var(--border)]">
              <span className="text-xs text-[var(--text)] tracking-wide">
                Share this post
              </span>
              <ShareButtons
                title={post.title}
                path={`/blog/${slugify(post.title)}`}
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-start gap-3 mt-10">
            <h1 className="text-2xl font-bold text-[var(--text-h)] leading-tight">
              Post not found
            </h1>
            <span className="text-sm leading-relaxed">
              This post doesn't exist or may have been moved.
            </span>
          </div>
        )}
      </article>
      <Footer />
    </main>
  );
}
