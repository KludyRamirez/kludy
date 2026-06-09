import React, { useState } from "react";
import { FaLinkedinIn, FaWebflow } from "react-icons/fa6";
import "./App.css";
import { useTheme } from "./hooks/useTheme";
import {
  BsBraces,
  BsBriefcase,
  BsChevronRight,
  BsEnvelope,
  BsFacebook,
  BsFolder2Open,
  BsGithub,
  BsInstagram,
  BsJournal,
  BsPerson,
  BsStar,
  BsTelephone,
} from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";

type Tab = "Me" | "Techs" | "Work" | "Projects" | "Blogs" | "Reviews";

const TABS: Tab[] = ["Me", "Techs", "Work", "Projects", "Blogs", "Reviews"];

const TAB_ICONS: Record<Tab, React.ReactNode> = {
  Me: <BsPerson />,
  Techs: <BsBraces />,
  Work: <BsBriefcase />,
  Projects: <BsFolder2Open />,
  Blogs: <BsJournal />,
  Reviews: <BsStar />,
};

function ContactButtons() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded">
        <BsTelephone />
        <span className="ml-0.5">Schedule a Call</span>
        <BsChevronRight />
      </div>
      <div className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#0a66c2] border border-[#0a66c2] text-xs text-white cursor-pointer rounded">
        <FaLinkedinIn className="text-[13px]" />
        <span className="ml-0.5">Visit my LinkedIn</span>
        <BsChevronRight />
      </div>
      <div className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#161B22] border border-[#161B22] text-xs text-white cursor-pointer rounded">
        <BsGithub />
        <span className="ml-0.5">Visit my GitHub</span>
        <BsChevronRight />
      </div>
      <div className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded">
        <BsEnvelope />
        <span className="ml-0.5">Email me</span>
        <BsChevronRight />
      </div>
    </div>
  );
}

function SocialButtons() {
  return (
    <div className="w-full flex flex-wrap justify-end items-center gap-2">
      <div className="flex justify-center items-center gap-2 py-[7px] px-3 bg-[#1877F2] text-xs text-white cursor-pointer rounded">
        <BsFacebook />
        <span className="ml-0.5">Visit Facebook</span>
        <BsChevronRight />
      </div>
      <div className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded">
        <FaWebflow />
        <span className="ml-0.5">boltfarmtreehouse</span>
        <BsChevronRight />
      </div>
      <div className="flex justify-center items-center gap-2 py-[7px] px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded">
        <FaTripadvisor className="text-[13px]" />
        <span className="ml-0.5">Visit TripAdvisor</span>
        <BsChevronRight />
      </div>
      <div className="flex justify-center items-center gap-2 py-[7px] px-3 bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] text-xs text-white cursor-pointer rounded">
        <BsInstagram />
        <span className="ml-0.5">Visit Instagram</span>
        <BsChevronRight />
      </div>
    </div>
  );
}

function FaceDoodle() {
  return (
    <svg
      className="face-svg"
      width="104"
      height="104"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* head */}
      <circle cx="50" cy="50" r="32" />
      {/* eyebrows */}
      <path d="M33,38 q6,-4 12,-1" />
      <path d="M55,37 q6,-3 12,1" />
      {/* eyes (blinking) */}
      <circle
        className="face-eye"
        cx="39"
        cy="47"
        r="3.2"
        fill="currentColor"
        stroke="none"
      />
      <circle
        className="face-eye"
        cx="61"
        cy="47"
        r="3.2"
        fill="currentColor"
        stroke="none"
      />
      {/* cheeks (doodle blush) */}
      <path d="M30,58 q2,3 4,0" opacity="0.55" />
      <path d="M66,58 q2,3 4,0" opacity="0.55" />
      {/* smile */}
      <path
        className="face-mouth"
        d="M38,60 Q50,73 62,60"
        vectorEffect="non-scaling-stroke"
      />
      {/* doodle sparkles */}
      <g transform="translate(89,15)">
        <g className="doodle-twinkle" style={{ animationDelay: "0s" }}>
          <path
            d="M0,-5 C0.8,-1.4 1.4,-0.8 5,0 C1.4,0.8 0.8,1.4 0,5 C-0.8,1.4 -1.4,0.8 -5,0 C-1.4,-0.8 -0.8,-1.4 0,-5 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </g>
      <g transform="translate(13,27)">
        <g className="doodle-twinkle" style={{ animationDelay: "-1.2s" }}>
          <path
            d="M0,-3.5 C0.6,-1 1,-0.6 3.5,0 C1,0.6 0.6,1 0,3.5 C-0.6,1 -1,0.6 -3.5,0 C-1,-0.6 -0.6,-1 0,-3.5 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </g>
      <g transform="translate(84,84)">
        <g className="doodle-twinkle" style={{ animationDelay: "-0.6s" }}>
          <path
            d="M0,-3 C0.5,-0.9 0.9,-0.5 3,0 C0.9,0.5 0.5,0.9 0,3 C-0.5,0.9 -0.9,0.5 -3,0 C-0.9,-0.5 -0.5,-0.9 0,-3 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </g>
      {/* doodle squiggle */}
      <path d="M34,95 q4,-5 8,0 t8,0 t8,0" opacity="0.6" />
    </svg>
  );
}

function LabDoodle() {
  return (
    <svg
      className="lab-svg"
      width="104"
      height="104"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* liquid */}
      <path
        d="M35,58 H65 L76,80 Q76,84 72,84 H28 Q24,84 24,80 Z"
        fill="currentColor"
        stroke="none"
        opacity="0.28"
      />
      {/* flask outline */}
      <path d="M44,18 V40 L24,80 Q24,84 28,84 H72 Q76,84 76,80 L56,40 V18" />
      {/* bottle lip */}
      <path d="M41,18 H59" />
      {/* liquid surface */}
      <path d="M35,58 H65" />
      {/* rising bubbles */}
      <circle
        className="lab-bubble"
        cx="45"
        cy="74"
        r="1.8"
        fill="currentColor"
        stroke="none"
      />
      <circle
        className="lab-bubble"
        style={{ animationDelay: "-0.8s" }}
        cx="54"
        cy="72"
        r="2.2"
        fill="currentColor"
        stroke="none"
      />
      <circle
        className="lab-bubble"
        style={{ animationDelay: "-1.5s" }}
        cx="49"
        cy="77"
        r="1.4"
        fill="currentColor"
        stroke="none"
      />
      <circle
        className="lab-bubble"
        style={{ animationDelay: "-2.1s" }}
        cx="58"
        cy="74"
        r="1.7"
        fill="currentColor"
        stroke="none"
      />
      {/* doodle sparkles */}
      <g transform="translate(72,15)">
        <g className="doodle-twinkle" style={{ animationDelay: "0s" }}>
          <path
            d="M0,-4 C0.6,-1.1 1.1,-0.6 4,0 C1.1,0.6 0.6,1.1 0,4 C-0.6,1.1 -1.1,0.6 -4,0 C-1.1,-0.6 -0.6,-1.1 0,-4 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </g>
      <g transform="translate(26,24)">
        <g className="doodle-twinkle" style={{ animationDelay: "-1.1s" }}>
          <path
            d="M0,-3 C0.5,-0.9 0.9,-0.5 3,0 C0.9,0.5 0.5,0.9 0,3 C-0.5,0.9 -0.9,0.5 -3,0 C-0.9,-0.5 -0.5,-0.9 0,-3 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </g>
      {/* doodle squiggle */}
      <path d="M34,95 q4,-5 8,0 t8,0 t8,0" opacity="0.6" />
    </svg>
  );
}

function gearTeeth(cx: number, cy: number, rim: number, count: number) {
  return Array.from({ length: count }).map((_, i) => (
    <rect
      key={i}
      x={cx - 2}
      y={cy - rim - 5}
      width="4"
      height="6"
      rx="1"
      fill="currentColor"
      stroke="none"
      transform={`rotate(${(360 / count) * i} ${cx} ${cy})`}
    />
  ));
}

function WorkDoodle() {
  return (
    <svg
      className="work-svg"
      width="104"
      height="104"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* big gear (clockwise) */}
      <g className="work-gear">
        {gearTeeth(40, 55, 15, 8)}
        <circle cx="40" cy="55" r="15" />
        <circle cx="40" cy="55" r="5" fill="currentColor" stroke="none" />
      </g>
      {/* small gear (counter-clockwise) */}
      <g className="work-gear-rev">
        {gearTeeth(67, 37, 10, 7)}
        <circle cx="67" cy="37" r="10" />
        <circle cx="67" cy="37" r="3.5" fill="currentColor" stroke="none" />
      </g>
      {/* doodle sparkles */}
      <g transform="translate(86,74)">
        <g className="doodle-twinkle" style={{ animationDelay: "0s" }}>
          <path
            d="M0,-4 C0.6,-1.1 1.1,-0.6 4,0 C1.1,0.6 0.6,1.1 0,4 C-0.6,1.1 -1.1,0.6 -4,0 C-1.1,-0.6 -0.6,-1.1 0,-4 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </g>
      <g transform="translate(14,22)">
        <g className="doodle-twinkle" style={{ animationDelay: "-1s" }}>
          <path
            d="M0,-3 C0.5,-0.9 0.9,-0.5 3,0 C0.9,0.5 0.5,0.9 0,3 C-0.5,0.9 -0.9,0.5 -3,0 C-0.9,-0.5 -0.5,-0.9 0,-3 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </g>
      {/* doodle squiggle */}
      <path d="M34,95 q4,-5 8,0 t8,0 t8,0" opacity="0.6" />
    </svg>
  );
}

function CodeDoodle() {
  return (
    <svg
      className="code-svg"
      width="104"
      height="104"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* editor window */}
      <rect x="16" y="22" width="68" height="50" rx="5" />
      {/* title bar */}
      <path d="M16,33 H84" opacity="0.4" />
      <circle
        cx="23"
        cy="27.5"
        r="1.6"
        fill="currentColor"
        stroke="none"
        opacity="0.7"
      />
      <circle
        cx="29"
        cy="27.5"
        r="1.6"
        fill="currentColor"
        stroke="none"
        opacity="0.7"
      />
      <circle
        cx="35"
        cy="27.5"
        r="1.6"
        fill="currentColor"
        stroke="none"
        opacity="0.7"
      />
      {/* code lines */}
      <rect
        x="24"
        y="40"
        width="40"
        height="3"
        rx="1.5"
        fill="currentColor"
        stroke="none"
        opacity="0.55"
      />
      <rect
        x="30"
        y="47"
        width="28"
        height="3"
        rx="1.5"
        fill="currentColor"
        stroke="none"
        opacity="0.4"
      />
      <rect
        x="30"
        y="54"
        width="34"
        height="3"
        rx="1.5"
        fill="currentColor"
        stroke="none"
        opacity="0.4"
      />
      {/* typewriter line + blinking caret */}
      <rect
        className="code-type"
        x="24"
        y="61"
        width="26"
        height="3"
        rx="1.5"
        fill="currentColor"
        stroke="none"
        opacity="0.6"
      />
      <rect
        className="code-caret"
        x="52"
        y="58.5"
        width="1.8"
        height="8"
        fill="currentColor"
        stroke="none"
      />
      {/* doodle sparkles */}
      <g transform="translate(89,16)">
        <g className="doodle-twinkle" style={{ animationDelay: "0s" }}>
          <path
            d="M0,-4 C0.6,-1.1 1.1,-0.6 4,0 C1.1,0.6 0.6,1.1 0,4 C-0.6,1.1 -1.1,0.6 -4,0 C-1.1,-0.6 -0.6,-1.1 0,-4 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </g>
      <g transform="translate(11,80)">
        <g className="doodle-twinkle" style={{ animationDelay: "-1.1s" }}>
          <path
            d="M0,-3 C0.5,-0.9 0.9,-0.5 3,0 C0.9,0.5 0.5,0.9 0,3 C-0.5,0.9 -0.9,0.5 -3,0 C-0.9,-0.5 -0.5,-0.9 0,-3 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </g>
      {/* doodle squiggle */}
      <path d="M34,95 q4,-5 8,0 t8,0 t8,0" opacity="0.6" />
    </svg>
  );
}

function App() {
  const { theme, toggle } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>("Me");
  const showButtons = activeTab === "Me";

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col items-center justify-start">
      <nav className="w-full max-w-3xl flex justify-center items-center mt-6">
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="flex items-center p-2 m-4 rounded-full text-sm font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] hover:shadow-[var(--shadow)] transition-shadow duration-300 cursor-pointer"
        >
          {theme === "dark" ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </>
          )}
        </button>
      </nav>

      <section
        id="profile"
        className="flex justify-center max-w-3xl w-full text-[var(--btn-text)] mt-2"
      >
        <div className="w-[50%] flex flex-col justify-start items-start gap-1.5">
          <div className="text-2xl font-bold">Kludy S. Ramirez</div>
          <div className="text-sm ml-0.5">
            Tech Ops Engineer @ Bolt Farm Treehouse
          </div>
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              showButtons
                ? "grid-rows-[1fr] opacity-100 mt-1.5"
                : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
            }`}
            aria-hidden={!showButtons}
          >
            <div className="overflow-hidden min-h-0">
              <ContactButtons />
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-start items-end gap-1.5">
          <div className="text-2xl font-bold">Bolt Farm Treehouse</div>
          <div className="text-sm">Whitwell, TN, United States</div>
          <div
            className={`grid transition-all duration-500 ease-in-out w-full ${
              showButtons
                ? "grid-rows-[1fr] opacity-100 mt-1.5"
                : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
            }`}
            aria-hidden={!showButtons}
          >
            <div className="overflow-hidden min-h-0">
              <SocialButtons />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col max-w-3xl w-full text-[var(--btn-text)]">
        <div
          className={`w-full flex justify-start items-center gap-8 transition-all duration-500 ease-in-out ${
            showButtons ? "mt-10" : "mt-6"
          }`}
        >
          {TABS.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer text-sm flex items-center gap-2 transition-colors duration-200 ${
                activeTab === tab
                  ? "text-[var(--text-h)] font-semibold"
                  : "text-[var(--text)] hover:text-[var(--text-h)]"
              }`}
            >
              <span className="mt-[-1px]">{TAB_ICONS[tab]}</span>
              {tab}
            </div>
          ))}
        </div>

        <div className="mt-8">
          {activeTab === "Me" && (
            <>
              <div className="flex flex-col items-start gap-5">
                <span className="text-3xl font-bold font-[Cormorant_Garamond]">
                  I'm Kludy
                </span>
                <span className="text-sm leading-relaxed">
                  As a Tech Ops Engineer at Bolt Farm Treehouse, I simplify
                  messy technology systems. Using a mix of coding and AI
                  automation, I turn disorganized tools into a smooth,
                  high-performing setup. Whether I'm moving data or eliminating
                  repetitive tasks, my goal is to make sure our technology just
                  works behind the scenes so the business can grow faster and
                  smarter.
                </span>
              </div>
              <div className="flex flex-col items-start gap-5 mt-5">
                <span className="text-3xl font-bold font-[Cormorant_Garamond]">
                  How I Think
                </span>
                <span className="text-sm leading-relaxed">
                  My brain is hardwired to solve problems. Whether I'm
                  eliminating friction, rebuilding imperfect systems, or
                  inventing missing tools, it isn't just work ethic—it's a
                  compulsion.
                </span>
              </div>
            </>
          )}
          {activeTab === "Techs" && (
            <div>
              <p className="text-sm">Technologies content goes here.</p>
            </div>
          )}
          {activeTab === "Work" && (
            <div>
              <p className="text-sm">Work experience content goes here.</p>
            </div>
          )}
          {activeTab === "Projects" && (
            <div>
              <p className="text-sm">Projects content goes here.</p>
            </div>
          )}
          {activeTab === "Blogs" && (
            <div>
              <p className="text-sm">Blog posts content goes here.</p>
            </div>
          )}
          {activeTab === "Reviews" && (
            <div>
              <p className="text-sm">Reviews content goes here.</p>
            </div>
          )}
        </div>
      </section>
      <div
        className={`max-w-3xl w-full grid transition-all duration-500 ease-in-out ${
          showButtons
            ? "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
            : "grid-rows-[1fr] opacity-100 mt-12"
        }`}
        aria-hidden={showButtons}
      >
        <div className="overflow-hidden min-h-0">
          <div className="text-[var(--btn-text)]">
            <div className="text-3xl font-bold text-[var(--text-h)] mb-5 font-[Cormorant_Garamond]">
              Contact Me
            </div>
            <div className="flex justify-center">
              <div className="w-[50%] flex flex-col items-start">
                <ContactButtons />
              </div>
              <div className="w-[50%] flex flex-col items-end">
                <SocialButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="max-w-3xl w-full relative">
        {/* <div
          className="absolute w-full flex justify-center items-center pt-18"
          aria-hidden="true"
        >
          <div className="relative h-[104px] w-[104px]">
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                activeTab === "Techs" ||
                activeTab === "Work" ||
                activeTab === "Projects"
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            >
              <FaceDoodle />
            </div>
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                activeTab === "Techs" ? "opacity-100" : "opacity-0"
              }`}
            >
              <LabDoodle />
            </div>
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                activeTab === "Work" ? "opacity-100" : "opacity-0"
              }`}
            >
              <WorkDoodle />
            </div>
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                activeTab === "Projects" ? "opacity-100" : "opacity-0"
              }`}
            >
              <CodeDoodle />
            </div>
          </div>
        </div> */}
        <div className="w-full flex justify-between items-center gap-4 mt-10">
          <div className="flex items-center gap-2 text-sm text-[var(--text)]">
            <span>Kludy Ramirez</span>
            <div className="flex items-center gap-2 ml-2 pl-4 border-l border-[var(--border)]">
              <div className="text-sm text-[var(--text)]">Manila, PH</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
              aria-label="GitHub"
            >
              <BsGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:tech@boltfarmtreehouse.com"
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
              <div className="text-sm text-[var(--text)]">Available</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
