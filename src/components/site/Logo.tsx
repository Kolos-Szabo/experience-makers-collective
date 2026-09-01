import logoAsset from "@/assets/logo.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Official Experience for All logo.
 * The artwork is never recolored, redrawn or distorted — on dark surfaces it is
 * placed on a cream plaque that preserves the required clear space.
 */
export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const img = (
    <img
      src={logoAsset.url}
      alt="Experience for All"
      width={882}
      height={396}
      className={cn("h-9 w-auto object-contain md:h-11", className)}
      loading="eager"
      decoding="async"
    />
  );

  if (!onDark) return img;

  return (
    <span className="inline-flex items-center rounded-lg bg-cream px-4 py-3">{img}</span>
  );
}
