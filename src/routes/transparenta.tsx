import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { VideoFeature } from "@/components/site/VideoFeature";
import { reportCover, reportIntro } from "@/data/report2025";

export const Route = createFileRoute("/transparenta")({
  head: () => ({
    meta: [
      { title: "Transparență — Raport de activitate 2025 | Experience for All" },
      {
        name: "description",
        content:
          "Raportul de activitate 2025 al programului Experience for All și filmul despre experiențele oferite copiilor din județul Covasna.",
      },
      { property: "og:title", content: "Transparență — Experience for All" },
      {
        property: "og:description",
        content: "Raportul de activitate 2025 și filmul programului Experience for All.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/transparenta" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/transparenta" }],
  }),
  component: TransparencyPage,
});

function TransparencyPage() {
  return (
    <>
      <PageHero eyebrow="Transparență" title="Raport de activitate și film" />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            {reportCover && (
              <img
                src={reportCover.src}
                alt={reportCover.alt}
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-4/3 w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
              />
            )}
          </Reveal>
          <Reveal delay={100}>
            <p className="text-eyebrow text-primary">01 · Raport</p>
            <h2 className="display-lg mt-4">Raport de activitate 2025</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{reportIntro[0]}</p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/raport-de-activitate-2025">
                  Citește raportul de activitate 2025 <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <VideoFeature eyebrow="02 · Film" tone="muted" autoplay />
    </>
  );
}
