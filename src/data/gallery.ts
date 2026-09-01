/**
 * Galeria foto Experience for All.
 *
 * CUM ADAUGI FOTOGRAFII NOI (fără să modifici designul sau componentele):
 * 1. Încarcă imaginea ca asset și pune pointer-ul în `src/assets/<nume>.jpg.asset.json`.
 * 2. Importă pointer-ul mai jos.
 * 3. Adaugă o intrare nouă în array-ul `galleryPhotos`.
 * Atât. Grila, filtrele, lightbox-ul și secțiunea de pe homepage se actualizează automat.
 *
 * Câmpuri: `src` și `alt` sunt obligatorii. Restul sunt opționale —
 * nu completa informații pe care nu le ai (data, titlu, descriere).
 */

import heroWaterAsset from "@/assets/experience-for-all-lac-plutitor-adolescenti.jpg.asset.json";
import divingLakeAsset from "@/assets/experience-for-all-scufundari-lac-instructori.jpg.asset.json";
import poolIntroAsset from "@/assets/experience-for-all-initiere-scufundari-piscina.jpg.asset.json";
import climbingAsset from "@/assets/experience-for-all-escalada-copil-instructor.jpg.asset.json";
import cartForestAsset from "@/assets/experience-for-all-excursie-carute-padure.jpg.asset.json";
import ridgeAsset from "@/assets/experience-for-all-creasta-montana-offroad.jpg.asset.json";
import workshopAsset from "@/assets/experience-for-all-atelier-scoala-copii.jpg.asset.json";
import volunteersAsset from "@/assets/experience-for-all-voluntari-masini-offroad.jpg.asset.json";
import diveSurfaceAsset from "@/assets/experience-for-all-scafandri-suprafata-lac.jpg.asset.json";
import brandTokenAsset from "@/assets/experience-for-all-medalion-brand.jpg.asset.json";
import instructorLakeAsset from "@/assets/experience-for-all-instructor-copii-lac-veste.jpg.asset.json";
import horseCartAsset from "@/assets/experience-for-all-caruta-cai-pajiste-grup.jpg.asset.json";
import picnicAsset from "@/assets/experience-for-all-picnic-padure-copii.jpg.asset.json";
import underwaterAsset from "@/assets/experience-for-all-scafandru-subacvatic-lac.jpg.asset.json";
import firstRegulatorAsset from "@/assets/experience-for-all-copil-primul-regulator-piscina.jpg.asset.json";
import swimLessonAsset from "@/assets/experience-for-all-lectie-inot-copii-bazin.jpg.asset.json";
import poolGearAsset from "@/assets/experience-for-all-copii-bazin-echipament-scufundari.jpg.asset.json";
import indoorPoolAsset from "@/assets/experience-for-all-bazin-acoperit-grup-instruire.jpg.asset.json";
import hillCampAsset from "@/assets/experience-for-all-tabara-deal-priveliste-lac.jpg.asset.json";
import eventBannerAsset from "@/assets/experience-for-all-banner-eveniment-lac-participanti.jpg.asset.json";

/** Categoriile disponibile. Adaugă una nouă doar dacă e cu adevărat necesar. */
export const galleryCategories = [
  "Scufundări",
  "Apă",
  "Aventură",
  "Natură",
  "Tabere",
  "Voluntari",
  "Învățare",
  "În culise",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryPhoto = {
  /** URL-ul imaginii (din pointer-ul de asset). */
  src: string;
  /** Text alternativ descriptiv, în limba română. Obligatoriu. */
  alt: string;
  category: GalleryCategory;
  /** Orientare — folosită doar pentru rezervarea spațiului în grilă. */
  orientation?: "landscape" | "portrait" | "square";
  /** Opționale: completează doar dacă informația există cu adevărat. */
  title?: string;
  description?: string;
  /** Format ISO: 2026-07-18. */
  date?: string;
  /** Activitatea sau evenimentul, dacă e relevant. */
  activity?: string;
  /** Marchează fotografiile reprezentative afișate pe homepage. */
  featured?: boolean;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: heroWaterAsset.url,
    alt: "Grup de adolescenți cu veste de salvare pe o plută de lemn, pe un lac înconjurat de dealuri împădurite",
    category: "Apă",
    orientation: "landscape",
    activity: "Experiență pe lac",
    featured: true,
  },
  {
    src: instructorLakeAsset.url,
    alt: "Instructor scafandru care sprijină doi copii cu veste de salvare în apa unui lac",
    category: "Apă",
    orientation: "portrait",
    activity: "Inițiere în apă deschisă",
    featured: true,
  },
  {
    src: underwaterAsset.url,
    alt: "Scafandru cu mască și regulator, fotografiat sub apă într-un lac",
    category: "Scufundări",
    orientation: "portrait",
    activity: "Scufundare în lac",
    featured: true,
  },
  {
    src: divingLakeAsset.url,
    alt: "Scafandri cu echipament complet, pregătindu-se în apă lângă un ponton",
    category: "Scufundări",
    orientation: "landscape",
    activity: "Scufundări în lac",
  },
  {
    src: diveSurfaceAsset.url,
    alt: "Doi scafandri la suprafața lacului, verificând echipamentul lângă un reper",
    category: "Scufundări",
    orientation: "landscape",
  },
  {
    src: firstRegulatorAsset.url,
    alt: "Copil în costum de neopren care respiră prima dată pe regulator, sprijinit de un instructor, într-o piscină",
    category: "Scufundări",
    orientation: "portrait",
    activity: "Prima respirație sub apă",
    featured: true,
  },
  {
    src: poolGearAsset.url,
    alt: "Copii cu ochelari și aripioare gonflabile explorând echipamentul de scufundări la marginea bazinului",
    category: "Scufundări",
    orientation: "portrait",
    activity: "Atelier de echipament",
  },
  {
    src: poolIntroAsset.url,
    alt: "Inițiere în scufundări într-o piscină, cu instructori alături de participanți",
    category: "Apă",
    orientation: "landscape",
    activity: "Inițiere în piscină",
  },
  {
    src: swimLessonAsset.url,
    alt: "Lecție de înot într-un bazin acoperit: copii cu căști și ochelari, alături de un instructor",
    category: "Apă",
    orientation: "portrait",
    activity: "Lecție de înot",
  },
  {
    src: indoorPoolAsset.url,
    alt: "Grup de participanți așezați pe marginea unui bazin acoperit, ascultând instrucțiunile înainte de intrarea în apă",
    category: "Apă",
    orientation: "landscape",
    activity: "Briefing înainte de apă",
  },
  {
    src: climbingAsset.url,
    alt: "Copil care urcă pe un perete de escaladă, asigurat de doi instructori",
    category: "Aventură",
    orientation: "landscape",
    activity: "Escaladă",
    featured: true,
  },
  {
    src: horseCartAsset.url,
    alt: "Grup de copii și adulți într-o căruță trasă de cai, pe o pajiște întinsă sub cer senin",
    category: "Aventură",
    orientation: "landscape",
    activity: "Excursie cu căruța",
    featured: true,
  },
  {
    src: cartForestAsset.url,
    alt: "Grup într-o căruță trasă de cai, pe un drum forestier",
    category: "Tabere",
    orientation: "landscape",
  },
  {
    src: picnicAsset.url,
    alt: "Copii așezați pe pături în pădure, împărțind masa de prânz la umbra copacilor",
    category: "Tabere",
    orientation: "portrait",
    activity: "Masă în tabără",
  },
  {
    src: hillCampAsset.url,
    alt: "Tineri și voluntari pe un deal cu priveliște spre lac și munți, pregătind focul și odihnindu-se pe pături",
    category: "Tabere",
    orientation: "landscape",
    activity: "Tabără pe deal",
    featured: true,
  },
  {
    src: ridgeAsset.url,
    alt: "Grup și mașini de teren pe o creastă montană însorită",
    category: "Natură",
    orientation: "landscape",
  },
  {
    src: workshopAsset.url,
    alt: "Copii într-o sală de școală, ridicând mâinile în timpul unui atelier",
    category: "Învățare",
    orientation: "landscape",
    activity: "Atelier de învățare",
  },
  {
    src: volunteersAsset.url,
    alt: "Mașini de teren pline de noroi, parcate la marginea pădurii înainte de o experiență",
    category: "Voluntari",
    orientation: "landscape",
  },
  {
    src: eventBannerAsset.url,
    alt: "Participanți în costume de neopren și veste de salvare, adunați lângă bannerul Experience for All la baza de pe lac",
    category: "Voluntari",
    orientation: "landscape",
    activity: "Zi de experiențe pe lac",
    featured: true,
  },
  {
    src: brandTokenAsset.url,
    alt: "Medalion metalic gravat cu textul Experience for All",
    category: "În culise",
    orientation: "landscape",
  },
];

/** Categoriile care chiar au fotografii, în ordinea definită mai sus. */
export const activeGalleryCategories = galleryCategories.filter((c) =>
  galleryPhotos.some((p) => p.category === c),
);

/** Selecție pentru homepage — se completează automat când adaugi fotografii noi. */
export function getFeaturedPhotos(limit = 6): GalleryPhoto[] {
  const featured = galleryPhotos.filter((p) => p.featured);
  const rest = galleryPhotos.filter((p) => !p.featured);
  return [...featured, ...rest].slice(0, limit);
}
