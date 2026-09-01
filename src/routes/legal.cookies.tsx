import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Prose } from "@/components/site/Blocks";
import { org, contact, PLACEHOLDER } from "@/data/site";

export const Route = createFileRoute("/legal/cookies")({
  head: () => ({
    meta: [
      { title: "Politica de cookie-uri — Experience for All" },
      {
        name: "description",
        content: "Ce cookie-uri folosește site-ul Experience for All și cum le poți controla.",
      },
      { property: "og:title", content: "Politica de cookie-uri — Experience for All" },
      { property: "og:description", content: "Informații despre cookie-urile utilizate pe site." },
      { property: "og:url", content: "/legal/cookies" },
    ],
    links: [{ rel: "canonical", href: "/legal/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Politica de cookie-uri"
        intro="Folosim cât mai puține cookie-uri posibil. Site-ul funcționează fără urmărire publicitară."
      />
      <Section>
        <Prose>
          <h2 className="display-md">Cookie-uri strict necesare</h2>
          <p>
            Sunt folosite pentru funcționarea de bază a site-ului. Nu pot fi dezactivate din site.
          </p>
          <h2 className="display-md pt-6">Analiză</h2>
          <p>
            Dacă vom activa un instrument de analiză a traficului, îl vom lista aici împreună cu
            perioada de stocare. Status curent: {PLACEHOLDER}
          </p>
          <h2 className="display-md pt-6">Cum le controlezi</h2>
          <p>
            Poți șterge sau bloca cookie-urile din setările browserului. Unele funcționalități pot fi
            afectate.
          </p>
          <h2 className="display-md pt-6">Întrebări</h2>
          <p>Scrie-ne la <a href={contact.emailHref} className="text-primary underline underline-offset-4">{contact.email}</a>.</p>
        </Prose>
      </Section>
    </>
  );
}
