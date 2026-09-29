import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ExternalLink, Github, Layers } from "lucide-react";
import { projects, projectFilters, projectExperienceNote } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./section";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.filters.includes(filter));

  return (
    <Section id="projects" className="dev-grid border-t border-border/60">
      <SectionHeader
        label="Projects"
        title="Featured Projects"
        subtitle="A showcase of my hands-on development experience across multiple technologies."
      />

      <Reveal>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm italic text-muted-foreground">
          {projectExperienceNote}
        </p>
      </Reveal>

      <Reveal>
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by technology">
          {["All", ...projectFilters].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-semibold transition-all sm:text-sm",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border-border bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 90} className={cn(i === 0 && filter === "All" && "md:col-span-2 lg:col-span-1")}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`Abstract visual for ${project.title}`}
                  width={1200}
                  height={752}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.short}</p>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <li key={t}>
                      <span className="inline-block rounded-md border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary">
                        {t}
                      </span>
                    </li>
                  ))}
                  {project.tech.length > 4 ? (
                    <li>
                      <span className="inline-block rounded-md border border-border bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    </li>
                  ) : null}
                </ul>

                <div className="flex items-center gap-2 pt-2">
                  <Link
                    to="/projects/$projectId"
                    params={{ projectId: project.id }}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary/90 px-3 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary"
                  >
                    <Layers className="size-3.5" />
                    View Details
                  </Link>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Github className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <a
          href="https://github.com/Sai-Developer-1405"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
        >
          <ExternalLink className="size-4" />
          View All GitHub Projects
        </a>
      </Reveal>
    </Section>
  );
}
