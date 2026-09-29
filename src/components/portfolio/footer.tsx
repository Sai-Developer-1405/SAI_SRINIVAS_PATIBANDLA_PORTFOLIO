import { Github, Linkedin, Code2, Terminal } from "lucide-react";
import { navLinks, profile, codingProfiles } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:px-6">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-primary/15 text-primary">
            <Terminal className="size-4" />
          </span>
          SAI SRINIVAS PATIBANDLA
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Github className="size-4.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="size-4.5" />
          </a>
          {codingProfiles.slice(1).map((p) => (
            <a
              key={p.platform}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              aria-label={p.platform}
              className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Code2 className="size-4.5" />
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          © {year} Sai Srinivas Patibandla. Built with curiosity, code, and continuous learning.
        </p>
      </div>
    </footer>
  );
}
