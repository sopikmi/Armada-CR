/* Zahraniční mise AČR – data stránky mise.html.
 * Každá položka má zdroj. Počty: "max" = strop mandátu, "celkem" = kolik vojáků se za dobu operace vystřídalo.
 * Pravidla úprav: AGENT.md. Nic nedomýšlej.
 */
window.MISE = {};
MISE.UPDATED = "22. 10. 2026";

MISE.SOURCES = {
  lit: ["mise.mo.gov.cz: Litva", "https://mise.mo.gov.cz/aktualni-mise/lit/litva-243307/"],
  lat: ["mise.mo.gov.cz: Pobaltí – Lotyšsko a Litva", "https://mise.mo.gov.cz/aktualni-mise/ll/ll/pobalti--lotyssko-a-litva-144960/"],
  svk: ["mise.mo.gov.cz: Slovensko", "https://mise.mo.gov.cz/aktualni-mise/slovensko/slovensko--234572/"],
  pol: ["mise.mo.gov.cz: Polsko", "https://mise.mo.gov.cz/aktualni-mise/pol/polsko-248802/"],
  mfo: ["mise.mo.gov.cz: Sinaj (MFO)", "https://mise.mo.gov.cz/aktualni-mise/sinaj/sinaj-mfo---multinational-force-and-observers-226520/"],
  undof: ["mise.mo.gov.cz: Golanské výšiny (UNDOF)", "https://mise.mo.gov.cz/aktualni-mise/undof/the-united-nations-disengagement-observer-force---undof-224983/"],
  eufor: ["mise.mo.gov.cz: BiH (EUFOR Althea)", "https://mise.mo.gov.cz/aktualni-mise/althea/bosna-a-hercegovina-eufor---althea-225203/"],
  kfor: ["mise.mo.gov.cz: Kosovo (KFOR)", "https://mise.mo.gov.cz/aktualni-mise/kosovo/kosovo-kfor-245876/"],
  irak: ["mise.mo.gov.cz: Irák", "https://mise.mo.gov.cz/irak/default.htm"],
  eumam: ["mise.mo.gov.cz: EUMAM Ukraine", "https://mise.mo.gov.cz/aktualni-mise/ua/*kopie-1:-eumam-ukraine-european-union-military-assistance-mission-262158/"],
  aspides: ["mise.mo.gov.cz: EUNAVFOR Aspides", "https://mise.mo.gov.cz/aktualni-mise/as/european-union-naval-forces-_-aspides---obranna-namorni-bezpecnostni-operace-265068/"],
  med: ["mise.mo.gov.cz: EUNAVFOR MED", "https://mise.mo.gov.cz/aktualni-mise/eunafor/european-union-naval-forces---mediterranean---eunavfor-med-265069/"],
  mandat: ["CZ Defence (16. 9. 2026): Výbor pro obranu – mandát 2027–2028", "https://www.czdefence.cz/clanek/vybor-pro-obranu-resil-zahranicni-operace-akvizice-i-dalsi-smerovani-armady-klicovy-mandat-osobne-obhajoval-ministr-zuna"],
  mandat2: ["Armádní zpravodaj (3. 10. 2026): strop na východním křídle klesá na 1 600", "https://armadnizpravodaj.cz/zpravodajstvi/cesko-snizi-pocet-vojaku-na-vychodnim-kridle-nato-o-400/"],
  mo_vybor: ["MO ČR (16. 9. 2026): výhled zahraničních operací do roku 2028", "https://mocr.mo.gov.cz/informacni-servis/zpravodajstvi/ministr-zuna-na-snemovnim-vyboru-na-obranu-predstavil-vyhled-zahranicnich-operaci-do-roku-2028-265972/"],
  doarmady: ["Do armády: operační nasazení AČR", "https://doarmady.mo.gov.cz/o-armade/poznejte-armadu/operacni-nasazeni"],
  vhu: ["VHÚ: čeští vojáci v novodobých zahraničních operacích", "https://www.vhu.cz/prehled-cesti-vojaci-v-novodobych-zahranicnich-operacich/"],
  gripen7: ["MO ČR (7. 4. 2022): Gripeny na sedmé misi", "https://mocr.mo.gov.cz/en/ministry-of-defence/newsroom/news/czech-gripens-off-for-their-seventh-mission-234656/"],
  ct_bagram: ["ČT24 (2019): největší ztráta české armády – útok u Bagrámu", "https://ct24.ceskatelevize.cz/domaci/2863511-nejvetsi-ztrata-ceske-armady-po-utoku-u-bagramu-zemrela-pred-peti-lety-petice-vojaku"],
  tn_afg: ["TN.cz (24. 10. 2018): 14 mrtvých Čechů v Afghánistánu", "https://tn.nova.cz/zpravodajstvi/clanek/379379-14-mrtvych-cechu-v-afghanistanu-zabily-je-bomby-i-laviny-bahna"]
};

/* KPI */
MISE.KPI = [
  {lbl: "Na východním křídle teď", v: "~437", d: "vojáků ve čtyřech operacích (Slovensko, Polsko, Litva, Lotyšsko); číslo se mění s rotacemi", date: "k 10. 6. 2026", src: "mandat2"},
  {lbl: "Strop mandátu 2027–2028", v: "1 600", d: "vojáků na východním křídle v devíti zemích (dosud 2 000 v osmi); nově Finsko", date: "od 1. 1. 2027", src: "mandat2"},
  {lbl: "Model sil NATO", v: "11 000", d: "osob vyčleněných do pohotovostních sil NATO (dosud 10 100)", date: "od 2027", src: "mandat2"},
  {lbl: "Vystřídalo se v roce 2025", v: "1 732", d: "příslušníků AČR a 25 aktivních záloh; výdaje 943,4 mil. Kč, z toho 85,4 mil. na výcvik Ukrajinců", date: "2025", src: "mandat"},
  {lbl: "Novodobí veteráni", v: "~18 000", d: "evidovaných veteránů zahraničních operací", date: "VHÚ", src: "vhu"},
  {lbl: "Padlí v Afghánistánu", v: "14", d: "nejvíce ze všech misí; největší jednorázová ztráta pět vojáků při útoku u Bagrámu v roce 2014", date: "2002–2021", src: "tn_afg"}
];

/* Aktuální mise: [id, operace, země/místo, lat, lon, od, jednotka/úkoly, technika, počet (text), aktuální rotace, zdroj, foto key, stav ("ok"|"paus")] */
MISE.NOW = [
  ["lit", "eFP / mnohonárodní brigáda NATO", "Litva – Rukla", 55.07, 24.37, "2018", "8. úkolové uskupení na bázi průzkumné roty 102. průzkumného praporu (Prostějov).", "průzkumná vozidla IVECO a Kajman", "nezveřejněno (v rámci stropu východního křídla)", "07/2026 – 01/2027", "lit", null, "ok"],
  ["lat", "eFP / mnohonárodní brigáda NATO", "Lotyšsko – Ādaži", 57.08, 24.32, "2018 (návrat 1/2026)", "Ženijní úkolový oddíl na bázi 153. ženijního praporu (Olomouc) a 1. jednotka logistické podpory.", "univerzální dokončovací stroj UDS, rypadlo-nakladače JCB", "nezveřejněno", "07/2026 – 01/2027", "lat", "m_lat", "ok"],
  ["svk", "Mnohonárodní brigádní uskupení Slovensko", "Slovensko – VÚ Lešť", 48.37, 19.32, "2022", "9. úkolové uskupení na bázi 42. mechanizovaného praporu (Tábor); ČR byla do 6/2024 vedoucí zemí, nyní druhý největší přispěvatel.", "kolová BVP Pandur II 8×8", "téměř 200 předsunutě, další v pohotovosti v ČR", "od 6/2026 (9. rotace)", "svk", "m_svk", "ok"],
  ["pol", "Heli Unit – ochrana vzdušného prostoru", "Polsko – východní hranice", 51.2, 22.9, "9/2025", "6. úkolové uskupení, jádro z 22. základny vrtulníkového letectva (Náměšť).", "vrtulníky AH-1Z Viper", "přibližně 100", "07/2026 – 10/2026; jedná se o prodloužení", "pol", "viper", "ok"],
  ["mfo", "MFO – Mnohonárodní síly a pozorovatelé", "Egypt – Sinaj", 31.1, 34.1, "2009 (letka od 2013)", "30. letecká jednotka, 18. úkolové uskupení; důstojníci ve velitelství.", "letoun CASA C-295M", "nezveřejněno", "08/2026 – 08/2027", "mfo", "c295", "ok"],
  ["undof", "UNDOF (OSN)", "Sýrie – Camp Faouar, Golany", 33.36, 35.86, "2015", "11. skupina ve štábu mise: výcvik, plánování, zpravodajství, styční důstojníci.", "—", "malá skupina štábních důstojníků", "07/2026 – 07/2027", "undof", null, "ok"],
  ["eufor", "EUFOR Althea (EU)", "Bosna a Hercegovina – Sarajevo (Butmir)", 43.82, 18.33, "2010 (znovu)", "24. skupina: dohled nad sklady zbraní a munice, ochrana sil.", "—", "jednotky důstojníků", "11/2025 – 12/2026", "eufor", null, "ok"],
  ["kfor", "KFOR (NATO)", "Kosovo – Priština", 42.66, 21.16, "1999", "Štábní a policejní příslušníci (Vojenská policie).", "—", "strop 50, od 2028 25", "průběžně", "mandat", null, "ok"],
  ["eumam", "EUMAM Ukraine (EU) a další výcvik", "výcvik ukrajinských vojáků (v ČR)", 49.28, 16.99, "2022", "Výcvik ukrajinských vojáků; dále až 60 vojáků pro výcvik mimo misi a až 30 pro ochranu diplomatických zájmů na Ukrajině.", "—", "strop 100 (+60, +30)", "průběžně", "mandat", null, "ok"],
  ["afrika", "Výcvik v Africe", "Mauritánie a Keňa", 18.08, -15.97, "—", "Výcvik místních sil, převážně speciální síly.", "—", "strop 50", "průběžně", "mandat", null, "ok"],
  ["nmk", "Zdravotnický tým", "Severní Makedonie", 41.99, 21.43, "—", "Zdravotnický tým (podle přehledu MO z roku 2025).", "—", "nezveřejněno", "—", "mo_vybor", null, "ok"],
  ["aspides", "EUNAVFOR Aspides a MED (EU)", "Rudé moře / Středomoří – velitelství", 39.64, 22.42, "2024", "Příslušníci ve štábech námořních operací EU.", "—", "jednotky důstojníků", "průběžně", "aspides", null, "ok"],
  ["irak", "NMI a Inherent Resolve", "Irák (nyní z Neapole)", 33.31, 44.36, "2014", "Fyzická přítomnost v Iráku přerušena; čeští vojáci se mise k 3/2026 neúčastní, část personálu NATO pracuje z Neapole.", "—", "0", "přerušeno", "irak", "m_iraq", "paus"]
];

/* Historické mise: [operace, období, země, lat, lon, celkem vojáků (text), jednotka a technika, padlí (text), zdroj, foto key] */
MISE.PAST = [
  ["Pouštní štít / Pouštní bouře", "1990–1991", "Saúdská Arábie, Kuvajt", 28.4, 46.0, "206", "Československá protichemická jednotka a polní nemocnice.", "—", "vhu", null],
  ["UNPROFOR, UNCRO, UNTAES", "1992–1998", "Chorvatsko", 45.1, 15.2, "2 250 + 750 + 100", "Prapor OSN, polní nemocnice ve Východní Slavonii.", "—", "vhu", null],
  ["IFOR, SFOR, EUFOR Althea", "1996–2008", "Bosna a Hercegovina", 44.8, 16.1, "6 300 (IFOR + SFOR)", "Mechanizovaný prapor, později kontingenty EUFOR.", "—", "vhu", null],
  ["KFOR – hlavní nasazení", "1999–2011", "Kosovo", 42.5, 20.8, "8 500", "Prapor a mnohonárodní uskupení; od 2011 jen malý kontingent.", "—", "vhu", null],
  ["AFOR, Essential Harvest", "1999–2001", "Albánie, Makedonie", 41.3, 19.8, "100 + 120", "Polní nemocnice (AFOR), odzbrojení (Essential Harvest).", "—", "vhu", null],
  ["Enduring Freedom (protichemická jednotka)", "2002–2003", "Kuvajt", 29.37, 47.98, "více než 600", "Protichemická jednotka.", "—", "vhu", null],
  ["Iraqi Freedom – 7. polní nemocnice", "2003", "Irák – Basra", 30.5, 47.8, "téměř 600", "7. polní nemocnice.", "—", "vhu", null],
  ["MNF-I", "2007–2009", "Irák", 31.0, 46.3, "420", "Mnohonárodní síly v Iráku.", "—", "vhu", null],
  ["Afghánistán – ISAF, OEF, Resolute Support", "2002–2021", "Afghánistán", 34.0, 69.0, "11 500", "PRT Fajzábád (2005–07, přes 400), PRT Lógar (2008–13, přes 2 600), strážní rota Bagrám (2013–20, na 2 000), speciální síly, výcvik. BVP-2, Dingo.", "14", "vhu", "m_afg"],
  ["Winter Race", "2005–2006", "Pákistán", 34.4, 73.5, "29", "Pomoc po zemětřesení.", "—", "vhu", null],
  ["Mali – EUTM, MINUSMA, Takuba", "2013–2022", "Mali", 12.65, -8.0, "~1 700", "Výcvik malijské armády, ochrana, speciální síly.", "—", "doarmady", null],
  ["Inherent Resolve / NMI", "2014–2025", "Irák", 33.3, 44.4, "~2 500 (všechny mise v Iráku)", "Výcvik a poradci, letecký poradní tým.", "—", "doarmady", null],
  ["Air Policing (Gripeny)", "2009–2022", "Litva, Island, Estonsko", 55.9, 23.4, "~100 na misi", "Baltic Air Policing 2009 a 2012 (Šiauliai), Island 2014–2016, Estonsko 2019 (Ämari), Litva 2022.", "—", "gripen7", "gripen"]
];
