import React, { useEffect, useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
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
  BsThreeDots,
  BsArrowUpRight,
  BsArrowLeft,
  BsTwitterX,
  BsSearch,
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
  SiStripe,
  SiFlydotio,
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
  SiTailwindcss,
  SiSocketdotio,
  SiMui,
  SiBootstrap,
  SiGoogletagmanager,
  SiMeta,
  SiTypescript,
  SiRedux,
  SiJquery,
  SiAkamai,
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
} from "react-icons/si";
import {
  TbBrandCSharp,
  TbApi,
  TbDatabase,
  TbBrandAdobe,
  TbComponents,
} from "react-icons/tb";
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
      {/* TODO: replace with a real booking link (e.g. Calendly) */}
      <a
        href="mailto:kludyramirez.pro@gmail.com?subject=Schedule%20a%20call"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2"
      >
        <BsTelephone />
        <span className="ml-0.5">Schedule a Call</span>
        <BsChevronRight />
      </a>
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

function SocialButtons() {
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

function SectionHeader({
  title,
  subtitle,
  years,
  year,
  onYearChange,
}: {
  title: string;
  subtitle: string;
  years?: number[];
  year?: string;
  onYearChange?: (year: string) => void;
}) {
  return (
    <div className="flex justify-between items-start gap-4 mb-10">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl text-[var(--text-h)]">{title}</h3>
        <span className="text-sm text-[var(--text)] leading-relaxed">
          {subtitle}
        </span>
      </div>
      {years && years.length > 0 && (
        <div className="relative shrink-0">
          <select
            value={year}
            onChange={(e) => onYearChange?.(e.target.value)}
            aria-label={`Filter ${title} by year`}
            className="appearance-none py-1.5 pl-3 pr-8 bg-[var(--btn-bg)] border border-[var(--border)] text-xs text-[var(--btn-text)] rounded cursor-pointer focus:outline-none"
          >
            <option value="all">All time</option>
            {years.map((y) => (
              <option key={y} value={String(y)}>
                {y}
              </option>
            ))}
          </select>
          <BsChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] text-[var(--text)]" />
        </div>
      )}
    </div>
  );
}

type FocusTarget = { id: string; n: number };

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <circle cx="32" cy="32" r="32" fill="var(--text-h)" />
      <rect x="19" y="17" width="7" height="30" rx="1.5" fill="var(--bg)" />
      <path d="M38 17 L45.5 17 L37.5 31.5 L30 31.5 Z" fill="var(--bg)" />
      <path d="M33 33 L40.5 33 L49 47 L41.5 47 Z" fill="var(--bg)" />
    </svg>
  );
}

function focusAnchorEl(id: string, delay: number) {
  window.setTimeout(() => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("search-flash");
    window.setTimeout(() => el.classList.remove("search-flash"), 1900);
  }, delay);
}

function ShowMoreButton({
  expanded,
  onClick,
  className = "",
}: {
  expanded: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-expanded={expanded}
      className={`flex items-center gap-1.5 mx-auto py-1.5 px-4 rounded-full text-xs border border-[var(--border)] bg-[var(--btn-bg)] text-[var(--text)] hover:text-[var(--text-h)] hover:shadow-[var(--shadow)] transition-all duration-300 cursor-pointer ${className}`}
    >
      <span className="mt-[1px]">{expanded ? "Show less" : "Show more"}</span>
      <BsChevronDown
        className={`transition-transform duration-300 ${
          expanded ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="flex flex-col items-start gap-5">
        <span className="text-xl">Who am I</span>
        <span className="text-sm leading-relaxed">
          I'm an AI Ops Engineer at Bolt Farm Treehouse, where Claude Code is my
          primary engineering tool. I take scattered, disconnected tools such as
          booking, CRM, tracking, guest comms and turn them into one smooth,
          high-performing system: shipping features spec-first, automating data
          flows, and replacing repetitive work with agentic workflows. My goal
          is technology that just works behind the scenes, so the business can
          grow faster and smarter.
        </span>
      </div>
      <div className="flex flex-col items-start gap-5 mt-5">
        <span className="text-xl">How I think</span>
        <span className="text-sm leading-relaxed">
          My brain is hardwired to solve problems. Whether I'm eliminating
          friction, rebuilding imperfect systems, or inventing missing tools, it
          isn't just work ethic, it's a compulsion.
        </span>
      </div>
      <div className="flex flex-col items-start gap-5 mt-5">
        <span className="text-xl">What I'm looking for</span>
        <span className="text-sm leading-relaxed">
          I'm looking for a senior AI leadership role, or the right co-founder
          to start something new. I want to build high-impact products with
          serious teams that welcome the chaos of scaling. I bring deep
          experience in agent infrastructure, memory systems, and distributed
          AI, plus strong opinions on when to build and when to buy.
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
              <span className="text-xl">More about me</span>
              <span className="text-sm leading-relaxed">
                I got my start building a student affairs system in Valenzuela
                and corporate websites for AIA in Makati, then grew from intern
                to a trusted engineer on regulated gaming platforms at Flexicon.
                Working remotely from Manila with a US team has made me
                obsessive about clear communication and letting shipped work
                speak across time zones. Off the clock, I experiment with new AI
                tools and turn small daily annoyances into automations nobody
                asked for.
              </span>
            </div>
          </div>
        </div>
      </div>

      <ShowMoreButton
        expanded={showMore}
        onClick={() => setShowMore((v) => !v)}
        className="mt-10"
      />
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
    company: "Bolt Farm Treehouse",
    role: "AI Ops Engineer",
    period: "Nov 2025 – Present · 9 mos",
    location: "Whitwell · Tennessee · USA (Remote)",
    points: [
      "Major contributor to BoltOS, a custom booking and dynamic pricing platform, with Claude Code as the primary engineering tool — turning specs into production reservation, role-based access, and guest-experience features that support $9.4 million in booking volume and improved guest booking efficiency by 86%.",
      "Architected and deployed a server-side Google Tag Manager infrastructure on Google Cloud Run with Cloudflare DNS, boosting data tracking reliability across GA4 and Meta Pixel by 80% while eliminating client-side data loss.",
      "Engineered agentic QA workflows in Claude Code to diagnose and resolve a critical Facebook Pixel conflict between PixelFlow and HubSpot, eliminating double-counted Purchase events and restoring accurate attribution for $2.5M in annual ad spend.",
      "Audited 272 complex CRM workflows using AI-assisted analysis and rebuilt them into automated deal pipelines integrating Zapier, Aircall, and CallRail — improving data accuracy and accelerating sales velocity by 90%.",    ],
    tech: [
      { name: "Claude Code", icon: <SiClaude /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Python", icon: <SiPython /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "23+ more", icon: <BsThreeDots /> },
    ],
  },
  {
    company: "Flexicon Solutions Inc.",
    role: "Mid Level Software Engineer",
    period: "Jul 2024 – Oct 2025 · 1 yr and 4 mos",
    location: "Makati City · NCR · Philippines",
    points: [
      "Developed PAGCOR-authorized interactive gaming platforms using Vue.js, Nuxt.js, Storybook.js, Pug.js, Cypress, and Jest.",
      "Chosen as one of the key engineers to collaborate with international developers on building back-office systems (sensitive data) for online gaming platforms.",
      "Led agile sprint cycles to deliver responsive, high-performance interfaces for back-office systems, ensuring alignment with technical standards and business goals.",
      "Shipped reliable bug fixes via dedicated branches and managed version control on target branches, including maintaining detailed changelogs to ensure consistent and traceable releases.",
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
  {
    company: "Pamantasan ng Lungsod ng Valenzuela",
    role: "Full Stack Developer",
    period: "Mar 2024 – Oct 2024 · 8 mos",
    location: "Valenzuela City · NCR · Philippines",
    points: [
      "Built a web application that handled over 12,000 student affairs records and processed 9,000+ cases and appeals, featuring secure data delivery to official school email without requiring student account creation.",
      "Implemented user-friendly UI interfaces using React.js and Tailwind CSS, resulting increase in user satisfaction compared to the previous system.",
      "Engineered RESTful APIs, WebSockets, and microservices with Express.js and SocketIO, streamlining backend operations enough to handle a high volume of concurrent users while ensuring 99% system availability.",
    ],
    tech: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Socket.IO", icon: <SiSocketdotio /> },
    ],
  },
  {
    company: "Asia Pacific Digital • GrowthOps",
    role: "Junior Web Developer Intern",
    period: "Jun 2023 – Nov 2023 · 6 mos",
    location: "Makati City · NCR · Philippines",
    points: [
      "Key contributor to the development of the BPI-AIA, AIA Philippines, and AIA Thailand websites.",
      "Developed user-friendly UI interfaces with Material UI and Bootstrap framework, leading to an increase in user engagement based on analytics data.",
      "Integrated and configured Google Tag Manager and Facebook Pixel to track user interactions, enabling advanced analytics and remarketing strategies.",
      "Configured dynamic meta tags in SPAs for accurate SEO and crawler rendering.",
    ],
    tech: [
      { name: "Material UI", icon: <SiMui /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Google Tag Manager", icon: <SiGoogletagmanager /> },
      { name: "Facebook Pixel", icon: <SiMeta /> },
    ],
  },
];

const jobYears = (period: string) => {
  const matched = (period.match(/\d{4}/g) ?? []).map(Number);
  if (matched.length === 0) return [];
  const start = Math.min(...matched);
  const end = /present/i.test(period)
    ? new Date().getFullYear()
    : Math.max(...matched);
  const years: number[] = [];
  for (let y = start; y <= end; y++) years.push(y);
  return years;
};

function WorkExperience({ focus }: { focus?: FocusTarget | null }) {
  const [year, setYear] = useState("all");
  const years = [...new Set(WORK.flatMap((job) => jobYears(job.period)))].sort(
    (a, b) => b - a,
  );
  const filtered =
    year === "all"
      ? WORK
      : WORK.filter((job) => jobYears(job.period).includes(Number(year)));

  useEffect(() => {
    if (!focus || !focus.id.startsWith("work-")) return;
    setYear("all");
    focusAnchorEl(focus.id, 80);
  }, [focus]);

  return (
    <div>
      <SectionHeader
        title="My Career"
        subtitle="A look at where I've built systems, shipped features, and grown as an engineer."
        years={years}
        year={year}
        onYearChange={setYear}
      />
      <div className="flex flex-col gap-12">
        {filtered.map((job) => (
          <div
            key={job.company}
            id={`work-${slugify(job.company)}`}
            className="flex flex-col items-start gap-1 text-[var(--btn-text)] scroll-mt-24"
          >
            <span className="text-xl text-[var(--text-h)] leading-tight">
              {job.company}
            </span>
            <span className="text-sm text-[var(--text-h)]">{job.role}</span>
            <div className="flex flex-wrap items-center gap-x-2 text-xs text-[var(--text)] mt-0.5 tracking-wide">
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

type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  github?: string;
  year: number;
  tech: Tech[];
};

const MERN_TECH: Tech[] = [
  { name: "ReactJS", icon: <SiReact /> },
  { name: "NodeJS", icon: <SiNodedotjs /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "MUI", icon: <SiMui /> },
];

const AIA_TECH: Tech[] = [
  { name: "AEM", icon: <TbBrandAdobe /> },
  { name: "Java", icon: <FaJava /> },
  { name: "jQuery", icon: <SiJquery /> },
  { name: "ReactJS", icon: <SiReact /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Akamai", icon: <SiAkamai /> },
];

const GALATIC_TECH: Tech[] = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss /> },
  { name: "SASS", icon: <SiSass /> },
  { name: "Javascript", icon: <SiJavascript /> },
];

const PROJECTS: Project[] = [
  {
    title: "BoltOS",
    year: 2026,
    description:
      "The AI-native property management system that runs Bolt Farm Treehouse. Reservations, folios, payments, spa scheduling, sales, and dynamic pricing live in one Elixir and Ash app. Every domain is exposed as an MCP server, so staff, cron jobs, and AI agents drive the same audited actions.",
    image:
      "https://h8o9ualn9yttow5c.public.blob.vercel-storage.com/site/olive/couples-firepit-treehouse.jpg",
    url: "/blog/taking-boltos-live-one-ticket-at-a-time",
    tech: [
      { name: "Elixir", icon: <SiElixir /> },
      { name: "Phoenix", icon: <SiPhoenixframework /> },
      { name: "Ash Framework", icon: <TbComponents /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Stripe", icon: <SiStripe /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Fly.io", icon: <SiFlydotio /> },
    ],
  },
  {
    title: "Bolt Farm Treehouse",
    year: 2026,
    description:
      "The public marketing and booking site for Bolt Farm Treehouse, a luxury adults-only treehouse resort in Tennessee. Built on Next.js with direct booking and Stripe checkout, wired to the BoltOS backend over Phoenix channels.",
    image:
      "https://h8o9ualn9yttow5c.public.blob.vercel-storage.com/site/bft/hero-poster.jpg",
    url: "https://www.boltfarmtreehouse.com",
    tech: [
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "ReactJS", icon: <SiReact /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Stripe", icon: <SiStripe /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
  {
    title: "Mathematrix",
    year: 2024,
    description:
      "This web application is a thesis project designed for students with an interest in mathematics, particularly in rational functions.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/mathematrix-proj-photo.png",
    url: "https://mathematrix-client.vercel.app",
    github: "https://github.com/KludyRamirez/mathematrix-client",
    tech: MERN_TECH,
  },
  {
    title: "BPI-AIA",
    year: 2023,
    description:
      "The website covers insurance plans, company info, wellness programs, and support.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/bpi-aia-proj-photo.png",
    url: "https://www.bpi-aia.com.ph",
    tech: AIA_TECH,
  },
  {
    title: "AIA Philippines",
    year: 2023,
    description:
      "The website covers insurance plans, company info, wellness programs, and support.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/aia-ph-proj-photo.png",
    url: "https://www.aia.com.ph",
    tech: AIA_TECH,
  },
  {
    title: "AIA Thailand",
    year: 2023,
    description:
      "The website covers insurance plans, company info, wellness programs, and support.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/aia-ph-proj-photo.png",
    url: "https://www.aia.co.th",
    tech: AIA_TECH,
  },
  {
    title: "PLV OSA Reprimand Hub",
    year: 2024,
    description:
      "A web-based digital hub where the pamantasan can handle student cases, offenses, and violations.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/plv-osa-proj-photo.png",
    url: "https://plv-osa-reprimand-hub.vercel.app",
    github: "https://github.com/KludyRamirez/plv-osa-reprimand-hub",
    tech: MERN_TECH,
  },
  {
    title: "MLAC",
    year: 2024,
    description:
      "A web-based application for MLAC parents to manage their children's weekly therapy attendance.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/mlac-proj-photo.png",
    url: "https://plv-osa-reprimand-hub.vercel.app",
    github: "https://github.com/KludyRamirez/plv-osa-reprimand-hub",
    tech: MERN_TECH,
  },
  {
    title: "APD - GrowthOps Technical Exam",
    year: 2023,
    description:
      "Technical assessment at GrowthOps, building components and retrieving data from a web service.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/apd-growthops-proj-photo.png",
    url: "https://techassessmentgrowthops.web.app",
    github: "https://github.com/KludyRamirez/tech-assessment-growthops-kludy",
    tech: [
      { name: "ReactJS", icon: <SiReact /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Git", icon: <SiGit /> },
      { name: "MUI", icon: <SiMui /> },
    ],
  },
  {
    title: "Galatic Technical Exam 1",
    year: 2024,
    description:
      "This is the first part of the technical exam from Galatic. The purpose of this exam is to assess my front-end development skills and principles.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/galatic-proj-photo.svg",
    url: "https://galatic-first-card-assessment.netlify.app",
    github:
      "https://github.com/KludyRamirez/Galatic-technical-assessment/tree/main/Galatic-first-card",
    tech: GALATIC_TECH,
  },
  {
    title: "Galatic Technical Exam 2",
    year: 2024,
    description:
      "This is the second part of the technical exam from Galatic. The purpose of this exam is to assess my front-end development skills and principles.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/galatic-proj-photo.svg",
    url: "https://galatic-second-card-assessment.netlify.app",
    github:
      "https://github.com/KludyRamirez/Galatic-technical-assessment/tree/main/Galatic-second-card",
    tech: GALATIC_TECH,
  },
  {
    title: "Registration Page Project",
    year: 2024,
    description:
      "A registration page built on Nuxt 2 for Galatic Events Corporation.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/registration-page-proj-photo.png",
    url: "https://vue-nuxt-2-registration-form.vercel.app",
    github: "https://github.com/KludyRamirez/vue-nuxt-2-registration-form",
    tech: [
      { name: "VueJS", icon: <SiVuedotjs /> },
      { name: "NuxtJS", icon: <SiNuxt /> },
      { name: "SASS", icon: <SiSass /> },
      { name: "ElementUI", icon: <TbComponents /> },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      id={`project-${slugify(project.title)}`}
      className="flex flex-col rounded-lg border border-[var(--border)] bg-[var(--btn-bg)] overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-1 scroll-mt-24"
    >
      <Link
        to={`/projects/${slugify(project.title)}`}
        className="block border-b border-[var(--border)]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover object-top"
        />
      </Link>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex justify-between items-start">
          <span className="text-xs text-[var(--text)] tracking-wide">
            {project.year}
          </span>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
              >
                <BsGithub />
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live site`}
              className="text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
            >
              <BsArrowUpRight />
            </a>
          </div>
        </div>
        <Link
          to={`/projects/${slugify(project.title)}`}
          className="text-xl text-[var(--text-h)] leading-tight"
        >
          {project.title}
        </Link>
        <span className="text-sm leading-relaxed">{project.description}</span>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          {project.tech.map((t) => (
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
    </div>
  );
}

function Projects({ focus }: { focus?: FocusTarget | null }) {
  const [showMore, setShowMore] = useState(false);
  const [year, setYear] = useState("all");
  const years = [...new Set(PROJECTS.map((p) => p.year))].sort((a, b) => b - a);
  const filtered =
    year === "all" ? PROJECTS : PROJECTS.filter((p) => p.year === Number(year));
  const visible = filtered.slice(0, 4);
  const more = filtered.slice(4);

  useEffect(() => {
    if (!focus || !focus.id.startsWith("project-")) return;
    setYear("all");
    const idx = PROJECTS.findIndex(
      (p) => `project-${slugify(p.title)}` === focus.id,
    );
    const needsExpand = idx >= 4;
    if (needsExpand) setShowMore(true);
    focusAnchorEl(focus.id, needsExpand ? 560 : 80);
  }, [focus]);

  return (
    <div>
      <SectionHeader
        title="My Projects"
        subtitle="Things I've designed, built, and shipped — from thesis work to production sites."
        years={years}
        year={year}
        onYearChange={setYear}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {more.length > 0 && (
        <>
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              showMore
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0 pointer-events-none"
            }`}
            aria-hidden={!showMore}
          >
            <div className="overflow-hidden min-h-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {more.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </div>

          <ShowMoreButton
            expanded={showMore}
            onClick={() => setShowMore((v) => !v)}
            className="mt-10"
          />
        </>
      )}
    </div>
  );
}

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  content: string[];
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const BLOG_POSTS: BlogPost[] = [
  {
    title: "Before you migrate the software, migrate the knowledge",
    excerpt:
      "We are replacing Akia, the AI messaging tool our guest hosts live in. The hardest ticket was not code. It was writing down how the team actually works.",
    date: "Jul 11, 2026",
    readTime: "3 min read",
    tags: ["Akia", "BoltOS", "Migration"],
    image: "/blog/before-you-migrate-the-software-migrate-the-knowledge.svg",
    content: [
      "A high priority ticket asked for something unusual: screenshots and a functionality brief of the Akia dashboard, an explanation of how our Dreamweaver hosts use it, and notes on how to reproduce the experience in BoltOS. No code. Just knowledge, written down.",
      "Doing it changed how I think about migrations. The dashboard is not the feature. The workflow is. Watching how Dreamweavers triage guest threads at the start of a shift told us exactly what BoltOS had to reproduce, what could be simpler, and what nobody would miss.",
      "The data side ran in parallel. Urgent Akia record pulls kept the dashboard honest while both systems ran side by side, and Claude Code handled the reconciliation grunt work. Fresh data made the writeup trustworthy, and the writeup made the data mean something.",
      "My takeaway is an ordering rule. Knowledge first, data second, code last. If you cannot describe how people use the old tool, you are not migrating it. You are guessing.",
    ],
  },
  {
    title: "The week SEO became AEO",
    excerpt:
      "People are asking AI about us instead of Googling us. One ClickUp ticket revealed our FAQ schema was invisible to AI crawlers. Fixing it took a schema rewrite and an MCP audit of every script on the site.",
    date: "Jul 11, 2026",
    readTime: "3 min read",
    tags: ["AEO", "MCP", "AI"],
    image: "/blog/the-week-seo-became-aeo.svg",
    content: [
      "A ticket landed on my ClickUp board with a name I had not seen before: AEO Optimization. Answer engine optimization is what SEO turns into when people stop clicking links and start asking ChatGPT, Perplexity, and Google's AI mode instead. The question behind the ticket was simple. When an AI answers questions about Bolt Farm Treehouse, does it actually see our site?",
      "The first finding was the kind of bug that never shows up on a dashboard. The site had a complete FAQ schema, but it was injected at runtime by a JavaScript file. Google renders JavaScript, so it passed every test we normally run. Most AI crawlers do not render JavaScript, so to them the schema did not exist. The fix was unglamorous. Move the JSON-LD into the static HTML head where every crawler can see it, and implement it once, site wide, with no duplicates. Marketing rewrote the FAQ content answer first to match, every question a heading with the answer as its first paragraph.",
      "Changing the head of a live site meant knowing everything already running there. Instead of clicking through Webflow's custom code panels, I pulled the whole picture through the Webflow MCP with Claude: every head and footer snippet, plus 122 registered scripts, six of them schema injectors. The export became a ClickUp task with the exact files attached, so the audit is now something the team can read instead of something that lives in my head.",
      "What made me write this down is the loop. AI was the reason for the work and the way the work got done. Answer engines forced the schema fix, and an AI agent ran the audit that made the fix safe to ship. The impact is not one big feature. It is making your systems legible, to people and to machines.",
    ],
  },
  {
    title: "The bugs that never throw errors",
    excerpt:
      "Before BoltOS went live I audited staging and filed every finding as a ticket. The two that stuck with me never raised an exception. One skipped a day of pricing. One quoted a guest in pesos.",
    date: "Jul 10, 2026",
    readTime: "3 min read",
    tags: ["BoltOS", "Elixir", "Stripe"],
    image: "/blog/the-bugs-that-never-throw-errors.svg",
    content: [
      "Part of taking BoltOS to production was a staging audit, with every finding filed as a go-live ticket: impact, evidence, recommendation, and the decision someone needed to make. Most findings were ordinary. Two of them taught me something.",
      "The first was a retry policy. Our daily cron jobs ran with max_attempts set to 1, and one night the dynamic pricing job failed during a deploy window. It was not retried. It was discarded, and that day simply had no fresh pricing decisions. A job that succeeds 29 days out of 30 looks healthy on every chart you thought to build. The fix was boring and important: retries with backoff on idempotent jobs, and alerts on discards.",
      "The second never even registered as a failure. A Stripe checkout for a fifty dollar pay link offered the guest pesos alongside dollars. That is Adaptive Pricing, a Stripe account setting, not a line of our code. The right ticket was not a patch. It was a decision for the business: keep it for conversion, or turn it off for cleaner reconciliation.",
      "That became the pattern I now audit for. The failures that hurt in production are the quiet ones, and half of them are settings, not code. Make the system loud before real money flows through it.",
    ],
  },
  {
    title: "One tech team, three companies",
    excerpt:
      "My tickets come from three ClickUp spaces: Tech Co, Brand Co, and Ops Co. Same laptop, three different jobs. A resort turns out to be a complete tech education.",
    date: "Jul 10, 2026",
    readTime: "4 min read",
    tags: ["Learnings", "Automation", "Hospitality"],
    image: "/blog/one-tech-team-three-companies.svg",
    content: [
      "In a single week my board can hold a PMS feature, a landing page edit, a broken referral link, a declined refund, spa intake forms, and an offer letter automation for recruiters. The work arrives through three ClickUp spaces, one for tech, one for brand, one for operations, and I am the tech layer under all of them.",
      "The first learning is that leverage beats heroics. The only way one person covers that spread is to make repetitive work self serve: automations for the offer emails, playbooks for the data pulls, agents for the mechanical parts. Every workflow I automate is a future week that does not need me in it.",
      "The second is that every ticket is a person. A two line access grant reads like nothing, but it is a spa concierge who cannot answer guests until it ships, or a manager who cannot reopen a folio for an approved refund. At a resort, impact is not measured in story points. It is measured in unblocked staff and guest moments that go smoothly.",
      "The third is shape. Go deep on the systems that run the business and stay deliberately wide everywhere else. AI has raised the floor on wide work, so the ceiling is set by context: knowing why the ticket exists, who is waiting on it, and what happens the day after it ships.",
    ],
  },
  {
    title: "Taking BoltOS live, one ticket at a time",
    excerpt:
      "We moved our in-house PMS from staging to production this month. The milestone wasn't the migration itself. It was the hundred small tickets that turned a working system into one a real team could trust.",
    date: "Jul 9, 2026",
    readTime: "3 min read",
    tags: ["BoltOS", "Shipping", "Claude Code"],
    image: "/blog/taking-boltos-live-one-ticket-at-a-time.svg",
    content: [
      "For the last stretch my ClickUp board has been almost entirely BoltOS, the property management system we build in-house. The headline task was the migration: moving from staging to production without losing a single user account or role. It was the one ticket everyone was watching.",
      "What I underestimated was everything after the cutover. A created-date column on the Reservations list, a date picker for future arrivals, charges added straight from the folio, web booking badges on the Closer Board. None are big features, but together they are the gap between a demo and a tool people trust.",
      "Then came the access grants, role by role and person by person. Guest Inbox for the spa concierge, comp permissions at the bar, custom notes for the Dreamweaver hosts. Every grant was a two-line ticket and a real person waiting to do their job.",
      "I leaned on Claude Code for the parts that are mechanical but easy to get wrong. Reconciling records during the Akia data pull, drafting the migration checks, scaffolding each fix so my attention went to the edge cases instead of the boilerplate. The launch was never one moment. It was a long queue that finally hit zero.",
    ],
  },
  {
    title: "How I use Claude Code to automate the boring 80%",
    excerpt:
      "A practical look at the agentic workflows I run daily — CRM audits, data migrations, pixel debugging — and where AI genuinely saves time (and where it still doesn't).",
    date: "Jul 8, 2026",
    readTime: "6 min read",
    tags: ["AI", "Automation", "Claude Code"],
    image: "/blog/how-i-use-claude-code-to-automate-the-boring-80.svg",
    content: [
      "Most automation projects don't fail because the technology isn't ready — they fail because nobody maps the boring work first. The 80% I'm talking about isn't hard: it's repetitive audits, data moved between tools that don't talk to each other, and reports rebuilt by hand every Monday.",
      "My rule is simple: if I do something three times, it becomes a workflow. Claude Code sits at the center of that loop. I describe the task once, let it draft the automation, and spend my review time on edge cases instead of boilerplate.",
      "A few honest examples from my own backlog: auditing CRM workflows before a migration, reconciling tracking pixels that double-fire on checkout, and turning messy spreadsheets into clean, validated imports. None of these are glamorous — that's exactly why they were worth automating.",
      "Where it still doesn't help: decisions that need context a tool can't see — pricing trade-offs, people problems, anything political. Automate the boring 80%, and you buy back the focus the interesting 20% deserves.",
    ],
  },
];

function BlogTile({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${slugify(post.title)}`}
      className="group flex flex-col rounded-lg border border-[var(--border)] bg-[var(--btn-bg)] overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-1"
    >
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="w-full aspect-video object-cover border-b border-[var(--border)]"
      />
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

function ShareButtons({ title, path }: { title: string; path: string }) {
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

function BlogPostPage() {
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

function ProjectPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => slugify(p.title) === slug);

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

        {project ? (
          <>
            <div className="flex flex-wrap items-center gap-x-2 text-xs text-[var(--text)] tracking-wide mt-10">
              <span>Project</span>
              <span className="opacity-40">•</span>
              <span>{project.year}</span>
            </div>
            <h1 className="text-2xl font-bold text-[var(--text-h)] leading-tight mt-3">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {project.tech.map((t) => (
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
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover object-top rounded-lg border border-[var(--border)] mt-8"
            />
            <p className="text-sm leading-relaxed mt-8">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {project.url.startsWith("/") ? (
                <Link
                  to={project.url}
                  className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2 hover:text-[var(--text-h)] transition-colors"
                >
                  <span className="mt-[1px]">Read the story</span>
                  <BsChevronRight />
                </Link>
              ) : (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2 hover:text-[var(--text-h)] transition-colors"
                >
                  <BsArrowUpRight />
                  <span className="mt-[1px]">Visit live site</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded max-md:py-2 hover:text-[var(--text-h)] transition-colors"
                >
                  <BsGithub />
                  <span className="mt-[1px]">View on GitHub</span>
                </a>
              )}
            </div>
            <div className="w-full flex flex-col gap-4 mt-12 pt-8 border-t border-[var(--border)]">
              <span className="text-xs text-[var(--text)] tracking-wide">
                Share this project
              </span>
              <ShareButtons
                title={project.title}
                path={`/projects/${slugify(project.title)}`}
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-start gap-3 mt-10">
            <h1 className="text-2xl font-bold text-[var(--text-h)] leading-tight">
              Project not found
            </h1>
            <span className="text-sm leading-relaxed">
              This project doesn't exist or may have been moved.
            </span>
          </div>
        )}
      </article>
      <Footer />
    </main>
  );
}

function Blogs() {
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

type Review = {
  quote: string;
  author: string;
  position: string;
  company: string;
  photo: string;
  linkedin: string;
  year: number;
};

const REVIEWS: Review[] = [
  {
    quote:
      "We can meet our clients' expectations on time since Kludy assisted us in performing the assignment successfully and efficiently.",
    author: "Chad Jordan Hilis",
    position: "Senior Project Manager",
    company: "Asia Pacific Digital",
    photo:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/v1757231991/chadhilis.jpg",
    linkedin: "https://www.linkedin.com/in/cjhilis/",
    year: 2025,
  },
  {
    quote:
      "Kludy as a software engineer, he shows great passion for his work, dedication to excellence, and consistently completes tasks on time while fostering strong teamwork.",
    author: "Clark Kent Renojo",
    position: "Software Engineer",
    company: "Flexicon Solutions Inc.",
    photo:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/v1757497669/clarkrenojo.jpg",
    linkedin: "https://www.linkedin.com/in/clark-kent-renojo-848132233/",
    year: 2025,
  },
  {
    quote:
      "Kludy is a highly regarded friend with strong expertise in IT, excelling at solving complex technical problems and delivering solutions under tight time constraints.",
    author: "Gerald Pagsuyoin",
    position: "Front-end Developer",
    company: "Flexicon Solutions Inc.",
    photo:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/v1757567902/geraldpagsuyoin.jpg",
    linkedin: "https://www.linkedin.com/in/gerald-coderis-pagsuyoin/",
    year: 2025,
  },
  {
    quote:
      "He is always reliable and adaptable, he was not only a great teammate but also someone you could count on to lead and support others.",
    author: "Leandro Lacson",
    position: "Manual QA Tester",
    company: "Stotsenberg Leisure Park Hotel and Corp.",
    photo:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/v1757567362/leandrolacson.jpg",
    linkedin: "https://www.linkedin.com/in/leandro-lacson-09ba6b281/",
    year: 2025,
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      id={`review-${slugify(review.author)}`}
      className="flex flex-col gap-5 rounded-lg border border-[var(--border)] bg-[var(--btn-bg)] p-5 scroll-mt-24"
    >
      <span className="text-sm leading-relaxed">“{review.quote}”</span>
      <div className="flex items-center gap-3 mt-auto">
        <img
          src={review.photo}
          alt={review.author}
          className="h-9 w-9 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm text-[var(--text-h)]">{review.author}</span>
          <span className="text-xs text-[var(--text)]">
            {review.position} · {review.company} · {review.year}
          </span>
        </div>
        <a
          href={review.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${review.author} on LinkedIn`}
          className="ml-auto text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}

function Reviews({ focus }: { focus?: FocusTarget | null }) {
  const [year, setYear] = useState("all");
  const years = [...new Set(REVIEWS.map((r) => r.year))].sort((a, b) => b - a);
  const filtered =
    year === "all" ? REVIEWS : REVIEWS.filter((r) => r.year === Number(year));

  useEffect(() => {
    if (!focus || !focus.id.startsWith("review-")) return;
    setYear("all");
    focusAnchorEl(focus.id, 80);
  }, [focus]);

  return (
    <div>
      <SectionHeader
        title="My Reviews"
        subtitle="Kind words from people I've worked with."
        years={years}
        year={year}
        onYearChange={setYear}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((review) => (
          <ReviewCard key={review.author} review={review} />
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
    <div
      id={`techgroup-${slugify(group.category)}`}
      className="flex flex-col gap-3 scroll-mt-24"
    >
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

function TechStack({ focus }: { focus?: FocusTarget | null }) {
  const [showMore, setShowMore] = useState(false);
  const visible = TECH_STACK.filter((g) => !g.collapsible);
  const collapsible = TECH_STACK.filter((g) => g.collapsible);

  useEffect(() => {
    if (!focus || !focus.id.startsWith("techgroup-")) return;
    const group = TECH_STACK.find(
      (g) => `techgroup-${slugify(g.category)}` === focus.id,
    );
    const needsExpand = Boolean(group?.collapsible);
    if (needsExpand) setShowMore(true);
    focusAnchorEl(focus.id, needsExpand ? 560 : 80);
  }, [focus]);

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

      <ShowMoreButton
        expanded={showMore}
        onClick={() => setShowMore((v) => !v)}
        className="mt-3"
      />

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

type SearchEntry = {
  tab: Tab;
  title: string;
  detail: string;
  haystack: string;
  slug?: string;
  anchor?: string;
};

const SEARCH_INDEX: SearchEntry[] = [
  ...WORK.map((job) => ({
    tab: "Work" as Tab,
    title: job.company,
    detail: job.role,
    haystack: [
      job.company,
      job.role,
      job.period,
      job.location,
      ...job.points,
      ...job.tech.map((t) => t.name),
    ].join(" "),
    anchor: `work-${slugify(job.company)}`,
  })),
  ...PROJECTS.map((project) => ({
    tab: "Projects" as Tab,
    title: project.title,
    detail: project.description,
    haystack: [
      project.title,
      project.description,
      String(project.year),
      ...project.tech.map((t) => t.name),
    ].join(" "),
    anchor: `project-${slugify(project.title)}`,
  })),
  ...BLOG_POSTS.map((post) => ({
    tab: "Blogs" as Tab,
    title: post.title,
    detail: post.excerpt,
    haystack: [post.title, post.excerpt, ...post.tags, ...post.content].join(
      " ",
    ),
    slug: slugify(post.title),
  })),
  ...REVIEWS.map((review) => ({
    tab: "Reviews" as Tab,
    title: review.author,
    detail: `${review.position} · ${review.company}`,
    haystack: [
      review.author,
      review.quote,
      review.position,
      review.company,
    ].join(" "),
    anchor: `review-${slugify(review.author)}`,
  })),
  ...TECH_STACK.flatMap((group) =>
    group.items.map((tech) => ({
      tab: "Techs" as Tab,
      title: tech.name,
      detail: group.category,
      haystack: `${tech.name} ${group.category}`,
      anchor: `techgroup-${slugify(group.category)}`,
    })),
  ),
];

function SearchModal({
  open,
  onClose,
  onSelect,
}: {
  open: boolean;
  onClose: () => void;
  onSelect: (entry: SearchEntry) => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  if (!open) return null;

  const q = query.trim().toLowerCase();
  const results = q
    ? SEARCH_INDEX.filter((entry) => entry.haystack.toLowerCase().includes(q))
        .sort((a, b) => {
          const aTitle = a.title.toLowerCase().includes(q) ? 0 : 1;
          const bTitle = b.title.toLowerCase().includes(q) ? 0 : 1;
          return aTitle - bTitle;
        })
        .slice(0, 8)
    : [];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    }
    if (e.key === "Enter" && results[active]) onSelect(results[active]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 bg-black/50"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-label="Search"
        className="w-full max-w-xl rounded-lg border border-[var(--border)] bg-[var(--bg)] shadow-[var(--shadow)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border)]">
          <BsSearch className="shrink-0 text-[var(--text)]" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search work, projects, blogs, reviews, techs…"
            className="w-full bg-transparent text-base md:text-sm text-[var(--text-h)] placeholder:text-[var(--text)] focus:outline-none"
          />
          <kbd className="max-md:hidden shrink-0 text-[10px] text-[var(--text)] border border-[var(--border)] rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>
        {q && (
          <ul className="max-h-80 overflow-y-auto py-2">
            {results.length === 0 && (
              <li className="px-4 py-6 text-sm text-[var(--text)] text-center">
                No results for “{query}”
              </li>
            )}
            {results.map((entry, i) => (
              <li key={`${entry.tab}-${entry.title}`}>
                <button
                  onClick={() => onSelect(entry)}
                  onMouseEnter={() => setActive(i)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left cursor-pointer ${
                    i === active ? "bg-[var(--social-bg)]" : ""
                  }`}
                >
                  <span className="shrink-0 text-[var(--text)]">
                    {TAB_ICONS[entry.tab]}
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="text-sm text-[var(--text-h)] truncate">
                      {entry.title}
                    </span>
                    <span className="text-xs text-[var(--text)] truncate">
                      {entry.detail}
                    </span>
                  </span>
                  <span className="ml-auto shrink-0 text-[10px] text-[var(--text)] border border-[var(--border)] rounded px-1.5 py-0.5">
                    {entry.tab}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function RssPage() {
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

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center relative md:border-t border-[var(--border)]">
      <div className="w-full max-w-3xl md:hidden flex flex-col gap-8 my-9 px-5 text-[var(--btn-text)]">
        <div className="flex flex-col items-start gap-1.5">
          <div className="text-2xl font-bold">Kludy S. Ramirez</div>
          <div className="text-sm ml-0.5">
            AI Ops Engineer @ Bolt Farm Treehouse
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

function Home() {
  const { theme, toggle } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>("Me");
  const [searchOpen, setSearchOpen] = useState(false);
  const [focusTarget, setFocusTarget] = useState<FocusTarget | null>(null);
  const navigate = useNavigate();
  const showButtons = activeTab === "Me";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSearchSelect = (entry: SearchEntry) => {
    setSearchOpen(false);
    if (entry.tab === "Blogs" && entry.slug) {
      navigate(`/blog/${entry.slug}`);
    } else {
      setActiveTab(entry.tab);
      setFocusTarget(entry.anchor ? { id: entry.anchor, n: Date.now() } : null);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col items-center justify-start max-md:pb-[calc(3.75rem+env(safe-area-inset-bottom))]">
      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelect={handleSearchSelect}
      />
      <nav className="w-full max-w-3xl flex justify-between md:justify-center items-center gap-3 mt-8 mb-4 max-md:sticky max-md:top-0 max-md:z-40 max-md:mt-0 max-md:mb-0 max-md:px-5 max-md:py-3 max-md:bg-[var(--bg)]/85 max-md:backdrop-blur-md max-md:border-b max-md:border-[var(--border)]">
        <Link
          to="/"
          aria-label="Home"
          className="md:hidden flex items-center gap-2"
        >
          <LogoMark className="h-6 w-6" />
          <span className="text-sm font-semibold text-[var(--text-h)]">
            Kludy
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            title="Search (Ctrl+K)"
            className="flex items-center p-2 rounded-full text-sm font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] hover:shadow-[var(--shadow)] transition-shadow duration-300 cursor-pointer"
          >
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
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center p-2 rounded-full text-sm font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] hover:shadow-[var(--shadow)] transition-shadow duration-300 cursor-pointer"
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
          <Link
            to="/rss"
            aria-label="RSS feed"
            title="RSS feed"
            className="flex items-center p-2 rounded-full text-sm font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] hover:shadow-[var(--shadow)] transition-shadow duration-300 cursor-pointer"
          >
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
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>
          </Link>
        </div>
      </nav>

      <section
        id="profile"
        className="max-md:hidden flex flex-col md:flex-row md:justify-center gap-6 md:gap-0 max-w-3xl w-full px-5 md:px-0 max-md:mt-6 text-[var(--btn-text)]"
      >
        <div className="w-full md:w-[50%] flex flex-col justify-start items-start gap-1.5">
          <div className="text-2xl font-bold">Kludy S. Ramirez</div>
          <div className="text-sm ml-0.5">
            AI Ops Engineer @ Bolt Farm Treehouse
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
        <div className="w-full md:w-[50%] flex flex-col justify-start items-start md:items-end gap-1.5">
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
      <section className="flex flex-col max-w-3xl w-full px-5 md:px-0 text-[var(--btn-text)]">
        <div
          className={`w-full hidden md:flex justify-start items-center gap-8 transition-all duration-500 ease-in-out ${
            showButtons ? "mt-10" : "mt-6"
          }`}
        >
          {TABS.map((tab) => (
            <div
              key={tab}
              onClick={() => {
                setFocusTarget(null);
                setActiveTab(tab);
              }}
              className={`cursor-pointer shrink-0 text-sm flex items-center gap-2 transition-colors duration-200 ${
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

        <div className="mt-8 pb-12">
          {activeTab === "Me" && <AboutMe />}
          {activeTab === "Techs" && <TechStack focus={focusTarget} />}
          {activeTab === "Work" && <WorkExperience focus={focusTarget} />}
          {activeTab === "Projects" && <Projects focus={focusTarget} />}
          {activeTab === "Blogs" && <Blogs />}
          {activeTab === "Reviews" && <Reviews focus={focusTarget} />}
        </div>
      </section>
      <div
        className={`max-md:hidden max-w-3xl w-full px-5 md:px-0 grid transition-all duration-500 ease-in-out ${
          showButtons
            ? "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
            : "grid-rows-[1fr] opacity-100 mb-10 mt-2"
        }`}
        aria-hidden={showButtons}
      >
        <div className="overflow-hidden min-h-0">
          <div className="text-[var(--btn-text)]">
            <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-0">
              <div className="w-full md:w-[50%] flex flex-col items-start">
                <ContactButtons />
              </div>
              <div className="w-full md:w-[50%] flex flex-col items-start md:items-end">
                <SocialButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <nav
        aria-label="Sections"
        className="md:hidden fixed bottom-0 inset-x-0 z-40 select-none border-t border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setFocusTarget(null);
                setActiveTab(tab);
                window.scrollTo({ top: 0 });
              }}
              aria-current={activeTab === tab ? "page" : undefined}
              className={`flex flex-col items-center gap-1 pt-2.5 pb-2 text-[10px] cursor-pointer transition-colors duration-200 ${
                activeTab === tab
                  ? "text-[var(--text-h)] font-medium"
                  : "text-[var(--text)]"
              }`}
            >
              <span className="text-[18px]">{TAB_ICONS[tab]}</span>
              {tab}
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}

function App() {
  useTheme();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
      <Route path="/rss" element={<RssPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
