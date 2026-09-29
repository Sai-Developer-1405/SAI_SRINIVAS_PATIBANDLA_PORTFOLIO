import { useEffect, useState } from "react";
import { FolderKanban, Download, Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import portrait from "@/assets/portrait.png";

const heroChips = [
  { label: ".NET", className: "left-[2%] top-[12%] text-chart-1 border-chart-1/40 bg-chart-1/10", delay: "float-slow" },
  { label: "Java", className: "left-[-2%] top-[38%] text-chart-2 border-chart-2/40 bg-chart-2/10", delay: "float-slower" },
  { label: "React", className: "left-[4%] top-[64%] text-primary border-primary/40 bg-primary/10", delay: "float-slow" },
  { label: "Python", className: "right-[0%] top-[22%] text-chart-4 border-chart-4/40 bg-chart-4/10", delay: "float-slower" },
  { label: "AI / ML", className: "right-[2%] top-[58%] text-secondary border-secondary/40 bg-secondary/10", delay: "float-slow" },
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % profile.rotatingPhrases.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="dev-grid relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-40 h-[380px] w-[380px] rounded-full bg-secondary/15 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col items-start gap-6">
          <p className="font-mono text-sm text-primary">
            <span className="text-secondary">{"<"}</span> Hello, world <span className="text-secondary">{"/>"}</span>
          </p>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m
            <span className="mt-1 block text-gradient">{profile.name}</span>
          </h1>

          <p className="font-display text-xl font-semibold text-foreground/95 sm:text-2xl">{profile.role}</p>

          <p className="flex min-h-7 items-center gap-2 text-sm text-muted-foreground sm:text-base">
            <span className="inline-block size-2 rounded-full bg-chart-4" aria-hidden />
            <span className="font-mono">{profile.rotatingPhrases[phraseIndex]}</span>
            <span className="caret font-mono text-primary">|</span>
          </p>

          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{profile.intro}</p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="glow-primary inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <FolderKanban className="size-4" />
              View My Projects
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:bg-accent"
            >
              <Mail className="size-4" />
              Let&apos;s Connect
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid size-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Github className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid size-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute inset-0 -m-6 rounded-full bg-primary/20 blur-3xl" />
          <div aria-hidden className="pulse-ring absolute inset-0 -m-4 rounded-full border border-primary/40" />
          <div className="relative overflow-hidden rounded-full border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent p-3">
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width={768}
              height={768}
              className="aspect-square w-full rounded-full object-cover object-top"
            />
          </div>

          {heroChips.map((chip) => (
            <span
              key={chip.label}
              className={`absolute z-10 rounded-full border px-3 py-1.5 font-mono text-xs font-semibold backdrop-blur-sm ${chip.className} ${chip.delay}`}
            >
              {chip.label}
            </span>
          ))}

          <div className="mt-8 rounded-xl border border-border bg-card/80 p-4 font-mono text-xs leading-relaxed shadow-xl shadow-black/30 backdrop-blur">
            <div className="flex items-center gap-1.5 pb-3">
              <span className="size-2.5 rounded-full bg-chart-5/70" />
              <span className="size-2.5 rounded-full bg-chart-3/70" />
              <span className="size-2.5 rounded-full bg-chart-4/70" />
              <span className="ml-2 text-muted-foreground">developer.ts</span>
            </div>
            <code className="block text-muted-foreground">
              <span className="text-secondary">const</span> <span className="text-primary">developer</span> = {"{"}
            </code>
            <code className="block pl-4 text-muted-foreground">
              name: <span className="text-chart-3">&quot;Sai Srinivas&quot;</span>,
            </code>
            <code className="block pl-4 text-muted-foreground">
              role: <span className="text-chart-3">&quot;Aspiring Developer&quot;</span>,
            </code>
            <code className="block pl-4 text-muted-foreground">
              focus: [<span className="text-chart-4">&quot;build&quot;</span>, <span className="text-chart-4">&quot;learn&quot;</span>, <span className="text-chart-4">&quot;grow&quot;</span>],
            </code>
            <code className="block text-muted-foreground">{"};"}</code>
          </div>
        </div>
      </div>
    </section>
  );
}
