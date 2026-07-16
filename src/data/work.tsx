import { BsThreeDots } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import {
  SiBootstrap,
  SiClaude,
  SiCypress,
  SiDocker,
  SiExpress,
  SiGoogletagmanager,
  SiJest,
  SiMeta,
  SiMui,
  SiNuxt,
  SiPug,
  SiPython,
  SiReact,
  SiSocketdotio,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import type { Job } from "../types";

export const WORK: Job[] = [
  {
    company: "Bolt Farm Treehouse",
    role: "AI Ops Engineer",
    period: "Nov 2025 – Present · 9 mos",
    location: "Whitwell · Tennessee · USA (Remote)",
    points: [
      "Major contributor to BoltOS, a custom booking and dynamic pricing platform, with Claude Code as the primary engineering tool — turning specs into production reservation, role-based access, and guest-experience features that support $9.4 million in booking volume and improved guest booking efficiency by 86%.",
      "Architected and deployed a server-side Google Tag Manager infrastructure on Google Cloud Run with Cloudflare DNS, boosting data tracking reliability across GA4 and Meta Pixel by 80% while eliminating client-side data loss.",
      "Engineered agentic QA workflows in Claude Code to diagnose and resolve a critical Facebook Pixel conflict between PixelFlow and HubSpot, eliminating double-counted Purchase events and restoring accurate attribution for $2.5M in annual ad spend.",
      "Audited 272 complex CRM workflows using AI-assisted analysis and rebuilt them into automated deal pipelines integrating Zapier, Aircall, and CallRail — improving data accuracy and accelerating sales velocity by 90%.",
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

export const jobYears = (period: string) => {
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
