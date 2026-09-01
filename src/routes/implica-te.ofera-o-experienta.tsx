import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { SimpleForm, type Field } from "@/components/site/SimpleForm";

export const Route = createFileRoute("/implica-te/ofera-o-experienta")({
  head: () => ({
    meta: [
      { title: "Oferă o experiență — profesioniști și pasionați | Experience for All" },
      {
        name: "description",
        content:
          "Ai o abilitate, o pasiune sau o meserie? Propune o experiență de învățare pentru copii și adolescenți din județul Covasna.",
      },
      { property: "og:title", content: "Oferă o experiență — Experience for All" },
      {
        property: "og:description",
        content: "Transformă ceea ce știi într-o oportunitate de învățare pentru un copil.",
      },
      { property: "og:url", content: "/implica-te/ofera-o-experienta" },
    ],
    links: [{ rel: "canonical", href: "/implica-te/ofera-o-experienta" }],
  }),
  component: OfferPage,
});

const examples = [
  "instructor de escaladă",
  "scafandru",
  "astronom",
  "fotograf",
  "ghid montan",
  "sportiv",
  "artist",
  "bucătar",
  "specialist IT",
  "antreprenor",
  "meșteșugar",
  "biolog",
  "muzician",
];

const fields: Field[] = [
  { name: "nume", label: "Cine ești", required: true },
  { name: "email", label: "E-mail", type: "email", required: true },
  { name: "telefon", label: "Telefon", type: "tel" },
  { name: "profesie", label: "Profesie / domeniu" },
  { name: "experienta", label: "Ce experiență oferi?", type: "textarea", required: true },
  { name: "varsta", label: "Pentru ce vârstă este potrivită?" },
  { name: "durata", label: "Durata estimată" },
  { name: "locatie", label: "Locația" },
  { name: "necesar", label: "Ce este necesar (echipament, spațiu, transport)?", full: true },
  { name: "certificari", label: "Competențe / certificări" },
  { name: "siguranta", label: "Condiții de siguranță", full: true },
  { name: "disponibilitate", label: "Disponibilitate" },
];

function OfferPage() {
  return (
    <>
      <PageHero
        eyebrow="Oferă o experiență"
        title="Ai o abilitate, o pasiune sau o experiență pe care o poți transforma într-o oportunitate pentru un copil?"
        intro="O zi cu un om care își face meseria cu pasiune poate deschide o direcție la care un copil nu se gândise niciodată."
      />

      <Section>
        <SectionHeading eyebrow="Exemple" title="Cine poate propune o experiență" />
        <ul className="mt-10 flex flex-wrap gap-2">
          {examples.map((e) => (
            <li key={e} className="rounded-full border border-border bg-card px-4 py-2 text-sm">
              {e}
            </li>
          ))}
          <li className="rounded-full border border-accent bg-accent/15 px-4 py-2 text-sm font-medium">
            sau altceva la care nu ne-am gândit
          </li>
        </ul>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="surface-card h-fit p-7">
            <h2 className="text-xl font-bold">Cum funcționează</h2>
            <ol className="mt-5 space-y-4 text-sm text-foreground/85">
              <li>
                <span className="font-display font-bold text-primary">01</span> Trimiți propunerea.
              </li>
              <li>
                <span className="font-display font-bold text-primary">02</span> Discutăm împreună
                obiectivul de învățare și grupul potrivit.
              </li>
              <li>
                <span className="font-display font-bold text-primary">03</span> Verificăm siguranța,
                logistica și acordurile necesare.
              </li>
              <li>
                <span className="font-display font-bold text-primary">04</span> Planificăm
                experiența și etapa de reflecție de după.
              </li>
            </ol>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-md mb-6">Propune o experiență</h2>
            <SimpleForm
              fields={fields}
              submitLabel="Trimite propunerea"
              formName="ofera-experienta"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
