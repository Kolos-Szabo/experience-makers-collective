import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/implica-te/")({
  head: () => ({
    meta: [
      { title: "Implică-te — donează, voluntariat, parteneriate | Experience for All" },
      {
        name: "description",
        content:
          "Patru moduri de a construi următoarea experiență: donație, voluntariat, oferirea unei experiențe sau parteneriat.",
      },
      { property: "og:title", content: "Implică-te — Experience for All" },
      {
        property: "og:description",
        content: "Construiește următoarea experiență alături de noi.",
      },
      { property: "og:url", content: "/implica-te" },
    ],
    links: [{ rel: "canonical", href: "/implica-te" }],
  }),
  component: InvolvePage,
});

const paths = [
  {
    to: "/implica-te/doneaza" as const,
    title: "Donează",
    text: "Contribuie la transportul, echipamentul și logistica următoarei experiențe.",
    cta: "Susține o experiență",
  },
  {
    to: "/implica-te/voluntariat" as const,
    title: "Devino voluntar",
    text: "Facilitator, instructor, fotograf, șofer, bucătar, om de logistică sau specialist.",
    cta: "Devino parte din experiență",
  },
  {
    to: "/implica-te/ofera-o-experienta" as const,
    title: "Oferă o experiență",
    text: "Transformă o abilitate sau o pasiune într-o zi memorabilă pentru un copil.",
    cta: "Propune o experiență",
  },
  {
    to: "/implica-te/parteneri" as const,
    title: "Devino partener",
    text: "Companii și organizații care contribuie cu resurse, servicii, locații sau expertiză.",
    cta: "Devino partener",
  },
];

function InvolvePage() {
  return (
    <>
      <PageHero
        eyebrow="Implică-te"
        title="Avem un model. Avem copii care pot beneficia. Vrei să construim următoarea experiență împreună?"
        intro="Nu cerem ajutor pentru o cauză abstractă. Propunem o participare concretă."
      />
      <Section>
        <ul className="grid gap-6 md:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal as="li" key={p.to} delay={i * 70} className="surface-card flex h-full flex-col p-8">
              <h2 className="display-md">{p.title}</h2>
              <p className="mt-4 text-muted-foreground">{p.text}</p>
              <Button asChild variant="cta" className="mt-8 self-start">
                <Link to={p.to}>{p.cta}</Link>
              </Button>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
