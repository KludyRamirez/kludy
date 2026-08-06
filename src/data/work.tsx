import { BsThreeDots } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import {
  SiAngular,
  SiClaude,
  SiDocker,
  SiDotnet,
  SiExpo,
  SiExpress,
  SiGo,
  SiGoogletagmanager,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPython,
  SiReact,
  SiSocketdotio,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import type { Job } from "../types";

export const WORK: Job[] = [
  {
    company: "Bolt Farm Treehouse",
    role: "AI Engineer",
    period: "Nov 2025 – Present · 10 mos",
    location: "Whitwell · Tennessee · USA (Remote)",
    points: [
      "Developed and maintained BoltOS, Bolt Farm's in-house AI platform for reservations and dynamic pricing, under the Director of AI & Tech. By tying technical execution directly to revenue operations, BoltOS automates rate adjustments and streamlines the guest booking flow, supporting $9.4M in booking volume and lifting guest booking efficiency 86%.",
      "Architected and deployed a server-side Google Tag Manager infrastructure on Google Cloud Run with Cloudflare DNS, boosting data tracking reliability across GA4 and Meta Pixel by 80% while eliminating client-side data loss.",
      "Audited 272 complex CRM workflows using AI-assisted analysis and rebuilt them into automated deal pipelines integrating Zapier, Aircall, and CallRail, improving data accuracy and accelerating sales velocity by 90%.",
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
    role: "Software Engineer",
    period: "Jul 2024 – Nov 2025 · 1 yr and 4 mos",
    location: "Makati City · NCR · Philippines",
    points: [
      "Developed PAGCOR-authorized interactive gaming platforms using Vue.js, Nuxt.js, Storybook.js, Pug.js, Cypress, and Jest.",
      "Chosen as one of the key engineers to collaborate with international developers on building back-office systems (sensitive data) for online gaming platforms.",
      "Led agile sprint cycles to deliver responsive, high-performance interfaces for back-office systems, ensuring alignment with technical standards and business goals.",
    ],
    tech: [
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "C# .NET", icon: <SiDotnet /> },
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "Nuxt.js", icon: <SiNuxt /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "18+ more", icon: <BsThreeDots /> },
    ],
  },
  {
    company: "Pamantasan ng Lungsod ng Valenzuela",
    role: "Full Stack Engineer",
    period: "Mar 2024 – Jul 2024 · 5 mos",
    location: "Valenzuela City · NCR · Philippines",
    points: [
      "Built a web application that handled over 12,000 student affairs records and processed 9,000+ cases and appeals, featuring secure data delivery to official school email without requiring student account creation.",
      "Implemented user-friendly UI interfaces using React.js and Tailwind CSS, resulting increase in user satisfaction compared to the previous system.",
      "Engineered RESTful APIs, WebSockets, and microservices with Express.js and SocketIO, streamlining backend operations enough to handle a high volume of concurrent users while ensuring 99% system availability.",
    ],
    tech: [
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Socket.IO", icon: <SiSocketdotio /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "11+ more", icon: <BsThreeDots /> },
    ],
  },
  {
    company: "GrowthOps",
    role: "Junior Web Developer",
    period: "Jun 2023 – Mar 2024 · 10 mos",
    location: "Makati City · NCR · Philippines",
    points: [
      "Key contributor to the development of the BPI-AIA, AIA Philippines, and AIA Thailand websites.",
      "Developed user-friendly UI interfaces with Material UI and Bootstrap framework, leading to an increase in user engagement based on analytics data.",
      "Integrated and configured Google Tag Manager and Facebook Pixel to track user interactions, enabling advanced analytics and remarketing strategies.",
    ],
    tech: [
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "React Native", icon: <SiExpo /> },
      { name: "Angular.js", icon: <SiAngular /> },
      { name: "Go", icon: <SiGo /> },
      { name: "Google Tag Manager", icon: <SiGoogletagmanager /> },
      { name: "19+ more", icon: <BsThreeDots /> },
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
