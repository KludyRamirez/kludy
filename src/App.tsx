import React, { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
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
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded"
      >
        <BsTelephone />
        <span className="ml-0.5">Schedule a Call</span>
        <BsChevronRight />
      </a>
      <a
        href="https://www.linkedin.com/in/kludyramirez/"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#0a66c2] border border-[#0a66c2] text-xs text-white cursor-pointer rounded"
      >
        <FaLinkedinIn className="text-[13px]" />
        <span className="ml-0.5">Visit my LinkedIn</span>
        <BsChevronRight />
      </a>
      <a
        href="https://github.com/KludyRamirez"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#161B22] border border-[#161B22] text-xs text-white cursor-pointer rounded"
      >
        <BsGithub />
        <span className="ml-0.5">Visit my GitHub</span>
        <BsChevronRight />
      </a>
      <a
        href="mailto:kludyramirez.pro@gmail.com"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded"
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
    <div className="w-full flex flex-wrap justify-end items-center gap-2">
      <a
        href="https://www.facebook.com/boltfarmtreehouse"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-[7px] px-3 bg-[#1877F2] text-xs text-white cursor-pointer rounded"
      >
        <BsFacebook />
        <span className="ml-0.5">Visit Facebook</span>
        <BsChevronRight />
      </a>
      <a
        href="https://www.boltfarmtreehouse.com"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded"
      >
        <FaWebflow />
        <span className="ml-0.5">boltfarmtreehouse</span>
        <BsChevronRight />
      </a>
      <a
        href="https://www.tripadvisor.com/Hotel_Review-g55418-d24085936-Reviews-Bolt_Farm_Treehouse-Whitwell_Tennessee.html"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-[7px] px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded"
      >
        <FaTripadvisor className="text-[13px]" />
        <span className="ml-0.5">Visit TripAdvisor</span>
        <BsChevronRight />
      </a>
      <a
        href="https://www.instagram.com/boltfarmtreehouse/"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-[7px] px-3 bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] text-xs text-white cursor-pointer rounded"
      >
        <BsInstagram />
        <span className="ml-0.5">Visit Instagram</span>
        <BsChevronRight />
      </a>
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
          I am an AI Ops Engineer at Bolt Farm Treehouse where I simplify
          technology systems. Using a mix of coding and AI automation, I turn
          disorganized tools into a smooth, high-performing setup. Whether I'm
          moving data or eliminating repetitive tasks, my goal is to make sure
          our technology just works behind the scenes so the business can grow
          faster and smarter.
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
              <span className="text-xl">More about me</span>
              <span className="text-sm leading-relaxed">
                I got my start building a student affairs system for a
                university in Valenzuela and corporate websites for AIA in
                Makati, then cut my teeth on regulated online gaming platforms
                at Flexicon — growing from intern to one of the engineers
                trusted with the sensitive, can't-fail work. Today I work
                remotely from Manila with a US-based team at Bolt Farm
                Treehouse, which has made me obsessive about clear
                communication, good documentation, and letting shipped work
                speak across time zones. Off the clock, you'll usually find me
                experimenting with new AI tools, rebuilding my own workflows,
                or turning small daily annoyances into automations nobody asked
                for — my favorite kind of project.
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
    company: "Bolt Farm Treehouse",
    role: "AI Ops Engineer",
    period: "Nov 2025 – Present · 9 mos",
    location: "Whitwell · Tennessee · USA (Remote)",
    points: [
      "Spearheaded the AI-assisted development of BoltOS, a custom booking and dynamic pricing platform, aligning technical execution with revenue operations to support $9.4 million in booking volume and improve guest booking efficiency by 86%.",
      "Architected and deployed a server-side Google Tag Manager infrastructure on Google Cloud Run with Cloudflare DNS, boosting data tracking reliability across GA4 and Meta Pixel by 80% while eliminating client-side data loss.",
      "Engineered automated QA workflows to resolve a critical Facebook Pixel conflict between PixelFlow and HubSpot, eliminating double-counted Purchase events and restoring accurate attribution for $2.5M in annual ad spend.",
      "Scaled and optimized CRM architecture by auditing 272 complex workflows and engineering automated deal pipelines, integrating Zapier, Aircall, and CallRail to improve data accuracy and accelerate sales velocity by 90%.",
    ],
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
    title: "Mathematrix",
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
    description:
      "The website covers insurance plans, company info, wellness programs, and support.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/bpi-aia-proj-photo.png",
    url: "https://www.bpi-aia.com.ph",
    tech: AIA_TECH,
  },
  {
    title: "AIA Philippines",
    description:
      "The website covers insurance plans, company info, wellness programs, and support.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/aia-ph-proj-photo.png",
    url: "https://www.aia.com.ph",
    tech: AIA_TECH,
  },
  {
    title: "AIA Thailand",
    description:
      "The website covers insurance plans, company info, wellness programs, and support.",
    image:
      "https://res.cloudinary.com/dni1vtbsv/image/upload/aia-ph-proj-photo.png",
    url: "https://www.aia.co.th",
    tech: AIA_TECH,
  },
  {
    title: "PLV OSA Reprimand Hub",
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
    <div className="flex flex-col rounded-lg border border-[var(--border)] bg-[var(--btn-bg)] overflow-hidden">
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="block border-b border-[var(--border)]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover object-top"
        />
      </a>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex justify-between items-center">
          <span className="text-xl text-[var(--text-h)] leading-tight">
            {project.title}
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

function Projects() {
  const [showMore, setShowMore] = useState(false);
  const visible = PROJECTS.slice(0, 4);
  const more = PROJECTS.slice(4);

  return (
    <div>
      <div className="flex flex-col gap-1.5 mb-10">
        <h3 className="text-xl text-[var(--text-h)]">My Projects</h3>
        <span className="text-sm text-[var(--text)] leading-relaxed">
          Things I've designed, built, and shipped — from thesis work to
          production sites.
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
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
          <div className="grid grid-cols-2 gap-4 pt-4">
            {more.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
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
    </div>
  );
}

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const BLOG_POSTS: BlogPost[] = [
  {
    title: "How I use Claude Code to automate the boring 80%",
    excerpt:
      "A practical look at the agentic workflows I run daily — CRM audits, data migrations, pixel debugging — and where AI genuinely saves time (and where it still doesn't).",
    date: "Jul 8, 2026",
    readTime: "6 min read",
    tags: ["AI", "Automation", "Claude Code"],
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
      className="group flex flex-col gap-3 rounded-lg border border-[var(--border)] bg-[var(--btn-bg)] p-5"
    >
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
    </Link>
  );
}

function ShareButtons({ post }: { post: BlogPost }) {
  const shareUrl = `${window.location.origin}/blog/${slugify(post.title)}`;
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#0a66c2] border border-[#0a66c2] text-xs text-white cursor-pointer rounded"
      >
        <FaLinkedinIn className="text-[13px]" />
        <span className="ml-0.5">Share on LinkedIn</span>
        <BsChevronRight />
      </a>
      <a
        href={`https://x.com/intent/post?url=${encodedUrl}&text=${encodeURIComponent(
          post.title,
        )}`}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#161B22] border border-[#161B22] text-xs text-white cursor-pointer rounded"
      >
        <BsTwitterX />
        <span className="ml-0.5">Share on X</span>
        <BsChevronRight />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 py-1.5 px-3 bg-[#1877F2] border border-[#1877F2] text-xs text-white cursor-pointer rounded"
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
      <article className="flex flex-col items-start max-w-3xl w-full text-[var(--btn-text)] mt-12 mb-14 flex-1">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-xs text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
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
              <ShareButtons post={post} />
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

function Blogs() {
  return (
    <div>
      <div className="flex flex-col gap-1.5 mb-10">
        <h3 className="text-xl text-[var(--text-h)]">My Blogs</h3>
        <span className="text-sm text-[var(--text)] leading-relaxed">
          Notes on AI, automation, and building systems that just work.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {BLOG_POSTS.map((post) => (
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
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col gap-5 rounded-lg border border-[var(--border)] bg-[var(--btn-bg)] p-5">
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
            {review.position} · {review.company}
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

function Reviews() {
  return (
    <div>
      <div className="flex flex-col gap-1.5 mb-10">
        <h3 className="text-xl text-[var(--text-h)]">My Reviews</h3>
        <span className="text-sm text-[var(--text)] leading-relaxed">
          Kind words from people I've worked with.
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {REVIEWS.map((review) => (
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

function Footer() {
  return (
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
  const showButtons = activeTab === "Me";

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col items-center justify-start">
      <nav className="w-full max-w-3xl flex justify-center items-center mt-4">
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
        className="flex justify-center max-w-3xl w-full text-[var(--btn-text)]"
      >
        <div className="w-[50%] flex flex-col justify-start items-start gap-1.5">
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
          {activeTab === "Projects" && <Projects />}
          {activeTab === "Blogs" && <Blogs />}
          {activeTab === "Reviews" && <Reviews />}
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
      <Footer />
    </main>
  );
}

function App() {
  useTheme();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
