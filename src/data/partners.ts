import auconsysLogo from "@/assets/partener-auconsys.png.asset.json";
import codeForRomaniaLogo from "@/assets/partener-code-for-romania.png.asset.json";
import contaLogo from "@/assets/partener-conta.png.asset.json";
import d4tiBarberShopLogo from "@/assets/partener-d4ti-barber-shop.png.asset.json";
import dToysLogo from "@/assets/partener-d-toys.png.asset.json";
import dgaspcCovasnaLogo from "@/assets/partener-dgaspc-covasna.png.asset.json";
import eliteRunningLogo from "@/assets/partener-elite-running.png.asset.json";
import happyKidsParkLogo from "@/assets/partener-happy-kids-park.png.asset.json";
import levelUpLogo from "@/assets/partener-level-up.png.asset.json";
import magicDiveLogo from "@/assets/partener-magic-dive.png.asset.json";
import milbonLogo from "@/assets/partener-milbon.png.asset.json";
import myLakeLogo from "@/assets/partener-my-lake.png.asset.json";
import mymedCenterLogo from "@/assets/partener-mymed-center.png.asset.json";
import polarisFlowerShopLogo from "@/assets/partener-polaris-flower-shop.png.asset.json";
import proDriveTeamLogo from "@/assets/partener-pro-drive-team.png.asset.json";
import roviLogo from "@/assets/partener-rovi.png.asset.json";
import teamAdventureLogo from "@/assets/partener-team-adventure.png.asset.json";
import visitCovasnaLogo from "@/assets/partener-visit-covasna.png.asset.json";
import wsaGroupLogo from "@/assets/partener-wsa-group.png.asset.json";
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
  { name: "Conta", logo: contaLogo.url },
  { name: "Mymed Center", logo: mymedCenterLogo.url, wide: true },
  { name: "WSA Group", logo: wsaGroupLogo.url, wide: true },
  { name: "TeamAdventure.ro", logo: teamAdventureLogo.url, url: "https://teamadventure.ro", wide: true },
  { name: "My Lake", logo: myLakeLogo.url, wide: true },
  { name: "Magic Dive – Namaste Underwater", logo: magicDiveLogo.url },
  { name: "Elite Running", logo: eliteRunningLogo.url, wide: true },
  { name: "Auconsys – Automation & Control Systems", logo: auconsysLogo.url, wide: true },
  { name: "Visit Covasna", logo: visitCovasnaLogo.url, wide: true },
  {
    name: "Direcția Generală de Asistență Socială și Protecția Copilului Covasna",
    logo: dgaspcCovasnaLogo.url,
  },
  { name: "Code for Romania", logo: codeForRomaniaLogo.url, wide: true },
  { name: "D-Toys", logo: dToysLogo.url },
  { name: "Rovi", logo: roviLogo.url },
  { name: "Pro Drive Team", logo: proDriveTeamLogo.url },
  { name: "Zamat cafenea", logo: zamatLogo.url },
  { name: "Level Up", logo: levelUpLogo.url, wide: true },
  { name: "Polaris Flower Shop", logo: polarisFlowerShopLogo.url },
  { name: "Milbon – The Blooming Studio", logo: milbonLogo.url },
  { name: "D4ti Barber Shop", logo: d4tiBarberShopLogo.url },
  { name: "Happy Kids Park", logo: happyKidsParkLogo.url, wide: true },
];
