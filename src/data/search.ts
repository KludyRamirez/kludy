import type { SearchEntry, Tab } from "../types";
import { slugify } from "../lib/slugify";
import { WORK } from "./work";
import { PROJECTS } from "./projects";
import { BLOG_POSTS } from "./blog";
import { REVIEWS } from "./reviews";
import { TECH_STACK } from "./tech-stack";

export const SEARCH_INDEX: SearchEntry[] = [
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
