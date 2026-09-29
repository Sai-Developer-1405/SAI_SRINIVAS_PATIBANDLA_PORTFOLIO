import { GraduationCap, Building2 } from "lucide-react";
import { education } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./section";
import { Reveal } from "./reveal";

export function Education() {
  return (
    <Section id="education" className="border-t border-border/60">
      <SectionHeader
        label="Education"
        title="My Academic Journey"
        subtitle="A strong foundation in Computer Science and continuous learning."
      />

      <div className="relative mx-auto max-w-2xl">
        <div aria-hidden className="absolute left-6 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-secondary to-transparent sm:left-1/2" />

        <ol className="space-y-8">
          {education.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 120}>
                <div
                  className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                    i % 2 === 0 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="sm:w-1/2">
                    <article className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-display text-base font-semibold sm:text-lg">{item.title}</h3>
                        <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                      <p className="mt-3 inline-flex rounded-md bg-chart-4/10 px-2.5 py-1 text-xs font-semibold text-chart-4">
                        {item.grade}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                    </article>
                  </div>

                  <div className="absolute left-6 top-6 -translate-x-1/2 sm:left-1/2">
                    <span
                      className={`grid size-12 place-items-center rounded-full border shadow-lg shadow-black/30 ${
                        i % 2 === 0
                          ? "border-primary/40 bg-primary/15 text-primary"
                          : "border-secondary/40 bg-secondary/15 text-secondary"
                      }`}
                    >
                      {i % 2 === 0 ? <GraduationCap className="size-5" /> : <Building2 className="size-5" />}
                    </span>
                  </div>

                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
