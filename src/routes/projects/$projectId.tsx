import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Github, ListChecks, Layers, ServerCog, AlertTriangle, Sparkles } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/$projectId")({
  head: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    const title = project ? `${project.title} | Sai Srinivas Patibandla` : "Project | Sai Srinivas Patibandla";
    const description = project?.short ?? "Project by Sai Srinivas Patibandla.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { projectId } = Route.useParams();
  const project = projects.find((p) => p.id === projectId);
  const [tab, setTab] = useState<"overview" | "features" | "tech" | "architecture">("overview");

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center px-4 py-32 text-center">
          <div>
            <h1 className="font-display text-2xl font-bold">Project not found</h1>
            <p className="mt-2 text-sm text-muted-foreground">This project doesn&apos;t exist or has been moved.</p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Back to home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const tabs: { id: typeof tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Key Features" },
    { id: "tech", label: "Tech Stack" },
    ...(project.architecture ? [{ id: "architecture" as const, label: "Architecture" }] : []),
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ChevronLeft className="size-4" />
            Back to Projects
          </Link>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/40">
            <img
              src={project.image}
              alt={`Abstract visual for ${project.title}`}
              width={1200}
              height={752}
              className="aspect-[16/7] w-full object-cover"
            />
          </div>

          <h1 className="mt-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t}>
                <span className="inline-block rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
                  {t}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{project.short}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Github className="size-4" />
              View on GitHub
            </a>
            <span className="font-mono text-xs text-muted-foreground">{project.filters.join(" · ")}</span>
          </div>

          {project.highlightNote ? (
            <p className="mt-6 flex items-start gap-2 rounded-xl border border-chart-4/30 bg-chart-4/10 px-4 py-3 text-sm text-foreground/90">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-chart-4" />
              {project.highlightNote}
            </p>
          ) : null}

          {project.disclaimer ? (
            <p className="mt-4 flex items-start gap-2 rounded-xl border border-chart-3/30 bg-chart-3/10 px-4 py-3 text-sm text-foreground/90">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-chart-3" />
              {project.disclaimer}
            </p>
          ) : null}

          <div className="mt-10 border-b border-border">
            <div role="tablist" aria-label="Project information" className="flex gap-1 overflow-x-auto">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={cn(
                    "shrink-0 rounded-t-lg border-b-2 px-4 py-3 text-sm font-medium transition-colors",
                    tab === t.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div role="tabpanel" className="py-8">
            {tab === "overview" ? (
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{project.overview}</p>
            ) : null}

            {tab === "features" ? (
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 rounded-xl border border-border bg-card/60 px-4 py-3 text-sm">
                    <ListChecks className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            ) : null}

            {tab === "tech" ? (
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t}>
                    <span className="inline-block rounded-lg border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}

            {tab === "architecture" && project.architecture ? (
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.architecture.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 rounded-xl border border-border bg-card/60 px-4 py-3 text-sm">
                    <ServerCog className="mt-0.5 size-4 shrink-0 text-secondary" />
                    {a}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
            <h2 className="flex items-center gap-2 font-display text-sm font-semibold text-primary">
              <Layers className="size-4" />
              More from this stack
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore the rest of the portfolio to see projects across .NET, Java, AI/ML, and blockchain.
            </p>
            <Link
              to="/"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
            >
              <ChevronLeft className="size-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
