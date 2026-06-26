import React, { useState } from "react";
import { FaLinkedinIn, FaWebflow } from "react-icons/fa6";
import "./App.css";
import { useTheme } from "./hooks/useTheme";
import {
  BsBraces,
  BsBriefcase,
  BsChevronDown,
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
import { FaTripadvisor, FaJava, FaAws } from "react-icons/fa";
import {
  SiOpenai,
  SiClaude,
  SiGooglegemini,
  SiLangchain,
  SiHuggingface,
  SiOllama,
  SiN8N,
  SiMake,
  SiZapier,
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiAngular,
  SiNextdotjs,
  SiNuxt,
  SiStorybook,
  SiPug,
  SiCypress,
  SiJest,
  SiIonic,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiElixir,
  SiPhoenixframework,
  SiSpringboot,
  SiPython,
  SiDjango,
  SiFastapi,
  SiRuby,
  SiRubyonrails,
  SiRust,
  SiCplusplus,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSqlite,
  SiPostgresql,
  SiMariadb,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiAnsible,
  SiVercel,
  SiRailway,
  SiGooglecloud,
  SiDigitalocean,
} from "react-icons/si";
import { TbBrandCSharp, TbApi, TbDatabase } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { GrOracle } from "react-icons/gr";

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

function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="flex flex-col items-start gap-5">
        <span className="text-xl">Who am I</span>
        <span className="text-sm leading-relaxed">
          I am an AI Ops Lead at Bolt Farm Treehouse where I simplify technology
          systems. Using a mix of coding and AI automation, I turn disorganized
          tools into a smooth, high-performing setup. Whether I'm moving data or
          eliminating repetitive tasks, my goal is to make sure our technology
          just works behind the scenes so the business can grow faster and
          smarter.
        </span>
      </div>
      <div className="flex flex-col items-start gap-5 mt-5">
        <span className="text-xl">How I think</span>
        <span className="text-sm leading-relaxed">
          My brain is hardwired to solve problems. Whether I'm eliminating
          friction, rebuilding imperfect systems, or inventing missing tools, it
          isn't just work ethic—it's a compulsion.
        </span>
      </div>
      <div className="flex flex-col items-start gap-5 mt-5">
        <span className="text-xl">What I'm looking for</span>
        <span className="text-sm leading-relaxed">
          Seeking Senior level AI leadership or the right co-founder to launch a
          new venture. Focused on building high-impact tech with serious teams
          who embrace the chaos of scaling. Deep expertise in agent
          infrastructure, memory systems, and distributed AI, with strong
          opinions on critical build-vs-buy decisions.
        </span>
      </div>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          showMore
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
        aria-hidden={!showMore}
      >
        <div className="overflow-hidden min-h-0">
          <div className="flex flex-col gap-5 pt-5">
            {/* TODO: add new paragraphs here — follow the same block shape:
            <div className="flex flex-col items-start gap-5">
              <span className="text-2xl font-bold font-[Cormorant_Garamond]">
                Heading
              </span>
              <span className="text-sm leading-relaxed">Paragraph…</span>
            </div> */}
            <div className="flex flex-col items-start gap-5">
              <span className="text-2xl font-bold font-[Cormorant_Garamond]">
                More about me
              </span>
              <span className="text-sm leading-relaxed">
                New paragraphs go here.
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowMore((v) => !v)}
        aria-expanded={showMore}
        className="flex items-center gap-1.5 mx-auto mt-13 mb-7 text-xs text-[var(--text)] hover:text-[var(--text-h)] transition-colors cursor-pointer"
      >
        <span className="mt-[1px]">{showMore ? "Show less" : "Show more"}</span>
        <BsChevronDown
          className={`transition-transform duration-300 ${
            showMore ? "rotate-180" : ""
          }`}
        />
      </button>
    </>
  );
}

type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  tech: Tech[];
};

const WORK: Job[] = [
  {
    company: "Flexicon Solutions Inc.",
    role: "Mid Level Software Engineer",
    period: "Jul 2024 – Oct 2025 · 1 yr and 4 mos",
    location: "Makati City · NCR · Philippines",
    points: [
      "Developed PAGCOR-authorized interactive gaming platforms using Vue.js, Nuxt.js, Storybook.js, Pug.js, Cypress, and Jest.",
      "Chosen as one of the key engineers to collaborate with international developers on building back-office systems (sensitive data) for online gaming platforms.",
      "Led agile sprint cycles to deliver responsive, high-performance interfaces for back-office systems, ensuring alignment with technical standards and business goals.",
    ],
    tech: [
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "Nuxt.js", icon: <SiNuxt /> },
      { name: "Storybook", icon: <SiStorybook /> },
      { name: "Pug.js", icon: <SiPug /> },
      { name: "Cypress", icon: <SiCypress /> },
      { name: "Jest", icon: <SiJest /> },
    ],
  },
];

function WorkExperience() {
  return (
    <div>
      <div className="flex flex-col gap-1.5 mb-10">
        <h3 className="text-xl text-[var(--text-h)]">My Career</h3>
        <span className="text-sm text-[var(--text)] leading-relaxed">
          A look at where I've built systems, shipped features, and grown as an
          engineer.
        </span>
      </div>
      <div className="flex flex-col gap-12">
        {WORK.map((job) => (
          <div
            key={job.company}
            className="flex flex-col items-start gap-1 text-[var(--btn-text)]"
          >
            <span className="text-xl font-bold text-[var(--text-h)] leading-tight">
              {job.company}
            </span>
            <span className="text-sm font-semibold text-[var(--text-h)]">
              {job.role}
            </span>
            <div className="flex flex-wrap items-center gap-x-2 text-xs text-[var(--text)] mt-0.5">
              <span>{job.period}</span>
              <span className="opacity-40">•</span>
              <span>{job.location}</span>
            </div>
            <ul className="flex flex-col gap-2 mt-4 list-disc pl-5 marker:text-[var(--text)]">
              {job.points.map((point) => (
                <li key={point} className="text-sm leading-relaxed pl-1">
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-2 mt-5">
              {job.tech.map((t) => (
                <div
                  key={t.name}
                  className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs rounded"
                >
                  <span className="flex items-center text-[15px] text-[var(--btn-text)]">
                    {t.icon}
                  </span>
                  <span className="mt-[1px]">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type Tech = { name: string; icon: React.ReactNode };

const TECH_STACK: {
  category: string;
  items: Tech[];
  collapsible?: boolean;
}[] = [
  {
    category: "AI & Automation",
    items: [
      { name: "OpenAI", icon: <SiOpenai /> },
      { name: "Claude", icon: <SiClaude /> },
      { name: "Gemini", icon: <SiGooglegemini /> },
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "HuggingFace", icon: <SiHuggingface /> },
      { name: "Ollama", icon: <SiOllama /> },
      { name: "n8n", icon: <SiN8N /> },
      { name: "Make", icon: <SiMake /> },
      { name: "Zapier", icon: <SiZapier /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "ReactJS", icon: <SiReact /> },
      { name: "ReactNative", icon: <SiReact /> },
      { name: "VueJS", icon: <SiVuedotjs /> },
      { name: "Svelte", icon: <SiSvelte /> },
      { name: "AngularJS", icon: <SiAngular /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "NuxtJS", icon: <SiNuxt /> },
      { name: "Ionic", icon: <SiIonic /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "NodeJS", icon: <SiNodedotjs /> },
      { name: "ExpressJS", icon: <SiExpress /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SpringBoot", icon: <SiSpringboot /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Ruby", icon: <SiRuby /> },
      { name: "RoR", icon: <SiRubyonrails /> },
      { name: "Rust", icon: <SiRust /> },
      { name: "C#", icon: <TbBrandCSharp /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "GRPC", icon: <TbApi /> },
      { name: "Elixir", icon: <SiElixir /> },
      { name: "Phoenix", icon: <SiPhoenixframework /> },
    ],
  },
  {
    category: "Database",
    collapsible: true,
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "MSSQL", icon: <DiMsqlServer /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MariaDB", icon: <SiMariadb /> },
      { name: "DynamoDB", icon: <TbDatabase /> },
    ],
  },
  {
    category: "DevOps & Cloud",
    collapsible: true,
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Bitbucket", icon: <SiBitbucket /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Railway", icon: <SiRailway /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Azure", icon: <VscAzure /> },
      { name: "GCP", icon: <SiGooglecloud /> },
      { name: "OCI", icon: <GrOracle /> },
      { name: "DigitalOcean", icon: <SiDigitalocean /> },
    ],
  },
];

function TechGroup({ group }: { group: (typeof TECH_STACK)[number] }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl text-[var(--text-h)] mb-1">{group.category}</h3>
      <div className="flex flex-wrap items-center gap-2">
        {group.items.map((tech) => (
          <div
            key={`${group.category}-${tech.name}`}
            className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs rounded"
          >
            <span className="flex items-center text-[15px] text-[var(--btn-text)]">
              {tech.icon}
            </span>
            <span className="mt-[1px]">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechStack() {
  const [showMore, setShowMore] = useState(false);
  const visible = TECH_STACK.filter((g) => !g.collapsible);
  const collapsible = TECH_STACK.filter((g) => g.collapsible);

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-1.5 mb-3">
        <h3 className="text-xl text-[var(--text-h)]">My Stack</h3>
        <span className="text-sm text-[var(--text)] leading-relaxed">
          The tools, frameworks, and platforms I build and automate with.
        </span>
      </div>

      {visible.map((group) => (
        <TechGroup key={group.category} group={group} />
      ))}

      <button
        onClick={() => setShowMore((v) => !v)}
        aria-expanded={showMore}
        className="flex items-center gap-1.5 self-center text-xs text-[var(--text)] hover:text-[var(--text-h)] transition-colors cursor-pointer"
      >
        <span className="mt-[1px]">{showMore ? "Show less" : "Show more"}</span>
        <BsChevronDown
          className={`transition-transform duration-300 ${
            showMore ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          showMore
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
        aria-hidden={!showMore}
      >
        <div className="overflow-hidden min-h-0">
          <div className="flex flex-col gap-7">
            {collapsible.map((group) => (
              <TechGroup key={group.category} group={group} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const TAGLINE = [
  "BPI",
  "AIA",
  "GrowthOps",
  "Asia Pacific Digital",
  "GrowthOps Asia",
  "Flexicon Solutions Inc.",
  "Bolt Farm Treehouse",
];

function TaglineMarquee() {
  return (
    <div className="marquee mt-10 mb-8 w-full text-[var(--text-h)]">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex items-center"
            aria-hidden={group === 1}
          >
            {TAGLINE.map((phrase) => (
              <span key={phrase} className="flex items-center">
                <span className="px-6 text-sm">{phrase}</span>
                <span className="h-1 w-1 rounded-full bg-current opacity-50" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
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
            AI Ops Lead @ Bolt Farm Treehouse
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
          {activeTab === "Me" && <AboutMe />}
          {activeTab === "Techs" && <TechStack />}
          {activeTab === "Work" && <WorkExperience />}
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
        <TaglineMarquee />
      </section>
      <div
        className={`max-w-3xl w-full grid transition-all duration-500 ease-in-out ${
          showButtons
            ? "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
            : "grid-rows-[1fr] opacity-100 mb-10 mt-2"
        }`}
        aria-hidden={showButtons}
      >
        <div className="overflow-hidden min-h-0">
          <div className="text-[var(--btn-text)]">
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
      <footer className="w-full flex justify-center items-center relative border-t border-[var(--border)]">
        <div className="w-full max-w-3xl flex justify-between items-center gap-4 my-9">
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
              <div className="text-sm text-[var(--text)]">
                Available for Work
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
