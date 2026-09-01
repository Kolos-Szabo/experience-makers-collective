import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { PageHero, Section } from "@/components/site/Blocks";
import { gallery } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — experiențe outdoor Experience for All" },
      {
        name: "description",
        content:
          "Imagini din experiențele outdoor: apă, aventură, natură, tabere, voluntari, învățare și momente din culise.",
      },
      { property: "og:title", content: "Galerie — Experience for All" },
      {
        property: "og:description",
        content: "Fotografii din experiențele programului, publicate conform politicii de protecție a imaginii copiilor.",
      },
      { property: "og:url", content: "/galerie" },
    ],
    links: [{ rel: "canonical", href: "/galerie" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const cats = ["Toate", ...Array.from(new Set(gallery.map((g) => g.category)))];
  const [filter, setFilter] = useState("Toate");
  const [active, setActive] = useState<number | null>(null);
  const items = filter === "Toate" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Participare, curiozitate, concentrare, descoperire."
        intro="Publicăm fotografii doar conform consimțământului și regulilor programului. Nu folosim imaginea copiilor pentru a genera emoție sau donații."
      />

      <Section>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrează galeria">
          {cats.map((c) => (
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

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g, i) => (
            <li key={g.src + String(i)}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-xl border border-border"
                aria-label={`Deschide imaginea: ${g.alt}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </Section>

      {active !== null && items[active] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].alt}
          className="fixed inset-0 z-100 flex items-center justify-center bg-charcoal/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Închide"
            className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full border border-cream/40 text-cream"
          >
            <X className="size-5" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active].src}
              alt={items[active].alt}
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/80">
              {items[active].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
