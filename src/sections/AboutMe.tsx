import { useState } from "react";
import { BsRecordCircle } from "react-icons/bs";
import { ShowMoreButton } from "../components/ui/ShowMoreButton";

export function AboutMe() {
  const [showMore, setShowMore] = useState(true);

  const tiles = [
    {
      name: "Off the clock",
      icon: <BsRecordCircle />,
      headline: "build for fun",
      subtitle: "curiosity on tap",
      desc: "I experiment with new AI tools and turn small daily annoyances into automations nobody asked for.",
      meta: "New tools · Side automations · Weekend builds",
    },
    {
      name: "What I'm looking for",
      icon: <BsRecordCircle />,
      headline: "lead or co-found",
      subtitle: "high-impact products",
      desc: "A senior AI leadership role, or the right co-founder to start something new, building with teams that welcome the chaos of scaling.",
      meta: "Leadership · Co-founder · 0 to 1",
    },
    {
      name: "What I bring",
      icon: <BsRecordCircle />,
      headline: "agent infrastructure",
      subtitle: "memory and distributed AI",
      desc: "Deep experience in agent infrastructure, memory systems, and distributed AI, put to work on products built to scale.",
      meta: "Agents · Memory · Distributed AI",
    },
    {
      name: "How I build",
      icon: <BsRecordCircle />,
      headline: "spec-first, agentic",
      subtitle: "automate the boring 80%",
      desc: "I ship features spec-first, automate data flows, and hand the repetitive work to agentic workflows so the system just runs.",
      meta: "Spec-first · Agentic QA · Automation",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-start gap-5">
        <span className="text-xl">Who am I</span>
        <span className="text-sm leading-relaxed">
          I'm an AI Ops Engineer at Bolt Farm Treehouse. I take scattered,
          disconnected tools such as booking, CRM, tracking, guest comms and
          turn them into one smooth, high-performing system: shipping features
          spec-first, automating data flows, and replacing repetitive work with
          agentic workflows. My goal is technology that just works behind the
          scenes, so the business can grow faster and smarter.
        </span>
      </div>
      <div className="flex flex-col items-start gap-5 mt-7">
        <span className="text-xl">How I think</span>
        <span className="text-sm leading-relaxed">
          My brain is hardwired to solve problems. Whether I'm eliminating
          friction, rebuilding imperfect systems, or inventing missing tools, it
          isn't just work ethic, it's a compulsion.
        </span>
      </div>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          showMore
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
        aria-hidden={!showMore}
      >
        <div className="overflow-hidden min-h-0">
          <div className="flex flex-col gap-5 pt-5">
            {/* TODO: add new paragraphs here — follow the same block shape:
            <div className="flex flex-col items-start gap-5">
              <span className="text-2xl font-bold font-[Cormorant_Garamond]">
                Heading
              </span>
              <span className="text-sm leading-relaxed">Paragraph…</span>
            </div> */}
            <div className="flex flex-col items-start gap-4 w-full pt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {tiles.map((tile) => (
                  <div
                    key={tile.name}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--btn-bg)] p-4 sm:p-5"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold tracking-tight text-[var(--text-h)]">
                          {tile.headline}
                        </span>
                        <span className="text-xs text-[var(--text)]">
                          {tile.subtitle}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-h)]">
                        {tile.icon}
                        <span className="text-sm">{tile.name}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-[var(--text)]">
                        {tile.desc}
                      </p>
                      <span className="text-xs text-[var(--text)] opacity-70">
                        {tile.meta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 pt-5">
              <span className="text-xl">The bottom line</span>
              <span className="text-sm leading-relaxed">
                Give me a tangled system and a clear goal, and I turn it into
                something that runs itself. If you're building at the edge of AI
                and want someone who ships, let's talk.
              </span>
            </div>
          </div>
        </div>
      </div>

      <ShowMoreButton
        expanded={showMore}
        onClick={() => setShowMore((v) => !v)}
        className="mt-11"
      />
    </>
  );
}
