import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Blocks";
import { GalleryGrid } from "@/components/site/GalleryGrid";

export const Route = createFileRoute("/galerie-foto")({
  head: () => ({
    meta: [
      { title: "Galerie Foto Experience for All | Activități, Aventuri și Comunitate" },
      { name: "description", content: "Descoperă galeria foto Experience for All: drumeții, activități educaționale, aventuri în natură, voluntariat și experiențe care aduc oamenii împreună." },
      { property: "og:title", content: "Galerie foto — Experience for All" },
      { property: "og:description", content: "Momente autentice din aventurile, activitățile și întâlnirile comunității Experience for All." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://experienceforall.ro/galerie-foto" },
    ],
    links: [{ rel: "canonical", href: "https://experienceforall.ro/galerie-foto" }],
  }),
  component: GalleryPhotoPage,
});

function GalleryPhotoPage() {
  return (
    <>
      <section className="container-page pb-10 pt-12 md:pt-16">
        <p className="text-eyebrow text-primary">Experience for All · Galerie foto</p>
        <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight md:text-4xl">Momente care creează experiențe. Amintiri care ne apropie.</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">Fiecare activitate înseamnă mai mult decât o simplă experiență. Înseamnă oameni, descoperiri, prietenii și momente care rămân în amintire. Descoperă în imagini poveștile și activitățile comunității Experience for All.</p>
      </section>
      <Section className="!pt-0"><GalleryGrid /></Section>
    </>
  );
}