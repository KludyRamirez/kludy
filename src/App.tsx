import { FaLinkedinIn } from "react-icons/fa6";
import "./App.css";
import { useTheme } from "./hooks/useTheme";
import { BsChevronRight, BsTelephone, BsWindow } from "react-icons/bs";

function App() {
  const { theme, toggle } = useTheme();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col items-center justify-start pt-18">
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
      <section
        id="profile"
        className="flex justify-center max-w-3xl w-full text-[var(--btn-text)]"
      >
        <div className="w-[50%] flex flex-col justify-start items-start gap-1.5">
          <div className="text-2xl font-['Cormorant_Garamond']">
            Kludy Ramirez
          </div>
          <div className="text-sm ml-0.5">
            AI and Tech Ops Lead @ Bolt Farm Treehouse
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center gap-2 mt-1.5 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded">
              <BsTelephone />
              <span className="ml-0.5">Schedule a Call</span>
              <BsChevronRight />
            </div>
            <div className="flex justify-center items-center gap-2 mt-1.5 py-1.5 px-3 bg-[#0a66c2] border border-[#0a66c2] text-xs text-white cursor-pointer rounded">
              <FaLinkedinIn />
              <span className="ml-0.5">Visit my LinkedIn</span>
              <BsChevronRight />
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-start items-end gap-1">
          <div className="font-['Cormorant_Garamond'] text-2xl">
            Bolt Farm Treehouse
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center gap-2 mt-1.5 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded">
              <BsWindow />
              <span className="ml-1">Visit our website</span>
              <BsChevronRight />
            </div>
            <div className="flex justify-center items-center gap-2 mt-1.5 py-1.5 px-3 bg-[var(--btn-bg)] border border-[var(--border)] text-xs cursor-pointer rounded">
              <BsWindow />
              <span className="ml-1">Visit our website</span>
              <BsChevronRight />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
