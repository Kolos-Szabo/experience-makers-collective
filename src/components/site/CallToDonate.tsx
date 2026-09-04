import { Phone } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";

/**
 * Buton telefonic reutilizabil. Donațiile se fac exclusiv prin telefon —
 * nu există plată online, cont bancar sau altă metodă pe site.
 */
export function CallButton({
  label = "Sună-ne pentru mai multe informații",
  variant = "cta",
  size = "lg",
  className,
  showNumber = false,
}: {
  label?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  showNumber?: boolean;
}) {
  return (
    <Button asChild variant={variant} size={size} className={cn("min-h-11", className)}>
      <a href={contact.phoneHref} aria-label={`${label} — ${contact.phoneDisplay}`}>
        <Phone className="size-4" aria-hidden="true" />
        {showNumber ? contact.phoneDisplay : label}
      </a>
    </Button>
  );
}

/** Card compact: explică de ce donația se face prin telefon. */
export function DonateCallCard({
  className,
  delay = 0,
  title = "Vrei să susții Experience for All?",
}: {
  className?: string;
  delay?: number;
  title?: string;
}) {
  return (
    <Reveal className={cn("surface-card p-7", className)} delay={delay}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Momentan nu avem donații online. Sună-ne și îți explicăm personal cum poți face o donație și
        cum poți contribui la proiect.
      </p>
      <CallButton className="mt-5 w-full" />
      <a
        href={contact.phoneHref}
        className="mt-3 block text-center text-sm font-medium text-primary underline-offset-4 hover:underline"
        aria-label={`Sună Experience for All la ${contact.phoneDisplay}`}
      >
        {contact.phoneDisplay}
      </a>
    </Reveal>
  );
}

/** Bandă full-width pe fundal închis, pentru finalul paginilor cheie. */
export function DonateCallBanner() {
  return (
    <section className="gradient-depth text-cream">
      <div className="container-page py-16 text-center md:py-20">
        <Reveal>
          <p className="text-eyebrow text-cream/70">Susține proiectul</p>
          <h2 className="display-md mx-auto mt-4 max-w-2xl">
            Vrei să susții Experience for All?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Nu avem încă donații online. Sună-ne la {contact.phoneDisplay} și îți explicăm personal
            cum poți face o donație și cum poți contribui la proiect.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CallButton size="xl" />
            <CallButton
              label="Sună acum"
              variant="onImage"
              size="xl"
              showNumber
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
