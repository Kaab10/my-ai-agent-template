{% raw %}import Link from "next/link";
import { ArrowUpRight, Database, MessageSquare, Sparkles, Star, Wrench } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { AnimatedNumber } from "./animated-number";
import { HeroDemo } from "./hero-demo";
import { Section } from "./section";

interface HeroStats {
  value: string;
  label: string;
}

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  eyebrow?: string;
  /** Headline supports `<em>` for italic accent emphasis. */
  title: ReactNode;
  description: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  /** Social-proof line shown next to the avatar stack + stars. */
  ratingLabel?: string;
  /** Reassurance microcopy under the CTAs (e.g. "No credit card required"). */
  trustNote?: string;
  stats?: HeroStats[];
  theme?: "light" | "dark";
}

/** Decorative avatar stack — initials only, no images needed. */
const AVATARS = ["AK", "MR", "JP", "SL", "DN"];

const FLOAT_PILLS = [
  {
    icon: MessageSquare,
    label: "Real-time chat",
    className: "left-[-12px] top-12 md:left-[-32px] md:top-16 float-y",
  },
  {
    icon: Database,
    label: "Connected to your data",
    className: "right-[-8px] top-24 md:right-[-40px] md:top-28 float-y-delayed",
  },
  {
    icon: Wrench,
    label: "Acts on your behalf",
    className: "left-[8%] bottom-[-18px] md:left-[12%] md:bottom-[-24px] float-y-delayed",
  },
  {
    icon: Sparkles,
    label: "Always on",
    className: "right-[10%] bottom-[-12px] md:right-[12%] md:bottom-[-20px] float-y",
  },
];

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  ratingLabel,
  trustNote,
  stats,
  theme = "dark",
}: HeroProps) {
  return (
    <Section
      theme={theme}
      padding="pt-24 pb-16 md:pt-28 md:pb-24"
      className="spotlight-bg grain relative overflow-hidden"
    >
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "oklch(from var(--color-brand) l c h / 0.22)" }}
      />

      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:text-left">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {eyebrow && (
            <div className="eyebrow text-foreground/70 border-foreground/15 bg-foreground/[0.04] mb-7 inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
              <span
                aria-hidden
                className="bg-brand inline-block h-1.5 w-1.5 rounded-full"
              />
              {eyebrow}
            </div>
          )}

          <h1 className="text-display-2xl text-foreground [&_em]:font-accent [&_em]:text-brand max-w-3xl tracking-tight [&_em]:font-normal [&_em]:italic">
            {title}
          </h1>

          <p className="text-foreground/70 mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href={primaryCta.href}
              className="bg-brand text-brand-foreground hover:bg-brand-hover group inline-flex items-center gap-3 rounded-full py-2.5 pr-2 pl-7 text-base font-medium shadow-[0_12px_32px_-16px_oklch(from_var(--color-brand)_l_c_h_/_0.9)] transition-colors"
            >
              <span>{primaryCta.label}</span>
              <span className="bg-brand-foreground/15 text-brand-foreground flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="border-foreground/20 hover:border-foreground/45 hover:bg-foreground/[0.04] text-foreground inline-flex items-center gap-2 rounded-full border px-6 py-3 text-base font-medium transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>

          {trustNote && (
            <p className="text-foreground/50 mt-5 font-mono text-xs tracking-wide">{trustNote}</p>
          )}

          {ratingLabel && (
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start">
              <div className="flex -space-x-2.5">
                {AVATARS.map((initials, i) => (
                  <span
                    key={initials}
                    aria-hidden
                    className="border-background text-brand-foreground flex h-9 w-9 items-center justify-center rounded-full border-2 font-mono text-[0.6rem] font-semibold"
                    style={{
                      background: `linear-gradient(135deg, oklch(from var(--color-brand) l c calc(h + ${i * 28})), oklch(from var(--color-brand) calc(l - 0.12) c calc(h + ${i * 28})))`,
                    }}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="fill-brand text-brand h-4 w-4" />
                  ))}
                </div>
                <p className="text-foreground/60 mt-1 text-xs">{ratingLabel}</p>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-x-8 top-1/4 -z-10 h-1/2 rounded-full blur-3xl"
            style={{ background: "oklch(from var(--color-brand) l c h / 0.2)" }}
          />

          <div className="tilt-3d transition-transform">
            <HeroDemo />
          </div>

          {FLOAT_PILLS.map((pill) => (
            <div
              key={pill.label}
              className={cn(
                "border-foreground/15 bg-card/90 text-foreground absolute hidden items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium shadow-lg backdrop-blur-md md:inline-flex",
                pill.className,
              )}
            >
              <span className="bg-brand text-brand-foreground flex h-6 w-6 items-center justify-center rounded-full">
                <pill.icon className="h-3.5 w-3.5" />
              </span>
              {pill.label}
            </div>
          ))}
        </div>
      </div>

      {stats && stats.length > 0 && (
        <dl className="border-foreground/10 mx-auto mt-16 grid max-w-5xl grid-cols-3 gap-2 border-t pt-10 md:mt-20 md:gap-0 md:divide-x md:divide-[color-mix(in_oklab,var(--color-foreground)_12%,transparent)] md:border-b md:pt-0 md:pb-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-3 text-center md:px-8 md:py-8">
              <dt className="text-foreground font-mono text-3xl font-medium tracking-tight md:text-4xl">
                <AnimatedNumber value={stat.value} />
              </dt>
              <dd className="eyebrow text-foreground/55 mt-2">{stat.label}</dd>
            </div>
          ))}
        </dl>
      )}
    </Section>
  );
}
{% endraw %}
