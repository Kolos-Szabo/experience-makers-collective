import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, FinalCTA } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Button } from "@/components/ui/button";
import { impactMetrics, qualitativeImpact } from "@/data/site";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — ce am creat împreună | Experience for All" },
      {
        name: "description",
        content:
          "Impact cantitativ și calitativ: copii implicați, experiențe create, voluntari, parteneri și ce observăm dincolo de cifre.",
      },
      { property: "og:title", content: "Impact — Experience for All" },
      {
        property: "og:description",
        content: "Cifrele arată amploarea. Observațiile arată sensul.",
      },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: ImpactPage,
});

const chain = [
  ["Input", "Resurse: finanțare, echipament, timp, expertiză."],
  ["Activitate", "Ce facem: experiențe planificate și facilitate."],
  ["Output", "Ce realizăm: număr de activități, participări, zile outdoor."],
  ["Experiență", "Ce trăiesc copiii în timpul activității."],
  ["Reflecție", "Ce observăm și ce discutăm după."],
  ["Învățare", "Ce pot descoperi copiii despre ei și despre ceilalți."],
  ["Impact pe termen lung", "Ce schimbări apar în timp — încă nemăsurat riguros."],
];

function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow={`Impact Dashboard · ${impactMetrics.period}`}
        title="Ce am creat împreună"
        intro="Publicăm două niveluri de impact: ce se poate număra și ce se poate observa. Nu le confundăm."
      />

      <Section>
        <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {impactMetrics.items.map((m, i) => (
            <Reveal key={m.label} delay={i * 60} className="bg-card p-8 text-center">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="font-display block text-5xl font-extrabold text-primary">
                  <Counter value={m.value} />
                </span>
                <span className="mt-3 block text-sm text-muted-foreground">{m.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
        <p className="mt-5 text-xs text-muted-foreground">{impactMetrics.note}</p>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Impact calitativ"
          title="Ce urmărim dincolo de cifre"
          intro="Observațiile facilitatorilor și feedbackul participanților ne arată dacă experiența a devenit învățare."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {qualitativeImpact.map((q, i) => (
            <Reveal as="li" key={q} delay={i * 50} className="surface-card p-6 text-base">
              {q}
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Metodologie"
          title="Cum măsurăm impactul"
          intro="Separăm clar nivelurile. Nu pretindem că nivelurile finale sunt măsurate riguros — încă nu sunt."
        />
        <ol className="mt-12 space-y-3">
          {chain.map(([k, v], i) => (
            <Reveal
              as="li"
              key={k}
              delay={i * 50}
              className="surface-card grid gap-2 p-6 md:grid-cols-[16rem_1fr] md:items-baseline"
            >
              <span className="font-display text-lg font-bold text-primary">{k}</span>
              <span className="text-muted-foreground">{v}</span>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12 rounded-xl border border-accent/40 bg-accent/10 p-7">
          <h2 className="text-xl font-bold">Ce nu afirmăm</h2>
          <p className="mt-3 max-w-3xl text-foreground/85">
            Nu publicăm procente de creștere a încrederii sau rezultate psihologice. Astfel de
            afirmații necesită o metodologie validată și date colectate riguros. Când vom avea așa
            ceva, vom publica și metoda, nu doar rezultatul.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/transparenta">Vezi transparența financiară</Link>
          </Button>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
