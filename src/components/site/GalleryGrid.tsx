import { useMemo, useState } from "react";
import { Lightbox } from "@/components/site/Lightbox";
import { activeGalleryCategories, galleryPhotos, type GalleryPhoto } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { galleryMedia } from "@/data/gallery-media";

export function GalleryGrid({
  photos = galleryPhotos,
  showFilters = true,
}: {
  photos?: GalleryPhoto[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<string>("Toate");
  const [active, setActive] = useState<number | null>(null);

  const cats = useMemo(
    () => ["Toate", ...activeGalleryCategories.filter((c) => photos.some((p) => p.category === c))],
    [photos],
  );
  const items = useMemo(
    () => (filter === "Toate" ? photos : photos.filter((p) => p.category === filter)),
    [filter, photos],
  );

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrează galeria">
          {cats.map((c) => (
            <Button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => {
                setFilter(c);
                setActive(null);
              }}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-secondary",
              )}
            >
              {c === "Toate" ? "Toate fotografiile" : c}
            </Button>
          ))}
        </div>
      )}

      <ul
        className={cn(
          "columns-1 gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3",
          showFilters && "mt-10",
        )}
      >
        {items.map((photo, i) => {
          const media = (galleryMedia as Record<string, { width: number; height: number; thumbnail: string; srcSet: string }>)[photo.src];
          return (
          <li key={photo.src} className="mb-4 break-inside-avoid">
            <Button
              variant="ghost"
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Deschide fotografia: ${photo.alt}`}
              className="group block h-auto w-full overflow-hidden rounded-xl border border-border bg-card p-0 shadow-[var(--shadow-soft)]"
            >
              <img
                src={media?.thumbnail ?? photo.src}
                srcSet={media?.srcSet}
                width={media?.width}
                height={media?.height}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                className={cn(
                  "h-auto w-full object-contain transition-opacity duration-300 group-hover:opacity-90 motion-reduce:transition-none",
                )}
              />
            </Button>
          </li>
        ); })}
      </ul>

      {items.length === 0 && (
        <p className="mt-10 text-muted-foreground">Nu există fotografii în această categorie.</p>
      )}

      {active !== null && (
        <Lightbox
          photos={items}
          index={active}
          onClose={() => setActive(null)}
          onIndexChange={setActive}
        />
      )}
    </div>
  );
}
