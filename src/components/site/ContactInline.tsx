import { Mail, Phone, MessageCircle } from "lucide-react";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Rând compact cu canalele de contact, folosit în CTA-uri și pagini de formular.
 */
export function ContactInline({
  invert = false,
  className,
  showLabels = true,
}: {
  invert?: boolean;
  className?: string;
  showLabels?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const tone = invert ? "text-cream hover:text-cream" : "text-foreground hover:text-primary";

  return (
    <div className={cn("flex flex-wrap items-center gap-x-2 gap-y-1", className)}>
      <a
        href={contact.emailHref}
        aria-label="Trimite un e-mail către Experience for All"
        className={cn(base, tone)}
      >
        <Mail className="size-4" aria-hidden="true" />
        {showLabels ? contact.email : "E-mail"}
      </a>
      <a
        href={contact.phoneHref}
        aria-label="Sună Experience for All"
        className={cn(base, tone)}
      >
        <Phone className="size-4" aria-hidden="true" />
        {contact.phoneDisplay}
      </a>
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactează Experience for All pe WhatsApp"
        className={cn(base, tone)}
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
