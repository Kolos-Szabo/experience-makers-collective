import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Blocks";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { galleryPhotos } from "@/data/gallery";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie foto — experiențe outdoor Experience for All" },
      {
        name: "description",
        content:
          "Fotografii reale din experiențele Experience for All: scufundări, apă, escaladă, tabere, natură și momente din culise, alături de copii și voluntari din Covasna.",
      },
      { property: "og:title", content: "Galerie foto — Experience for All" },
      {
        property: "og:description",
        content:
          "Imagini autentice din experiențele programului, publicate conform politicii de protecție a imaginii copiilor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/galerie" },
    ],
    links: [{ rel: "canonical", href: "/galerie" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Experiențe care rămân în amintire."
        intro={`${galleryPhotos.length} fotografii reale din experiențele noastre. Publicăm imagini doar conform consimțământului și regulilor programului. Nu folosim imaginea copiilor pentru a genera emoție sau donații.`}
      />

      <Section>
        <GalleryGrid />
      </Section>
    </>
  );
}
