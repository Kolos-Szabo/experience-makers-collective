/**
 * Raport de activitate 2025 — text preluat din raportul oficial.
 * Nu adăuga informații care nu apar în raport.
 */
import { galleryPhotos } from "@/data/gallery";
import poolIntroAsset from "@/assets/experience-for-all-initiere-scufundari-piscina.jpg.asset.json";
import firstRegulatorAsset from "@/assets/experience-for-all-copil-primul-regulator-piscina.jpg.asset.json";
import climbingAsset from "@/assets/experience-for-all-escalada-copil-instructor.jpg.asset.json";
import ridgeAsset from "@/assets/experience-for-all-creasta-montana-offroad.jpg.asset.json";
import hillCampAsset from "@/assets/experience-for-all-tabara-deal-priveliste-lac.jpg.asset.json";
import underwaterAsset from "@/assets/experience-for-all-scafandru-subacvatic-lac.jpg.asset.json";
import instructorLakeAsset from "@/assets/experience-for-all-instructor-copii-lac-veste.jpg.asset.json";
import cartForestAsset from "@/assets/experience-for-all-excursie-carute-padure.jpg.asset.json";
import diveSurfaceAsset from "@/assets/experience-for-all-scafandri-suprafata-lac.jpg.asset.json";
import horseCartAsset from "@/assets/experience-for-all-caruta-cai-pajiste-grup.jpg.asset.json";
import swimLessonAsset from "@/assets/experience-for-all-lectie-inot-copii-bazin.jpg.asset.json";
import bannerAsset from "@/assets/experience-for-all-banner-eveniment-lac-participanti.jpg.asset.json";

function photo(url: string) {
  const p = galleryPhotos.find((g) => g.src === url);
  return p ? { src: p.src, alt: p.alt } : undefined;
}

export type ReportActivity = {
  n: number;
  id: string;
  title: string;
  date?: string;
  paragraphs: string[];
  photo?: { src: string; alt: string };
};

export const reportCover = photo(bannerAsset.url);

export const reportIntro: string[] = [
  "În anul 2025, echipa „Experience for All” a organizat activități sportive, recreative, educative și creative, oferindu-le copiilor și adolescenților din sistemul de protecție a copilului din județul Covasna oportunități de învățare prin experiență directă. Prin intermediul acestor activități, participanții au avut ocazia să descopere domenii noi, să își dezvolte încrederea în propriile forțe, să își depășească temerile și să consolideze relațiile cu cei din jur.",
  "Programul a pus accent pe accesul la experiențe diverse, pe dezvoltarea personală și pe crearea unui mediu în care fiecare copil să se simtă încurajat să exploreze, să învețe și să participe activ."
];

export const reportActivities: ReportActivity[] = [
  {
    n: 1,
    id: "activitatea-1",
    title: "Prezentare despre scufundări la Școala „Gödri Ferenc” din Sfântu Gheorghe",
    date: "17 martie 2025",
    paragraphs: ["La invitația școlii, echipa „Experience for All” a susținut o prezentare despre scufundări, adresată unui grup de elevi interesați de acest domeniu. Prin explicații accesibile și exemple concrete, elevii au descoperit aspecte ale lumii subacvatice și au aflat mai multe despre scufundări, echipamentele utilizate și experiențele pe care le oferă această activitate.", "Prezentarea a fost interactivă, elevii participând activ la discuții și adresând numeroase întrebări. Întâlnirea s-a desfășurat într-o atmosferă deschisă și plăcută, oferindu-le participanților ocazia de a explora un domeniu mai puțin familiar și de a-și satisface curiozitatea prin intermediul unei activități cu caracter educativ."],
  },
  {
    n: 2,
    id: "activitatea-2",
    title: "Workshop despre scufundări la Casa Familială nr. 2 din Întorsura Buzăului",
    date: "17 martie 2025",
    paragraphs: ["Echipa a organizat un workshop interactiv pentru copiii din Casa Familială nr. 2 din Întorsura Buzăului, având ca temă scufundările și locul pe care această pasiune îl ocupă în viața de familie a organizatorilor. Copiii au aflat cum a început această pasiune și au descoperit, prin intermediul fotografiilor și materialelor video, experiențe surprinse în timpul scufundărilor.", "Activitatea a continuat cu prezentarea practică a echipamentelor specifice, fiind explicate rolul, caracteristicile și modul de utilizare ale acestora. Participanții au urmărit cu interes prezentarea, au adresat întrebări și și-au împărtășit impresiile. Activitatea le-a oferit posibilitatea de a descoperi un domeniu nou și de a interacționa direct cu persoane care și-au transformat pasiunea într-o parte importantă a vieții lor."],
  },
  {
    n: 3,
    id: "activitatea-3",
    title: "Program de inițiere în scufundări pentru elevii Școlii „Gödri Ferenc” din Sfântu Gheorghe",
    date: "26 mai 2025",
    paragraphs: ["Ca urmare a interesului manifestat de elevi în cadrul prezentării introductive despre scufundări, echipa a organizat o activitate practică prin care aceștia au putut explora mai îndeaproape acest domeniu. Participanții au descoperit echipamentele specifice, au avut ocazia să îmbrace costumele de scufundare și au aflat mai multe despre particularitățile acestui sport.", "Activitatea s-a desfășurat într-un cadru organizat, cu respectarea regulilor de siguranță și sub îndrumarea echipei. Elevii s-au implicat cu entuziasm și curiozitate, iar reacțiile lor au fost pozitive. Pentru mulți dintre ei, această întâlnire a reprezentat primul contact practic cu lumea scufundărilor și o oportunitate de a descoperi o activitate sportivă neobișnuită."],
    photo: photo(poolIntroAsset.url),
  },
  {
    n: 4,
    id: "activitatea-4",
    title: "Program de scufundări pentru copiii din Casa Familială nr. 1 din Întorsura Buzăului",
    date: "23 martie 2025",
    paragraphs: ["Echipa a pregătit pentru copiii din Casa Familială nr. 1 un program care a îmbinat informarea cu experiența practică a scufundărilor. Activitatea a început cu prezentarea regulilor esențiale de siguranță, a tehnicilor de bază și a echipamentului necesar. Cu sprijinul echipei, copiii au fost echipați și au avut apoi ocazia, pe rând, să experimenteze scufundarea și să descopere mediul subacvatic.", "Momentul intrării în apă a fost însoțit de emoție și entuziasm. Pe parcursul activității, copiii au fost încurajați să participe în ritmul propriu și să descopere această experiență într-un mediu organizat și supravegheat. Programul s-a încheiat cu o masă luată împreună, care a oferit participanților un prilej suplimentar de socializare.", "Activitatea a combinat descoperirea, învățarea și timpul petrecut împreună, contribuind la crearea unor amintiri comune."],
    photo: photo(firstRegulatorAsset.url),
  },
  {
    n: 5,
    id: "activitatea-5",
    title: "Activitate de escaladă pentru copiii din Casa Familială nr. 1 din Întorsura Buzăului",
    date: "3 mai 2025",
    paragraphs: ["Pornind de la ideea că sportul poate contribui la dezvoltarea personală a copiilor, echipa a organizat o activitate de escaladă care le-a oferit participanților ocazia de a încerca o experiență nouă și de a-și testa propriile limite. Înainte de începerea activității, copiii au primit explicații privind desfășurarea acesteia și regulile de siguranță.", "Pe parcurs, au fost încurajați să își exerseze curajul și perseverența, să își depășească temerile și să descopere importanța sprijinului reciproc. La activitate au participat atât copiii, cât și adulții însoțitori, ceea ce a creat oportunitatea unei experiențe comune, într-un context diferit de cel cotidian. Deși programul s-a desfășurat pe parcursul câtorva ore, participanții au avut ocazia să împărtășească emoții, să se încurajeze reciproc și să creeze amintiri pozitive."],
    photo: photo(climbingAsset.url),
  },
  {
    n: 6,
    id: "activitatea-6",
    title: "Prezentare despre scufundări la Școala „Nicolae Colan” din Sfântu Gheorghe",
    date: "26 mai 2025",
    paragraphs: ["La invitația Școlii „Nicolae Colan” din Sfântu Gheorghe, echipa a susținut o prezentare interactivă despre scufundări, oferindu-le elevilor posibilitatea de a descoperi un domeniu mai puțin familiar. Prin explicații, imagini și materiale video, participanții au aflat informații despre lumea subacvatică, echipamentele utilizate și experiențele asociate scufundărilor.", "Elevii au participat activ la discuții și au adresat numeroase întrebări, transformând prezentarea într-un dialog deschis. Subiectul le-a stârnit interesul, iar unii dintre ei și-au exprimat dorința de a încerca scufundările în cadrul unei activități practice. Întâlnirea a reprezentat o oportunitate de explorare și învățare, demonstrând rolul pe care contactul direct cu domenii și experiențe noi îl poate avea în stimularea curiozității copiilor."],
  },
  {
    n: 7,
    id: "activitatea-7",
    title: "Program de off-road și rafting pe râul Siriu pentru copiii din Casa Familială nr. 1 din Întorsura Buzăului",
    date: "16 iunie 2025",
    paragraphs: ["Echipa a organizat o zi dedicată aventurii, mișcării și descoperirii naturii. Programul a inclus o excursie off-road, urmată de o activitate de rafting pe râul Siriu. În timpul excursiei cu vehiculele de teren, copiii au avut ocazia să descopere peisajele zonei și să participe la o experiență diferită de activitățile lor obișnuite.", "Înainte de începerea activității de rafting, participanților le-au fost prezentate regulile de siguranță și informațiile necesare desfășurării acesteia. Raftingul s-a desfășurat cu echipamentul corespunzător și sub îndrumarea instructorilor. Activitățile au oferit un context favorabil pentru exersarea comunicării, a colaborării și a sprijinului reciproc.", "La finalul zilei, copiii și-au împărtășit impresiile și au rememorat cu entuziasm experiențele trăite. Programul le-a oferit participanților oportunitatea de a explora natura, de a încerca activități noi și de a crea amintiri comune."],
    photo: photo(ridgeAsset.url),
  },
  {
    n: 8,
    id: "activitatea-8",
    title: "Tabără de scufundări la Dalnic pentru copiii din Casa Familială nr. 1 din Întorsura Buzăului",
    date: "5 iulie 2025",
    paragraphs: ["La Dalnic, echipa a organizat o tabără de scufundări care a îmbinat activitățile sportive, timpul petrecut în aer liber, socializarea și învățarea prin experiență directă. Programul a urmărit să încurajeze dezvoltarea încrederii în sine, a curajului, a spiritului de cooperare și a atenției față de ceilalți. Ziua a început cu pregătiri comune și activități în aer liber.", "Momentele petrecute în jurul focului de tabără au oferit un cadru relaxat pentru conversații, jocuri și consolidarea relațiilor dintre participanți. Activitatea principală a fost dedicată scufundărilor. Copiii au făcut cunoștință cu echipamentul specific, au aflat cum se utilizează acesta și au primit explicații privind regulile de siguranță.", "Ulterior, au avut ocazia să experimenteze scufundarea în lac. Pentru mulți dintre participanți, întâlnirea cu mediul subacvatic a reprezentat o experiență nouă și o oportunitate de a-și testa limitele într-un cadru în care au beneficiat de sprijin și îndrumare. Pe parcursul activității, copiii s-au încurajat reciproc și s-au bucurat împreună de reușitele lor.", "Tabăra a ilustrat valoarea învățării prin experiență: participanții au avut ocazia să descopere lucruri noi, să colaboreze și să își dezvolte abilitățile prin implicare directă."],
    photo: photo(hillCampAsset.url),
  },
  {
    n: 9,
    id: "activitatea-9",
    title: "Programul „Cadou” – experiență de scufundare",
    date: "20 iulie 2025",
    paragraphs: ["Prin programul „Cadou”, echipa oferă copiilor și familiilor cu posibilități materiale reduse oportunitatea de a participa la o activitate de scufundare, prin intermediul unui voucher. Persoanele interesate se pot înscrie printr-o procedură simplă, transmitând o scrisoare de motivație în care prezintă situația familiei și motivele pentru care consideră că această experiență ar fi benefică pentru copil.", "În cadrul activității din 20 iulie 2025, voucherul a fost oferit unui copil provenit dintr-o familie cu resurse financiare limitate, care se remarca prin seriozitate și rezultate școlare bune. Înainte de intrarea în apă, echipa i-a explicat copilului cum se desfășoară scufundarea, care este rolul echipamentului și ce reguli de siguranță trebuie respectate.", "Pe măsură ce a primit informațiile și sprijinul necesar, emoțiile inițiale au fost înlocuite treptat de curiozitate și încredere. Experiența sub apă i-a oferit ocazia de a descoperi un mediu nou și de a-și testa propriile limite. Prin acest program, echipa urmărește să ofere mai mult decât un cadou: își propune să faciliteze accesul la experiențe care pot contribui la dezvoltarea încrederii în sine și la descoperirea unor noi posibilități."],
  },
  {
    n: 10,
    id: "activitatea-10",
    title: "Activitate de scufundări cu copiii de la Casa Familială Cernat",
    date: "28 iulie 2025",
    paragraphs: ["La Dalnic, echipa a organizat o activitate de scufundări pentru copiii de la Casa Familială Cernat, punând accent pe descoperire, învățare prin experiență și socializare. Înainte de intrarea în apă, participanții au fost familiarizați cu echipamentul specific, modul de utilizare al acestuia și regulile de siguranță. Ulterior, fiecare copil a avut ocazia să descopere direct mediul subacvatic, beneficiind de îndrumarea echipei.", "Pentru mulți dintre participanți, scufundarea a reprezentat o experiență nouă și o provocare personală. Activitatea le-a oferit posibilitatea de a învăța prin participare directă, de a-și exersa curajul și de a căpăta mai multă încredere în propriile forțe. Participarea copiilor din aceeași casă familială a creat un context favorabil pentru apropiere și consolidarea relațiilor.", "Aceștia s-au încurajat reciproc și s-au bucurat împreună de experiențele trăite. Timpul petrecut în natură și momentele de socializare au completat programul, transformând activitatea într-o experiență cu valențe recreative, educative și de dezvoltare personală."],
    photo: photo(underwaterAsset.url),
  },
  {
    n: 11,
    id: "activitatea-11",
    title: "Activitate de scufundări cu copiii din Casa Familială nr. 2 din Sfântu Gheorghe",
    date: "6 august 2025",
    paragraphs: ["Echipa a organizat o activitate de scufundări pentru copiii din Casa Familială nr. 2 din Sfântu Gheorghe, la care au participat și educatorii însoțitori. Dincolo de componenta sportivă și recreativă, programul le-a oferit copiilor ocazia de a descoperi un mediu nou și de a experimenta o activitate diferită de cele cotidiene.", "Înainte de scufundare, participanții au primit explicații despre echipamentul utilizat și regulile de siguranță. Unii copii au manifestat emoții la început, însă au fost încurajați să avanseze treptat, în ritmul propriu și cu sprijinul echipei. În timpul scufundărilor, copiii au avut ocazia să observe pești și să descopere direct frumusețea lumii subacvatice.", "Pe tot parcursul activității, aceștia s-au încurajat reciproc și s-au bucurat de reușitele colegilor, exersând răbdarea, cooperarea și susținerea reciprocă. Programul a inclus și pregătirea unei mese comune, care a oferit participanților un prilej de socializare într-o atmosferă relaxată. Activitatea a îmbinat sportul, descoperirea și interacțiunea socială, oferindu-le copiilor o experiență nouă, iar educatorilor ocazia de a-i observa într-un context diferit de cel obișnuit."],
    photo: photo(instructorLakeAsset.url),
  },
  {
    n: 12,
    id: "activitatea-12",
    title: "Tabără la Dalnic pentru copiii din Casa Familială nr. 2 din Întorsura Buzăului",
    date: "19 august 2025",
    paragraphs: ["Echipa a organizat la Dalnic o tabără cu activități variate, menite să îi apropie pe copii de natură, să le ofere experiențe noi și să încurajeze cooperarea. Una dintre activitățile principale a fost scufundarea. Copiii au primit informații de bază despre echipamentul specific și regulile de siguranță, apoi au avut posibilitatea să experimenteze direct această activitate.", "Pentru participanți, scufundarea a reprezentat o oportunitate de a-și testa curajul și de a-și consolida încrederea în propriile forțe. Programul a inclus și pregătirea mesei, activitate în cadrul căreia copiii au colaborat și s-au ajutat reciproc, exersând responsabilitatea și spiritul de echipă. O altă experiență a fost plimbarea cu căruța, care le-a oferit posibilitatea de a descoperi împrejurimile într-un ritm liniștit.", "Ulterior, participanții au pregătit slănină la foc și au petrecut timp împreună în jurul focului de tabără. Camparea în cort a reprezentat o experiență nouă pentru mulți dintre copii, oferindu-le ocazia de a se adapta unui mediu diferit de cel cu care erau obișnuiți. Prin diversitatea activităților, tabăra a îmbinat recreerea cu învățarea practică, încurajând autonomia, adaptabilitatea, cooperarea și sentimentul de apartenență la grup."],
    photo: photo(cartForestAsset.url),
  },
  {
    n: 13,
    id: "activitatea-13",
    title: "Plimbare cu căruța și activități de scufundare cu copiii de la Casa Familială Cernat",
    date: "28 august 2025",
    paragraphs: ["Echipa a organizat pentru copiii de la Casa Familială Cernat o zi dedicată naturii, aventurii și învățării prin experiență. Programul a inclus o plimbare cu căruța, activități de scufundare și un moment de socializare în jurul grătarului. Plimbarea cu căruța le-a oferit copiilor ocazia de a descoperi împrejurimile și de a se bucura de peisaj.", "Scufundările au reprezentat unul dintre momentele centrale ale zilei, oferindu-le posibilitatea de a explora lumea subacvatică și de a încerca o activitate nouă. Pe parcursul programului, copiii și-au împărtășit emoțiile, s-au încurajat reciproc și s-au bucurat împreună de experiențele trăite. Masa luată împreună a completat activitățile zilei și a oferit un cadru relaxat pentru socializare și consolidarea relațiilor dintre participanți.", "Îmbinând explorarea naturii cu activitățile sportive și timpul petrecut împreună, programul le-a oferit copiilor oportunitatea de a crea amintiri plăcute și de a descoperi experiențe diferite de rutina zilnică."],
    photo: photo(diveSurfaceAsset.url),
  },
  {
    n: 14,
    id: "activitatea-14",
    title: "Excursie în natură și plimbare cu căruța pentru copiii din Casa Familială nr. 1 din Întorsura Buzăului",
    paragraphs: ["Echipa a organizat pentru copiii din Casa Familială nr. 1 o excursie în natură, într-un cadru liniștit, oferindu-le ocazia de a petrece timp de calitate împreună și de a descoperi experiențe noi. Unul dintre momentele principale ale excursiei a fost plimbarea cu căruța. Copiii s-au bucurat de peisaj, de aerul curat și de apropierea de natură.", "Pentru unii dintre participanți, această experiență a reprezentat o noutate. Întâlnirea cu caii le-a oferit posibilitatea de a observa animalele de aproape și de a afla mai multe despre acestea. Programul a continuat cu pregătirea unui grătar, care a creat un cadru relaxat pentru conversații și socializare. Participanții și-au împărtășit impresiile și s-au bucurat de timpul petrecut împreună.", "Astfel de activități le oferă copiilor posibilitatea de a ieși din rutina zilnică, de a descoperi mediul natural și de a construi amintiri comune alături de colegi și educatori."],
    photo: photo(horseCartAsset.url),
  },
  {
    n: 15,
    id: "activitatea-15",
    title: "Activități de scufundare și plimbare cu căruța pentru copiii de la Casa Copiilor din Vidin",
    date: "4 septembrie 2025",
    paragraphs: ["Echipa a organizat pentru copiii de la Casa Copiilor din Vidin o zi dedicată descoperirii unor experiențe noi și petrecerii timpului în natură. Condițiile meteorologice favorabile au contribuit la desfășurarea activităților într-o atmosferă plăcută. Programul a inclus activități de scufundare, care au reprezentat o experiență nouă pentru mulți dintre participanți.", "Copiii au manifestat curiozitate și entuziasm, iar explorarea mediului subacvatic le-a oferit ocazia de a descoperi un univers diferit de cel cu care erau obișnuiți. Ulterior, programul a continuat cu o plimbare cu căruța, în timpul căreia copiii s-au bucurat de peisaj și de aerul curat. Prin combinarea activităților sportive cu explorarea naturii, programul le-a oferit participanților oportunități de învățare prin experiență directă, socializare și creare de amintiri comune."],
  },
  {
    n: 16,
    id: "activitatea-16",
    title: "Activitate recreativă la Happy Kids pentru copiii din Casa Familială nr. 1 din Întorsura Buzăului",
    date: "5 octombrie 2025",
    paragraphs: ["Copiii din Casa Familială nr. 1 din Întorsura Buzăului au participat la o activitate recreativă organizată la locul de joacă Happy Kids. Ieșirea le-a oferit ocazia de a schimba mediul obișnuit, de a se relaxa și de a petrece timp împreună într-un spațiu prietenos, dedicat jocului și mișcării. Participanții s-au bucurat de facilitățile locului de joacă și de activitățile interactive, care le-au oferit oportunități de a-și manifesta creativitatea, de a comunica și de a colabora.", "Dincolo de componenta recreativă, jocul reprezintă și un context de învățare, în care copiii pot exersa respectarea regulilor, cooperarea și atenția față de ceilalți. Activitatea s-a desfășurat într-o atmosferă veselă, oferindu-le copiilor posibilitatea de a se bucura de mișcare, relaxare și timpul petrecut împreună."],
  },
  {
    n: 17,
    id: "activitatea-17",
    title: "Activitate de pescuit cu copiii din Casa Familială nr. 2 din Sfântu Gheorghe",
    date: "25 octombrie 2025",
    paragraphs: ["Echipa a organizat pentru copiii din Casa Familială nr. 2 din Sfântu Gheorghe o activitate de pescuit la un lac din apropierea orașului. Vremea frumoasă de toamnă a contribuit la crearea unei atmosfere relaxante, iar copiii s-au bucurat de timpul petrecut în natură. Pentru mulți dintre participanți, pescuitul a reprezentat o experiență nouă.", "Aceștia au aflat noțiuni de bază despre această activitate și au avut ocazia să încerce să prindă pește, fiecare captură fiind întâmpinată cu entuziasm. Orsi și tatăl ei au sprijinit desfășurarea activității, ocupându-se de aspectele tehnice, explicându-le copiilor cum se pescuiește și încurajându-i cu răbdare. Programul a inclus și o masă luată împreună în aer liber, într-un cadru liniștit.", "Activitatea a îmbinat recreerea cu învățarea practică, oferindu-le copiilor ocazia de a-și exersa răbdarea și atenția și de a descoperi o activitate nouă. Ziua s-a încheiat într-o atmosferă plăcută, cu bucuria experiențelor împărtășite și amintiri frumoase."],
  },
  {
    n: 18,
    id: "activitatea-18",
    title: "Înot, scufundări și atelier de modelaj în lut pentru copiii din Casa Familială nr. 1 din Întorsura Buzăului",
    date: "6 decembrie 2025",
    paragraphs: ["Copiii din Casa Familială nr. 1 din Întorsura Buzăului au participat la o zi dedicată sportului, explorării mediului acvatic și exprimării creativității prin artă. Programul a fost conceput astfel încât să le ofere experiențe variate, îmbinând dezvoltarea abilităților motrice cu descoperirea lumii subacvatice și activitățile creative.", "Prima parte a zilei a fost dedicată înotului, prin exerciții de inițiere și perfecționare. Copiii au avut ocazia să își exerseze abilitățile, să capete mai multă încredere în apă și să își dezvolte disciplina și perseverența. Ulterior, programul a continuat cu activități de scufundare, în cadrul cărora participanții au descoperit echipamentele specifice și au experimentat o modalitate diferită de explorare a mediului acvatic.", "Seara, copiii au participat la un atelier de modelaj în lut, unde și-au putut exprima imaginația și creativitatea prin realizarea propriilor creații. Alternarea activităților sportive cu cele artistice a transformat ziua într-o experiență diversă, oferindu-le copiilor oportunitatea de a învăța prin mișcare, explorare și creație."],
    photo: photo(swimLessonAsset.url),
  },
];

export const reportConclusion: string[] = [
  "În anul 2025, prin programul „Experience for All”, copiii și adolescenții din sistemul de protecție a copilului au avut ocazia să participe la o varietate de activități sportive, recreative și creative, de la scufundări, înot, rafting și escaladă până la excursii off-road, pescuit, plimbări cu căruța, tabere și ateliere de creație.",
  "Dincolo de diversitatea activităților, obiectivul comun a fost acela de a le oferi participanților oportunitatea de a încerca lucruri noi, de a-și descoperi propriile capacități și de a-și dezvolta încrederea în sine. Fiecare întâlnire a reprezentat un prilej de explorare, de interacțiune și de creare a unor amintiri comune.",
  "Experiențele organizate au urmărit să transforme curiozitatea în dorință de explorare, emoțiile în oportunități de învățare și activitățile petrecute împreună în momente care să rămână în memoria copiilor. Pentru echipa „Experience for All”, aceste activități înseamnă mai mult decât organizarea unor programe sportive sau recreative.",
  "Înseamnă timp oferit cu generozitate, atenție acordată fiecărui participant, încredere, implicare și construirea unor relații bazate pe respect și sprijin reciproc. Realizarea programului din 2025 nu ar fi fost posibilă fără contribuția partenerilor, a susținătorilor și a voluntarilor care au ales să se implice. Echipa le mulțumește tuturor celor care au contribuit la desfășurarea activităților prin timpul, energia, resursele și cunoștințele lor.",
  "Voluntarii au sprijinit organizarea programelor, au susținut prezentări și ateliere și și-au împărtășit pasiunile cu participanții, contribuind la diversitatea și valoarea experiențelor oferite. Fiecare oră dedicată, fiecare idee și fiecare gest de implicare au contribuit la realizarea activităților și la crearea unor oportunități de explorare și învățare pentru copii.",
  "Le suntem recunoscători tuturor celor care au ales să se implice și să contribuie la acest proiect. Împreună, am demonstrat că implicarea unei comunități poate deschide noi oportunități și poate transforma experiențele trăite în amintiri valoroase."
];
