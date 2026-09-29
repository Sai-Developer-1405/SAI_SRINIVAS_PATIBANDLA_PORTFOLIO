import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
        {label}
      </span>
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className={cn("max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
