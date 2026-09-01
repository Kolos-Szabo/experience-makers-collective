import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Prose } from "@/components/site/Blocks";
import { contact } from "@/data/site";

export const Route = createFileRoute("/legal/gdpr")({
  head: () => ({
    meta: [
      { title: "GDPR — drepturile tale privind datele | Experience for All" },
      {
        name: "description",
        content:
          "Temeiuri legale, drepturile persoanelor vizate și modul în care Experience for All prelucrează datele personale.",
      },
      { property: "og:title", content: "GDPR — Experience for All" },
      { property: "og:description", content: "Drepturile tale privind prelucrarea datelor personale." },
      { property: "og:url", content: "/legal/gdpr" },
    ],
    links: [{ rel: "canonical", href: "/legal/gdpr" }],
  }),
  component: GdprPage,
});

function GdprPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="GDPR"
        intro="Prelucrăm datele personale conform Regulamentului (UE) 2016/679 și legislației naționale aplicabile."
      />
      <Section>
        <Prose>
          <h2 className="display-md">Temeiuri legale</h2>
          <p>
            Consimțământul tău (formulare), interesul legitim al organizației (organizarea
            activităților) și obligațiile legale (raportare, sponsorizări).
          </p>
          <h2 className="display-md pt-6">Drepturile persoanei vizate</h2>
          <p>
            Dreptul de acces, la rectificare, la ștergere, la restricționarea prelucrării, la
            portabilitate, de opoziție și dreptul de a depune plângere la Autoritatea Națională de
            Supraveghere a Prelucrării Datelor cu Caracter Personal.
          </p>
          <h2 className="display-md pt-6">Retragerea consimțământului</h2>
          <p>
            Îți poți retrage consimțământul oricând, scriind la <a href={contact.emailHref} className="text-primary underline underline-offset-4">{contact.email}</a>. Retragerea nu afectează
            legalitatea prelucrării anterioare.
          </p>
          <h2 className="display-md pt-6">Imagini și materiale foto</h2>
          <p>
            Fotografiile în care apar copii se folosesc doar în baza acordurilor obținute și pot fi
            retrase la cerere.
          </p>
        </Prose>
      </Section>
    </>
  );
}
