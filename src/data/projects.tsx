import { FaJava } from "react-icons/fa";
import {
  SiAkamai,
  SiBootstrap,
  SiCss,
  SiDocker,
  SiElixir,
  SiExpress,
  SiFlydotio,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPhoenixframework,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSass,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandAdobe, TbComponents } from "react-icons/tb";
import type { Project, Tech } from "../types";

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

export const PROJECTS: Project[] = [
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
