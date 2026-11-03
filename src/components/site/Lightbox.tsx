import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryPhoto } from "@/data/gallery";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

export function Lightbox({
  photos,
  index,
  onClose,
  onIndexChange,
}: {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) {
  const photo = photos[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback(
    (delta: number) => {
      onIndexChange((index + delta + photos.length) % photos.length);
    },
    [index, photos.length, onIndexChange],
  );

  useEffect(() => {
    returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    return () => { returnFocus.current?.focus(); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [go, onClose]);

  if (!photo) return null;

  return (
    <DialogPrimitive.Root open onOpenChange={(open) => { if (!open) onClose(); }}>
    <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-100 bg-charcoal/95 backdrop-blur-sm motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
    <DialogPrimitive.Content
      aria-describedby="gallery-caption"
      onOpenAutoFocus={(e) => { e.preventDefault(); closeRef.current?.focus(); }}
      onCloseAutoFocus={(e) => { e.preventDefault(); returnFocus.current?.focus(); }}
      className="fixed inset-0 z-100 flex h-dvh flex-col outline-none motion-safe:animate-in motion-safe:fade-in-0"
      onTouchStart={(e) => {
        const t = e.touches[0];
        if (t) touchStart.current = { x: t.clientX, y: t.clientY };
      }}
      onTouchEnd={(e) => {
        const s = touchStart.current;
        const t = e.changedTouches[0];
        if (!s || !t) return;
        const dx = t.clientX - s.x;
        const dy = t.clientY - s.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <DialogPrimitive.Title className="sr-only">Fotografie {index + 1} din {photos.length}</DialogPrimitive.Title>
      <div className="flex items-center justify-between gap-4 p-4 text-cream/80">
        <p className="text-eyebrow text-cream/60">
          {index + 1} / {photos.length}
        </p>
        <Button
          variant="onImage" size="icon"
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Închide galeria"
          className="inline-flex size-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/10"
        >
          <X className="size-5" />
        </Button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 pb-6">
        <Button
          variant="onImage" size="icon"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          aria-label="Fotografia anterioară"
          className="absolute left-2 z-10 inline-flex size-11 items-center justify-center rounded-full border border-cream/30 bg-charcoal/50 text-cream transition-colors hover:bg-cream/15 md:left-6"
        >
          <ChevronLeft className="size-6" />
        </Button>

        <figure
          className="flex max-h-full min-h-0 max-w-6xl flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-h-[65dvh] w-auto max-w-full rounded-lg object-contain md:max-h-[72dvh]"
          />
          <figcaption id="gallery-caption" aria-live="polite" className="mt-4 max-w-2xl overflow-y-auto px-12 text-center text-sm text-cream/80">
            {photo.title && <span className="block font-semibold text-cream">{photo.title}</span>}
            {photo.alt}
            {(photo.activity ?? photo.date) && (
              <span className="mt-1 block text-cream/60">
                {[photo.activity, photo.date].filter(Boolean).join(" · ")}
              </span>
            )}
          </figcaption>
        </figure>

        <Button
          variant="onImage" size="icon"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          aria-label="Fotografia următoare"
          className="absolute right-2 z-10 inline-flex size-11 items-center justify-center rounded-full border border-cream/30 bg-charcoal/50 text-cream transition-colors hover:bg-cream/15 md:right-6"
        >
          <ChevronRight className="size-6" />
        </Button>
      </div>
    </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
