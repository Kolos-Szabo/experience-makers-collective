import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, ListCheck } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { experiences, PLACEHOLDER } from "@/data/site";

export const Route = createFileRoute("/experiente/$slug")({
  loader: ({ params }) => {
    const experience = experiences.find((e) => e.slug === params.slug);
    if (!experience) throw notFound();
    return { experience };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Experiență indisponibilă — Experience for All" }, { name: "robots", content: "noindex" }],
      };
    }
    const { experience: e } = loaderData;
    return {
      meta: [
        { title: `${e.title} — Experience for All` },
        { name: "description", content: e.short },
        { property: "og:title", content: `${e.title} — Experience for All` },
        { property: "og:description", content: e.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/experiente/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/experiente/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: "/" },
              { "@type": "ListItem", position: 2, name: "Experiențe", item: "/experiente" },
              { "@type": "ListItem", position: 3, name: e.title, item: `/experiente/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: ExperienceNotFound,
  component: ExperienceDetail,
});

function ExperienceNotFound() {
  return (
    <Section>
      <h1 className="display-lg">Experiența nu a fost găsită</h1>
      <p className="mt-4 text-muted-foreground">Poate a fost mutată sau redenumită.</p>
      <Button asChild className="mt-8">
        <Link to="/experiente">Vezi toate experiențele</Link>
      </Button>
    </Section>
  );
}

function ExperienceDetail() {
  const { experience: e } = Route.useLoaderData();
  const related = experiences.filter((x) => x.slug !== e.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={e.category} title={e.title} intro={e.short} image={e.image} imageAlt={e.short} />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-14">
            <Reveal>
              <h2 className="display-md">Ce facem?</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{e.what}</p>
            </Reveal>
            <Reveal>
              <h2 className="display-md">De ce această experiență?</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{e.why}</p>
            </Reveal>
            <Reveal>
              <h2 className="display-md">Ce pot descoperi copiii?</h2>
              <div className="mt-6">
                <ListCheck items={e.learning} />
              </div>
            </Reveal>
            <Reveal>
              <h2 className="display-md">Ce provocare întâlnesc?</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{e.challenge}</p>
            </Reveal>
            <Reveal className="gradient-depth rounded-xl p-8 text-cream md:p-10">
              <h2 className="display-md">Cum folosim reflecția</h2>
              <p className="mt-4 text-cream/80">
                După activitate ne oprim și discutăm. Întrebările transformă experiența în învățare.
              </p>
              <ul className="mt-6 space-y-3">
                {e.reflection.map((q) => (
                  <li key={q} className="flex gap-3 text-cream/90">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {q}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <h2 className="display-md">Ce putem lua cu noi?</h2>
              <div className="mt-6">
                <ListCheck items={e.transfer} />
              </div>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Reveal className="surface-card p-7">
              <h2 className="text-eyebrow text-muted-foreground">Detalii</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Categorie</dt>
                  <dd className="font-medium">{e.category}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Vârstă recomandată</dt>
                  <dd className="font-medium">{e.ageRange}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Locație</dt>
                  <dd className="font-medium">{e.location}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="font-medium">{e.status}</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal className="surface-card p-7" delay={80}>
              <h2 className="text-eyebrow text-muted-foreground">Siguranță</h2>
              <ul className="mt-5 space-y-2.5 text-sm text-foreground/85">
                {e.safety.map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
              <Button asChild variant="quiet" className="mt-5 px-0">
                <Link to="/siguranta">Politica de siguranță →</Link>
              </Button>
            </Reveal>
            <Reveal className="surface-card p-7" delay={140}>
              <h2 className="text-eyebrow text-muted-foreground">Parteneri</h2>
              <p className="mt-4 text-sm text-muted-foreground">{PLACEHOLDER}</p>
            </Reveal>
            <Reveal className="rounded-xl bg-sand p-7 text-forest-deep" delay={180}>
              <h2 className="display-md text-forest-deep">
                Creează o experiență împreună cu noi
              </h2>
              <Button asChild variant="cta" className="mt-5 w-full">
                <Link to="/implica-te/ofera-o-experienta">Propune o experiență</Link>
              </Button>
              <Button asChild variant="outline" className="mt-3 w-full">
                <Link to="/implica-te/doneaza">Susține o experiență</Link>
              </Button>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <h2 className="display-lg">Alte experiențe</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link
                to="/experiente/$slug"
                params={{ slug: r.slug }}
                className="group block overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={r.image}
                  alt={r.short}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
