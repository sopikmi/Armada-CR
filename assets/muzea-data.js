/* Vojenská muzea, VHÚ a databáze – data stránky muzea.html. Pravidla: AGENT.md. */
window.MUZ = {};
MUZ.UPDATED = "22. 10. 2026";

MUZ.SOURCES = {
  vhu: ["Vojenský historický ústav Praha – web", "https://www.vhu.cz/"],
  am: ["VHÚ: Armádní muzeum Žižkov – základní informace", "https://www.vhu.cz/muzea/zakladni-informace-o-am-zizkov/"],
  lm: ["VHÚ: Letecké muzeum Kbely – základní informace", "https://www.vhu.cz/muzea/zakladni-informace-o-lm-kbely/"],
  vtm: ["VHÚ: Vojenské technické muzeum Lešany – základní informace", "https://www.vhu.cz/muzea/zakladni-informace-o-vtm-lesany/"],
  krypta: ["VHÚ: Národní památník hrdinů heydrichiády", "https://www.vhu.cz/muzea/ostatni-expozice/krypta/"],
  vitkov: ["VHÚ: Národní památník na Vítkově", "https://www.vhu.cz/narodni-pamatnik-na-vitkove-s-hrobem-neznameho-vojina/"],
  hs: ["VHÚ: Muzeum Hradní stráže", "https://www.vhu.cz/muzea/ostatni-expozice/mihulka/"],
  jizdarna: ["VHÚ: Jízdárna ruzyňských kasáren – pietní místo", "https://www.vhu.cz/muzea/ostatni-expozice/jizdarna-ruzynskych-kasaren-pietni-misto/"],
  posadkova: ["VHÚ: posádková muzea pod záštitou VHÚ", "https://www.vhu.cz/muzea/posadkova-muzea-pod-zastitou-vhu-praha/"],
  rozcestnik: ["VHÚ: pátrání po vojenské službě předků – rozcestník", "https://www.vhu.cz/patrani-po-vojenske-sluzbe-nasich-predku-informacni-rozcestnik/"],
  sz_muzea: ["Seznam Zprávy (10. 12. 2024): vojenská muzea v ČR", "https://www.seznamzpravy.cz/clanek/magazin-cestovani-vojenska-muzea-cr-265957"],
  ng_javor: ["National Geographic (8. 5. 2026): Atom muzeum Javor 51", "https://www.nationalgeographic.cz/cestovani/atom-muzeum-javor-51-brdy-misov-prohlidka/"]
};

/* Muzea a expozice VHÚ: [název, adresa, lat, lon, otevřeno, vstupné, co tam je, zdroj, foto key] */
MUZ.VHU = [
  ["Armádní muzeum Žižkov", "U Památníku 2, Praha 3 – Žižkov", 50.0886, 14.4504, "út–ne 10–18 h (poslední vstup 17.30)", "zdarma", "Hlavní expozice VHÚ: vojenské dějiny českých zemí od počátků po současnost v sedmi částech, přes 7 000 exponátů na zhruba 5 000 m².", "am", "m_vhu"],
  ["Letecké muzeum Kbely", "Mladoboleslavská ul., Praha 9 – Kbely", 50.1240, 14.5470, "v sezóně (do září) út–ne 10–18 h", "zdarma", "275 letadel ve sbírce, téměř 100 v krytých halách, 25 venku, 10 letuschopných.", "lm", "m_kbely"],
  ["Vojenské technické muzeum Lešany", "Lešany u Týnce nad Sázavou", 49.8466, 14.5285, "červen a září víkendy, červenec–srpen út–ne, 9.30–17.30 h", "zdarma", "Přes 700 kusů historické techniky od roku 1890: tanky, děla (sbírka Škoda), vozidla, raketová technika, spojovací a ženijní technika.", "vtm", "m_lesany"],
  ["Národní památník na Vítkově", "Praha 3 – Žižkov, vrch Vítkov", 50.0880, 14.4490, "podle webu VHÚ", "podle webu VHÚ", "Hrob Neznámého vojína, stálá expozice Symboly státnosti.", "vitkov", "m_vitkov"],
  ["Národní památník hrdinů heydrichiády (krypta)", "Praha 2, kostel sv. Cyrila a Metoděje", 50.0756, 14.4170, "podle webu VHÚ, skupiny s rezervací", "podle webu VHÚ", "Krypta, kde v roce 1942 padli parašutisté operace Anthropoid.", "krypta", "m_krypta"],
  ["Muzeum Hradní stráže", "Pražský hrad", 50.0920, 14.4010, "podle webu VHÚ", "podle webu VHÚ", "Historie Hradní stráže.", "hs", null],
  ["Jízdárna ruzyňských kasáren", "Praha 6 – Ruzyně", 50.0815, 14.3160, "pietní místo", "—", "Připomínka obětí nacistické perzekuce v ruzyňských kasárnách.", "jizdarna", null]
];

/* Posádková muzea pod záštitou VHÚ: [název, obec, útvar/expozice, url] */
MUZ.POSADKOVA = [
  ["Posádkové muzeum Bechyně", "Bechyně", "ženijní vojsko, 15. ženijní pluk", "http://www.vhu.cz/posadkove-muzeum-bechyne-stala-expozice-zenijniho-vojska-bechyne-15-zenijni-pluk/"],
  ["Posádkové muzeum Bučovice", "Bučovice", "posádka Bučovice, 74. mechanizovaný prapor", "http://www.vhu.cz/posadkove-muzeum-bucovice-stala-expozice-posadky-bucovice-74-mechanizovany-prapor/"],
  ["Posádkové muzeum Čáslav", "Čáslav", "21. základna taktického letectva", "http://www.vhu.cz/posadkove-muzeum-caslav-stala-expozice-21-zakladny-taktickeho-letectva/"],
  ["Posádkové muzeum Dobruška", "Dobruška", "vojenská geografie (expozice vlastivědného muzea)", "http://www.vhu.cz/posadkove-muzeum-dobruska-vojenska-geografie-expozice-vlastivedneho-muzea-dobruska-vojensky-geograficky-a-hydrometeorologicky-urad/"],
  ["Stálá expozice posádky Hranice", "Hranice", "posádka Hranice, 7. mechanizovaná brigáda", "http://www.vhu.cz/stala-expozice-posadky-hranice/"],
  ["Posádkové muzeum Chrudim", "Chrudim", "43. výsadkový pluk", "http://www.vhu.cz/posadkove-muzeum-chrudim-43-vysadkovy-pluk/"],
  ["Posádkové muzeum Jince", "Jince", "13. dělostřelecký pluk", "http://www.vhu.cz/posadkove-muzeum-jince-stala-expozice-13-delostreleckeho-pluku-jince/"],
  ["Posádkové muzeum Klatovy", "Klatovy", "posádka Klatovy, prapor oprav", "http://www.vhu.cz/posadkove-muzeum-klatovy-stala-expozice-143-praporu-oprav-klatovy/"],
  ["Posádkové muzeum Liberec", "Liberec", "31. pluk RCHBO", "http://www.vhu.cz/posadkove-muzeum-liberec-stala-expozice-31-prchbo-liberec-31-pluk-radiacni-chemicke-a-biologicke-ochrany/"],
  ["Posádkové muzeum Litoměřice", "Litoměřice", "Měřičský ústav", "http://www.vhu.cz/posadkove-muzeum-litomerice-stala-expozice-mericsky-ustav-litomerice-mericsky-ustav/"],
  ["Posádkové muzeum Moravská Třebová", "Moravská Třebová", "Vojenská střední škola a VOŠ MO", "http://www.vhu.cz/posadkove-muzeum-moravska-trebova-stala-expozice-vss-vos-mo-moravska-trebova-vojenska-stredni-skola-a-vyssi-odborna-skola-ministerstva-obrany/"],
  ["Posádkové muzeum Pardubice", "Pardubice", "logistická podpora, 14. pluk logistické podpory", "http://www.vhu.cz/posadkove-muzeum-pardubice-stala-expozice-logisticke-podpory-pardubice-14-pluk-logisticke-podpory/"],
  ["Posádkové muzeum Praha", "Praha", "Hlavní velitelství Vojenské policie", "http://www.vhu.cz/posadkove-muzeum-praha-hlavni-velitelstvi-vojenske-policie/"],
  ["Posádkové muzeum Prostějov", "Prostějov", "601. skupina speciálních sil", "https://www.vhu.cz/posadkove-muzeum-prostejov-601-stala-expozice-601-skupiny-specialnich-sil-prostejov/"],
  ["Posádkové muzeum Prostějov", "Prostějov", "102. průzkumný prapor", "http://www.vhu.cz/posadkove-muzeum-prostejov-stala-expozice-601-skupiny-specialnich-sil-601-skupina-specialnich-sil/"],
  ["Posádkové muzeum Náměšť nad Oslavou", "Sedlec-Vícenice", "letiště Náměšť nad Oslavou", "http://www.vhu.cz/posadkove-muzeum-sedlec-vicenice-u-nameste-nad-oslavou-stala-expozice-letiste-namest-nad-oslavou/"],
  ["Expozice „311“ a salonek gen. Emila Bočka", "Sedlec-Vícenice", "311. peruť RAF", "http://www.vhu.cz/posadkove-muzeum-sedlec-vicenice-u-nameste-nad-oslavou-stala-expozice-311-a-salonek-gen-emila-bocka/"],
  ["Posádkové muzeum Strakonice", "Strakonice", "25. protiletadlový raketový pluk", "http://www.vhu.cz/posadkove-muzeum-strakonice-stala-expozice-25-protiletadloveho-raketoveho-pluku-strakonice-25-protiletadlovy-raketovy-pluk/"],
  ["Posádkové muzeum Vyškov I", "Vyškov", "Velitelství výcviku – Vojenská akademie", "http://www.vhu.cz/posadkove-muzeum-vyskov-stala-expozice-i-velitelstvi-vycviku-vojenske-akademie-vyskov/"],
  ["Posádkové muzeum Vyškov II", "Vyškov", "Velitelství výcviku – Vojenská akademie", "http://www.vhu.cz/posadkove-muzeum-vyskov-stala-expozice-ii-velitelstvi-vycviku-vojenske-akademie-vyskov/"],
  ["Expozice Komando", "Vyškov", "Velitelství výcviku – Vojenská akademie", "http://www.vhu.cz/posadkove-muzeum-vyskov-stala-expozice-komando-velitelstvi-vycviku-vojenske-akademie-vyskov/"],
  ["Posádkové muzeum Žatec", "Žatec", "4. brigáda rychlého nasazení", "http://www.vhu.cz/posadkove-muzeum-zatec-stala-expozice-4-brigady-rychleho-nasazeni-4-brigada-rychleho-nasaze/"]
];

/* Další vojenská muzea mimo VHÚ: [název, místo, lat, lon, popis, zdroj] */
MUZ.OTHER = [
  ["Vojenské muzeum Králíky", "Králíky", 50.0840, 16.7600, "Historie čs. armády a 2. světové války, tanky, dělostřelectvo, letecké motory.", "sz_muzea"],
  ["Patton Memorial Pilsen", "Plzeň, KD Peklo", 49.7466, 13.3800, "Osvobození západních Čech americkou a belgickou armádou.", "sz_muzea"],
  ["Muzeum vojenského prostoru Milovice", "Milovice-Mladá", 50.2280, 14.8900, "Historie cvičiště Milovice-Mladá 1904–1991.", "sz_muzea"],
  ["Atom muzeum Javor 51", "Míšov (Brdy)", 49.6200, 13.7800, "Bývalý sovětský sklad jaderných zbraní z doby studené války.", "ng_javor"]
];

/* Databáze a archivy: [skupina, název, provozovatel, co obsahuje, url] */
MUZ.DB = [
  ["Pátrání po předcích", "Rozcestník: pátrání po vojenské službě předků", "VHÚ", "Kde hledat záznamy o vojenské službě – archivy, databáze, matriky.", "https://www.vhu.cz/patrani-po-vojenske-sluzbe-nasich-predku-informacni-rozcestnik/"],
  ["Pátrání po předcích", "Digitální studovna Ministerstva obrany", "MO ČR (s VHÚ a VÚA–VHA)", "Fulltextové hledání jmen v seznamech ztrát, vojenských matrikách a kartotékách.", "https://digitalnistudovna.mo.gov.cz/"],
  ["Pátrání po předcích", "Vojenský ústřední archiv – Vojenský historický archiv", "MO ČR", "Osobní spisy, kmenové listy a další personální dokumentace.", "https://www.vuapraha.cz/"],
  ["Pátrání po předcích", "Centrální evidence válečných hrobů", "MO ČR", "Veřejný portál válečných hrobů a pietních míst.", "https://wargraves.army.cz/"],
  ["Pátrání po předcích", "Péče o válečné hroby", "MO ČR", "Odbor pro válečné veterány a válečné hroby, výroční zprávy.", "https://valecnehroby.mo.gov.cz/"],
  ["1. světová válka", "Seznamy ztrát rakousko-uherské armády", "VHÚ", "Tištěné seznamy padlých, zemřelých, nezvěstných, raněných a zajatých 1914–1918.", "https://www.vhu.cz/knihovna/seznamy-padlych-zemrelych-nezvestnych-ranenych-ci-zajatych-v-1-svetove-valce/"],
  ["1. světová válka", "Válečné ztráty rakousko-uherské armády – online zdroje", "VHÚ", "Přehled online zdrojů ke ztrátám 1914–1918.", "https://www.vhu.cz/valecne-ztraty-rakousko-uherske-armady-1914-1918-online-zdroje/"],
  ["1. světová válka", "Österreichisches Suchblatt", "VHÚ", "Digitalizovaný pátrací list z první světové války.", "https://www.vhu.cz/osterreichisches-suchblatt-digitalni-zpristupneni-jednoho-patraciho-listu-z-prvni-svetove-valky/"],
  ["2. světová válka", "Kartotéka obětí Pražského povstání", "VHÚ (Oblastní kriminální úřadovna Praha)", "Kartotéka obětí povstání v květnu 1945.", "https://www.vhu.cz/prostudujte-si-jedinecny-dokument-online-se-muzete-podivat-do-kartoteky-obeti-prazskeho-povstani-oblastni-kriminalni-uradovny-praha/"],
  ["2. světová válka", "Zákresy míst zásahů obětí Pražského povstání", "VHÚ", "Mapové zákresy míst, kde oběti zahynuly.", "https://www.vhu.cz/zakresy-mist-zasahu-obeti-prazskeho-povstani/"],
  ["2. světová válka", "Vzpomínky pamětníků", "VHÚ", "Archiv paměti – rozhovory s veterány.", "https://www.vhu.cz/vzpominky-pametniku/"],
  ["Sbírky a knihovna", "Sbírkové fondy VHÚ", "VHÚ", "Přehled sbírek muzea.", "https://www.vhu.cz/sbirkove-fondy/"],
  ["Sbírky a knihovna", "Exponáty dne – archiv", "VHÚ", "Vybrané předměty ze sbírek s popisem.", "https://www.vhu.cz/exponaty-dne-archiv/"],
  ["Sbírky a knihovna", "Fotografie týdne – archiv", "VHÚ", "Historické fotografie ze sbírek.", "https://www.vhu.cz/fotografie-tydne-archiv/"],
  ["Sbírky a knihovna", "Katalog knihovny VHÚ", "VHÚ", "Vojenská odborná knihovna.", "https://www.vhu.cz/knihovna/katalog/"],
  ["Sbírky a knihovna", "Digitální knihovna VHÚ", "VHÚ", "Digitalizované publikace a periodika.", "https://www.vhu.cz/knihovna/digitalni-knihovna/"],
  ["Sbírky a knihovna", "Digitální knihovna Kramerius", "národní knihovny", "Miliony stran tisku – úmrtní oznámení, zprávy o vojácích.", "https://www.digitalniknihovna.cz/"],
  ["Věda a akce", "Historie a vojenství", "VHÚ", "Odborný časopis o vojenských dějinách.", "https://www.vhu.cz/veda/zakladni-informace-o-hav/"],
  ["Věda a akce", "Akce VHÚ 2026", "VHÚ", "Přehled akcí, výstav a vzpomínkových akcí.", "https://www.vhu.cz/akce-vhu/"],
  ["Věda a akce", "Aktuální výstavy", "VHÚ", "Probíhající výstavy.", "https://www.vhu.cz/muzea/aktualni-vystavy/"],
  ["Věda a akce", "Symbolika AČR", "VHÚ", "Znaky, prapory a čestné názvy útvarů.", "https://www.vhu.cz/zakladni-informace-o-vs/"]
];
