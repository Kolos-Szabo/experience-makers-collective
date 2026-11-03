import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { ContactOptions } from "@/components/site/ContactOptions";
import { partnerContributions } from "@/data/site";
import { PartnersGrid } from "@/components/site/Partners";
import { DonateCallBanner } from "@/components/site/CallToDonate";

export const Route = createFileRoute("/implica-te/parteneri")({
  head: () => ({
    meta: [
      { title: "Devino partener — companii și organizații | Experience for All" },
      {
        name: "description",
        content:
          "Parteneriate pentru experiențe outdoor: finanțare, echipamente, transport, cazare, hrană, servicii, locații, expertiză și resurse educaționale.",
      },
      { property: "og:title", content: "Devino partener — Experience for All" },
      {
        property: "og:description",
        content: "O experiență poate începe cu o idee. Dar are nevoie de oameni care o fac posibilă.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/implica-te/parteneri" },
    ],
    links: [{ rel: "canonical", href: "/implica-te/parteneri" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Parteneri"
        title="O experiență poate începe cu o idee. Dar are nevoie de oameni care o fac posibilă."
        intro="Parteneriatele nu înseamnă doar bani. De multe ori, un microbuz, un set de echipamente sau o locație schimbă complet ce putem organiza."
      />

      <Section>
        <SectionHeading eyebrow="Tipuri de contribuție" title="Cum poate contribui o organizație" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {partnerContributions.map((c, i) => (
            <Reveal as="li" key={c} delay={i * 40} className="surface-card p-5 text-sm font-medium">
              {c}
            </Reveal>
          ))}
        </ul>

        <div className="mt-16">
          <h2 className="display-md">Partenerii Experience for All</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Organizații și echipe alături de care construim experiențele copiilor.
          </p>
          <PartnersGrid className="mt-8" />
        </div>

        <div className="mt-16 max-w-2xl">
          <Reveal delay={100}>
            <h2 className="display-md mb-6">Devino partener</h2>
            <ContactOptions intro="Spune-ne ce organizație reprezinți și ce tip de contribuție poți oferi." />
          </Reveal>
        </div>

      </Section>

      <DonateCallBanner />
    </>
  );
}
