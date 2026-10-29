/* Český zbrojní průmysl – data stránky prumysl.html.
 * Každé číslo má zdroj a rok. Odhady Hospodářské komory jsou označeny jako odhad.
 * Pravidla úprav: AGENT.md.
 */
window.PRU = {};
PRU.UPDATED = "29. 10. 2026";

PRU.SOURCES = {
  ctk_export: ["ČTK (5. 8. 2026): vývoz vojenského materiálu za 2025 stoupl o 22,7 %", "https://www.ceskenoviny.cz/zpravy/vyvoz-vojenskeho-materialu-z-cr-loni-stoupl-o-227-/2858868"],
  ctk_export24: ["ČTK (25. 7. 2025): vývoz za 2024 asi 91 mld Kč", "https://www.ceskenoviny.cz/zpravy/vyvoz-vojenskeho-materialu-z-cr-loni-mezirocne-stoupl-o-86/2702225"],
  mpo_zprava: ["MPO: Výroční zpráva o kontrole vývozu vojenského materiálu za rok 2024 (PDF)", "https://mpo.gov.cz/assets/cz/zahranicni-obchod/licencni-sprava/o-licencni-sprave/2025/9/Vyrocni-zprava-o-kontrole-vyvozu-vojenskeho-materialu--rucnich-zbrani-pro-civilni-pouziti-a-zbozi-a-technologii-dvojiho-uziti-v-CR-za-rok-2024_2.pdf"],
  ed_hk: ["Ekonomický deník (2. 5. 2026): Meta 180 miliard – odhady Hospodářské komory", "https://ekonomickydenik.cz/meta-180-miliard-cesky-zbrojni-prumysl/"],
  fio_csg: ["Fio / ČTK (26. 3. 2026): CSG v roce 2025 +71,7 % tržeb", "https://www.fio.cz/zpravodajstvi/zpravy-z-burzy/322423-skupina-csg-zaznamenala-v-roce-2025-mezirocni-rust-trzeb-o-71-7-pohledy-analytiku"],
  ed_csg: ["Ekonomický deník (11. 8. 2026): CSG zvyšuje výrobu na milion granátů ročně", "https://ekonomickydenik.cz/vice-nez-milion-granatu-rocne-csg-zvysuje-vyrobu-ukrajina-dominuje/"],
  ed_colt: ["Ekonomický deník (25. 3. 2026): výsledky Colt CZ Group za 2025", "https://ekonomickydenik.cz/jizda-zbrojaru-colt-miliardy/"],
  ns_stv: ["Newstream (28. 9. 2026): STV Group – nejúspěšnější rok v historii", "https://www.newstream.cz/zpravy-z-firem/nejuspesnejsi-rok-v-historii-zbrojar-stv-group-vydelal-7-5-miliardy"],
  ed_aero: ["Ekonomický deník (8. 6. 2026): Aero – rekordní zisk táhne Skyfox", "https://ekonomickydenik.cz/aero-rekord-zisk-tahne-nebeska-liska/"],
  sz_explosia: ["Seznam Zprávy (3. 6. 2026): Explosia zdvojnásobila zisk", "https://www.seznamzpravy.cz/clanek/ekonomika-firmy-vyrobce-vybusnin-explosia-zdvojnasobil-zisk-na-rekordnich-838-milionu-korun-307703"],
  sz_explosia2: ["Seznam Zprávy (9. 6. 2026): prodej Explosie zatím není na stole", "https://www.seznamzpravy.cz/clanek/ekonomika-firmy-prodej-explosie-neni-na-stole-uklidnoval-havlicek-poslance-zatim-308188"],
  mo_fff: ["MO ČR (21. 10. 2026): Future Forces Forum – exponáty státních podniků", "https://mocr.mo.gov.cz/informacni-servis/zpravodajstvi/praha-hosti-future-forces-forum--obranne-technologie-predstavuje-vice-nez-530-vystavovatelu-266518/"],
  ed_cv90: ["Ekonomický deník (28. 8. 2025): 207 CV90 vznikne v Česku", "https://ekonomickydenik.cz/ve-svedsku-39-bojovych-vozidel-cv90-207-v-cesku/"],
  e24_mi: ["Echo24 (28. 5. 2026): muniční iniciativa v roce 2026", "https://m.echo24.cz/a/HPTeT/zpravy-svet-municni-inicativa-poslala-pul-milionu-kusu-munice-macinka"],
  respekt_mi: ["Respekt / ČTK (16. 2. 2026): 4,4 milionu kusů munice od vzniku iniciativy", "https://www.respekt.cz/informacni-servis/prezident-municni-iniciativa-od-sveho-vzniku-dodala-na-ukrajinu-4-4-milionu-kusu-munice-2026-02-16-12-27"],
  ex_spyder: ["Expats.cz (20. 9. 2026): SPYDER – vozidla kompletována v Česku", "https://www.expats.cz/czech-news/article/czechia-becomes-first-nato-country-to-deploy-israeli-spyder-air-defense"],
  hn_akv: ["Hospodářské noviny (13. 10. 2026): náhrada Pandurů – CSG, Patria se STV, Boxer", "https://archiv.hn.cz/c1-67944150-akvizicni-dekada-meni-vyzbroj-ceske-armady-po-stihackach-a-obrnencich-chce-transportery"]
};

PRU.KPI = [
  {lbl: "Vývoz vojenského materiálu 2025", v: "112,6 mld Kč", d: "+22,7 % proti 2024; 1 895 licencí do 98 zemí za téměř 138 mld Kč", date: "2025", src: "ctk_export"},
  {lbl: "Podíl Ukrajiny na vývozu", v: "45 %", d: "50,7 mld Kč; dál Nizozemsko 11,7, Bulharsko 10,7 a Slovensko téměř 8 mld Kč", date: "2025", src: "ctk_export"},
  {lbl: "Tržby odvětví", v: "160–180 mld Kč", d: "odhad Hospodářské komory pro 2025 (2024: 140 mld); 90 % produkce jde do zahraničí", date: "odhad", src: "ed_hk"},
  {lbl: "Zaměstnanci", v: "25 000+", d: "přímo v obranném průmyslu; odvětví tvoří 2–3 % HDP (odhad HK)", date: "2025", src: "ed_hk"},
  {lbl: "Munice CSG – velké ráže", v: "850 000", d: "kusů plán 2026 (2025: ~550 000, 2027: až 1,1 milionu); výroba i v Řecku a USA", date: "plán 2026", src: "ed_csg"},
  {lbl: "Muniční iniciativa", v: "~4,4 mil.", d: "kusů velkorážové munice pro Ukrajinu od vzniku; 2025 asi 2 miliony, 2026 do května přes 500 000", date: "k 2/2026", src: "respekt_mi"}
];

/* vývoz vojenského materiálu, mld Kč – 2023 je dopočet z meziročního růstu 86 % */
PRU.EXPORT = [["2023", 49, "dopočet"], ["2024", 91, "ctk_export24"], ["2025", 112.6, "ctk_export"]];
PRU.DEST = [["Ukrajina", 50.7], ["Nizozemsko", 11.7], ["Bulharsko", 10.7], ["Slovensko", 8.0], ["ostatní", 31.5]];

/* Firmy: [název, vlastník/skupina, sídlo a závody, obor a produkty, klíčová čísla, zdroj, web, foto key] */
PRU.FIRMS = [
  ["CSG (Czechoslovak Group)", "Michal Strnad; od 2026 na burze Euronext Amsterdam", "Praha; Excalibur Army (Šternberk), Tatra Trucks (Kopřivnice), MSM Group (Slovensko), Retia (Pardubice), Kinetic Group (USA), závody v Řecku", "dělostřelecká a tanková munice, houfnice DANA M2 a MORANA, nákladní vozy Tatra, radary, modernizace techniky, Pandur EVO", "tržby 2025 6,74 mld € (+71,7 %), EBITDA 1,78 mld €; munice 4,11 mld €; 1. pololetí 2026 tržby 3,25 mld €, z toho 17 % Ukrajina", "fio_csg", "https://www.czechoslovakgroup.cz/", "i_dana"],
  ["Colt CZ Group", "kotovaná na pražské burze", "Uherský Brod (Česká zbrojovka), Vlašim (Sellier & Bellot), Colt (USA, Kanada)", "pušky CZ BREN 2, pistole CZ P-10, samopaly Scorpion EVO, malorážová munice", "tržby 2025 23,4 mld Kč (+4,6 %), čistý zisk 2,04 mld Kč; prodáno ~578 tis. zbraní", "ed_colt", "https://www.coltczgroup.com/", "i_cz"],
  ["STV Group", "soukromá skupina", "Praha; výroba munice", "dělostřelecká munice 155, 152 a 122 mm (vlastní kovaná těla střel), tanková munice 120 mm pro Leopard 2A4, 30 × 165 mm; munice pro CAESAR", "tržby 2025 24,4 mld Kč (2024: 11,6), čistý zisk 7,5 mld Kč", "ns_stv", "https://www.stvgroup.cz/", null],
  ["Aero Vodochody", "soukromý vlastník", "Odolena Voda", "cvičný a lehký bojový letoun L-39 Skyfox (L-39NG), díly pro Embraer C-390", "tržby 2025 ~6,5 mld Kč, zisk před zdaněním 512 mil. Kč; 14 dodaných Skyfoxů v roce 2025 (58 % tržeb)", "ed_aero", "https://www.aero.cz/", "i_skyfox"],
  ["Explosia", "100 % stát (MPO); zvažuje se prodej, zájem projevil i francouzský Eurenco", "Pardubice-Semtín", "střelné prachy a dělostřelecké náplně, výbušniny (Semtex)", "tržby 2025 3,0 mld Kč (+64 %), zisk 838 mil. Kč; poptávka převyšuje kapacitu, investice až 2 mld Kč; 698 zaměstnanců", "sz_explosia", "https://www.explosia.cz/", null],
  ["VOP CZ, s. p.", "státní podnik MO", "Šenov u Nového Jičína", "výroba 207 z 246 vozidel CV90 pro AČR, opravy a modernizace techniky, cisterna CAP Shadow", "—", "ed_cv90", "https://www.vop.cz/", null],
  ["LOM PRAHA, s. p.", "státní podnik MO", "Praha-Malešice; Centrum leteckého výcviku Pardubice", "opravy vrtulníků a motorů, výcvik pilotů, simulátory (L-39 Skyfox s VR)", "—", "mo_fff", "https://www.lompraha.cz/", null],
  ["Vojenský technický ústav, s. p.", "státní podnik MO", "Praha-Kbely, Slavičín, Vyškov", "zkušebnictví, vývoj (dron BRUSMIN), kompletace SPYDER s firmou Retia", "—", "ex_spyder", "https://www.vtusp.cz/", null],
  ["Tatra Trucks / Tatra Defence Vehicle", "CSG", "Kopřivnice", "podvozky Tatra Force (i pro CAESAR CZ), Tatra Titus (s Nexterem)", "—", "hn_akv", "https://www.tatra.cz/", "i_tatra"],
  ["ERA", "Omnipol", "Pardubice", "pasivní sledovací systémy VERA-NG", "—", "", "https://www.era.aero/", "i_era"],
  ["Omnipol", "soukromá skupina", "Praha", "obchod se zbraněmi, vlastník ERA, účast v tendrech na obrněnce", "—", "hn_akv", "https://www.omnipol.cz/", null]
];

/* Kapacity a projekty: [titulek, text, zdroj] */
PRU.CAP = [
  ["Velkorážová munice", "CSG vyrobila v roce 2025 zhruba 550 tisíc velkorážových nábojů, v roce 2026 plánuje 850 tisíc a v roce 2027 až 1,1 milionu; nové linky staví v USA a v Řecku. STV Group má plně lokalizovanou výrobu těl granátů ráží 155, 152 a 122 mm.", "ed_csg"],
  ["Střelný prach jako úzké hrdlo", "Státní Explosia je jediný velký domácí výrobce prachů a náplní. Poptávka převyšuje kapacitu, firma investuje až 2 miliardy a dokončuje projekt rozšíření výroby náplní s podporou EU. O případném prodeji vláda zatím nerozhodla.", "sz_explosia2"],
  ["Zapojení do zakázek AČR", "Většina z 246 vozidel CV90 vzniká ve VOP CZ s nejméně 40 % hodnoty pro český průmysl, vozidla SPYDER kompletovaly VTÚ a Retia a podvozky pro CAESAR dodává Tatra. O náhradu Pandurů (až 250 vozidel) soutěží CSG, Patria se STV a Boxer.", "hn_akv"],
  ["Muniční iniciativa", "Česká iniciativa nakupuje velkorážovou munici pro Ukrajinu na světovém trhu. Od vzniku dodala zhruba 4,4 milionu kusů; od roku 2026 ji Česko jen administrativně zajišťuje bez vlastního financování a počet přispívajících států klesl z 18 na 9.", "e24_mi"]
];

PRU.LINKS = [
  ["AOBP – Asociace obranného a bezpečnostního průmyslu", "https://www.aobp.cz/"],
  ["Hospodářská komora – sekce obranného průmyslu", "https://www.komora.cz/"],
  ["MPO – licenční správa a výroční zprávy o vývozu", "https://mpo.gov.cz/cz/zahranicni-obchod/licencni-sprava/"],
  ["MO – Agentura pro mezivládní obrannou spolupráci", "https://mocr.mo.gov.cz/"],
  ["IDET 2027 (26.–28. 5. 2027, Brno)", "https://www.bvv.cz/idet/"],
  ["Future Forces Forum", "https://www.future-forces-forum.org/"],
  ["CZ Defence – rubrika průmysl", "https://www.czdefence.cz/"]
];
