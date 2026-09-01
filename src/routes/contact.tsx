import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { PageHero, Section } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { SimpleForm, type Field } from "@/components/site/SimpleForm";
import { org, contact } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Experience for All, județul Covasna" },
      {
        name: "description",
        content:
          "Scrie-ne dacă vrei să susții, să te implici sau dacă lucrezi într-o casă de tip familial și vrei să colaborăm.",
      },
      { property: "og:title", content: "Contact — Experience for All" },
      {
        property: "og:description",
        content: "Contactează echipa Experience for All din județul Covasna.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const fields: Field[] = [
  { name: "nume", label: "Nume", required: true },
  { name: "email", label: "E-mail", type: "email", required: true },
  { name: "subiect", label: "Subiect", full: true },
  { name: "mesaj", label: "Mesaj", type: "textarea", required: true },
];

const audiences = [
  ["Case de tip familial și profesioniști", "Cum funcționează programul și cum putem colabora."],
  ["Donatori", "Ce susții și cum sunt folosite resursele."],
  ["Companii", "Tipuri de parteneriate și contribuții posibile."],
  ["Profesioniști outdoor și educatori", "Propuneri de colaborare și experiențe."],
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Hai să vorbim despre următoarea experiență."
        intro="Răspundem tuturor solicitărilor serioase — de la case de tip familial până la companii și profesioniști."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <Reveal className="surface-card p-7">
              <h2 className="text-xl font-bold">Date de contact</h2>
              <address className="mt-5 space-y-4 text-sm not-italic">
                <div>
                  <p className="text-muted-foreground">E-mail</p>
                  <a
                    href={contact.emailHref}
                    aria-label="Trimite un e-mail către Experience for All"
                    className="mt-1 inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    {contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground">Telefon</p>
                  <a
                    href={contact.phoneHref}
                    aria-label="Sună Experience for All"
                    className="mt-1 inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    {contact.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground">WhatsApp</p>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contactează Experience for All pe WhatsApp"
                    className="mt-1 inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Scrie-ne pe WhatsApp
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground">Zonă de activitate</p>
                  <p className="mt-1 font-medium">{org.county}</p>
                </div>
              </address>
            </Reveal>
            <Reveal className="surface-card p-7" delay={80}>
              <h2 className="text-xl font-bold">Cui ne adresăm</h2>
              <ul className="mt-5 space-y-4">
                {audiences.map(([t, d]) => (
                  <li key={t}>
                    <p className="font-display text-sm font-bold">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <h2 className="display-md mb-6">Scrie-ne</h2>
            <SimpleForm fields={fields} submitLabel="Trimite mesajul" formName="contact" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
