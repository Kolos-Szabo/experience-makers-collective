import contaLogo from "@/assets/partener-conta.png.asset.json";
import eliteRunningLogo from "@/assets/partener-elite-running.png.asset.json";
import happyKidsParkLogo from "@/assets/partener-happy-kids-park.png.asset.json";
import levelUpLogo from "@/assets/partener-level-up.png.asset.json";
import myLakeLogo from "@/assets/partener-my-lake.png.asset.json";
import mymedCenterLogo from "@/assets/partener-mymed-center.png.asset.json";
import polarisFlowerShopLogo from "@/assets/partener-polaris-flower-shop.png.asset.json";
import proDriveTeamLogo from "@/assets/partener-pro-drive-team.png.asset.json";
import teamAdventureLogo from "@/assets/partener-team-adventure.png.asset.json";
import zamatLogo from "@/assets/partener-zamat-cafenea.png.asset.json";

export type Partner = {
  name: string;
  logo: string;
  /** URL oficial — doar dacă poate fi identificat cu certitudine. */
  url?: string;
  /** Logo-uri late au nevoie de mai multă lățime pentru a arăta echilibrat. */
  wide?: boolean;
};

/** Partenerii Experience for All — prezentare unitară, fără categorii. */
export const partners: Partner[] = [
  { name: "Mymed Center", logo: mymedCenterLogo.url, wide: true },
  { name: "TeamAdventure.ro", logo: teamAdventureLogo.url, url: "https://teamadventure.ro", wide: true },
  { name: "My Lake", logo: myLakeLogo.url, wide: true },
  { name: "Elite Running", logo: eliteRunningLogo.url, wide: true },
  { name: "Conta", logo: contaLogo.url },
  { name: "Pro Drive Team", logo: proDriveTeamLogo.url },
  { name: "Zamat cafenea", logo: zamatLogo.url },
  { name: "Level Up", logo: levelUpLogo.url, wide: true },
  { name: "Polaris Flower Shop", logo: polarisFlowerShopLogo.url },
  { name: "Happy Kids Park", logo: happyKidsParkLogo.url, wide: true },
];
