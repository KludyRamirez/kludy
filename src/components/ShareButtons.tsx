import { FaLinkedinIn } from "react-icons/fa6";
import { BsChevronRight, BsFacebook, BsTwitterX } from "react-icons/bs";

export function ShareButtons({ title, path }: { title: string; path: string }) {
  const shareUrl = `${window.location.origin}${path}`;
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#0a66c2] border border-[#0a66c2] text-xs text-white cursor-pointer rounded max-md:py-2"
      >
        <FaLinkedinIn className="text-[13px]" />
        <span className="ml-0.5">Share on LinkedIn</span>
        <BsChevronRight />
      </a>
      <a
        href={`https://x.com/intent/post?url=${encodedUrl}&text=${encodeURIComponent(
          title,
        )}`}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#161B22] border border-[#161B22] text-xs text-white cursor-pointer rounded max-md:py-2"
      >
        <BsTwitterX />
        <span className="ml-0.5">Share on X</span>
        <BsChevronRight />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#1877F2] border border-[#1877F2] text-xs text-white cursor-pointer rounded max-md:py-2"
      >
        <BsFacebook />
        <span className="ml-0.5">Share on Facebook</span>
        <BsChevronRight />
      </a>
    </div>
  );
}
