import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, FinalCTA } from "@/components/site/Blocks";
import { Button } from "@/components/ui/button";
import { events } from "@/data/site";

export const Route = createFileRoute("/evenimente")({
  head: () => ({
    meta: [
      { title: "Evenimente și experiențe finalizate — Experience for All" },
      {
        name: "description",
        content:
          "Experiențe outdoor viitoare și activități deja finalizate din programul Experience for All, județul Covasna.",
      },
      { property: "og:title", content: "Evenimente — Experience for All" },
      {
        property: "og:description",
        content: "Calendarul experiențelor viitoare și arhiva activităților finalizate.",
      },
      { property: "og:url", content: "/evenimente" },
    ],
    links: [{ rel: "canonical", href: "/evenimente" }],
  }),
  component: EventsPage,
});

function EmptyState({ text }: { text: string }) {
  return (
    <div className="surface-card mt-8 p-10 text-center">
      <p className="font-display text-lg font-bold">[DE COMPLETAT]</p>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Evenimente"
        title="Ce urmează și ce am trăit deja"
        intro="Fiecare experiență finalizată devine, după documentare, o pagină de impact și o poveste."
      />

      <Section>
        <SectionHeading eyebrow="Calendar" title="Evenimente viitoare" />
        {events.upcoming.length === 0 ? (
          <EmptyState text="Calendarul următoarelor experiențe va fi publicat aici. Structura este pregătită: titlu, dată, locație, activitate, vârstă, parteneri, voluntari, imagini, status." />
        ) : null}
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Arhivă" title="Experiențe finalizate" />
        {events.past.length === 0 ? (
          <EmptyState text="După fiecare experiență adăugăm aici o scurtă relatare, temele de învățare și galeria — cu respectarea regulilor de protecție a imaginii copiilor." />
        ) : null}
        <div className="mt-10">
          <Button asChild variant="outline">
            <Link to="/povesti">Vezi poveștile</Link>
          </Button>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
