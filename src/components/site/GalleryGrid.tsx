import { useMemo, useState } from "react";
import { Lightbox } from "@/components/site/Lightbox";
import { activeGalleryCategories, galleryPhotos, type GalleryPhoto } from "@/data/gallery";
import { cn } from "@/lib/utils";

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
            <button
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
              {c}
            </button>
          ))}
        </div>
      )}

      <ul
        className={cn(
          "columns-1 gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3",
          showFilters && "mt-10",
        )}
      >
        {items.map((photo, i) => (
          <li key={photo.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Deschide fotografia: ${photo.alt}`}
              className="group block w-full overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                className={cn(
                  "w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]",
                  photo.orientation === "portrait"
                    ? "aspect-3/4"
                    : photo.orientation === "square"
                      ? "aspect-square"
                      : "aspect-4/3",
                )}
              />
            </button>
          </li>
        ))}
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
