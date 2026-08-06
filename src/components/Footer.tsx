import { FaLinkedinIn } from "react-icons/fa6";
import { BsEnvelope, BsGithub } from "react-icons/bs";
import { ContactButtons } from "./ContactButtons";
import { SocialButtons } from "./SocialButtons";

export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center relative md:border-t border-[var(--border)]">
      <div className="w-full max-w-3xl md:hidden flex flex-col gap-8 my-9 px-5 text-[var(--btn-text)]">
        <div className="flex flex-col items-start gap-1.5">
          <div className="text-2xl font-bold">Kludy S. Ramirez</div>
          <div className="text-sm ml-0.5">
            AI Engineer @ Bolt Farm Treehouse
          </div>
          <div className="mt-1.5 w-full">
            <ContactButtons />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <div className="text-2xl font-bold">Bolt Farm Treehouse</div>
          <div className="text-sm">Whitwell, TN, United States</div>
          <div className="mt-1.5 w-full">
            <SocialButtons />
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl max-md:hidden flex flex-wrap justify-between items-center gap-4 my-9 px-5 md:px-0">
        <div className="flex items-center gap-2 text-sm text-[var(--text)]">
          <span>Kludy Ramirez</span>
          <div className="flex items-center gap-2 ml-2 pl-4 border-l border-[var(--border)]">
            <div className="text-sm text-[var(--text)]">Manila, PH</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/KludyRamirez"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
            aria-label="GitHub"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kludyramirez/"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:kludyramirez.pro@gmail.com"
            className="text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
            aria-label="Email"
          >
            <BsEnvelope />
          </a>
          <div className="flex items-center gap-2 ml-2 pl-4 border-l border-[var(--border)]">
            <div className="relative flex h-2.5 w-2.5">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></div>
              <div className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></div>
            </div>
            <div className="text-sm text-[var(--text)]">Available for Work</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
