import { Code2, ExternalLink } from "lucide-react";
import { codingProfiles } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./section";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function CodingProfiles() {
  return (
    <Section id="profiles" className="border-t border-border/60">
      <SectionHeader
        label="Coding Profiles"
        title="My Online Profiles"
        subtitle="Connect with me on various developer platforms."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {codingProfiles.map((p, i) => (
          <Reveal key={p.platform} delay={i * 90}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card/60 p-6 text-center transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <span
                className={cn(
                  "grid size-16 place-items-center rounded-2xl border bg-muted/40 font-display text-lg font-bold ring-2 ring-inset transition-transform group-hover:scale-110",
                  p.accent,
                  p.ring
                )}
              >
                {p.monogram}
              </span>
              <h3 className="font-display text-base font-semibold">{p.platform}</h3>
              <p className="font-mono text-xs text-muted-foreground">{p.username}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ExternalLink className="size-3.5" />
                View Profile
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <p className="mx-auto max-w-xl rounded-xl border border-border bg-card/50 px-6 py-4 text-center text-sm italic text-muted-foreground">
          <Code2 className="mr-2 inline size-4 text-primary" />
          Consistent practice and continuous learning help me improve my problem-solving skills.
        </p>
      </Reveal>
    </Section>
  );
}
