import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/site/Blocks";
import { Button } from "@/components/ui/button";
import { stories } from "@/data/site";

export const Route = createFileRoute("/povesti/$slug")({
  loader: ({ params }) => {
    const story = stories.find((s) => s.slug === params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Poveste indisponibilă — Experience for All" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.story;
    return {
      meta: [
        { title: `${s.title} — Experience for All` },
        { name: "description", content: s.excerpt },
        { property: "og:title", content: `${s.title} — Experience for All` },
        { property: "og:description", content: s.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/povesti/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/povesti/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: s.title,
            description: s.excerpt,
            author: { "@type": "Organization", name: "Experience for All" },
          }),
        },
      ],
    };
  },
  notFoundComponent: StoryNotFound,
  component: StoryPage,
});

function StoryNotFound() {
  return (
    <Section>
      <h1 className="display-lg">Povestea nu a fost găsită</h1>
      <Button asChild className="mt-8">
        <Link to="/povesti">Toate poveștile</Link>
      </Button>
    </Section>
  );
}

function StoryPage() {
  const { story } = Route.useLoaderData();
  return (
    <article>
      <Section>
        <p className="text-eyebrow text-primary">
          {story.category}
        </p>
        <h1 className="display-lg mt-5 max-w-3xl">{story.title}</h1>
        <img
          src={story.image}
          alt={story.excerpt}
          width={1280}
          height={960}
          className="mt-10 aspect-16/9 w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
        />
        <div className="mt-12 max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/85">
          {story.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-10 flex flex-wrap gap-2">
          {story.themes.map((t) => (
            <li
              key={t}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
        <Button asChild variant="quiet" className="mt-12 px-0">
          <Link to="/povesti">← Toate poveștile</Link>
        </Button>
      </Section>
    </article>
  );
}
