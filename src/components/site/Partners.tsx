import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { partners, type Partner } from "@/data/partners";

function PartnerLogo({ partner }: { partner: Partner }) {
  const img = (
    <img
      src={partner.logo}
      alt={partner.name}
      loading="lazy"
      decoding="async"
      className={cn(
        "max-h-14 w-auto max-w-[85%] object-contain transition-opacity duration-300 sm:max-h-16",
        partner.wide && "max-h-9 sm:max-h-10",
      )}
    />
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${partner.name} — deschide site-ul oficial într-o filă nouă`}
        className="flex size-full items-center justify-center rounded-lg p-2 opacity-90 transition-opacity hover:opacity-100"
      >
        {img}
      </a>
    );
  }

  return <div className="flex size-full items-center justify-center p-2 opacity-90">{img}</div>;
}

/**
 * Partenerii Experience for All — prezentare unitară, fără categorii,
 * cu dimensiuni normalizate vizual pentru un echilibru corect.
 */
export function PartnersGrid({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5",
        className,
      )}
    >
      {partners.map((p, i) => (
        <Reveal
          as="li"
          key={p.name}
          delay={i * 40}
          className="flex min-h-24 items-center justify-center bg-card px-4 py-6 sm:min-h-28"
        >
          <PartnerLogo partner={p} />
        </Reveal>
      ))}
    </ul>
  );
}
