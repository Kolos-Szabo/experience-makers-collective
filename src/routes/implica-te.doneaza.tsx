import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { donationUses } from "@/data/site";
import { ContactInline } from "@/components/site/ContactInline";
import { CallButton, DonateCallCard } from "@/components/site/CallToDonate";
import { contact } from "@/data/site";

export const Route = createFileRoute("/implica-te/doneaza")({
  head: () => ({
    meta: [
      { title: "Donează — contribuie la următoarea experiență | Experience for All" },
      {
        name: "description",
        content:
          "Contribuția ta susține transportul, echipamentul, hrana, cazarea, siguranța și facilitarea experiențelor outdoor pentru copii din Covasna.",
      },
      { property: "og:title", content: "Donează — Experience for All" },
      {
        property: "og:description",
        content: "Contribuie la următoarea experiență. Fără milă, cu posibilități.",
      },
      { property: "og:url", content: "/implica-te/doneaza" },
    ],
    links: [{ rel: "canonical", href: "/implica-te/doneaza" }],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donează"
        title="Contribuie la următoarea experiență."
        intro="Nu strângem fonduri pentru a salva pe cineva. Strângem resurse pentru a face posibilă următoarea zi în care un copil încearcă ceva nou. Momentan donațiile se fac prin telefon — sună-ne și îți explicăm personal cum poți contribui."
      >
        <CallButton size="xl" />
        <CallButton label="Sună acum" variant="outline" size="xl" showNumber />
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Transparent"
              title="Unde pot ajunge resursele"
              intro="Fiecare experiență are un cost real. Iată din ce se compune."
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {donationUses.map((u, i) => (
                <Reveal as="li" key={u} delay={i * 40} className="surface-card p-5 capitalize">
                  {u}
                </Reveal>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Defalcarea reală a cheltuielilor și rapoartele se publică în pagina de{" "}
              <Link to="/transparenta" className="text-primary underline underline-offset-4">
                transparență
              </Link>
              .
            </p>
          </div>

          <aside className="space-y-6">
            <DonateCallCard title="Sună-ne pentru mai multe informații" />

            <Reveal className="rounded-xl bg-sand p-7 text-forest-deep" delay={80}>
              <h2 className="text-xl font-bold">Brățara Experience for All</h2>
              <p className="mt-3 text-sm">
                Un mecanism concret de susținere a programului. Detalii despre preț și comandă, în
                curând.
              </p>
            </Reveal>

            <Reveal className="surface-card p-7" delay={180}>
              <h2 className="text-xl font-bold">Sponsorizare companii</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Contract de sponsorizare, redirecționare sau contribuție în bunuri și servicii.
              </p>
              <Button asChild variant="outline" className="mt-5 w-full">
                <Link to="/implica-te/parteneri">Devino partener</Link>
              </Button>
            </Reveal>

            <Reveal className="surface-card p-7" delay={220}>
              <h2 className="text-xl font-bold">Ai întrebări despre donații?</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Îți explicăm exact unde ajunge contribuția ta. Scrie-ne sau sună-ne.
              </p>
              <ContactInline className="-ml-3 mt-4" />
              <p className="mt-3 text-sm text-muted-foreground">
                Cel mai simplu: sună-ne la{" "}
                <a
                  href={contact.phoneHref}
                  className="font-medium text-primary underline underline-offset-4"
                >
                  {contact.phoneDisplay}
                </a>
                .
              </p>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="Principiu"
          title="Nu cerșim. Invităm la participare."
          intro="Avem o idee bună, un model de lucru și copii care pot beneficia. Contribuția ta construiește experiența următoare, nu compensează o lipsă."
          invert
        />
        <div className="mt-10">
          <CallButton label="Sună-ne pentru mai multe informații" size="xl" />
        </div>
      </Section>
    </>
  );
}
