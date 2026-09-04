/**
 * Conținut editabil al site-ului Experience for All.
 * Nu adăuga date reale fără confirmare.
 */

import heroWaterAsset from "@/assets/experience-for-all-lac-plutitor-adolescenti.jpg.asset.json";
import expDivingAsset from "@/assets/experience-for-all-scufundari-lac-instructori.jpg.asset.json";
import expKayakAsset from "@/assets/experience-for-all-initiere-scufundari-piscina.jpg.asset.json";
import expClimbingAsset from "@/assets/experience-for-all-escalada-copil-instructor.jpg.asset.json";
import expCampAsset from "@/assets/experience-for-all-excursie-carute-padure.jpg.asset.json";
import expNatureAsset from "@/assets/experience-for-all-creasta-montana-offroad.jpg.asset.json";
import expEducationAsset from "@/assets/experience-for-all-atelier-scoala-copii.jpg.asset.json";
import communityAsset from "@/assets/experience-for-all-voluntari-masini-offroad.jpg.asset.json";
import diveSurfaceAsset from "@/assets/experience-for-all-scafandri-suprafata-lac.jpg.asset.json";
import brandTokenAsset from "@/assets/experience-for-all-medalion-brand.jpg.asset.json";

const heroWater = heroWaterAsset.url;
const expDiving = expDivingAsset.url;
const expKayak = expKayakAsset.url;
const expClimbing = expClimbingAsset.url;
const expCamp = expCampAsset.url;
const expNature = expNatureAsset.url;
const expEducation = expEducationAsset.url;
const community = communityAsset.url;
const diveSurface = diveSurfaceAsset.url;
const brandToken = brandTokenAsset.url;

export const images = {
  heroWater,
  expDiving,
  expKayak,
  expClimbing,
  expCamp,
  expNature,
  expEducation,
  community,
  diveSurface,
  brandToken,
};
export const org = {
  name: "Experience for All",
  tagline: "Trăiește. Reflectează. Învață. Crește.",
  short:
    "Program social și educațional care creează experiențe outdoor și oportunități de educație non-formală pentru copii și adolescenți din sistemul de protecție a copilului din județul Covasna.",
  county: "Covasna, România",
  email: "infoexperienceforall@gmail.com",
  phone: "+40 755 011 497",
};

/** Canalele oficiale de contact — folosite peste tot în site. */
export const contact = {
  email: "infoexperienceforall@gmail.com",
  emailHref: "mailto:infoexperienceforall@gmail.com",
  phoneDisplay: "+40 755 011 497",
  phoneHref: "tel:+40755011497",
  whatsappHref:
    "https://wa.me/40755011497?text=" +
    encodeURIComponent(
      "Bună, Experience for All! Aș dori mai multe informații despre proiectul vostru.",
    ),
};


export type ExperienceCategory =
  | "Apă"
  | "Aventură"
  | "Natură"
  | "Tabere"
  | "Educație"
  | "Experiențe speciale";

export const experienceCategories: ExperienceCategory[] = [
  "Apă",
  "Aventură",
  "Natură",
  "Tabere",
  "Educație",
  "Experiențe speciale",
];

export type Experience = {
  slug: string;
  title: string;
  category: ExperienceCategory;
  short: string;
  image: string;
  what: string;
  why: string;
  learning: string[];
  challenge: string;
  reflection: string[];
  transfer: string[];
  safety: string[];
  status: "Activă" | "În pregătire";
};

export const experiences: Experience[] = [
  {
    slug: "scufundari",
    title: "Scufundări",
    category: "Apă",
    short: "Descoperim lumea subacvatică, pas cu pas, în siguranță.",
    image: expDiving,
    what: "Copiii învață regulile de bază ale scufundării, echipamentul, semnele de comunicare sub apă și fac primii metri într-un mediu controlat, alături de instructori calificați.",
    why: "Scufundarea este un mediu complet nou. Nimic din ce știi de pe uscat nu funcționează la fel. Tocmai de aceea devine un context excelent de învățare: totul se face cu calm, cu reguli clare și cu încredere în cel de lângă tine.",
    learning: [
      "calm",
      "atenție",
      "comunicare",
      "încredere",
      "respectarea regulilor",
      "explorarea necunoscutului",
    ],
    challenge:
      "Primul contact cu respirația din regulator și cu senzația de a fi sub apă. Nu este dramatic — este nou. Fiecare copil avansează în ritmul lui.",
    reflection: [
      "Ce ai simțit înainte să intri în apă?",
      "Ce te-a ajutat să te liniștești?",
      "Cum ai comunicat fără cuvinte?",
      "Ce ai fi făcut altfel?",
    ],
    transfer: [
      "Cum îmi păstrez calmul când ceva este nou și incomod.",
      "Cum cer ajutor la timp, înainte să devină o problemă.",
      "De ce regulile există și cum mă protejează.",
    ],
    safety: [
      "instructori certificați",
      "raport mic instructor–participant",
      "echipament verificat",
      "briefing obligatoriu",
      "acord scris din partea reprezentantului legal",
    ],
    status: "Activă",
  },
  {
    slug: "caiac",
    title: "Caiac",
    category: "Apă",
    short: "Navigăm împreună. Barca merge doar dacă vâsliți în același ritm.",
    image: heroWater,
    what: "Ieșiri pe apă calmă, în echipe de doi sau în grup, cu tehnică de bază, siguranță pe apă și trasee scurte adaptate vârstei.",
    why: "Caiacul face vizibilă cooperarea. Dacă fiecare vâslește separat, barca se învârte. Dacă vâsliți împreună, mergeți înainte. Este o lecție care nu are nevoie de explicații.",
    learning: ["cooperare", "comunicare", "coordonare", "responsabilitate comună"],
    challenge:
      "Sincronizarea cu celălalt și acceptarea faptului că nu poți controla totul singur.",
    reflection: [
      "Cine a dat ritmul și cum ați decis?",
      "Ce s-a întâmplat când nu ați fost sincronizați?",
      "Cum ați rezolvat?",
    ],
    transfer: [
      "Cum negociez un ritm comun într-un grup.",
      "Cum spun ce am nevoie fără să acuz pe cineva.",
    ],
    safety: [
      "veste de salvare obligatorii",
      "însoțitor pe apă",
      "trasee evaluate în prealabil",
      "verificarea condițiilor meteo",
    ],
    status: "Activă",
  },
  {
    slug: "escalada",
    title: "Escaladă",
    category: "Aventură",
    short: "Urcăm pas cu pas. Nu contează cât de sus — contează următoarea priză.",
    image: expClimbing,
    what: "Escaladă pe perete natural sau artificial, cu asigurare de sus, echipament complet și instructori care lucrează individual cu fiecare participant.",
    why: "Peretele nu negociază. Fie găsești următoarea priză, fie ceri ajutor. Ambele variante sunt lecții bune.",
    learning: [
      "abordarea provocărilor",
      "răbdare",
      "încredere",
      "cererea de ajutor",
      "depășirea obstacolelor",
    ],
    challenge: "Momentul în care nu mai vezi drumul următor și vrei să cobori.",
    reflection: [
      "Unde te-ai blocat?",
      "Ce ai încercat înainte să ceri ajutor?",
      "Cine te-a asigurat de jos și ce a însemnat asta?",
    ],
    transfer: [
      "Cum împart o problemă mare în pași mici.",
      "Cum îmi dau voie să mă opresc și să reiau.",
    ],
    safety: [
      "echipament omologat",
      "verificare dublă a nodurilor",
      "instructori calificați",
      "evaluarea traseului înainte de urcare",
    ],
    status: "Activă",
  },
  {
    slug: "tabere",
    title: "Tabere",
    category: "Tabere",
    short: "Trăim împreună în aer liber, câteva zile, cu reguli făcute împreună.",
    image: expCamp,
    what: "Tabere de câteva zile: montarea corturilor, gătit outdoor, focul de tabără, sarcini împărțite, seri de reflecție.",
    why: "O tabără este o comunitate temporară. Fiecare are un rol, iar consecințele deciziilor se văd imediat — de la cine strânge lemne până la cine spală vasele.",
    learning: [
      "independență",
      "adaptabilitate",
      "responsabilitate",
      "cooperare",
      "gestionarea situațiilor noi",
    ],
    challenge: "Rutina cunoscută dispare. Totul trebuie construit împreună, de la zero.",
    reflection: [
      "Ce rol ți-ai asumat?",
      "Ce a fost mai greu decât te așteptai?",
      "Ce ai face diferit în următoarea tabără?",
    ],
    transfer: [
      "Cum contribui la un grup fără să aștept să mi se ceară.",
      "Cum mă descurc când planul se schimbă.",
    ],
    safety: [
      "însoțitori permanenți",
      "plan medical",
      "reguli agreate în grup",
      "locații verificate",
    ],
    status: "Activă",
  },
  {
    slug: "natura",
    title: "Explorare în natură",
    category: "Natură",
    short: "Explorăm ceea ce este în jurul nostru — și învățăm să observăm.",
    image: expNature,
    what: "Drumeții tematice, observarea biodiversității, orientare, seri de astronomie, activități de îngrijire a locului în care am fost.",
    why: "Natura nu are nevoie de decor. Are nevoie doar de cineva care se oprește și se uită cu atenție.",
    learning: [
      "observație",
      "curiozitate",
      "responsabilitate față de mediu",
      "conectare cu natura",
    ],
    challenge: "Răbdarea. Lucrurile interesante apar după ce încetinești.",
    reflection: [
      "Ce ai observat și nu ai mai văzut până acum?",
      "Ce întrebare ți-a rămas în minte?",
    ],
    transfer: [
      "Cum observ înainte să trag o concluzie.",
      "Cum las un loc în starea în care l-am găsit.",
    ],
    safety: [
      "trasee adaptate vârstei",
      "echipament potrivit vremii",
      "reguli de grup pe traseu",
    ],
    status: "Activă",
  },
  {
    slug: "ateliere-educationale",
    title: "Ateliere educaționale",
    category: "Educație",
    short: "Educație financiară, leadership, comunicare — în cerc, nu în bancă.",
    image: expEducation,
    what: "Ateliere scurte de educație non-formală: bani și decizii, comunicare, obiceiuri, planificare, leadership prin sarcini reale.",
    why: "Sunt subiecte care se învață greu din manual și ușor din exemple, jocuri și discuții.",
    learning: ["gândire critică", "decizii", "comunicare", "planificare", "inițiativă"],
    challenge: "Să spui ce crezi într-un grup și să asculți ce spun ceilalți.",
    reflection: [
      "Ce ai schimba la decizia pe care ai luat-o în exercițiu?",
      "Unde ai mai întâlnit situația asta?",
    ],
    transfer: [
      "Cum îmi planific un obiectiv mic.",
      "Cum spun „nu sunt de acord” fără conflict.",
    ],
    safety: ["facilitatori instruiți", "participare voluntară", "reguli de confidențialitate în grup"],
    status: "Activă",
  },
  {
    slug: "experiente-speciale",
    title: "Experiențe speciale",
    category: "Experiențe speciale",
    short: "Detectare de metale, întâlniri cu profesioniști, activități creative.",
    image: brandToken,
    what: "Experiențe unice, propuse de profesioniști și voluntari: o zi cu un fotograf, o seară cu un astronom, o căutare cu detectorul de metale, un atelier creativ.",
    why: "Uneori o singură întâlnire cu un om pasionat de meseria lui deschide o direcție la care copilul nu se gândise.",
    learning: ["curiozitate", "modele profesionale", "explorarea intereselor", "creativitate"],
    challenge: "Să pui întrebări unui adult pe care nu îl cunoști.",
    reflection: ["Ce te-a surprins?", "Ce ai vrea să încerci după ziua asta?"],
    transfer: ["Cum aflu mai multe despre ceva ce mă interesează."],
    safety: ["voluntari verificați", "activități însoțite", "acordul casei de tip familial"],
    status: "În pregătire",
  },
];

export const learningThemes = [
  {
    title: "Învățare prin experiență",
    description: "Copilul face, nu doar ascultă.",
  },
  { title: "Învățare prin participare", description: "Copilul este implicat activ." },
  { title: "Învățare prin provocare", description: "Copilul întâlnește ceva nou." },
  { title: "Învățare prin cooperare", description: "Copilul lucrează cu ceilalți." },
  { title: "Învățare prin reflecție", description: "Copilul se gândește la ceea ce a trăit." },
  {
    title: "Învățare prin transfer",
    description: "Copilul descoperă unde poate folosi ceea ce a învățat.",
  },
];

export const experienceCycle = [
  { step: "01", title: "Trăiește", text: "Copilul intră într-o situație reală." },
  {
    step: "02",
    title: "Participă",
    text: "Încearcă, cooperează, ia decizii și răspunde provocărilor.",
  },
  {
    step: "03",
    title: "Reflectează",
    text: "Se oprește și se gândește: ce s-a întâmplat, ce am simțit, ce a fost greu, cine m-a ajutat?",
  },
  {
    step: "04",
    title: "Învață",
    text: "Descoperă lucruri despre sine, despre ceilalți, despre natură, despre limite și posibilități.",
  },
  {
    step: "05",
    title: "Transferă",
    text: "„Unde pot folosi ceea ce am învățat și data viitoare?”",
  },
];

export const e4aCycle = [
  { key: "DISCOVER", ro: "Descoperă", text: "Copilul află despre o experiență nouă." },
  { key: "EXPERIENCE", ro: "Trăiește", text: "Intră într-o situație reală, nu simulată." },
  { key: "CHALLENGE", ro: "Provocare", text: "Întâlnește ceva ce nu a mai făcut." },
  { key: "PARTICIPATE", ro: "Participă", text: "Contribuie, decide, cooperează." },
  { key: "REFLECT", ro: "Reflectează", text: "Discută ce s-a întâmplat și ce a simțit." },
  { key: "LEARN", ro: "Învață", text: "Numește ce a descoperit." },
  { key: "TRANSFER", ro: "Transferă", text: "Caută unde altundeva se aplică." },
  { key: "GROW", ro: "Crește", text: "Revine, încearcă din nou, merge mai departe." },
];

/** Cifre placeholder. Se editează din acest fișier / viitorul CMS. */
export const impactMetrics = {
  period: "2026",
  note: "Cifrele de mai jos sunt placeholder-e editabile și vor fi actualizate cu datele reale ale programului.",
  items: [
    { value: 87, label: "copii implicați" },
    { value: 24, label: "experiențe create" },
    { value: 12, label: "tipuri de activități" },
    { value: 31, label: "voluntari" },
    { value: 14, label: "parteneri" },
  ],
};

export const qualitativeImpact = [
  "experiențe încercate pentru prima dată",
  "momente de reflecție facilitate după activități",
  "teme de învățare identificate împreună cu copiii",
  "observații ale facilitatorilor, notate după fiecare experiență",
  "revenirea copiilor la activitățile următoare",
  "oportunități de colaborare cu profesioniști din comunitate",
];

export type Story = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  body: string[];
  themes: string[];
};

export const stories: Story[] = [
  {
    slug: "structura-unei-povesti",
    title: "Cum arată o poveste Experience for All",
    category: "În culise",
    excerpt:
      "Un format de storytelling care respectă demnitatea copilului: fără nume, fără istoric personal, fără citate inventate.",
    image: images.expDiving,
    body: [
      "Poveștile noastre urmează un traseu simplu: înainte, experiența, provocarea, participarea, reflecția, după.",
      "Nu publicăm nume, adrese, informații despre familie sau despre trecutul copiilor. Nu folosim imaginea unui copil pentru a genera emoție sau donații.",
      "Această pagină este un exemplu structural. Poveștile reale vor fi publicate doar după documentare și doar cu acordurile necesare.",
    ],
    themes: ["reflecție", "demnitate", "consimțământ"],
  },
];

export const events = {
  upcoming: [] as Array<{
    title: string;
    date: string;
    location: string;
    description: string;
  }>,
  past: [] as Array<{
    title: string;
    date: string;
    location: string;
    description: string;
  }>,
};

export const partnerContributions = [
  "Finanțare",
  "Echipamente",
  "Transport",
  "Cazare",
  "Hrană",
  "Servicii",
  "Locații",
  "Experiențe",
  "Expertiză",
  "Resurse educaționale",
];

export const donationUses = [
  "transport",
  "echipament",
  "activități",
  "hrană",
  "cazare",
  "materiale",
  "siguranță",
  "logistică",
  "facilitare",
  "dezvoltarea programului",
];


