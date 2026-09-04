import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Section, SectionHeading, FinalCTA } from "@/components/site/Blocks";
import { CallButton, DonateCallBanner } from "@/components/site/CallToDonate";
import { PartnersGrid } from "@/components/site/Partners";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { getFeaturedPhotos } from "@/data/gallery";
import {
  images,
  experiences,
  experienceCycle,
  impactMetrics,
  qualitativeImpact,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Experience for All — Aventura este cadrul. Învățarea este călătoria." },
      {
        name: "description",
        content:
          "Experiențe outdoor și educație non-formală pentru copii și adolescenți din sistemul de protecție a copilului, județul Covasna. Trăiește, reflectează, învață, crește.",
      },
      {
        property: "og:title",
        content: "Experience for All — Aventura este cadrul. Învățarea este călătoria.",
      },
      {
        property: "og:description",
        content:
          "Program social și educațional bazat pe experiențe outdoor și educație non-formală în județul Covasna.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const notJustActivity = [
  {
    title: "Scufundare",
    activity: "Descoperim lumea subacvatică.",
    learning: ["calm", "atenție", "comunicare", "încredere", "reguli", "necunoscut"],
    slug: "scufundari",
  },
  {
    title: "Escaladă",
    activity: "Urcăm pas cu pas.",
    learning: ["provocări", "răbdare", "încredere", "cererea de ajutor"],
    slug: "escalada",
  },
  {
    title: "Tabără",
    activity: "Trăim împreună în aer liber.",
    learning: ["independență", "adaptabilitate", "responsabilitate", "cooperare"],
    slug: "tabere",
  },
  {
    title: "Natură",
    activity: "Explorăm ceea ce este în jurul nostru.",
    learning: ["observație", "curiozitate", "responsabilitate", "conectare"],
    slug: "natura",
  },
];

const helpPaths = [
  {
    icon: HeartHandshake,
    title: "Donează",
    text: "Susții transportul, echipamentul și logistica următoarei experiențe.",
    to: "/implica-te/doneaza" as const,
    cta: "Află cum poți dona",
  },
  {
    icon: Sparkles,
    title: "Oferă o experiență",
    text: "Ai o abilitate sau o pasiune? Poate deveni o zi memorabilă pentru un copil.",
    to: "/implica-te/ofera-o-experienta" as const,
    cta: "Propune o experiență",
  },
  {
    icon: Compass,
    title: "Devino voluntar",
    text: "Facilitator, instructor, fotograf, șofer, om de logistică — toate contează.",
    to: "/implica-te/voluntariat" as const,
    cta: "Devino parte din experiență",
  },
  {
    icon: ShieldCheck,
    title: "Devino partener",
    text: "Companii și organizații care contribuie cu resurse, servicii sau expertiză.",
    to: "/implica-te/parteneri" as const,
    cta: "Devino partener",
  },
];

function HomePage() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={images.heroMeadow}
          alt="Copii și adulți într-o căruță trasă de cai, pe o pajiște însorită din Covasna"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="image-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-page relative flex min-h-[86vh] flex-col justify-end py-20 text-cream md:min-h-[92vh] md:py-28">
          <p className="text-eyebrow text-cream/75">Experience for All · Covasna</p>
          <h1 className="display-xl mt-6 max-w-5xl">
            Aventura este cadrul.
            <br />
            Învățarea este călătoria.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-xl">
            Experience for All creează experiențe outdoor și oportunități de educație non-formală
            pentru copii și adolescenți din sistemul de protecție a copilului din județul Covasna.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CallButton label="Sună-ne pentru a dona" size="xl" />
            <Button asChild variant="onImage" size="xl">
              <Link to="/cum-invatam">Descoperă cum învățăm prin experiențe</Link>
            </Button>
            <Button asChild variant="link" size="lg" className="text-cream">
              <Link to="/experiente">
                Descoperă experiențele <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 02 — DE CE EXISTĂ */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-eyebrow text-primary">De ce existăm</p>
            <h2 className="display-lg mt-4">
              Uneori, o experiență începe cu un simplu „hai să încercăm”.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Unii copii ajung firesc la excursii, sport, natură, tabere, activități acvatice,
                aventură, întâlniri cu profesioniști sau experiențe culturale.
              </p>
              <p>Pentru alți copii, astfel de oportunități apar mult mai rar.</p>
              <p className="text-foreground">
                Experience for All își propune să reducă această diferență de acces la experiențe
                și la oportunități de învățare. Nu pornim de la ce le lipsește copiilor, ci de la ce
                pot descoperi.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" size="lg">
                <Link to="/despre">Despre program</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <img
              src={images.expClimbing}
              alt="Copil care urcă pe un perete de escaladă, sprijinit de doi instructori"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-4/5 w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
            />
            <blockquote className="surface-card mt-[-3rem] ml-auto mr-4 max-w-sm p-6 text-lg leading-relaxed md:mr-[-1rem]">
              „Copiii merită să încerce, să eșueze în siguranță și să încerce din nou.”
            </blockquote>
          </Reveal>
        </div>
      </Section>

      {/* 03 — NU ESTE DOAR O ACTIVITATE */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Nu este doar o activitate"
          title="Nu contează doar ceea ce facem. Contează ceea ce descoperim prin ceea ce facem."
          intro="Fiecare activitate outdoor este proiectată ca un context de învățare. Activitatea este vizibilă. Învățarea este scopul."
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {notJustActivity.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70}>
              <Link
                to="/experiente/$slug"
                params={{ slug: item.slug }}
                className="surface-card group flex h-full flex-col p-7 transition-shadow hover:shadow-[var(--shadow-lift)]"
              >
                <h3 className="display-md">{item.title}</h3>
                <p className="mt-3 text-base text-muted-foreground">{item.activity}</p>
                <p className="text-eyebrow mt-7 text-primary">Ce poate descoperi un copil</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.learning.map((l) => (
                    <li
                      key={l}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {l}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto pt-7 text-sm font-semibold text-primary">
                  Vezi experiența →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 04 — EXPERIENCE CYCLE */}
      <Section tone="deep">
        <SectionHeading
          eyebrow="Modelul Experience for All"
          title="Trăiește → Reflectează → Învață → Crește"
          intro="Experiența outdoor este cadrul. Participarea este metoda. Reflecția transformă experiența în învățare."
          invert
        />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-xl border border-cream/20 bg-cream/20 md:grid-cols-5">
          {experienceCycle.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 80} className="bg-forest-deep p-7">
              <span className="font-display text-4xl font-extrabold text-accent">{s.step}</span>
              <h3 className="mt-4 text-xl font-bold text-cream">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12">
          <Button asChild variant="cta" size="lg">
            <Link to="/cum-invatam">Descoperă cum învățăm</Link>
          </Button>
        </div>
      </Section>

      {/* 05 — EXPERIENȚE */}
      <Section>
        <SectionHeading
          eyebrow="Experiențe"
          title="Experiențe care devin amintiri — și oportunități de învățare."
          intro="Apă, aventură, natură, tabere, educație și experiențe speciale propuse de oameni din comunitate."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.slice(0, 6).map((exp, i) => (
            <Reveal as="li" key={exp.slug} delay={i * 70}>
              <Link
                to="/experiente/$slug"
                params={{ slug: exp.slug }}
                className="group block overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.short}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-eyebrow text-primary">{exp.category}</p>
                  <h3 className="mt-3 text-xl font-bold">{exp.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
        <div className="mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/experiente">Toate experiențele</Link>
          </Button>
        </div>
      </Section>

      {/* 06 — STORY */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Poveste"
          title="Un moment poate începe o călătorie."
          intro="Formatul de mai jos arată cum construim poveștile — fără nume, fără detalii personale, fără citate inventate."
        />
        <ol className="mt-14 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {[
            ["Înainte", "„Nu mai încercasem niciodată.”"],
            ["Experiența", "„Am intrat în apă.”"],
            ["Provocarea", "„Mi-a fost puțin teamă.”"],
            ["Participarea", "„Am continuat.”"],
            ["Reflecția", "„Am descoperit că pot face lucruri pe care nu le credeam posibile.”"],
            ["După", "„Data viitoare vreau să încerc altceva.”"],
          ].map(([label, line], i) => (
            <Reveal
              as="li"
              key={label}
              delay={i * 70}
              className="rounded-xl border border-forest-deep/15 bg-cream/70 p-6"
            >
              <p className="text-eyebrow text-forest-deep">{label}</p>
              <p className="mt-3 text-base leading-relaxed">{line}</p>
            </Reveal>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-sm text-forest-deep/75">
          Acesta este doar un exemplu structural. Poveștile reale se publică numai după documentare
          și cu acordurile necesare.
        </p>
      </Section>

      {/* 07 — IMPACT */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={`Impact · ${impactMetrics.period}`}
          title="Ce am creat împreună"
          intro="Cifrele arată amploarea. Observațiile arată sensul. Le prezentăm pe amândouă, fără să le confundăm."
        />
        <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {impactMetrics.items.map((m, i) => (
            <Reveal key={m.label} delay={i * 60} className="bg-card p-8 text-center">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="font-display block text-5xl font-extrabold tracking-tight text-primary">
                  <Counter value={m.value} />
                </span>
                <span className="mt-3 block text-sm text-muted-foreground">{m.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
        <p className="mt-5 text-xs text-muted-foreground">{impactMetrics.note}</p>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="display-md">Ce urmărim dincolo de cifre</h3>
            <ul className="mt-6 space-y-3">
              {qualitativeImpact.map((q) => (
                <li key={q} className="flex gap-3 text-base text-foreground/85">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 rounded-full bg-accent" />
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="surface-card p-8">
            <h3 className="text-xl font-bold">Nu supraevaluăm rezultatele</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nu transformăm observațiile în concluzii științifice. Nu afirmăm procente de creștere
              a încrederii. Publicăm ce am făcut, ce am observat și ce urmează să măsurăm mai bine.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/impact">Vezi metodologia de impact</Link>
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* 08 — COMUNITATE */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={images.expNature}
              alt="Copii, voluntari și mașini de teren pe o creastă montană însorită"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-4/3 w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-eyebrow text-primary">Comunitate</p>
            <h2 className="display-lg mt-4">
              Nu facem ceva pentru copii. Construim experiențele împreună.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Copii, voluntari, profesioniști, case de tip familial, parteneri și comunitate. Fiecare
              experiență este rezultatul unui grup de oameni care spun „vin și eu”.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/implica-te/voluntariat">Devino parte din experiență</Link>
              </Button>
              <Button asChild variant="quiet" size="lg">
                <Link to="/despre">Cine suntem</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 09 — HOW TO HELP */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Implică-te"
          title="Patru moduri de a construi următoarea experiență"
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {helpPaths.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 70} className="surface-card flex h-full flex-col p-7">
              <p.icon className="size-7 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <Button asChild variant="quiet" className="mt-auto justify-start px-0 pt-6">
                <Link to={p.to}>{p.cta} →</Link>
              </Button>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 10 — TRANSPARENȚĂ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-eyebrow text-primary">Transparență</p>
            <h2 className="display-lg mt-4">Construim cu responsabilitate.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              O experiență extraordinară trebuie să fie și o experiență responsabilă: instructori
              calificați, evaluarea riscurilor, consimțământ, protecția datelor și a imaginii
              copiilor, raportare clară a resurselor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline" size="lg">
                <Link to="/transparenta">Unde merge sprijinul tău</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/siguranta">Siguranța copiilor</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100} className="surface-card p-8">
            <h3 className="text-eyebrow text-muted-foreground">Cum măsurăm impactul</h3>
            <ol className="mt-6 space-y-4">
              {[
                ["Input", "resurse"],
                ["Activitate", "ce facem"],
                ["Output", "ce realizăm"],
                ["Experiență", "ce trăiesc copiii"],
                ["Reflecție", "ce observăm"],
                ["Învățare", "ce pot descoperi"],
                ["Impact pe termen lung", "ce schimbări apar în timp"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-6 border-b border-border pb-3">
                  <span className="font-display font-bold">{k}</span>
                  <span className="text-sm text-muted-foreground">{v}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* 11 — PARTENERI */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Împreună"
          title="Partenerii Experience for All"
          intro="Organizații și echipe care fac posibile experiențele noastre — prin timp, expertiză, logistică sau resurse."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-5xl">
          <PartnersGrid />
        </div>
      </Section>

      {/* 12 — GALERIE */}
      <Section>
        <SectionHeading
          eyebrow="Galerie"
          title="Experiențe care rămân în amintire"
          intro="Fotografii reale din apă, din tabere și de pe traseu — momente trăite de copiii și voluntarii programului."
          align="center"
        />
        <div className="mt-12">
          <GalleryGrid photos={getFeaturedPhotos(6)} showFilters={false} />
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <Link to="/galerie">
              Vezi toate fotografiile
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <DonateCallBanner />
      <FinalCTA />
    </>
  );
}
