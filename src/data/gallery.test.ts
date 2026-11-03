import { test, expect } from "bun:test";
import { galleryPhotos, activeGalleryCategories, getFeaturedPhotos } from "./gallery";
import { galleryMedia } from "./gallery-media";

test("retains twenty existing photographs and adds all nine supplied photographs", () => {
  expect(galleryPhotos).toHaveLength(29);
  expect(galleryPhotos.filter(p => p.src.includes("drumetie-grup-pajiste-toamna") || p.src.includes("explorare-frunze-padure") || p.src.includes("aventura-deal-toamna") || p.src.includes("atelier-interactiv-grup") || p.src.includes("masa-impreuna-aer-liber") || p.src.includes("drumetie-marginea-padurii") || p.src.includes("plimbare-traseu-insorit") || p.src.includes("grup-poteci-padure") || p.src.includes("gatit-impreuna-foc-tabara"))).toHaveLength(9);
});
test("gallery originals are unique", () => {
  expect(new Set(galleryPhotos.map(p => p.src)).size).toBe(galleryPhotos.length);
});
test("every active category contains photographs", () => {
  for (const category of activeGalleryCategories) expect(galleryPhotos.filter(p => p.category === category).length).toBeGreaterThan(0);
});
test("every original has responsive sizes and concrete image dimensions", () => {
  for (const photo of galleryPhotos) {
    const media = (galleryMedia as Record<string, { width: number; height: number; srcSet: string }>)[photo.src];
    expect(media?.width).toBeGreaterThan(0);
    expect(media?.height).toBeGreaterThan(0);
    expect(media?.srcSet.split(",")).toHaveLength(2);
  }
});
test("homepage selection provides eight different photographs", () => {
  expect(getFeaturedPhotos(8)).toHaveLength(8);
  expect(new Set(getFeaturedPhotos(8).map(p => p.src)).size).toBe(8);
});