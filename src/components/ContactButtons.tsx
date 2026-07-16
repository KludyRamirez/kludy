import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  BsChevronDown,
  BsChevronRight,
  BsEnvelope,
  BsGithub,
  BsTelephone,
} from "react-icons/bs";
import { BOOKING } from "../data/booking";

function ScheduleCallButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2"
      >
        <BsTelephone />
        <span className="ml-0.5">Schedule a Call</span>
        <BsChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full mt-2 z-50 w-52 flex flex-col rounded-lg border border-[var(--border)] bg-[var(--bg)] overflow-hidden shadow-[var(--shadow)]"
        >
          {BOOKING.map((option) => (
            <a
              key={option.label}
              role="menuitem"
              href={option.url}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex flex-col gap-0.5 px-4 py-3 hover:bg-[var(--btn-bg)] transition-colors"
            >
              <span className="text-xs text-[var(--text-h)]">
                {option.label}
              </span>
              <span className="text-xs text-[var(--text)]">
                {option.detail}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function ContactButtons() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ScheduleCallButton />
      <a
        href="https://www.linkedin.com/in/kludyramirez/"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#0a66c2] border border-[#0a66c2] text-xs text-white cursor-pointer rounded max-md:py-2"
      >
        <FaLinkedinIn className="text-[13px]" />
        <span className="ml-0.5">Visit my LinkedIn</span>
        <BsChevronRight />
      </a>
      <a
        href="https://github.com/KludyRamirez"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#161B22] border border-[#161B22] text-xs text-white cursor-pointer rounded max-md:py-2"
      >
        <BsGithub />
        <span className="ml-0.5">Visit my GitHub</span>
        <BsChevronRight />
      </a>
      <a
        href="mailto:kludyramirez.pro@gmail.com"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2"
      >
        <BsEnvelope />
        <span className="ml-0.5">Email me</span>
        <BsChevronRight />
      </a>
    </div>
  );
}
