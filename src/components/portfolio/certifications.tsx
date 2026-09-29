import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./section";
import { Reveal } from "./reveal";

export function Certifications() {
  return (
    <Section id="certifications" className="border-t border-border/60">
      <SectionHeader
        label="Certifications"
        title="My Certifications"
        subtitle="Continuous learning to stay updated with modern technologies."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={(i % 5) * 70}>
            <article className="group flex h-full flex-col gap-2 rounded-2xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex items-start justify-between gap-2">
                <span className="grid size-10 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Award className="size-5" />
                </span>
                <BadgeCheck className="size-4 text-chart-4" aria-label="Verified certification" />
              </div>
              <h3 className="mt-1 font-display text-sm font-semibold leading-snug">{cert.name}</h3>
              <p className="mt-auto text-xs text-muted-foreground">{cert.issuer}</p>
              <p className="font-mono text-[11px] text-muted-foreground/80">{cert.date}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
