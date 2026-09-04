import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { stories } from "@/data/site";

const categories = [
  "Experiențe",
  "Învățare",
  "Voluntari",
  "Parteneri",
  "Natură",
  "Educație",
  "Impact",
  "În culise",
];

export const Route = createFileRoute("/povesti/")({
  head: () => ({
    meta: [
      { title: "Povești de la Experience for All" },
      {
        name: "description",
        content:
          "Jurnalul programului: experiențe, învățare, voluntari, parteneri și momente din culise — publicate cu respect pentru demnitatea copiilor.",
      },
      { property: "og:title", content: "Povești de la Experience for All" },
      {
        property: "og:description",
        content: "Jurnalul programului de experiențe outdoor și educație non-formală din Covasna.",
      },
      { property: "og:url", content: "/povesti" },
    ],
    links: [{ rel: "canonical", href: "/povesti" }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Povești de la Experience for All"
        intro="Scriem despre ce am făcut, ce am observat și ce am învățat. Fără nume de copii, fără detalii personale, fără citate inventate."
      />

      <Section>
        <ul className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
            >
              {c}
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60}>
              <Link
                to="/povesti/$slug"
                params={{ slug: s.slug }}
                className="group block h-full overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]"
              >
                <img
                  src={s.image}
                  alt={s.excerpt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <p className="text-eyebrow text-primary">
                    {s.category}
                  </p>
                  <h2 className="mt-3 text-xl font-bold">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-sm text-muted-foreground">
          Următoarele povești vor fi publicate pe măsură ce experiențele sunt documentate și
          acordurile necesare sunt obținute.
        </p>
      </Section>
    </>
  );
}
