import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { TABS, TAB_ICONS } from "../data/tabs";
import type { FocusTarget, SearchEntry, Tab } from "../types";
import { LogoMark } from "../components/ui/LogoMark";
import { MoonIcon, RssIcon, SearchIcon, SunIcon } from "../components/ui/icons";
import { ContactButtons } from "../components/ContactButtons";
import { SocialButtons } from "../components/SocialButtons";
import { Footer } from "../components/Footer";
import { SearchModal } from "../components/SearchModal";
import { AboutMe } from "../sections/AboutMe";
import { TechStack } from "../sections/TechStack";
import { WorkExperience } from "../sections/WorkExperience";
import { Projects } from "../sections/Projects";
import { Blogs } from "../sections/Blogs";
import { Reviews } from "../sections/Reviews";

export default function Home() {
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
            <SearchIcon />
          </button>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center p-2 rounded-full text-sm font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] hover:shadow-[var(--shadow)] transition-shadow duration-300 cursor-pointer"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link
            to="/rss"
            aria-label="RSS feed"
            title="RSS feed"
            className="flex items-center p-2 rounded-full text-sm font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-h)] hover:shadow-[var(--shadow)] transition-shadow duration-300 cursor-pointer"
          >
            <RssIcon />
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
            AI Engineer @ Bolt Farm Treehouse
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
