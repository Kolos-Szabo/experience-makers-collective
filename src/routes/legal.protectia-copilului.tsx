import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Prose } from "@/components/site/Blocks";
import { Button } from "@/components/ui/button";
import { org } from "@/data/site";

export const Route = createFileRoute("/legal/protectia-copilului")({
  head: () => ({
    meta: [
      { title: "Child Safeguarding — protecția copiilor și a imaginii lor" },
      {
        name: "description",
        content:
          "Politica Experience for All privind protecția copiilor, fotografierea, publicarea imaginilor și comportamentul voluntarilor.",
      },
      { property: "og:title", content: "Child Safeguarding — Experience for All" },
      {
        property: "og:description",
        content: "Reguli clare privind protecția copiilor și a imaginii lor.",
      },
      { property: "og:url", content: "/legal/protectia-copilului" },
    ],
    links: [{ rel: "canonical", href: "/legal/protectia-copilului" }],
  }),
  component: SafeguardingPage,
});

function SafeguardingPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Protecția copiilor și a imaginii lor"
        intro="Copiii nu sunt conținut. Nicio imagine și nicio poveste nu justifică o expunere care le-ar putea afecta demnitatea sau siguranța."
      />
      <Section>
        <Prose>
          <h2 className="display-md">Ce nu publicăm niciodată</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>numele complet al copiilor</li>
            <li>adrese sau locuri de reședință</li>
            <li>informații despre trecutul, familia sau situația lor juridică</li>
            <li>informații medicale sau psihologice</li>
            <li>orice detaliu care ar permite identificarea unui copil vulnerabil</li>
          </ul>
          <h2 className="display-md pt-6">Fotografie și filmare</h2>
          <p>
            Fotografiem doar cu acordurile necesare și doar în contexte care arată participare,
            curiozitate, cooperare și descoperire. Nu folosim imaginea unui copil pentru a genera
            emoție sau donații. Materialele pot fi retrase la solicitarea celor în drept.
          </p>
          <h2 className="display-md pt-6">Voluntari și colaboratori</h2>
          <p>
            Toți voluntarii primesc regulile de conduită înainte de prima activitate: fără contact
            privat cu copiii, fără fotografii personale publicate, raportarea imediată a oricărei
            situații de risc.
          </p>
          <h2 className="display-md pt-6">Raportarea unei îngrijorări</h2>
          <p>
            Orice îngrijorare privind siguranța unui copil poate fi semnalată la {org.email} și este
            tratată cu prioritate și confidențialitate.
          </p>
        </Prose>
        <div className="mt-10">
          <Button asChild variant="outline">
            <Link to="/siguranta">Vezi procedurile de siguranță</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
