import { Target, Quote } from "lucide-react";
import { profile, stats, currentGoal } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./section";
import { Reveal } from "./reveal";
import aboutDesk from "@/assets/about-desk.jpg";
import { Download } from "lucide-react";

export function About() {
  return (
    <Section id="about" className="border-t border-border/60">
      <SectionHeader
        label="About Me"
        title={
          <>
            Turning Ideas into <span className="text-gradient">Real-World Solutions</span>
          </>
        }
      />

      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.aboutText.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-6 flex gap-3 rounded-xl border border-primary/25 bg-primary/5 p-4">
            <Quote className="size-5 shrink-0 text-primary" />
            <p className="text-sm italic text-foreground/85">
              Always eager to learn, build, and contribute to innovative solutions that make a real impact.
            </p>
          </blockquote>

          <div className="mt-6 rounded-xl border border-secondary/30 bg-secondary/5 p-5">
            <div className="flex items-center gap-2">
              <Target className="size-4 text-secondary" />
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-secondary">
                Current Goal
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Seeking: {currentGoal.join(", ")}.
            </p>
          </div>

          <a
            href={profile.resumePath}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            <Download className="size-4" />
            Download Resume
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/40">
            <img
              src={aboutDesk}
              alt="Sai working on code at a multi-monitor desk"
              width={1200}
              height={752}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90}>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
