import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mainNav = [
  { to: "/despre", label: "Despre" },
  { to: "/experiente", label: "Experiențe" },
  { to: "/cum-invatam", label: "Cum învățăm" },
  { to: "/impact", label: "Impact" },
  { to: "/povesti", label: "Povești" },
  { to: "/evenimente", label: "Evenimente" },
] as const;

const involveNav = [
  { to: "/implica-te/doneaza", label: "Donează" },
  { to: "/implica-te/voluntariat", label: "Devino voluntar" },
  { to: "/implica-te/ofera-o-experienta", label: "Oferă o experiență" },
  { to: "/implica-te/parteneri", label: "Devino partener" },
] as const;

const secondaryNav = [
  { to: "/transparenta", label: "Transparență" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [involveOpen, setInvolveOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <a
        href="#continut"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Sari la conținut
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-base font-extrabold uppercase tracking-[0.14em] text-primary">
            Experience
          </span>
          <span className="font-display text-base font-extrabold uppercase tracking-[0.14em] text-foreground">
            for All
          </span>
        </Link>

        <nav aria-label="Navigație principală" className="hidden items-center gap-1 xl:flex">
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setInvolveOpen(true)}
            onMouseLeave={() => setInvolveOpen(false)}
          >
            <button
              type="button"
              aria-expanded={involveOpen}
              onClick={() => setInvolveOpen((v) => !v)}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              Implică-te
              <ChevronDown className="size-4" aria-hidden="true" />
            </button>
            {involveOpen && (
              <div className="absolute right-0 top-full w-60 pt-2">
                <ul className="surface-card overflow-hidden p-1">
                  {involveNav.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setInvolveOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-secondary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {secondaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="cta" size="sm" className="hidden sm:inline-flex">
            <Link to="/implica-te/doneaza">Donează</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border xl:hidden"
            aria-expanded={open}
            aria-controls="meniu-mobil"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="meniu-mobil"
        className={cn("border-t border-border bg-background xl:hidden", open ? "block" : "hidden")}
      >
        <nav aria-label="Navigație mobilă" className="container-page grid gap-1 py-4">
          {[...mainNav, ...secondaryNav].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground/85 hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
          <p className="text-eyebrow px-3 pt-4 text-muted-foreground">Implică-te</p>
          {involveNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground/85 hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="cta" className="mt-3">
            <Link to="/implica-te/doneaza" onClick={() => setOpen(false)}>
              Donează
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
