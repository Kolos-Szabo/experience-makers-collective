import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, CalendarDays, ChevronDown } from "lucide-react";
import { Section } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { PartnersGrid } from "@/components/site/Partners";
import {
  reportActivities,
  reportConclusion,
  reportCover,
  reportIntro,
} from "@/data/report2025";

const TITLE = "Raport de activitate 2025 — Experience for All";
const DESC =
  "Cele 18 activități sportive, recreative, educative și creative organizate în 2025 pentru copiii și adolescenții din sistemul de protecție a copilului din județul Covasna.";

export const Route = createFileRoute("/raport-de-activitate-2025")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/raport-de-activitate-2025" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/raport-de-activitate-2025" }],
  }),
  component: ReportPage,
});

function TocList() {
  return (
    <ol className="space-y-1 text-sm">
      {reportActivities.map((a) => (
        <li key={a.id}>
          <a
            href={`#${a.id}`}
            className="flex gap-3 rounded-md px-2 py-1.5 text-foreground/80 hover:bg-secondary hover:text-foreground"
          >
            <span className="w-5 shrink-0 font-display font-bold text-primary">{a.n}</span>
            <span className="leading-snug">{a.title}</span>
          </a>
        </li>
      ))}
      <li>
        <a
          href="#concluzii"
          className="flex gap-3 rounded-md px-2 py-1.5 font-semibold text-foreground hover:bg-secondary"
        >
          <span className="w-5 shrink-0" aria-hidden="true">→</span>
          Concluzii și mulțumiri
        </a>
      </li>
    </ol>
  );
}

function ReportPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden" id="inceput">
        {reportCover && (
          <img
            src={reportCover.src}
            alt={reportCover.alt}
            width={1920}
            height={1080}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover"
          />
        )}
        <div className="image-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-24 text-cream md:py-36">
          <p className="text-eyebrow text-cream/75">Programul „Experience for All”</p>
          <h1 className="display-xl mt-5 max-w-4xl">Raport de activitate 2025</h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/85">
            18 activități · Concluzii și mulțumiri
          </p>
          <a
            href="#cuprins"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest-deep hover:bg-cream/90"
          >
            Citește raportul <ChevronDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <Section>
        <Reveal className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-foreground/85">
          {reportIntro.map((p, i) => (
            <p key={i} className={i === 0 ? "font-display text-2xl leading-snug text-foreground" : ""}>
              {p}
            </p>
          ))}
        </Reveal>
      </Section>

      <Section tone="muted">
        <div className="text-center">
          <p className="text-eyebrow text-primary">Parteneri</p>
          <h2 className="display-md mt-3">Parteneri principali și parteneri secundari</h2>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <PartnersGrid />
        </div>
      </Section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[280px_1fr]">
          <aside id="cuprins" aria-label="Cuprins" className="scroll-mt-24">
            <details className="surface-card p-4 lg:hidden">
              <summary className="cursor-pointer font-display font-bold">
                Cuprins — 18 activități
              </summary>
              <div className="mt-4">
                <TocList />
              </div>
            </details>
            <div className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto lg:block">
              <p className="text-eyebrow mb-4 text-primary">Cuprins</p>
              <TocList />
            </div>
          </aside>

          <div className="min-w-0">
            <p className="text-eyebrow text-primary">Activitățile desfășurate în anul 2025</p>
            <ol className="mt-8 divide-y divide-border">
              {reportActivities.map((a) => (
                <li key={a.id} id={a.id} className="scroll-mt-24 py-14 first:pt-0">
                  <article>
                    <div className="flex items-start gap-5">
                      <span className="font-display text-5xl font-extrabold leading-none text-accent">
                        {String(a.n).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="text-2xl font-bold leading-tight md:text-3xl">{a.title}</h2>
                        {a.date && (
                          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
                            <CalendarDays className="size-4" aria-hidden="true" />
                            <time>{a.date}</time>
                          </p>
                        )}
                      </div>
                    </div>
                    {a.photo && (
                      <img
                        src={a.photo.src}
                        alt={a.photo.alt}
                        loading="lazy"
                        decoding="async"
                        className="mt-8 aspect-16/9 w-full rounded-xl object-cover shadow-[var(--shadow-soft)]"
                      />
                    )}
                    <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
                      {a.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    <a
                      href="#cuprins"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
                    >
                      <ArrowUp className="size-3.5" aria-hidden="true" /> Înapoi la cuprins
                    </a>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="concluzii" className="gradient-depth scroll-mt-16 text-cream">
        <div className="container-page py-20 md:py-28">
          <Reveal className="mx-auto max-w-3xl">
            <p className="text-eyebrow text-cream/70">Final</p>
            <h2 className="display-lg mt-4">Concluzii și mulțumiri</h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-cream/85">
              {reportConclusion.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a
              href="#inceput"
              className="mt-10 inline-flex items-center gap-1.5 text-sm text-cream/75 hover:text-cream"
            >
              <ArrowUp className="size-3.5" aria-hidden="true" /> Înapoi la început
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
