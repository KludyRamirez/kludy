import {
  BsBraces,
  BsBriefcase,
  BsFolder2Open,
  BsJournal,
  BsPerson,
  BsStar,
} from "react-icons/bs";
import type { ReactNode } from "react";
import type { Tab } from "../types";

export const TABS: Tab[] = ["Me", "Techs", "Work", "Projects", "Blogs", "Reviews"];

export const TAB_ICONS: Record<Tab, ReactNode> = {
  Me: <BsPerson />,
  Techs: <BsBraces />,
  Work: <BsBriefcase />,
  Projects: <BsFolder2Open />,
  Blogs: <BsJournal />,
  Reviews: <BsStar />,
};
