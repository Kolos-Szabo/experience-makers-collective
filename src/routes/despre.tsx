import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Prose, FinalCTA } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { images, org } from "@/data/site";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre Experience for All — program social și educațional în Covasna" },
      {
        name: "description",
        content:
          "Cine suntem, de ce există Experience for All, în ce credem și cum proiectăm experiențe outdoor pentru copii din sistemul de protecție a copilului.",
      },
      { property: "og:title", content: "Despre Experience for All" },
      {
        property: "og:description",
        content: "Un program social și educațional bazat pe experiențe outdoor și educație non-formală.",
      },
      { property: "og:url", content: "/despre" },
    ],
    links: [{ rel: "canonical", href: "/despre" }],
  }),
  component: AboutPage,
});

const beliefs = [
  ["Copiii merită oportunități.", "Nu compasiune. Oportunități reale, accesibile, repetate."],
  ["Experiența este un context de învățare.", "Nu o recompensă și nu o excursie izolată."],
  ["Reflecția face diferența.", "Fără discuția de după, experiența rămâne doar o zi frumoasă."],
  ["Demnitatea nu se negociază.", "Copiii nu sunt conținut de fundraising."],
  ["Siguranța face parte din experiență.", "Curajul are nevoie de un cadru responsabil."],
  ["Construim împreună.", "Copii, voluntari, profesioniști, parteneri, comunitate."],
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Despre noi"
        title="Un program despre ce devine posibil când un copil primește șansa unei experiențe."
        intro={org.short}
        image={images.expCamp}
        imageAlt="Grup de copii și adulți într-o căruță trasă de cai, pe un drum forestier"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <Reveal>
              <h2 className="display-md">Cine suntem</h2>
              <Prose>
                <p className="mt-4">
                  Experience for All este un program social și educațional non-profit din județul
                  Covasna. Lucrăm cu copii și adolescenți care locuiesc în case de tip familial din
                  sistemul de protecție a copilului.
                </p>
                <p>
                  Proiectul se desfășoară în colaborare cu structurile și profesioniștii relevanți
                  din sistemul de protecție a copilului. Publicăm doar colaborările formalizate și
                  confirmate.
                </p>
              </Prose>
            </Reveal>

            <Reveal>
              <h2 className="display-md">De ce există Experience for All</h2>
              <Prose>
                <p className="mt-4">
                  Pentru unii copii, o zi în natură, o tabără sau o primă scufundare sunt lucruri
                  firești. Pentru alții, aceste ocazii apar rar sau deloc. Diferența nu este de
                  talent sau de dorință, ci de acces.
                </p>
                <p>
                  Programul creează acele contexte și le transformă, prin reflecție, în oportunități
                  de învățare.
                </p>
              </Prose>
            </Reveal>

            <Reveal>
              <h2 className="display-md">Misiunea</h2>
              <p className="mt-4 text-2xl leading-snug font-display font-bold text-primary">
                Fiecare copil merită șansa de a trăi experiențe extraordinare, de a învăța prin ele
                și de a descoperi de ce este capabil.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="display-md">Cum proiectăm experiențele</h2>
              <Prose>
                <p className="mt-4">
                  Pornim de la ce pot descoperi copiii, nu de la ce activitate ar arăta bine. Fiecare
                  experiență are: un obiectiv de învățare, un plan de siguranță, un facilitator, o
                  etapă de reflecție și o notă de observație după activitate.
                </p>
              </Prose>
              <Button asChild variant="outline" className="mt-6">
                <Link to="/cum-invatam">Vezi abordarea educațională</Link>
              </Button>
            </Reveal>

            <Reveal>
              <h2 className="display-md">Cum protejăm copiii</h2>
              <Prose>
                <p className="mt-4">
                  Lucrăm cu instructori calificați, cerem consimțământ, evaluăm riscurile și avem
                  reguli stricte privind fotografierea și publicarea imaginilor.
                </p>
              </Prose>
              <Button asChild variant="outline" className="mt-6">
                <Link to="/siguranta">Siguranța copiilor</Link>
              </Button>
            </Reveal>

            <Reveal>
              <h2 className="display-md">Încotro mergem</h2>
              <Prose>
                <p className="mt-4">
                  Începem local. Construim pentru a putea crește: o metodologie proprie, o comunitate
                  de voluntari, o rețea de parteneri și o bibliotecă de educație non-formală.
                </p>
              </Prose>
            </Reveal>
          </div>

          <aside>
            <Reveal className="surface-card sticky top-24 p-7">
              <h2 className="text-eyebrow text-muted-foreground">Ce credem</h2>
              <ul className="mt-6 space-y-5">
                {beliefs.map(([t, d]) => (
                  <li key={t}>
                    <p className="font-display font-bold">{t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Ce nu suntem"
          title="Nu suntem o serie de excursii, un club de aventură sau o campanie bazată pe milă."
          intro="Experiența outdoor este cadrul, nu scopul. Nu oferim terapie, nu înlocuim școala și nu construim comunicarea în jurul poveștilor personale ale copiilor."
        />
      </Section>

      <FinalCTA />
    </>
  );
}
