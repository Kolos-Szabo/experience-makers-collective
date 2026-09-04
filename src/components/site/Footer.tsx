import { Link } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { org, contact } from "@/data/site";
import { Logo } from "@/components/site/Logo";

const columns = [
  {
    title: "Program",
    links: [
      { to: "/despre", label: "Despre noi" },
      { to: "/experiente", label: "Experiențe" },
      { to: "/cum-invatam", label: "Cum învățăm" },
      { to: "/galerie", label: "Galerie" },
      { to: "/resurse", label: "Learning Hub" },
    ],
  },
  {
    title: "Implică-te",
    links: [
      { to: "/implica-te/doneaza", label: "Donează" },
      { to: "/implica-te/voluntariat", label: "Voluntariat" },
      { to: "/implica-te/ofera-o-experienta", label: "Oferă o experiență" },
      { to: "/implica-te/parteneri", label: "Devino partener" },
    ],
  },
  {
    title: "Responsabilitate",
    links: [
      { to: "/impact", label: "Impact" },
      { to: "/transparenta", label: "Transparență" },
      { to: "/siguranta", label: "Siguranța copiilor" },
      { to: "/legal/protectia-copilului", label: "Protecția imaginii" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-forest-deep text-cream">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo onDark className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/75">
            Fiecare copil merită șansa de a trăi experiențe extraordinare, de a învăța prin ele și
            de a descoperi de ce este capabil.
          </p>
          <h2 className="text-eyebrow mt-8 text-cream/60">Contact</h2>
          <address className="mt-3 space-y-2 text-sm not-italic text-cream/85">
            <div>
              <a
                href={contact.emailHref}
                aria-label="Trimite un e-mail către Experience for All"
                className="inline-flex items-center gap-2 underline-offset-4 hover:text-cream hover:underline"
              >
                <Mail className="size-4" aria-hidden="true" />
                {contact.email}
              </a>
            </div>
            <div>
              <a
                href={contact.phoneHref}
                aria-label="Sună Experience for All"
                className="inline-flex items-center gap-2 underline-offset-4 hover:text-cream hover:underline"
              >
                <Phone className="size-4" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </div>
            <div>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactează Experience for All pe WhatsApp"
                className="inline-flex items-center gap-2 underline-offset-4 hover:text-cream hover:underline"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </address>
          <p className="mt-6 text-eyebrow text-cream/60">{org.tagline}</p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-eyebrow text-cream/60">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-cream/85 underline-offset-4 transition-colors hover:text-cream hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-cream/15">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-cream/65 md:flex-row md:items-center md:justify-between">
          <p>
            {org.name} · {org.county}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link to="/legal/confidentialitate" className="hover:text-cream">
                Politica de confidențialitate
              </Link>
            </li>
            <li>
              <Link to="/legal/cookies" className="hover:text-cream">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link to="/legal/gdpr" className="hover:text-cream">
                GDPR
              </Link>
            </li>
            <li>
              <Link to="/legal/protectia-copilului" className="hover:text-cream">
                Child Safeguarding
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cream">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
