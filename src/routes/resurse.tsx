import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/resurse")({
  head: () => ({
    meta: [
      { title: "Learning Hub — resurse de educație non-formală | Experience for All" },
      {
        name: "description",
        content:
          "Bibliotecă în construcție: fișe de activități, exerciții de reflecție, ghiduri pentru voluntari și facilitatori, metode de evaluare.",
      },
      { property: "og:title", content: "Learning Hub — Experience for All" },
      {
        property: "og:description",
        content: "Resurse de educație non-formală și învățare experiențială, în dezvoltare.",
      },
      { property: "og:url", content: "/resurse" },
    ],
    links: [{ rel: "canonical", href: "/resurse" }],
  }),
  component: ResourcesPage,
});

const planned = [
  "fișe de activități",
  "exerciții de reflecție",
  "ghiduri pentru facilitatori",
  "materiale pentru voluntari",
  "idei de activități outdoor",
  "materiale despre educație non-formală",
  "metode de evaluare",
  "instrumente de observație",
];

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Learning Hub"
        title="Experience for All Learning Hub"
        intro="O bibliotecă deschisă de resurse pentru educație non-formală și învățare prin experiență. Se construiește pas cu pas, pe măsură ce metodologia se maturizează."
      />

      <Section>
        <SectionHeading
          eyebrow="În pregătire"
          title="Ce va conține"
          intro="Structura este pregătită. Materialele se publică doar după testare în teren."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {planned.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 50} className="surface-card p-6">
              <p className="font-display font-bold capitalize">{p}</p>
            </Reveal>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild variant="outline" size="lg">
            <Link to="/cum-invatam">Abordarea educațională</Link>
          </Button>
          <Button asChild variant="cta" size="lg">
            <Link to="/implica-te/ofera-o-experienta">Contribuie cu expertiză</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
