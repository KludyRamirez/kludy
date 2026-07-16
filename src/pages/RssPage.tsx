import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsChevronRight } from "react-icons/bs";
import { Footer } from "../components/Footer";
import { BlogTile } from "../components/BlogTile";
import { BLOG_POSTS } from "../data/blog";

export default function RssPage() {
  const [copied, setCopied] = useState(false);
  const feedUrl = `${window.location.origin}/rss.xml`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyFeedUrl = async () => {
    try {
      await navigator.clipboard.writeText(feedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy the feed URL:", feedUrl);
    }
  };

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

        <h1 className="text-2xl font-bold text-[var(--text-h)] leading-tight mt-10">
          RSS Feed
        </h1>
        <span className="text-sm leading-relaxed mt-3">
          Follow my writing in any feed reader. Copy the feed URL below and
          paste it into your reader to subscribe.
        </span>

        <div className="flex flex-wrap items-center gap-2 mt-6">
          <code className="py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs rounded break-all">
            {feedUrl}
          </code>
          <button
            onClick={copyFeedUrl}
            className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2"
          >
            {copied ? "Copied!" : "Copy URL"}
          </button>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2"
          >
            <span>Open raw XML</span>
            <BsChevronRight />
          </a>
        </div>

        <div className="w-full flex flex-col gap-4 mt-12 pt-8 border-t border-[var(--border)]">
          <span className="text-xs text-[var(--text)] tracking-wide">
            Posts in this feed
          </span>
          {BLOG_POSTS.map((post) => (
            <BlogTile key={post.title} post={post} />
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
}
