import { FaWebflow } from "react-icons/fa6";
import { BsChevronRight, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";

export function SocialButtons() {
  return (
    <div className="w-full flex flex-wrap justify-start md:justify-end items-center gap-2">
      <a
        href="https://www.facebook.com/boltfarmtreehouse"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-[7px] px-3 bg-[#1877F2] text-xs text-white cursor-pointer rounded max-md:py-2"
      >
        <BsFacebook />
        <span className="ml-0.5">Visit Facebook</span>
        <BsChevronRight />
      </a>
      <a
        href="https://www.boltfarmtreehouse.com"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2"
      >
        <FaWebflow />
        <span className="ml-0.5">boltfarmtreehouse</span>
        <BsChevronRight />
      </a>
      <a
        href="https://www.tripadvisor.com/Hotel_Review-g55418-d24085936-Reviews-Bolt_Farm_Treehouse-Whitwell_Tennessee.html"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-[7px] px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2"
      >
        <FaTripadvisor className="text-[13px]" />
        <span className="ml-0.5">Visit TripAdvisor</span>
        <BsChevronRight />
      </a>
      <a
        href="https://www.instagram.com/boltfarmtreehouse/"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-[7px] px-3 bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] text-xs text-white cursor-pointer rounded max-md:py-2"
      >
        <BsInstagram />
        <span className="ml-0.5">Visit Instagram</span>
        <BsChevronRight />
      </a>
    </div>
  );
}
