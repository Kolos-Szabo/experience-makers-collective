import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Prose } from "@/components/site/Blocks";
import { contact } from "@/data/site";

export const Route = createFileRoute("/legal/confidentialitate")({
  head: () => ({
    meta: [
      { title: "Politica de confidențialitate — Experience for All" },
      {
        name: "description",
        content:
          "Cum colectăm, folosim și protejăm datele personale ale vizitatorilor, voluntarilor și partenerilor Experience for All.",
      },
      { property: "og:title", content: "Politica de confidențialitate — Experience for All" },
      { property: "og:description", content: "Informații despre prelucrarea datelor personale." },
      { property: "og:url", content: "/legal/confidentialitate" },
    ],
    links: [{ rel: "canonical", href: "/legal/confidentialitate" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Politica de confidențialitate"
        intro="Documentul complet, avizat juridic, urmează să fie publicat. Mai jos sunt principiile pe care le aplicăm."
      />
      <Section>
        <Prose>
          <h2 className="display-md">Cine este operatorul de date</h2>
          <p>
            Programul Experience for All, contact: <a href={contact.emailHref} className="text-primary underline underline-offset-4">{contact.email}</a>.
          </p>
          <h2 className="display-md pt-6">Ce date colectăm</h2>
          <p>
            Datele pe care ni le transmiți prin formularele de voluntariat, propunere de experiență,
            parteneriat sau contact: nume, e-mail, telefon, localitate, competențe, disponibilitate
            și mesajul tău.
          </p>
          <h2 className="display-md pt-6">De ce le folosim</h2>
          <p>
            Exclusiv pentru a răspunde solicitării tale și pentru a organiza activitățile programului.
            Nu vindem și nu transmitem datele către terți în scopuri de marketing.
          </p>
          <h2 className="display-md pt-6">Drepturile tale</h2>
          <p>
            Acces, rectificare, ștergere, restricționare, opoziție și portabilitate. Îți poți exercita
            drepturile scriind la <a href={contact.emailHref} className="text-primary underline underline-offset-4">{contact.email}</a>.
          </p>
          <h2 className="display-md pt-6">Datele copiilor</h2>
          <p>
            Datele copiilor participanți sunt prelucrate în cadrul colaborării cu instituțiile din
            sistemul de protecție a copilului, cu acordurile necesare, și nu sunt publicate pe acest
            site.
          </p>
        </Prose>
      </Section>
    </>
  );
}
