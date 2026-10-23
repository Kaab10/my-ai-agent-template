{% raw %}import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { AnimatedNumber } from "./animated-number";

interface FinalCtaProps {
  /** Big animated stat displayed above the headline. */
  stat: { value: string; label: string };
  /** Headline below the stat — supports `<em>` for italic accent. */
  title: ReactNode;
  /** Optional reassurance line under the buttons. */
  description?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function FinalCta({ stat, title, description, primary, secondary }: FinalCtaProps) {
  return (
    <div className="border-foreground/10 from-brand/[0.08] via-background to-background relative isolate overflow-hidden rounded-[2rem] border bg-gradient-to-br px-8 py-16 md:px-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -right-32 -z-10 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(from var(--color-brand) l c h / 0.4), transparent 65%)",
        }}
      />
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 -z-10 opacity-40" />

      <div className="mx-auto max-w-3xl text-center md:text-left">
        <div className="eyebrow text-foreground/60 mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1">
          <span
            aria-hidden
            className="bg-brand h-1.5 w-1.5 animate-pulse rounded-full"
            style={{ boxShadow: "0 0 12px var(--color-brand)" }}
          />
          {stat.label}
        </div>

        <div className="text-brand font-mono text-[clamp(4rem,14vw,9.5rem)] leading-[0.9] font-medium tracking-tighter">
          <AnimatedNumber value={stat.value} durationMs={1400} />
        </div>

        <h2 className="text-display-lg text-foreground [&_em]:font-accent [&_em]:text-brand mt-8 max-w-2xl md:mx-0 mx-auto [&_em]:font-normal [&_em]:italic">
          {title}
        </h2>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <Link
            href={primary.href}
            className="bg-brand text-brand-foreground hover:bg-brand-hover group inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-base font-medium shadow-[0_12px_28px_-16px_oklch(from_var(--color-brand)_l_c_h_/_0.9)] transition-colors"
          >
            <span>{primary.label}</span>
            <span className="bg-brand-foreground/15 text-brand-foreground flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="border-foreground/20 hover:border-foreground/45 hover:bg-foreground/[0.04] text-foreground inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-base font-medium transition-colors"
            >
              {secondary.label}
            </Link>
          )}
        </div>

        {description && (
          <p className="text-foreground/50 mt-6 font-mono text-xs tracking-wide">{description}</p>
        )}
      </div>
    </div>
  );
}
{% endraw %}
