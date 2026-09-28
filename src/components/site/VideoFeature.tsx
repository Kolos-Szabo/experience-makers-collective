import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Blocks";

export const MAIN_VIDEO = {
  id: "VIKLaSSx270",
  start: 383,
  title: "Experience for All — experiențe outdoor pentru copii din Covasna",
};

/**
 * Lazy YouTube player. The iframe is only mounted when the player nears the
 * viewport (autoplay mode) or when the user clicks the poster (click mode),
 * so the Hero and Core Web Vitals are never affected.
 */
export function YouTubePlayer({ autoplay = false }: { autoplay?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [byClick, setByClick] = useState(false);

  useEffect(() => {
    if (!autoplay || active || !ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [autoplay, active]);

  const params = new URLSearchParams({
    autoplay: "1",
    mute: byClick ? "0" : "1",
    start: String(MAIN_VIDEO.start),
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
  });

  return (
    <div
      ref={ref}
      className="relative aspect-video w-full overflow-hidden rounded-xl bg-forest-deep shadow-[var(--shadow-lift)]"
    >
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${MAIN_VIDEO.id}?${params}`}
          title={MAIN_VIDEO.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setByClick(true);
            setActive(true);
          }}
          className="group absolute inset-0 size-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent"
          aria-label={`Pornește videoclipul: ${MAIN_VIDEO.title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${MAIN_VIDEO.id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            width={480}
            height={360}
            className="absolute inset-0 size-full object-cover"
          />
          <span className="image-overlay absolute inset-0" aria-hidden="true" />
          <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
            <Play className="ml-1 size-8 fill-current" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}

export function VideoFeature({
  eyebrow = "Film",
  title = "Vezi cum arată o experiență trăită împreună",
  intro,
  autoplay = false,
  tone = "default",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  autoplay?: boolean;
  tone?: "default" | "muted";
}) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} {...(intro ? { intro } : {})} align="center" />
      <div className="mx-auto mt-12 max-w-5xl">
        <YouTubePlayer autoplay={autoplay} />
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {autoplay
            ? "Videoclipul pornește fără sunet — activează sunetul din player."
            : "Apasă pentru a porni videoclipul."}
        </p>
      </div>
    </Section>
  );
}
