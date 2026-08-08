import type { ReactNode } from "react";

export type Tab = "Me" | "Techs" | "Work" | "Projects" | "Blogs" | "Reviews";

export type Tech = { name: string; icon: ReactNode };

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  tech: Tech[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  github?: string;
  year: number;
  tech: Tech[];
};

export type BlogSection = { heading: string; body: string };

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  content: BlogSection[];
};

export type Review = {
  quote: string;
  author: string;
  position: string;
  company: string;
  photo: string;
  linkedin: string;
  year: number;
};

export type FocusTarget = { id: string; n: number };

export type SearchEntry = {
  tab: Tab;
  title: string;
  detail: string;
  haystack: string;
  slug?: string;
  anchor?: string;
};
