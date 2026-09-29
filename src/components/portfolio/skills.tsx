import {
  Code2, Box, Globe, Coffee, Brain, Database, Cog, Wrench, Sparkles, type LucideIcon,
} from "lucide-react";
import { skillCategories, type SkillCategory } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./section";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const iconMap: Record<SkillCategory["icon"], LucideIcon> = {
  code: Code2,
  box: Box,
  globe: Globe,
  coffee: Coffee,
  brain: Brain,
  database: Database,
  cog: Cog,
  wrench: Wrench,
  sparkles: Sparkles,
};

const accents = ["text-chart-1", "text-chart-2", "text-chart-3", "text-chart-4", "text-chart-5"];
const accentBgs = ["bg-chart-1/10 border-chart-1/30", "bg-chart-2/10 border-chart-2/30", "bg-chart-3/10 border-chart-3/30", "bg-chart-4/10 border-chart-4/30", "bg-chart-5/10 border-chart-5/30"];

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border/60">
      <SectionHeader
        label="Skills"
        title="My Technical Skills"
        subtitle="A diverse set of technologies and tools to build real-world solutions."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => {
          const Icon = iconMap[category.icon];
          const accent = accents[i % accents.length];
          const accentBg = accentBgs[i % accents.length];
          return (
            <Reveal key={category.title} delay={(i % 3) * 90}>
              <article className="group h-full rounded-2xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex items-center gap-3">
                  <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl border transition-transform group-hover:scale-110", accentBg)}>
                    <Icon className={cn("size-5", accent)} />
                  </span>
                  <h3 className="font-display text-sm font-semibold sm:text-base">{category.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isHighlight = category.highlights.includes(skill);
                    return (
                      <li key={skill}>
                        <span
                          className={cn(
                            "inline-block rounded-lg border px-2.5 py-1 text-xs font-medium transition-transform hover:scale-105",
                            isHighlight
                              ? "border-primary/40 bg-primary/15 text-primary"
                              : "border-border bg-muted/40 text-muted-foreground"
                          )}
                        >
                          {skill}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
