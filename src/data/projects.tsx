import { FaJava } from "react-icons/fa";
import {
  SiAkamai,
  SiBootstrap,
  SiDocker,
  SiElixir,
  SiExpress,
  SiFlydotio,
  SiJquery,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhoenixframework,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
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
];
