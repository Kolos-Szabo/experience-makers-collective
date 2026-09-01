import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, FinalCTA } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { experiences, experienceCategories, images } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/experiente/")({
  head: () => ({
    meta: [
      { title: "Experiențe outdoor pentru copii — Experience for All" },
      {
        name: "description",
        content:
          "Apă, aventură, natură, tabere, educație non-formală și experiențe speciale. Fiecare activitate este un context de învățare.",
      },
      { property: "og:title", content: "Experiențe outdoor pentru copii — Experience for All" },
      {
        property: "og:description",
        content: "Descoperă experiențele Experience for All și ce pot învăța copiii prin fiecare.",
      },
      { property: "og:url", content: "/experiente" },
    ],
    links: [{ rel: "canonical", href: "/experiente" }],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  const [filter, setFilter] = useState<string>("Toate");
  const list =
    filter === "Toate" ? experiences : experiences.filter((e) => e.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Experiențe"
        title="Experiențe care devin amintiri."
        intro="Fiecare experiență are o dimensiune educațională: ce facem, ce provocare apare, ce reflectăm și ce putem lua cu noi mai departe."
        image={images.community}
        imageAlt="Mașini de teren pregătite la marginea pădurii, înaintea unei experiențe outdoor"
      />

      <Section>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrează după categorie">
          {["Toate", ...experienceCategories].map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-secondary",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((exp, i) => (
            <Reveal as="li" key={exp.slug} delay={i * 60}>
              <Link
                to="/experiente/$slug"
                params={{ slug: exp.slug }}
                className="group block h-full overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]"
              >
                <img
                  src={exp.image}
                  alt={exp.short}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <p className="text-eyebrow text-primary">{exp.category}</p>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                      {exp.status}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold">{exp.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="surface-card mt-16 flex flex-col items-start gap-5 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display-md">Lipsește o experiență pe care o poți oferi tu?</h2>
            <p className="mt-2 text-muted-foreground">
              Profesioniștii și pasionații pot propune experiențe noi.
            </p>
          </div>
          <Button asChild variant="cta" size="lg">
            <Link to="/implica-te/ofera-o-experienta">Oferă o experiență</Link>
          </Button>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
