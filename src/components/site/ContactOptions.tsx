import { Mail, Phone } from "lucide-react";
import { contact } from "@/data/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

/**
 * Secțiunea unică de contact direct (WhatsApp, telefon, e-mail) — înlocuiește formularele.
 */
export function ContactOptions({ title, intro }: { title?: string; intro?: string }) {
  const card =
    "group flex min-h-24 items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  return (
    <div className="surface-card p-6 md:p-8">
      {title && <h3 className="font-display text-xl font-bold">{title}</h3>}
      <p className="mt-2 text-sm text-muted-foreground">
        {intro ?? "Alege canalul preferat — îți răspundem cât mai repede."}
      </p>

      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactează Experience for All pe WhatsApp (se deschide într-o filă nouă)"
        className="mt-6 flex min-h-14 items-center justify-center gap-3 rounded-xl bg-whatsapp px-6 py-4 font-display text-base font-bold text-whatsapp-foreground shadow-md transition-all hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="size-6" />
        Contactează-ne pe WhatsApp
      </a>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Cea mai rapidă cale — mesaj instant la {contact.phoneDisplay}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a href={contact.phoneHref} aria-label={`Sună Experience for All la ${contact.phoneDisplay}`} className={card}>
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Phone className="size-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs text-muted-foreground">Telefon</span>
            <span className="block font-display font-bold group-hover:text-primary">
              {contact.phoneDisplay}
            </span>
            <span className="block text-xs text-muted-foreground">Apasă pentru a suna</span>
          </span>
        </a>
        <a href={contact.emailHref} aria-label={`Trimite un e-mail la ${contact.email}`} className={card}>
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Mail className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-xs text-muted-foreground">E-mail</span>
            <span className="block break-all font-display text-sm font-bold group-hover:text-primary">
              {contact.email}
            </span>
            <span className="block text-xs text-muted-foreground">Se deschide aplicația de e-mail</span>
          </span>
        </a>
      </div>
    </div>
  );
}
