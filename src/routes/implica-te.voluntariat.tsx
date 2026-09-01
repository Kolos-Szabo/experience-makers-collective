import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { SimpleForm, type Field } from "@/components/site/SimpleForm";

export const Route = createFileRoute("/implica-te/voluntariat")({
  head: () => ({
    meta: [
      { title: "Devino voluntar — Experience for All Covasna" },
      {
        name: "description",
        content:
          "Voluntariat în Covasna: facilitatori, instructori, fotografi, șoferi, bucătari, specialiști și oameni de logistică pentru experiențe outdoor cu copii.",
      },
      { property: "og:title", content: "Devino voluntar — Experience for All" },
      {
        property: "og:description",
        content: "Uneori, experiența începe cu cineva care spune „vin și eu”.",
      },
      { property: "og:url", content: "/implica-te/voluntariat" },
    ],
    links: [{ rel: "canonical", href: "/implica-te/voluntariat" }],
  }),
  component: VolunteerPage,
});

const roles = [
  "facilitator",
  "mentor",
  "instructor",
  "organizator",
  "fotograf",
  "șofer",
  "bucătar",
  "specialist",
  "logistică",
  "susținător al experienței",
];

const fields: Field[] = [
  { name: "nume", label: "Nume și prenume", required: true },
  { name: "email", label: "E-mail", type: "email", required: true },
  { name: "telefon", label: "Telefon", type: "tel" },
  { name: "oras", label: "Oraș / localitate" },
  { name: "interese", label: "Domenii de interes", placeholder: "ex: apă, aventură, ateliere" },
  { name: "competente", label: "Competențe / certificări" },
  { name: "experienta", label: "Experiență relevantă", full: true },
  { name: "disponibilitate", label: "Disponibilitate", placeholder: "ex: weekenduri, vara" },
  { name: "motivatie", label: "De ce vrei să te implici?", type: "textarea" },
];

function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Voluntariat"
        title="Uneori, experiența începe cu cineva care spune „vin și eu”."
        intro="Voluntarii nu sunt „mână de lucru”. Sunt oamenii care fac experiența posibilă și care, de multe ori, devin modele pentru copii."
      />

      <Section>
        <SectionHeading
          eyebrow="Roluri"
          title="Ce poți face"
          intro="Nu ai nevoie de experiență în lucrul cu copiii pentru toate rolurile. Ai nevoie de seriozitate, prezență și respect pentru reguli."
        />
        <ul className="mt-10 flex flex-wrap gap-2">
          {roles.map((r) => (
            <li
              key={r}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm capitalize"
            >
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="surface-card h-fit p-7">
            <h2 className="text-xl font-bold">Ce presupune</h2>
            <ul className="mt-5 space-y-3 text-sm text-foreground/85">
              <li>· o discuție inițială și o scurtă instruire</li>
              <li>· respectarea regulilor de protecție a copilului</li>
              <li>· confidențialitate privind datele copiilor</li>
              <li>· prezență confirmată la activitățile la care te înscrii</li>
              <li>· documentele solicitate de organizație pentru voluntariat</li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-md mb-6">Înscrie-te ca voluntar</h2>
            <SimpleForm fields={fields} submitLabel="Devino voluntar" formName="voluntariat" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
