/* Armáda ČR – data stránky.
 * Každé číslo má uvedený zdroj (pole src = klíč do SOURCES) a datum, ke kterému platí.
 * Pravidla úprav viz AGENT.md. Nic tu nevymýšlej z paměti – co nejde ověřit, označ "~" nebo "nezveřejněno".
 */
window.ACR = {};

ACR.UPDATED = "8. 10. 2026";

ACR.SOURCES = {
  mo_pocty: ["MO ČR – odpověď na žádost o informace: počty vojáků (11/2025, PDF)", "https://statnisluzba.mo.gov.cz/sites/statnisluzba/files/2025-11/Po%C4%8Dty%20voj%C3%A1k%C5%AF.pdf"],
  mo_az: ["MO ČR – příloha 2: aktivní záloha podle podřízenosti (11/2025, PDF)", "https://statnisluzba.mo.gov.cz/sites/statnisluzba/files/2025-11/Po%C4%8Dty%20voj%C3%A1k%C5%AF-p%C5%99%C3%ADloha%202.pdf"],
  mo_rekrut: ["MO ČR – plnění rekrutačních cílů (1/2026, PDF)", "https://statnisluzba.mo.gov.cz/sites/statnisluzba/files/2026-01/Pln%C4%9Bn%C3%AD%20rekruta%C4%8Dn%C3%ADch%20c%C3%ADl%C5%AF.pdf"],
  az_info: ["AZ INFO 1/2025 – zpravodaj aktivní zálohy (PDF)", "https://aktivnizaloha.mo.gov.cz/sites/aktivnizaloha/files/2026-04/AZ%20INFO_1_2025.pdf"],
  sz_nabor26: ["Seznam Zprávy / ČTK (28. 3. 2026): nábor 2026 na dvou třetinách", "https://www.seznamzpravy.cz/clanek/domaci-zivot-v-cesku-letosni-cil-nabirani-vojaku-se-podle-zuny-uz-podarilo-naplnit-na-dve-tretiny-302868"],
  sz_cisla: ["Seznam Zprávy (26. 3. 2025): armáda přestala ukazovat čísla", "https://www.seznamzpravy.cz/clanek/domaci-zivot-v-cesku-armada-prestala-ukazovat-cisla-vloni-pribylo-176-vojaku-potreba-je-10krat-vic-272530"],
  sz_drony: ["Seznam Zprávy (17. 4. 2026): 3 000 dronů, spor o rozpočet", "https://www.seznamzpravy.cz/clanek/domaci-politika-ceska-armada-do-roku-2028-poridi-na-3000-dronu-rekl-ministr-obrany-zuna-304304"],
  sz_ngs: ["Seznam Zprávy (18. 5. 2026): vláda navrhne M. Hlaváče", "https://www.seznamzpravy.cz/clanek/domaci-zivot-v-cesku-vlada-navrhne-na-post-sefa-armady-miroslava-hlavace-306241"],
  ed_rozpocet: ["Ekonomický deník: 184 miliard na obranu (2026)", "https://ekonomickydenik.cz/184-miliard-obrana-zuna/"],
  ed_2a4: ["Ekonomický deník (1. 8. 2024): celkem 28 Leopardů 2A4 od Německa", "https://ekonomickydenik.cz/armada-ziska-od-nemcu-dalsi-leopardy-celkem-tak-bude-mit-28-stroju-typu-2a4/"],
  fo_2a4: ["FRAGOUT (11. 12. 2024): dalších 14 Leopardů 2A4, flotila 42 kusů", "https://fragoutmag.com/more-leopard-2a4-for-czech-republic/"],
  ctk_2a8: ["ČTK (11. 9. 2025): smlouva na 44 tanků Leopard 2A8", "https://www.ceskenoviny.cz/zpravy/obrana-podepsala-smlouvu-na-nakup-44-tanku-leopard-2a8-za-3425-mld-kc/2719722"],
  ed_cv90: ["Ekonomický deník (28. 8. 2025): CV90 – 39 ve Švédsku, 207 v Česku", "https://ekonomickydenik.cz/ve-svedsku-39-bojovych-vozidel-cv90-207-v-cesku/"],
  ed_caesar: ["Ekonomický deník (13. 8. 2026): zpoždění CAESAR", "https://ekonomickydenik.cz/zpozdeni-bobtna-francouzske-kanony-72-miliard-zkousky-nezacaly/"],
  ex_spyder: ["Expats.cz (20. 9. 2026): Česko nasazuje SPYDER", "https://www.expats.cz/czech-news/article/czechia-becomes-first-nato-country-to-deploy-israeli-spyder-air-defense"],
  fb_gripen: ["Forbes (9/2025): prodloužení pronájmu Gripenů do 2035", "https://forbes.cz/cesko-prodlouzilo-smlouvu-se-svedskem-na-pronajem-gripenu-pote-je-nahradi-stihacky-f-35/"],
  nv_caslav: ["Novinky (19. 2. 2026): letadla opustí Čáslav kvůli rekonstrukci", "https://www.novinky.cz/clanek/domaci-zpravy-stredocesky-kraj-starsi-letadla-odletnou-z-caslavi-po-rekonstrukci-zakladny-je-vystridaji-americke-stihacky-40563134"],
  av_c390: ["The Aviationist (8. 7. 2026): první český C-390", "https://theaviationist.com/2026/07/08/czech-air-force-first-c-390-millennium/"],
  ct_h1: ["ČT24 (8/2023): další americké vrtulníky, celkem 10 Venomů a 10 Viperů", "https://ct24.ceskatelevize.cz/clanek/domaci/do-ceska-dorazily-dalsi-americke-vrtulniky-vyrazene-ruske-stroje-zrejme-dostane-ukrajina-2682"],
  czd_pandur: ["CZ Defence (24. 7. 2024): Pandur II a TITUS v AČR", "https://www.czdefence.eu/article/pandur-ii-8x8-and-titus-wheeled-platforms-and-their-further-applications-in-the-czech-armed-forces"],
  e15_vyzbroj: ["E15 (19. 2. 2025): stav výzbroje", "https://www.e15.cz/domaci/ceske-zbrane-patri-spis-do-muzea-nebo-do-srotu-armada-stale-ceka-na-nove-tanky-a-dela-1422419"],
  ct_cv90: ["ČT24: Švédové ukázali první CV90 pro českou armádu", "https://ct24.ceskatelevize.cz/clanek/domaci/svedove-ukazali-prvniho-obrnence-cv90-pro-ceskou-armadu-364478"],
  vop_cv90: ["VOP CZ: zahájení výroby CV90", "https://vop.cz/en/news/vop-cz-begins-production-of-cv90-armoured-vehicles-for-the-czech-army/"],
  acr_gs: ["Armáda ČR – Generální štáb (struktura, 2026)", "https://acr.mo.gov.cz/scripts/detail.php?pgid=638"],
  acr_rakovnik: ["Armáda ČR: z praporu se stal pluk – Rakovník (10/2026)", "https://acr.mo.gov.cz/informacni-servis/zpravodajstvi/z-praporu-se-stal-pluk--rakovnik-je-domovem-nove-logisticke-jednotky-armady-ceske-republiky-266273/"],
  wiki: ["Wikipedie: Armáda České republiky", "https://cs.wikipedia.org/wiki/Arm%C3%A1da_%C4%8Cesk%C3%A9_republiky"]
};

/* ---------- PERSONÁL ---------- */
ACR.KPI = [
  {lbl: "Vojáci z povolání – celý rezort", v: "29 153", d: "včetně Vojenského zpravodajství, Vojenské policie a Hradní stráže", date: "k 1. 10. 2025", src: "mo_pocty"},
  {lbl: "Vojáci pod náčelníkem GŠ", v: "24 712", d: "samotná armáda; za rok 2025 +1 050 (nastoupilo 1 895, odešlo 1 107)", date: "k 15. 12. 2025", src: "mo_rekrut"},
  {lbl: "Aktivní záloha", v: "4 849", d: "naplněnost asi 50 % požadavku; cíl 10 000 do roku 2030", date: "k 1. 10. 2025", src: "mo_az", bar: [4849, 10000]},
  {lbl: "Cíl 2030", v: "30 000", d: "vojáků z povolání + 10 000 záloh; obranné plánování NATO ukazuje potřebu přes 37 000", date: "koncepce", src: "sz_cisla", bar: [29153, 30000]},
  {lbl: "Nábor 2025", v: "2 035", d: "povoláno vojáků z povolání (+381 studentů Univerzity obrany); přihlášek 7 223", date: "k 12/2025", src: "mo_rekrut"},
  {lbl: "Nábor 2026 – cíl", v: "2 250", d: "nových vojáků; v březnu splněno na 65,5 %", date: "03/2026", src: "sz_nabor26"},
  {lbl: "Rozpočet MO 2026", v: "154,8 mld Kč", d: "kapitola MO ≈ 1,73 % HDP; vláda vykazuje 184 mld Kč (2,06 % HDP) včetně jiných resortů", date: "2026", src: "sz_drony"},
  {lbl: "Investice 2026", v: "56 mld Kč", d: "dvě akvizice přesunuty na 2027; klíčové roky modernizace 2027–2029", date: "2026", src: "ed_rozpocet"}
];

/* vojáci z povolání v rezortu MO, stav k 31. 12. (2025 k 1. 10.) – zdroj mo_pocty */
ACR.VZP_TREND = [[2019, 25899], [2020, 26621], [2021, 26928], [2022, 27197], [2023, 27826], [2024, 28285], [2025, 29153]];

/* aktivní záloha podle podřízenosti, k 1. 10. 2025 – zdroj mo_az */
ACR.AZ = [
  ["Teritoriální síly (krajská vojenská velitelství)", 2172],
  ["Pozemní síly", 1201],
  ["Vzdušné síly", 464],
  ["Přípravná služba, ostatní", 485],
  ["Agentura vojenského zdravotnictví", 243],
  ["Informační a kybernetické síly", 90],
  ["Vojenská policie", 84],
  ["Agentura komunikačních a informačních systémů", 47],
  ["Velitelství výcviku – VA", 24],
  ["Hradní stráž", 20],
  ["Velitelství pro operace", 10],
  ["Agentura logistiky", 6],
  ["Posádkové velitelství Praha", 3]
];

/* ---------- MAPA ----------
 * Útvary a posádky jsou v data/posadky.json (každá položka se zdrojem).
 */

/* vojenské újezdy: [název, oblast, lat, lon, km² (orientačně), popis, zrušen?] */
ACR.AREAS = [
  ["Hradiště", "Doupovské hory", 50.32, 13.10, 331, "Největší vojenský újezd, cvičiště brigád."],
  ["Březina", "u Vyškova", 49.38, 16.95, 307, "Výcvikový prostor Velitelství výcviku."],
  ["Libavá", "Oderské vrchy", 49.68, 17.55, 233, "Výcvik 7. mb; újezd zmenšen v roce 2016."],
  ["Boletice", "Šumava", 48.85, 14.15, 220, "Výcvikový prostor, tankové a střelecké plochy."],
  ["Brdy", "zrušen 1. 1. 2016", 49.70, 13.85, 260, "Vojenský újezd zrušen, dnes CHKO Brdy.", true]
];

/* ---------- TECHNIKA ----------
 * [systém, kategorie, počet, původ, stav(ok|ord|old), poznámka, zdroj, foto key]
 */
ACR.TECH = [
  ["Leopard 2A4", "Tanky", "42", "Německo / Švýcarsko", "ok", "28 jako kompenzace od Německa za tanky pro Ukrajinu, 14 dokoupeno (ex-švýcarské, ~161 mil. €); kompletní do konce 2026. K tomu 2 vyprošťovací Büffel 3.", "fo_2a4", "leopard2a4"],
  ["Leopard 2A8", "Tanky", "44", "Německo", "ord", "Smlouva 11. 9. 2025, 34,25 mld Kč s DPH. První tanky 2028, dodávky do 2031. S opcemi a podpůrnými verzemi 61–77 kusů.", "ctk_2a8", "leopard2a8"],
  ["T-72M4CZ", "Tanky", "~30", "ČR (modernizace)", "old", "Dosluhují, provozuschopná je jen část.", "e15_vyzbroj", "t72"],
  ["CV90 MkIV", "Bojová vozidla", "246", "Švédsko / ČR", "ord", "59,7 mld Kč, 7 verzí; 39 kusů ze Švédska, 207 z VOP CZ. Prvních 10 v roce 2026, dodávky do 2030.", "ed_cv90", "cv90"],
  ["BVP-2", "Bojová vozidla", "~200", "ČSSR", "old", "40 let stará vozidla, nahradí je CV90.", "e15_vyzbroj", "bvp2"],
  ["Pandur II 8×8", "Bojová vozidla", "127", "Rakousko / ČR", "ok", "107 z roku 2006 (72 bojových s věží RCWS-30) + 20 velitelských a spojovacích. Plánuje se modernizace a další kusy.", "czd_pandur", "pandur"],
  ["Tatra Titus 6×6", "Bojová vozidla", "62", "ČR / Francie", "ok", "Velitelské, spojovací a dělostřelecké verze, dodáno do 6/2024.", "czd_pandur", "titus"],
  ["CAESAR 8×8 CZ", "Dělostřelectvo", "62", "Francie / ČR", "ord", "52 + 10 dodatkem, 10,3 mld Kč. K 8/2026 nedodán žádný kus, dodavatel je v prodlení; dokončení podle harmonogramu 6/2028.", "ed_caesar", "caesar"],
  ["ShKH Dana vz. 77", "Dělostřelectvo", "nezveřejněno", "ČSSR", "old", "152 mm, nahradí je CAESAR.", "e15_vyzbroj", "dana"],
  ["SPYDER", "Protivzdušná obrana", "4 baterie", "Izrael / ČR", "ord", "Každá baterie 9 vozidel a 4 odpalovací zařízení. Vojskové zkoušky splněny, ostré střelby plán 10/2027, integrace do 2028. Česko je první zemí NATO s tímto systémem.", "ex_spyder", "spyder"],
  ["2K12 KUB", "Protivzdušná obrana", "4 baterie", "SSSR", "old", "25. plrp Strakonice, nahradí SPYDER.", "e15_vyzbroj", "kub"],
  ["RBS-70", "Protivzdušná obrana", "32", "Švédsko", "ok", "Přenosné protiletadlové komplety krátkého dosahu.", "e15_vyzbroj", "rbs70"],
  ["JAS-39C/D Gripen", "Letectvo", "14 → 12", "Švédsko", "ok", "Pronájem prodloužen do 2035 (smlouva 1. 9. 2025, 16,7 mld Kč s DPH + ~4 mld modernizace); po roce 2027 12 kusů. Dočasně Pardubice.", "fb_gripen", "gripen"],
  ["F-35A Lightning II", "Letectvo", "24", "USA / Itálie", "ord", "Celkem ~106 mld Kč (letouny, výzbroj, výcvik, podpora) + rekonstrukce Čáslavi. První kusy 2029 (výcvik v USA), v Česku od 2031, všechny do 2035.", "nv_caslav", "f35"],
  ["L-159 ALCA", "Letectvo", "24", "ČR", "ok", "Lehký bitevník a cvičný letoun; dočasně v Náměšti. Dlouhodobě je mají nahradit drony.", "nv_caslav", "l159"],
  ["Embraer C-390", "Letectvo", "2", "Brazílie", "ord", "11,3 mld Kč. První přistál v Praze 6. 7. 2026, druhý 2027–2028.", "av_c390", "c390"],
  ["CASA C-295", "Letectvo", "4", "Španělsko", "ok", "Taktický transport, Kbely.", "wiki", "c295"],
  ["UH-1Y Venom", "Vrtulníky", "10", "USA", "ok", "8 nakoupeno + 2 darem od USA.", "ct_h1", "venom"],
  ["AH-1Z Viper", "Vrtulníky", "10", "USA", "ok", "4 nakoupeny + 6 darem od USA. Nahradily Mi-24/35.", "ct_h1", "viper"],
  ["Mi-171Š", "Vrtulníky", "~16", "Rusko", "old", "Transportní; náhrada se připravuje.", "e15_vyzbroj", "mi171"],
  ["W-3A Sokol", "Vrtulníky", "~10", "Polsko", "ok", "Pátrání a záchrana, doprava.", "wiki", "w3a"],
  ["CZ BREN 2 / CZ P-10", "Ruční zbraně", "—", "ČR", "ok", "Standardní útočná puška a pistole AČR.", "wiki", "bren"],
  ["Drony (různé typy)", "Bezpilotní systémy", "3 000", "—", "ord", "Cíl do 2028, pět souběžných zakázek; typy a ceny nezveřejněny.", "sz_drony", null]
];

/* ---------- MODERNIZACE ---------- [období, název, popis, částka, poznámka, zdroj] */
ACR.PROJ = [
  ["2023 → 2035", "F-35A Lightning II", "24 stíhaček páté generace. Prvních 12 se vyrobí v USA, dalších 12 v italském Cameri. Do jejich příchodu slouží Gripeny.", "~106 mld", "bez infrastruktury", "nv_caslav"],
  ["2023 → 2030", "CV90 MkIV", "246 pásových BVP v 7 verzích pro 7. mb. Většina vzniká ve VOP CZ v Šenově; nejméně 40 % hodnoty pro český průmysl.", "59,7 mld", "s DPH", "ed_cv90"],
  ["2025 → 2031", "Leopard 2A8", "44 tanků první fáze bez tendru, opce na dalších 14 a 17–19 podpůrných verzí. Rezerva 5 mld Kč na inflaci a kurz.", "34,25 mld", "s DPH", "ctk_2a8"],
  ["2024 → 2026", "Leopard 2A4", "Přechodné řešení: 28 tanků od Německa jako kompenzace za pomoc Ukrajině a 14 dokoupených.", "~3,9 mld", "nákup 14 ks (161 mil. €)", "fo_2a4"],
  ["2021 → 2028", "CAESAR 8×8 CZ", "62 samohybných houfnic 155 mm na podvozku Tatra. Zaplaceno přes 7,2 mld Kč záloh, ani jeden kus dodán; jedná se o penále.", "10,3 mld", "celkem", "ed_caesar"],
  ["2021 → 2028", "SPYDER", "4 baterie PVO krátkého a středního dosahu, vozidla kompletována v Česku (VTÚ, Retia).", "~14 mld", "", "e15_vyzbroj"],
  ["2025 → 2035", "Gripen – prodloužení", "Pronájem 12 letounů do 2035 jako most k F-35.", "16,7 mld", "+ ~4 mld modernizace", "fb_gripen"],
  ["2024 → 2028", "Embraer C-390", "2 střední transportní letouny, první dodán 7/2026.", "11,3 mld", "", "av_c390"],
  ["2026 → 2028", "Rekonstrukce Čáslavi", "Příprava základny pro F-35; až 1,6 mld Kč může uhradit NATO.", "5,33 mld", "bez DPH", "nv_caslav"],
  ["2026 → 2028", "Drony", "3 000 bezpilotních systémů, pět veřejných zakázek.", "—", "nezveřejněno", "sz_drony"]
];

/* ---------- ZÁKONY A STRATEGIE ---------- */
ACR.LAWS = [
  ["Ústavní zákon 110/1998 Sb.", "o bezpečnosti ČR", "Stav ohrožení státu a válečný stav.", "1998-110"],
  ["Zákon 219/1999 Sb.", "o ozbrojených silách", "Úkoly, členění a použití ozbrojených sil.", "1999-219"],
  ["Zákon 221/1999 Sb.", "o vojácích z povolání", "Služební poměr, hodnosti, platy, kariéra.", "1999-221"],
  ["Zákon 222/1999 Sb.", "o zajišťování obrany ČR", "Novelou ukotven závazek výdajů na obranu min. 2 % HDP.", "1999-222"],
  ["Zákon 585/2004 Sb.", "branný zákon", "Branná povinnost, odvod, zálohy; v míru se branná povinnost nevykonává.", "2004-585"],
  ["Zákon 45/2016 Sb.", "o službě vojáků v záloze", "Aktivní záloha, cvičení, odměny.", "2016-45"],
  ["Zákon 300/2013 Sb.", "o Vojenské policii", "Působnost a oprávnění VP.", "2013-300"],
  ["Zákon 15/2015 Sb.", "o vojenských újezdech", "Vymezení újezdů po reformě 2016 (zrušení Brd).", "2015-15"]
];
ACR.STRAT = [
  ["2023", "Bezpečnostní strategie ČR", "Vrcholný dokument; Rusko označeno za hlavní hrozbu.", "q:Bezpečnostní strategie České republiky 2023 pdf"],
  ["2023", "Obranná strategie ČR", "Ambice obrany a úroveň výdajů.", "q:Obranná strategie České republiky 2023 mo.gov.cz"],
  ["2019", "Koncepce výstavby AČR 2030 (KVAČR)", "Cílová struktura sil, těžká brigáda, 30 000 vojáků; průběžně aktualizována.", "q:Koncepce výstavby Armády České republiky 2030 pdf"],
  ["2026", "Dlouhodobý výhled pro obranu 2040", "Ministr Zůna avizoval dokončení v roce 2026.", "q:Dlouhodobý výhled pro obranu 2040"],
  ["2011", "Bílá kniha o obraně", "Audit stavu obrany po reformách; dodnes referenční bod.", "q:Bílá kniha o obraně 2011 pdf"],
  ["NATO", "Capability Targets (NDPP)", "Cíle schopností přidělené Aliancí v cyklu obranného plánování; z nich plyne potřeba 37 000+ vojáků. Podrobnosti jsou utajené.", "https://www.nato.int/cps/en/natohq/topics_49202.htm"],
  ["NATO", "Haagský závazek 2025", "5 % HDP do 2035 (3,5 % jádrová obrana + 1,5 % související výdaje).", "q:NATO summit Haag 2025 závazek 5 % HDP"]
];

/* ---------- KONTROVERZE ---------- [závažnost (''|w|n), titulek, text, zdroj] */
ACR.ISSUES = [
  ["", "Rozpočet 2026: 2 % HDP, nebo 1,73 %?", "Kapitola MO má 154,8 mld Kč, asi 1,73 % HDP. Vláda vykazuje 184 mld Kč a 2,06 % díky obranným výdajům jiných resortů. Opozice tvrdí, že proti návrhu předchozí vlády bylo kráceno 21 mld Kč; prezident i opozice pochybují, že NATO tyto výdaje uzná.", "sz_drony"],
  ["", "CAESAR: zaplaceno 7,2 mld, dodáno nic", "První čtyři houfnice měly přijít v dubnu 2026. Výrobce odstraňuje nedostatky, vojskové zkoušky nejdřív v dubnu 2027; ministerstvo jedná o penále, odstoupení od smlouvy označuje za krajní variantu.", "ed_caesar"],
  ["w", "Průhlednost počtů", "V roce 2024 ministerstvo přestalo počty běžně zveřejňovat; data dnes vycházejí hlavně z odpovědí na žádosti o informace. Cíl 30 000 se v různých zdrojích vztahuje jednou k celému rezortu, jindy k armádě.", "sz_cisla"],
  ["w", "Výměna náčelníka GŠ", "Od 1. 7. 2026 vede armádu genpor. Miroslav Hlaváč místo gen. Karla Řehky. Při květnovém hlasování vlády byl ministr Zůna (SPD) proti a šéf SPD Okamura vyjádřil výhrady.", "acr_gs"],
  ["w", "Nákupy bez tendru", "F-35, Leopard 2A8 i CV90 pořízeny mezivládními dohodami nebo jednacím řízením. Kritici upozorňují na cenu a transparentnost, zastánci na rychlost a interoperabilitu.", "ctk_2a8"],
  ["w", "Mezera v letectvu", "Rekonstrukce Čáslavi vyhnala letadla do Pardubic a Náměšti; Gripeny se zmenší na 12 kusů, než dorazí F-35 (v Česku od 2031).", "nv_caslav"],
  ["n", "Aktivní záloha na polovině", "4 849 záložníků proti cíli 10 000; nábor se zdvojnásobil, ale naplněnost zůstává kolem 50 %. Debata o povinných cvičeních po vzoru severských a pobaltských zemí.", "az_info"],
  ["n", "Podpora Ukrajiny", "Muniční iniciativa a dodávky techniky; nová vláda signalizuje změnu formy podpory.", "wiki"]
];

/* ---------- MÉDIA ---------- [skupina, název, url, poznámka] */
ACR.MEDIA = [
  ["Videa", "YouTube: Armáda České republiky", "https://www.youtube.com/results?search_query=Arm%C3%A1da+%C4%8Cesk%C3%A9+republiky", "oficiální kanál a reportáže"],
  ["Videa", "CV90 pro AČR", "https://www.youtube.com/results?search_query=CV90+%C4%8Desk%C3%A1+arm%C3%A1da", "první vozidla, výroba ve VOP CZ"],
  ["Videa", "Hradní stráž – střídání stráží", "https://www.youtube.com/results?search_query=Hradn%C3%AD+str%C3%A1%C5%BE+st%C5%99%C3%ADd%C3%A1n%C3%AD+str%C3%A1%C5%BE%C3%AD", ""],
  ["Videa", "Dny NATO v Ostravě", "https://www.youtube.com/results?search_query=Dny+NATO+Ostrava+2026", "největší přehlídka techniky"],
  ["Podcasty a zpravodajství", "Spotify: podcasty o AČR", "https://open.spotify.com/search/arm%C3%A1da%20%C4%8Desk%C3%A9%20republiky/podcasts", "vyhledávání"],
  ["Podcasty a zpravodajství", "ČT24 – téma výzbroj", "https://ct24.ceskatelevize.cz/tema/vyzbroj-53633", ""],
  ["Podcasty a zpravodajství", "Ekonomický deník – obrana", "https://ekonomickydenik.cz/", "podrobné zprávy o akvizicích"],
  ["Podcasty a zpravodajství", "CZ Defence", "https://www.czdefence.eu/", "odborný magazín (EN)"],
  ["Oficiální weby", "Armáda ČR", "https://acr.mo.gov.cz/", ""],
  ["Oficiální weby", "Ministerstvo obrany", "https://mocr.mo.gov.cz/", ""],
  ["Oficiální weby", "Aktivní záloha", "https://aktivnizaloha.mo.gov.cz/", ""],
  ["Oficiální weby", "Časopis A report 7–8/2026 (PDF)", "https://mocr.mo.gov.cz/images/ar/ar7-8_2026.pdf", ""],
  ["Oficiální weby", "Pražský hrad", "https://www.hrad.cz/", "Hradní stráž"]
];
