import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/Logo";
import { ContactInline } from "@/components/site/ContactInline";

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "deep" | "sand";
  id?: string;
}) {
  const tones = {
    default: "bg-background text-foreground",
    muted: "bg-muted text-foreground",
    sand: "bg-sand text-forest-deep",
    deep: "gradient-depth text-cream",
  } as const;
  return (
    <section id={id} className={cn("py-20 md:py-28", tones[tone], className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className={cn("text-eyebrow mb-4", invert ? "text-cream/70" : "text-primary")}>
          {eyebrow}
        </p>
      )}
      <h2 className="display-lg">{title}</h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            invert ? "text-cream/80" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  if (image) {
    return (
      <section className="relative isolate overflow-hidden">
        <img
          src={image}
          alt={imageAlt ?? ""}
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="image-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-24 text-cream md:py-36">
          <p className="text-eyebrow text-cream/75">{eyebrow}</p>
          <h1 className="display-xl mt-5 max-w-4xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg text-cream/85">{intro}</p>}
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
      </section>
    );
  }
  return (
    <section className="border-b border-border bg-muted">
      <div className="container-page py-16 md:py-24">
        <p className="text-eyebrow text-primary">{eyebrow}</p>
        <h1 className="display-xl mt-5 max-w-4xl">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        )}
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-5 text-base leading-relaxed text-foreground/85">
      {children}
    </div>
  );
}

export function ListCheck({ items, invert = false }: { items: string[]; invert?: boolean }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={cn(
              "mt-2 size-1.5 shrink-0 rounded-full",
              invert ? "bg-accent" : "bg-primary",
            )}
          />
          <span className={cn("text-base", invert ? "text-cream/85" : "text-foreground/85")}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function FinalCTA() {
  return (
    <section className="gradient-depth text-cream">
      <div className="container-page py-24 text-center md:py-32">
        <Reveal>
          <div className="flex justify-center">
            <Logo onDark className="h-10 w-auto" />
          </div>
          <p className="text-eyebrow mt-8 text-cream/70">Final</p>
          <h2 className="display-lg mx-auto mt-5 max-w-3xl">
            Ce experiență putem crea împreună?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/80">
            Nu avem nevoie doar de resurse. Avem nevoie de oameni care construiesc următoarea
            experiență alături de noi.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="cta" size="lg">
              <Link to="/implica-te/doneaza">Donează</Link>
            </Button>
            <Button asChild variant="onImage" size="lg">
              <Link to="/implica-te/voluntariat">Devino voluntar</Link>
            </Button>
            <Button asChild variant="onImage" size="lg">
              <Link to="/implica-te/parteneri">Devino partener</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-cream/70">Ai întrebări înainte să te implici?</p>
          <ContactInline invert className="mt-1 justify-center" />
        </Reveal>

      </div>
    </section>
  );
}
