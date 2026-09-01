import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, FinalCTA } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { learningThemes, e4aCycle, experienceCycle, images } from "@/data/site";

export const Route = createFileRoute("/cum-invatam")({
  head: () => ({
    meta: [
      { title: "Cum învățăm — educație non-formală și învățare experiențială" },
      {
        name: "description",
        content:
          "Abordarea educațională Experience for All: învățare prin experiență, participare, provocare, cooperare, reflecție și transfer.",
      },
      { property: "og:title", content: "Cum învățăm — Experience for All" },
      {
        property: "og:description",
        content: "Educația non-formală creează contexte în care se învață prin participare și reflecție.",
      },
      { property: "og:url", content: "/cum-invatam" },
    ],
    links: [{ rel: "canonical", href: "/cum-invatam" }],
  }),
  component: LearningPage,
});

function LearningPage() {
  return (
    <>
      <PageHero
        eyebrow="Abordarea educațională"
        title="Învățarea nu se termină când ieșim din clasă."
        intro="Educația non-formală creează contexte în care oamenii învață prin participare, experiență, cooperare și reflecție. Experience for All folosește mediul outdoor pentru a crea astfel de contexte."
        image={images.expEducation}
        imageAlt="Grup de adolescenți și un facilitator, așezați în cerc pe iarbă, în munți"
      />

      <Section>
        <SectionHeading
          eyebrow="Șase moduri de a învăța"
          title="Copilul face, nu doar ascultă."
          intro="Nu înlocuim școala. Completăm învățarea formală cu experiențe în care cunoașterea apare din participare."
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {learningThemes.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i * 60} className="surface-card p-7">
              <span className="font-display text-sm font-bold text-accent">
                0{i + 1}
              </span>
              <h2 className="mt-4 text-xl font-bold">{t.title}</h2>
              <p className="mt-3 text-muted-foreground">{t.description}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="Modelul programului"
          title="Trăiește → Participă → Reflectează → Învață → Transferă"
          invert
        />
        <ol className="mt-14 space-y-px overflow-hidden rounded-xl border border-cream/20">
          {experienceCycle.map((s, i) => (
            <Reveal
              as="li"
              key={s.step}
              delay={i * 60}
              className="grid gap-4 bg-forest-deep p-7 md:grid-cols-[6rem_14rem_1fr] md:items-baseline"
            >
              <span className="font-display text-3xl font-extrabold text-accent">{s.step}</span>
              <h3 className="text-xl font-bold text-cream">{s.title}</h3>
              <p className="text-cream/75">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Metodologie"
          title="E4A Experience Cycle"
          intro="Structura pe care o dezvoltăm ca metodologie proprie a programului. Fiecare etapă va primi conținut explicativ și instrumente de facilitare."
        />
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {e4aCycle.map((s, i) => (
            <Reveal as="li" key={s.key} delay={i * 50} className="surface-card p-6">
              <p className="text-eyebrow text-primary">{s.key}</p>
              <h3 className="mt-3 text-lg font-bold">{s.ro}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/experiente">Vezi cum arată în practică</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/resurse">Learning Hub</Link>
          </Button>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
