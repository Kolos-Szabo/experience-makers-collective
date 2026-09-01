import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, ListCheck } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/siguranta")({
  head: () => ({
    meta: [
      { title: "Siguranța copiilor — Experience for All" },
      {
        name: "description",
        content:
          "Supraveghere, consimțământ, evaluarea riscurilor, instructori calificați, echipamente, proceduri, protecția copilului și GDPR.",
      },
      { property: "og:title", content: "Siguranța copiilor — Experience for All" },
      {
        property: "og:description",
        content: "O experiență extraordinară trebuie să fie și o experiență responsabilă.",
      },
      { property: "og:url", content: "/siguranta" },
    ],
    links: [{ rel: "canonical", href: "/siguranta" }],
  }),
  component: SafetyPage,
});

const pillars = [
  {
    title: "Înainte de activitate",
    items: [
      "evaluarea riscurilor pentru fiecare activitate",
      "verificarea locației și a echipamentelor",
      "acordul reprezentantului legal / al casei de tip familial",
      "informarea participanților despre reguli",
      "plan medical și date de urgență",
    ],
  },
  {
    title: "În timpul activității",
    items: [
      "instructori calificați pentru activitățile tehnice",
      "raport adecvat între adulți și copii",
      "briefing de siguranță la început",
      "echipament individual verificat",
      "dreptul copilului de a se opri oricând",
    ],
  },
  {
    title: "După activitate",
    items: [
      "moment de reflecție facilitat",
      "notă de observație a facilitatorului",
      "raportarea incidentelor, dacă apar",
      "feedback de la copii și însoțitori",
      "revizuirea procedurilor",
    ],
  },
];

function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Siguranță"
        title="Siguranța este parte din experiență."
        intro="Curajul are nevoie de un cadru. Regulile nu limitează experiența — o fac posibilă."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="surface-card p-7">
              <h2 className="display-md">{p.title}</h2>
              <ul className="mt-6 space-y-3 text-sm text-foreground/85">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Protecția copilului"
          title="Reguli stricte privind imaginea și datele copiilor"
          intro="Nu publicăm nume complete, adrese, informații despre familie, trecut, situație medicală sau orice detaliu care ar permite identificarea unui copil vulnerabil."
        />
        <div className="mt-10 max-w-4xl">
          <ListCheck
            items={[
              "fotografiere doar conform consimțământului",
              "fără nume complete în materiale publice",
              "fără povești despre traume personale",
              "voluntari informați și instruiți",
              "acces limitat la datele personale",
              "retragerea materialelor la solicitare",
            ]}
          />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link to="/legal/protectia-copilului">Politica de child safeguarding</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/legal/gdpr">GDPR</Link>
          </Button>
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="Principiu"
          title="O experiență extraordinară trebuie să fie și o experiență responsabilă."
          invert
        />
      </Section>
    </>
  );
}
