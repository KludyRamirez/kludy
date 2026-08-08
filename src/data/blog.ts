import type { BlogPost } from "../types";

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Least privilege is a moving target",
    excerpt:
      "Half my recent board was access requests: grant this role, scope that one, take another away. The ticket that reframed it asked me to move everyone to read-only except the one person still collecting payments.",
    date: "Jul 15, 2026",
    readTime: "3 min read",
    tags: ["BoltOS", "Access Control", "RBAC"],
    image: "/blog/least-privilege-is-a-moving-target.svg",
    content: [
      {
        heading: "A board made of access requests",
        body: "For a stretch my BoltOS board was almost all access. A read-only housekeeping role that sees reservations and the calendar but changes nothing. Therapists who can view the catalog but not edit it. A concierge who can reopen a folio, a bar lead who can comp a drink. Each ticket is two lines and a real person waiting to do their job.",
      },
      {
        heading: "The request that inverted the shape",
        body: "Then one request inverted the usual shape. Leadership wanted a single person to keep write access while he worked through a handful of outstanding payments, and everyone else moved to read-only until the balances were collected. Access was not scoped to a job title. It was scoped to a moment in the business.",
      },
      {
        heading: "The minimum keeps moving",
        body: "Least privilege usually gets taught as grant the minimum. The part nobody mentions is that the minimum keeps moving. A permission that was correct last month can be a liability this month, and the safest change is often the one that takes access away. That only works if revoking is as fast and as auditable as granting.",
      },
      {
        heading: "Roles are a product surface",
        body: "So I treat roles as a product surface, not a config file. Read-only is the default, write access is granted on purpose, and every action leaves an audit trail. Claude Code scaffolds the role definitions and permission checks so my attention goes to the policy question, who should be able to do this today, instead of the plumbing. Good access control does not lock the system down. It keeps the system honest about who is doing what.",
      },
    ],
  },
  {
    title: "Before you migrate the software, migrate the knowledge",
    excerpt:
      "We are replacing Akia, the AI messaging tool our guest hosts live in. The hardest ticket was not code. It was writing down how the team actually works.",
    date: "Jul 11, 2026",
    readTime: "3 min read",
    tags: ["Akia", "BoltOS", "Migration"],
    image: "/blog/before-you-migrate-the-software-migrate-the-knowledge.svg",
    content: [
      {
        heading: "A high priority ticket with no code in it",
        body: "A high priority ticket asked for something unusual: screenshots and a functionality brief of the Akia dashboard, an explanation of how our Dreamweaver hosts use it, and notes on how to reproduce the experience in BoltOS. No code. Just knowledge, written down.",
      },
      {
        heading: "The dashboard is not the feature",
        body: "Doing it changed how I think about migrations. The dashboard is not the feature. The workflow is. Watching how Dreamweavers triage guest threads at the start of a shift told us exactly what BoltOS had to reproduce, what could be simpler, and what nobody would miss.",
      },
      {
        heading: "Running the data pulls in parallel",
        body: "The data side ran in parallel. Urgent Akia record pulls kept the dashboard honest while both systems ran side by side, and Claude Code handled the reconciliation grunt work. Fresh data made the writeup trustworthy, and the writeup made the data mean something.",
      },
      {
        heading: "Knowledge first, data second, code last",
        body: "My takeaway is an ordering rule. Knowledge first, data second, code last. If you cannot describe how people use the old tool, you are not migrating it. You are guessing.",
      },
    ],
  },
  {
    title: "The week SEO became AEO",
    excerpt:
      "People are asking AI about us instead of Googling us. One ClickUp ticket revealed our FAQ schema was invisible to AI crawlers. Fixing it took a schema rewrite and an MCP audit of every script on the site.",
    date: "Jul 11, 2026",
    readTime: "3 min read",
    tags: ["AEO", "MCP", "AI"],
    image: "/blog/the-week-seo-became-aeo.svg",
    content: [
      {
        heading: "A ticket named AEO Optimization",
        body: "A ticket landed on my ClickUp board with a name I had not seen before: AEO Optimization. Answer engine optimization is what SEO turns into when people stop clicking links and start asking ChatGPT, Perplexity, and Google's AI mode instead. The question behind the ticket was simple. When an AI answers questions about Bolt Farm Treehouse, does it actually see our site?",
      },
      {
        heading: "Schema the crawlers could not see",
        body: "The first finding was the kind of bug that never shows up on a dashboard. The site had a complete FAQ schema, but it was injected at runtime by a JavaScript file. Google renders JavaScript, so it passed every test we normally run. Most AI crawlers do not render JavaScript, so to them the schema did not exist. The fix was unglamorous. Move the JSON-LD into the static HTML head where every crawler can see it, and implement it once, site wide, with no duplicates. Marketing rewrote the FAQ content answer first to match, every question a heading with the answer as its first paragraph.",
      },
      {
        heading: "Auditing 122 scripts through MCP",
        body: "Changing the head of a live site meant knowing everything already running there. Instead of clicking through Webflow's custom code panels, I pulled the whole picture through the Webflow MCP with Claude: every head and footer snippet, plus 122 registered scripts, six of them schema injectors. The export became a ClickUp task with the exact files attached, so the audit is now something the team can read instead of something that lives in my head.",
      },
      {
        heading: "AI on both ends of the work",
        body: "What made me write this down is the loop. AI was the reason for the work and the way the work got done. Answer engines forced the schema fix, and an AI agent ran the audit that made the fix safe to ship. The impact is not one big feature. It is making your systems legible, to people and to machines.",
      },
    ],
  },
  {
    title: "The bugs that never throw errors",
    excerpt:
      "Before BoltOS went live I audited staging and filed every finding as a ticket. The two that stuck with me never raised an exception. One skipped a day of pricing. One quoted a guest in pesos.",
    date: "Jul 10, 2026",
    readTime: "3 min read",
    tags: ["BoltOS", "Elixir", "Stripe"],
    image: "/blog/the-bugs-that-never-throw-errors.svg",
    content: [
      {
        heading: "A staging audit before go-live",
        body: "Part of taking BoltOS to production was a staging audit, with every finding filed as a go-live ticket: impact, evidence, recommendation, and the decision someone needed to make. Most findings were ordinary. Two of them taught me something.",
      },
      {
        heading: "A retry policy that discarded a day",
        body: "The first was a retry policy. Our daily cron jobs ran with max_attempts set to 1, and one night the dynamic pricing job failed during a deploy window. It was not retried. It was discarded, and that day simply had no fresh pricing decisions. A job that succeeds 29 days out of 30 looks healthy on every chart you thought to build. The fix was boring and important: retries with backoff on idempotent jobs, and alerts on discards.",
      },
      {
        heading: "A setting, not a line of code",
        body: "The second never even registered as a failure. A Stripe checkout for a fifty dollar pay link offered the guest pesos alongside dollars. That is Adaptive Pricing, a Stripe account setting, not a line of our code. The right ticket was not a patch. It was a decision for the business: keep it for conversion, or turn it off for cleaner reconciliation.",
      },
      {
        heading: "Make the system loud before the money flows",
        body: "That became the pattern I now audit for. The failures that hurt in production are the quiet ones, and half of them are settings, not code. Make the system loud before real money flows through it.",
      },
    ],
  },
  {
    title: "One tech team, three companies",
    excerpt:
      "My tickets come from three ClickUp spaces: Tech Co, Brand Co, and Ops Co. Same laptop, three different jobs. A resort turns out to be a complete tech education.",
    date: "Jul 10, 2026",
    readTime: "4 min read",
    tags: ["Learnings", "Automation", "Hospitality"],
    image: "/blog/one-tech-team-three-companies.svg",
    content: [
      {
        heading: "Three boards, one laptop",
        body: "In a single week my board can hold a PMS feature, a landing page edit, a broken referral link, a declined refund, spa intake forms, and an offer letter automation for recruiters. The work arrives through three ClickUp spaces, one for tech, one for brand, one for operations, and I am the tech layer under all of them.",
      },
      {
        heading: "Leverage beats heroics",
        body: "The first learning is that leverage beats heroics. The only way one person covers that spread is to make repetitive work self serve: automations for the offer emails, playbooks for the data pulls, agents for the mechanical parts. Every workflow I automate is a future week that does not need me in it.",
      },
      {
        heading: "Every ticket is a person",
        body: "The second is that every ticket is a person. A two line access grant reads like nothing, but it is a spa concierge who cannot answer guests until it ships, or a manager who cannot reopen a folio for an approved refund. At a resort, impact is not measured in story points. It is measured in unblocked staff and guest moments that go smoothly.",
      },
      {
        heading: "Deep on the systems, wide everywhere else",
        body: "The third is shape. Go deep on the systems that run the business and stay deliberately wide everywhere else. AI has raised the floor on wide work, so the ceiling is set by context: knowing why the ticket exists, who is waiting on it, and what happens the day after it ships.",
      },
    ],
  },
  {
    title: "Taking BoltOS live, one ticket at a time",
    excerpt:
      "We moved our in-house PMS from staging to production this month. The milestone wasn't the migration itself. It was the hundred small tickets that turned a working system into one a real team could trust.",
    date: "Jul 9, 2026",
    readTime: "3 min read",
    tags: ["BoltOS", "Shipping", "Claude Code"],
    image: "/blog/taking-boltos-live-one-ticket-at-a-time.svg",
    content: [
      {
        heading: "The one ticket everyone was watching",
        body: "For the last stretch my ClickUp board has been almost entirely BoltOS, the property management system we build in-house. The headline task was the migration: moving from staging to production without losing a single user account or role. It was the one ticket everyone was watching.",
      },
      {
        heading: "Everything after the cutover",
        body: "What I underestimated was everything after the cutover. A created-date column on the Reservations list, a date picker for future arrivals, charges added straight from the folio, web booking badges on the Closer Board. None are big features, but together they are the gap between a demo and a tool people trust.",
      },
      {
        heading: "Access, role by role",
        body: "Then came the access grants, role by role and person by person. Guest Inbox for the spa concierge, comp permissions at the bar, custom notes for the Dreamweaver hosts. Every grant was a two-line ticket and a real person waiting to do their job.",
      },
      {
        heading: "Where Claude Code carried the load",
        body: "I leaned on Claude Code for the parts that are mechanical but easy to get wrong. Reconciling records during the Akia data pull, drafting the migration checks, scaffolding each fix so my attention went to the edge cases instead of the boilerplate. The launch was never one moment. It was a long queue that finally hit zero.",
      },
    ],
  },
  {
    title: "How I use Claude Code to automate the boring 80%",
    excerpt:
      "A practical look at the agentic workflows I run daily: CRM audits, data migrations, pixel debugging, and where AI genuinely saves time (and where it still doesn't).",
    date: "Jul 8, 2026",
    readTime: "6 min read",
    tags: ["AI", "Automation", "Claude Code"],
    image: "/blog/how-i-use-claude-code-to-automate-the-boring-80.svg",
    content: [
      {
        heading: "Map the boring work first",
        body: "Most automation projects don't fail because the technology isn't ready. They fail because nobody maps the boring work first. The 80% I'm talking about isn't hard: it's repetitive audits, data moved between tools that don't talk to each other, and reports rebuilt by hand every Monday.",
      },
      {
        heading: "The rule of three",
        body: "My rule is simple: if I do something three times, it becomes a workflow. Claude Code sits at the center of that loop. I describe the task once, let it draft the automation, and spend my review time on edge cases instead of boilerplate.",
      },
      {
        heading: "Examples from my own backlog",
        body: "A few honest examples from my own backlog: auditing CRM workflows before a migration, reconciling tracking pixels that double-fire on checkout, and turning messy spreadsheets into clean, validated imports. None of these are glamorous, and that's exactly why they were worth automating.",
      },
      {
        heading: "Where it still doesn't help",
        body: "Where it still doesn't help: decisions that need context a tool can't see, like pricing trade-offs, people problems, anything political. Automate the boring 80%, and you buy back the focus the interesting 20% deserves.",
      },
    ],
  },
];
