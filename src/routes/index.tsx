import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowUp,
  Award,
  Braces,
  Check,
  CircleUser,
  Code2,
  Database,
  GitBranch,
  Github,
  GraduationCap,
  Headset,
  Layers,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Network,
  Phone,
  Quote,
  Send,
  Server,
  Shield,
  Terminal,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamohelo Ratone — IT Systems Support & Full Stack Developer" },
      {
        name: "description",
        content:
          "IT systems support specialist and full stack developer in Soweto, Gauteng. NQF L5 certified, React & Node.js, networking and helpdesk experience.",
      },
      { property: "og:title", content: "Kamohelo Ratone — Systems Support & Full Stack" },
      {
        property: "og:description",
        content:
          "Diagnosing, building and delivering user-focused IT solutions. Portfolio, projects and credentials.",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const SKILL_GROUPS = [
  {
    title: "Systems & Networking",
    icon: Server,
    items: ["Linux / Kali", "TCP/IP · DHCP · DNS", "Routing fundamentals", "Hardware & OS troubleshooting"],
  },
  {
    title: "Software Development",
    icon: Code2,
    items: ["JavaScript (ES6+)", "React", "Node.js", "HTML5 · CSS3", "REST APIs · SQL"],
  },
  {
    title: "Support & Security",
    icon: Shield,
    items: ["Helpdesk & ticketing", "IT security fundamentals", "Git / GitHub", "User training & documentation"],
  },
];

const PROJECTS = [
  {
    icon: CircleUser,
    title: "Personal Portfolio Website",
    meta: "HTML · CSS · JavaScript · GitHub Pages",
    body: "Responsive personal site presenting technical skills, certifications and project work, deployed with a continuous GitHub Pages workflow.",
    tags: ["Responsive", "Accessibility", "Deployment"],
  },
  {
    icon: Network,
    title: "Network Troubleshooting Lab",
    meta: "Linux · DHCP · DNS · Routing",
    body: "Simulated enterprise environment used to practise connectivity diagnostics, IP addressing schemes and service configuration under fault conditions.",
    tags: ["Diagnostics", "Configuration", "Documentation"],
  },
  {
    icon: Layers,
    title: "Full Stack Application",
    meta: "React · Node.js · Flask · REST",
    body: "In-progress full stack application pairing a responsive React frontend with API-driven backend logic, structured around clean data contracts.",
    tags: ["In progress", "REST API", "State management"],
  },
];

const EXPERIENCE = [
  {
    icon: Headset,
    title: "IT Support Practice",
    meta: "Meyiwa Training Academy · 2025",
    points: [
      "Resolved hardware and software incidents across Linux environments.",
      "Configured core networking: IP addressing, DHCP and routing basics.",
      "Ran simulated troubleshooting for connectivity and performance faults.",
    ],
  },
  {
    icon: Award,
    title: "Certifications",
    meta: "2025",
    points: [
      "NQF Level 5 — IT Systems Support.",
      "FNB App Academy — Full Stack Development (React, Node.js, APIs).",
      "HP LIFE — IT for Business, Cybersecurity, Cash Flow.",
    ],
  },
  {
    icon: Users,
    title: "Client & Business Support",
    meta: "User-facing · communication",
    points: [
      "Guided users through resolutions with clear, jargon-free explanations.",
      "Translated technical concepts for non-technical stakeholders.",
      "Applied structured needs analysis to reach root cause quickly.",
    ],
  },
];

const STATS = [
  { value: "NQF L5", label: "IT Systems Support" },
  { value: "Full Stack", label: "FNB App Academy" },
  { value: "3+", label: "Certification tracks" },
  { value: "24h", label: "Typical response time" },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-ink text-ink-foreground">
            <Braces className="size-4" />
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            Kamohelo Ratone
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-ink-foreground transition-transform hover:-translate-y-0.5"
        >
          <Send className="size-3.5" />
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-border bg-[image:var(--gradient-surface)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-28">
        <div className="reveal-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Available for opportunities
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            IT systems support and
            <span className="text-primary"> full stack development</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I am Kamohelo Ratone, a versatile IT professional combining hands-on infrastructure
            support with modern web development. I diagnose faults quickly, build reliable
            software, and keep people working.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              <Send className="size-4" />
              Hire me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              View selected work
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-semibold text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="surface-card reveal-up h-fit p-7">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Profile
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            {[
              { icon: MapPin, label: "Soweto, Gauteng, South Africa" },
              { icon: Phone, label: "+27 84 320 1508" },
              { icon: Mail, label: "kamoheloratone4@gmail.com" },
              { icon: Github, label: "github.com/kamoheloratone4" },
              { icon: GraduationCap, label: "National Senior Certificate, 2021" },
            ].map((row) => (
              <li key={row.label} className="flex items-start gap-3">
                <row.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-foreground/90">{row.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-border pt-5 text-sm italic leading-relaxed text-muted-foreground">
            <Quote className="mr-2 inline size-3.5 text-primary" />
            Reliable, scalable, user-first solutions.
          </p>
        </aside>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="About"
          title="Technical support with a builder's mindset"
          description="Trained in IT systems support and full stack development, I work comfortably on both sides of the problem: the infrastructure that keeps systems available, and the software that makes them useful."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Terminal,
              title: "Diagnose",
              body: "Structured troubleshooting across Linux desktops, networking services and end-user hardware.",
            },
            {
              icon: Database,
              title: "Build",
              body: "React and Node.js applications backed by REST APIs and relational data models.",
            },
            {
              icon: Headset,
              title: "Support",
              body: "Clear communication with non-technical users, from first contact through to resolution.",
            },
          ].map((item) => (
            <article key={item.title} className="surface-card p-6 hover:-translate-y-1">
              <item.icon className="size-5 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Capabilities"
          title="Core skills"
          description="A working toolkit spanning infrastructure, development and service delivery."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <article key={group.title} className="surface-card p-6 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <group.icon className="size-4" />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Award className="size-4 text-primary" />
          NQF L5 Systems Support · FNB App Academy Full Stack · HP LIFE certified
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected projects"
          description="Practical work covering front-end delivery, backend integration and infrastructure practice."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article key={project.title} className="surface-card flex flex-col p-6 hover:-translate-y-1">
              <project.icon className="size-5 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                {project.meta}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Background"
          title="Experience & credentials"
          description="Formal training, certifications and hands-on practice in support environments."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {EXPERIENCE.map((entry) => (
            <article key={entry.title} className="surface-card p-6 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <entry.icon className="size-4" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{entry.title}</h3>
                  <p className="text-xs text-muted-foreground">{entry.meta}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5">
                {entry.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <GitBranch className="mt-0.5 size-3.5 shrink-0 rotate-90 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="surface-card mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 p-6">
          <p className="flex items-center gap-2.5 text-sm">
            <GraduationCap className="size-4 text-primary" />
            <span className="font-medium">National Senior Certificate</span>
            <span className="text-muted-foreground">2021 · Republic of South Africa</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Low-resource environment experience · focused on IT support, web development and
            cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    window.setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 1000);
  };

  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Open to support, development and junior systems roles, on-site in Gauteng or remote."
        />
        <div className="surface-card mt-10 grid gap-10 p-8 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <ul className="space-y-4 text-sm">
              {[
                { icon: Phone, label: "084 320 1508" },
                { icon: Mail, label: "kamoheloratone4@gmail.com" },
                { icon: Github, label: "github.com/kamoheloratone4" },
                { icon: MapPin, label: "8166A Mhlaza St, Zone 6, Pimville, Soweto" },
              ].map((row) => (
                <li key={row.label} className="flex items-start gap-3">
                  <row.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{row.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Github].map((Icon, index) => (
                <a
                  key={index}
                  href="https://github.com/kamoheloratone4"
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Social profile"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">Full name</span>
                <input
                  name="name"
                  required
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">Email address</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {status === "sending" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Send className="size-4" />
              )}
              Send message
            </button>
            {status === "sent" ? (
              <p className="flex items-center gap-2 text-sm font-medium text-primary">
                <Check className="size-4" />
                Message received — I reply within 24 hours.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm">
        <p className="opacity-80">© 2026 Kamohelo Ratone · Systems Support · Full Stack · Business IT</p>
        <a href="#top" className="inline-flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100">
          <ArrowUp className="size-4" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
