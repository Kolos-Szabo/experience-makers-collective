import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { org, PLACEHOLDER } from "@/data/site";

export const Route = createFileRoute("/transparenta")({
  head: () => ({
    meta: [
      { title: "Transparență — unde merge sprijinul tău | Experience for All" },
      {
        name: "description",
        content:
          "Informații juridice, rapoarte, cheltuieli, parteneri și metodologia de impact a programului Experience for All.",
      },
      { property: "og:title", content: "Transparență — Experience for All" },
      {
        property: "og:description",
        content: "Unde merge sprijinul tău și cum măsurăm impactul.",
      },
      { property: "og:url", content: "/transparenta" },
    ],
    links: [{ rel: "canonical", href: "/transparenta" }],
  }),
  component: TransparencyPage,
});

const docs = [
  ["Rapoarte de activitate", "Se publică anual, după aprobare."],
  ["Situații financiare", "Venituri, cheltuieli și destinația fondurilor."],
  ["Proiecte și finanțări", "Sursele de finanțare și proiectele derulate."],
  ["Politici interne", "Protecția copilului, GDPR, voluntariat, siguranță."],
];

function TransparencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparență"
        title="Unde merge sprijinul tău?"
        intro="Publicăm ce putem publica și spunem clar ce încă nu avem. Nu prezentăm estimări ca fiind rezultate."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="surface-card p-8">
            <h2 className="display-md">Organizația coordonatoare</h2>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Denumire", org.legalEntity],
                ["CUI", org.cui],
                ["Sediu", org.address],
                ["IBAN", org.iban],
                ["Județ de activitate", org.county],
                ["Contact", org.email],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 border-b border-border pb-3">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={100} className="surface-card p-8">
            <h2 className="display-md">Documente</h2>
            <ul className="mt-6 space-y-5">
              {docs.map(([t, d]) => (
                <li key={t}>
                  <p className="font-display font-bold">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  <p className="mt-1 text-xs text-accent">{PLACEHOLDER}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Colaborări instituționale"
          title="Cu cine lucrăm"
          intro="Programul se desfășoară în colaborare cu structurile și profesioniștii relevanți din sistemul de protecție a copilului. Publicăm doar colaborările formalizate și confirmate."
        />
        <p className="mt-8 text-sm text-muted-foreground">{PLACEHOLDER}</p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Metodologie" title="Cum măsurăm impactul" />
        <div className="mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/impact">Vezi lanțul input → impact</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
