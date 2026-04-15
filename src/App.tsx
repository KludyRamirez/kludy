import "./App.css";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggle } = useTheme();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col items-center justify-start pt-16">
      <section id="profile" className="flex justify-center max-w-3xl w-full">
        <div className="w-[50%] flex flex-col justify-center items-start">
          <div className="">Kludy S. Ramirez</div>
          <div className="">AI and Tech Ops Lead</div>
        </div>
        <div className="w-[50%] flex flex-col justify-center items-end">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center p-2 rounded-full text-sm font-medium border border-[var(--border)] bg-[var(--social-bg)] text-[var(--text-h)] hover:shadow-[var(--shadow)] transition-shadow duration-300 cursor-pointer"
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
          <div className="">Bolt Farm Treehouse</div>
        </div>
      </section>
    </main>
  );
}

export default App;
