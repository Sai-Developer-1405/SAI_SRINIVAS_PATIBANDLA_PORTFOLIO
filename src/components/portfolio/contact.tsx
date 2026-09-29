import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, Code2, Terminal, Loader2 } from "lucide-react";
import { profile, codingProfiles } from "@/lib/portfolio-data";
import { Section } from "./section";
import { Reveal } from "./reveal";

// EmailJS is a publishable (client-safe) integration — no private keys here.
const EMAILJS_SERVICE_ID = "service_7kzpgda";
const EMAILJS_TEMPLATE_ID = "template_s0nsgxo";
const EMAILJS_PUBLIC_KEY = "X91W4JJjEYMqLpVPX";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      aria-label={`Copy ${value}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          setCopied(false);
        }
      }}
      className="text-muted-foreground transition-colors hover:text-primary"
    >
      {copied ? <Check className="size-4 text-chart-4" /> : <Copy className="size-4" />}
    </button>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          message: form.message.trim(),
          to_name: profile.name,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError(
        "Something went wrong sending your message. Please try again or email me directly.",
      );
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-input/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/30";

  return (
    <Section id="contact" className="border-t border-border/60">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build <span className="text-gradient">Something Great</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Looking for an opportunity to start my professional journey, contribute to real-world software
            projects, and continue growing as a developer.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Mail className="size-4" />
              </span>
              <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                <a href={`mailto:${profile.email}`} className="truncate text-sm hover:text-primary">
                  {profile.email}
                </a>
                <CopyButton value={profile.email} />
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-secondary/30 bg-secondary/10 text-secondary">
                <Phone className="size-4" />
              </span>
              <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="truncate text-sm hover:text-primary">
                  {profile.phone}
                </a>
                <CopyButton value={profile.phone} />
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-chart-4/30 bg-chart-4/10 text-chart-4">
                <MapPin className="size-4" />
              </span>
              <p className="text-sm">{profile.location}</p>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Github className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="size-5" />
            </a>
            {codingProfiles.slice(1).map((p) => (
              <a
                key={p.platform}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                aria-label={p.platform}
                className="grid size-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Code2 className="size-5" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Your Message
              </label>
              <textarea
                id="contact-message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hi Sai, I'd like to discuss an opportunity..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {error ? (
              <p role="alert" className="mt-3 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                {error}
              </p>
            ) : null}
            {sent ? (
              <p role="status" className="mt-3 rounded-lg border border-chart-4/40 bg-chart-4/10 px-3 py-2 text-xs text-chart-4">
                Message sent! I&apos;ll get back to you at your email address.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={sending}
              className="glow-primary mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {sending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
              {sending ? "Sending..." : "Send Message"}
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
              <Terminal className="size-3" />
              Delivered straight to my inbox via EmailJS — nothing is stored on this site.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
