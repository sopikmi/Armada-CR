/* Armáda ČR – data stránky.
 * Každé číslo má uvedený zdroj (pole src = klíč do SOURCES) a datum, ke kterému platí.
 * Pravidla úprav viz AGENT.md. Nic tu nevymýšlej z paměti – co nejde ověřit, označ "~" nebo "nezveřejněno".
 */
window.ACR = {};

ACR.UPDATED = "22. 10. 2026";

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
  ffef26: ["Militär Aktuell: Future Forces Exhibition & Forum 2026, Praha", "https://militaeraktuell.at/en/future-forces-exhibition-forum-2026-europes-security-forum-in-prague/"],
  idet27: ["BVV: prospekt IDET 2027 (PDF)", "https://www.bvv.cz/veletrhy/idet/2027/pdf/155x155mm_IDET_2027_prospekt.pdf"],
  zakon245: ["Zákon 245/2000 Sb. o státních svátcích a významných dnech", "https://www.zakonyprolidi.cz/cs/2000-245"],
  bahna26: ["VePozS: Bahna 2026", "https://vepozs.mo.gov.cz/node/569"],
  ct_natodays25: ["ČT24 (21. 9. 2025): Dny NATO v Mošnově", "https://ct24.ceskatelevize.cz/clanek/domaci/v-mosnove-pokracuji-dny-nato-365261"],
  ir_nabor26: ["iROZHLAS (7. 9. 2026): Zůna hlásil 3 000 nových vojáků, armáda přijala méně", "https://www.irozhlas.cz/zpravy-domov/zuna-hlasil-tri-tisice-novych-vojaku-sama-armada-jich-ale-prijala-mene-cisty_2609070500_hrk"],
  ed_rozp27: ["Ekonomický deník (21. 10. 2026): rozpočet obrany 2027 – 190 miliard", "https://ekonomickydenik.cz/rozpocet-obrana-2027-zuna-190-miliard/"],
  ed_kvacr: ["Ekonomický deník (20. 5. 2026): Babiš není spokojen s vizí armády do 2040", "https://ekonomickydenik.cz/babis-neni-spokojen-s-vizi-armady-do-roku-2040/"],
  ctk_kvacr: ["ČTK (20. 10. 2026): Bezpečnostní rada projednala armádní koncepci", "https://www.ceskenoviny.cz/zpravy/bezpecnostni-rada-projednala-armadni-koncepci-pristi-tyden-ji-probere-vlada/2889964"],
  dn_haratek: ["Deník N (15. 10. 2026): Odvolejte šéfa kybernetických sil, nařídil Zůna", "https://denikn.cz/2221268/odvolejte-sefa-kybernetickych-sil-naridil-zuna-podle-sefa-armady-ma-general-duveru-a-zustava/"],
  mo_fff26: ["MO ČR (21. 10. 2026): Praha hostí Future Forces Forum", "https://mocr.mo.gov.cz/informacni-servis/zpravodajstvi/praha-hosti-future-forces-forum--obranne-technologie-predstavuje-vice-nez-530-vystavovatelu-266518/"],
  hn_akvizice: ["Hospodářské noviny (13. 10. 2026): Akviziční dekáda mění výzbroj české armády", "https://archiv.hn.cz/c1-67944150-akvizicni-dekada-meni-vyzbroj-ceske-armady-po-stihackach-a-obrnencich-chce-transportery"],
  blesk_airbus: ["Blesk / ČTK (21. 10. 2026): armáda chystá čtyři nová vládní letadla", "https://www.blesk.cz/clanek/zpravy-politika/850991/nova-letadla-pro-vladu-i-prezidenta-potvrdil-zuna-airbusy-starnou-a-zlobi.html"],
  ns_mrap: ["Newstream (1. 10. 2026): obrana odpískala nákup obrněnců za téměř 25 miliard", "https://www.newstream.cz/politika/obrana-odpiskala-nakup-obrnencu-za-temer-25-miliard-tendr-se-pripravoval-osm-let"],
  ctk_venom: ["ČTK (8/2026): vrtulníky Venom a Viper se připraví k obnově provozu", "https://www.ceskenoviny.cz/zpravy/armada-vrtulniky-venom-a-viper-se-postupne-pripravi-k-obnove-provozu/2863223"],
  vepozs_2a4: ["VePozS (10. 7. 2026): Přáslavický prapor má kompletní flotilu Leopard 2A4", "https://vepozs.mo.gov.cz/en/news/historic-milestone-czech-defence-praslavice-battalion-full-leopard-2a4-fleet"],
  az_info26: ["AZ INFO 1/2026 – zpravodaj aktivní zálohy (PDF)", "https://aktivnizaloha.mo.gov.cz/sites/aktivnizaloha/files/2026-04/AZ%20INFO_1_2026.pdf"],
  az_jednotky: ["Aktivní záloha – přehled jednotek AZ", "https://aktivnizaloha.mo.gov.cz/prehled-jednotek-az"],
  ct_caesar26: ["ČT24 (10. 5. 2026): čekání armády na děla Caesar se prodlužuje", "https://ct24.ceskatelevize.cz/clanek/domaci/cekani-armady-na-moderni-dela-caesar-se-prodluzuje-373271"],
  vepozs_zbrane: ["Velitelství pozemních sil: pěchotní zbraně", "https://vepozs.mo.gov.cz/technika-vyzbroj-pozemnich-sil-acr/pechotni-zbrane"],
  az_pechota: ["Armádní zpravodaj (18. 7. 2023): pěchotní zbraně AČR", "https://armadnizpravodaj.cz/vyzbroj/pechotni-zbrane-acr/"],
  czd_minimi: ["CZ Defence (14. 10. 2020): armáda nakupuje kulomety Minimi", "https://www.czdefence.cz/clanek/armada-nakupuje-proverene-kulomety-minimi"],
  demagog_4brn: ["Demagog.cz: 4. brn spolupracuje s německou tankovou divizí, podléhá českému velení", "https://demagog.cz/diskuze/ceska-brigada-rychleho-nasazeni-spolupracuje-s-nemeckou-tankovou-divizi-stale-ale-podleha-ceskemu-veleni"],
  mo_7mb: ["MO ČR (12/2025): 7. mb certifikována pro operace vysoké intenzity (MND-NE)", "https://acr.mo.gov.cz/en/ministry-of-defence/newsroom/news/7mechbde-passed-nato-tests--certified-to-control-high-intensity-operations--261764/"],
  eu_dca: ["EuroZprávy (16. 8. 2023): ratifikace obranné dohody s USA dokončena", "https://eurozpravy.cz/domaci/cesko-ma-platnou-obrannou-smlouvu-s-usa-proces-ratifikace-zavrsil-fiala.ejtyxa8i"],
  az_mandat: ["Armádní zpravodaj (3. 10. 2026): Česko sníží počet vojáků na východním křídle o 400", "https://armadnizpravodaj.cz/zpravodajstvi/cesko-snizi-pocet-vojaku-na-vychodnim-kridle-nato-o-400/"],
  czd_mandat: ["CZ Defence (16. 9. 2026): Výbor pro obranu řešil mandát zahraničních operací", "https://www.czdefence.cz/clanek/vybor-pro-obranu-resil-zahranicni-operace-akvizice-i-dalsi-smerovani-armady-klicovy-mandat-osobne-obhajoval-ministr-zuna"],
  e24_mi: ["Echo24 (28. 5. 2026): muniční iniciativa letos dodala půl milionu kusů", "https://m.echo24.cz/a/HPTeT/zpravy-svet-municni-inicativa-poslala-pul-milionu-kusu-munice-macinka"],
  respekt_mi: ["Respekt / ČTK (16. 2. 2026): iniciativa dodala 4,4 milionu kusů munice", "https://www.respekt.cz/informacni-servis/prezident-municni-iniciativa-od-sveho-vzniku-dodala-na-ukrajinu-4-4-milionu-kusu-munice-2026-02-16-12-27"],
  wiki: ["Wikipedie: Armáda České republiky", "https://cs.wikipedia.org/wiki/Arm%C3%A1da_%C4%8Cesk%C3%A9_republiky"]
};

/* ---------- PERSONÁL ---------- */
ACR.KPI = [
  {lbl: "Vojáci z povolání – celý rezort", v: "30 097", d: "včetně Vojenského zpravodajství, Vojenské policie a Hradní stráže (údaj premiéra)", date: "k 1. 8. 2026", src: "ir_nabor26"},
  {lbl: "Vojáci v Armádě ČR", v: "26 407", d: "bez MO, VZ a dalších; v roce 2026 nastoupilo 2 394, odešlo 519, čistě +1 875", date: "k 20. 8. 2026", src: "ir_nabor26"},
  {lbl: "Cíl KVAČR 2040", v: "32 000", d: "vojáků z povolání podle nové koncepce; vláda ji má projednat v týdnu od 26. 10. 2026", date: "koncepce 2040", src: "ed_kvacr", bar: [26407, 32000]},
  {lbl: "Aktivní záloha", v: "4 849", d: "poslední zveřejněný stav; cíl 10 000 do roku 2030, v roce 2026 cílová naplněnost 75 % u operačních útvarů a 44 % u teritoriálních sil", date: "k 1. 10. 2025", src: "mo_az", bar: [4849, 10000]},
  {lbl: "Nábor 2027 – plán", v: "3 550", d: "nových vojáků z povolání; rozpočet počítá s 33 044 místy vojáků", date: "návrh rozpočtu 2027", src: "ed_rozp27"},
  {lbl: "Rozpočet MO 2027 – návrh", v: "190,9 mld Kč", d: "o 36,1 mld Kč (23 %) více než 2026; obranné výdaje celkem 2,04 % HDP", date: "návrh 10/2026", src: "ed_rozp27"},
  {lbl: "Investice 2027 – návrh", v: "81,8 mld Kč", d: "programové financování, 42,9 % výdajů MO; v roce 2026 56 mld Kč", date: "návrh 10/2026", src: "ed_rozp27"},
  {lbl: "Rozpočet MO 2026", v: "154,8 mld Kč", d: "kapitola MO ≈ 1,73 % HDP; vláda vykazuje 184 mld Kč (2,06 % HDP) včetně jiných resortů", date: "2026", src: "sz_drony"}
];

/* vojáci z povolání v rezortu MO, stav k 31. 12. (2025 k 1. 10.) – zdroj mo_pocty */
ACR.VZP_TREND = [[2019, 25899], [2020, 26621], [2021, 26928], [2022, 27197], [2023, 27826], [2024, 28285], [2025, 29153], [2026, 30097]];
/* 2026 = k 1. 8. 2026 podle premiéra (ir_nabor26) */

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
  ["Leopard 2A4", "Tanky", "42", "Německo / Švýcarsko", "ok", "28 jako kompenzace od Německa za tanky pro Ukrajinu, 14 dokoupeno (ex-švýcarské, ~161 mil. €). Flotila kompletní od 7/2026 u 73. tpr Přáslavice; k tomu 2 vyprošťovací Büffel 3.", "vepozs_2a4", "leopard2a4", "leopard2"],
  ["Leopard 2A8", "Tanky", "44", "Německo", "ord", "Smlouva 11. 9. 2025, 34,25 mld Kč s DPH. První tanky 2028, dodávky do 2031. S opcemi a podpůrnými verzemi 61–77 kusů.", "ctk_2a8", "leopard2a8", "leopard2a8"],
  ["T-72M4CZ", "Tanky", "~30", "ČR (modernizace)", "old", "Dosluhují, provozuschopná je jen část.", "e15_vyzbroj", "t72", "t72cz"],
  ["CV90 MkIV", "Bojová vozidla", "246", "Švédsko / ČR", "ord", "59,7 mld Kč, 7 verzí; 39 kusů ze Švédska, 207 z VOP CZ. K 13. 10. 2026 žádné převzato; česká konfigurace poprvé představena na Future Forces Forum 21. 10. 2026. Zařazení kolem roku 2030.", "hn_akvizice", "cv90", "cv90"],
  ["BVP-2", "Bojová vozidla", "~200", "ČSSR", "old", "40 let stará vozidla, nahradí je CV90.", "e15_vyzbroj", "bvp2", "bmp2"],
  ["Pandur II 8×8", "Bojová vozidla", "127", "Rakousko / ČR", "ok", "107 z roku 2006 (72 bojových s věží RCWS-30) + 20 velitelských a spojovacích. Nemodernizují se; připravuje se náhrada až 250 vozidly (Pandur EVO, Patria, Boxer).", "hn_akvizice", "pandur", "pandur2"],
  ["Tatra Titus 6×6", "Bojová vozidla", "62", "ČR / Francie", "ok", "Velitelské, spojovací a dělostřelecké verze, dodáno do 6/2024.", "czd_pandur", "titus", "titus"],
  ["CAESAR 8×8 CZ", "Dělostřelectvo", "62", "Francie / ČR", "ord", "52 + 10 dodatkem, 10,3 mld Kč, zaplaceno přes 7,2 mld. Žádný kus nedodán, dodavatel v prodlení; nový termín zařazení 2028.", "hn_akvizice", "caesar", "caesar"],
  ["ShKH Dana vz. 77", "Dělostřelectvo", "nezveřejněno", "ČSSR", "old", "152 mm, nahradí je CAESAR.", "e15_vyzbroj", "dana", "dana"],
  ["SPYDER", "Protivzdušná obrana", "4 baterie", "Izrael / ČR", "ord", "Každá baterie 9 vozidel a 4 odpalovací zařízení. Vojskové zkoušky splněny, ostré střelby plán 10/2027, integrace do 2028. Česko je první zemí NATO s tímto systémem.", "ex_spyder", "spyder", "spyder"],
  ["2K12 KUB", "Protivzdušná obrana", "4 baterie", "SSSR", "old", "25. plrp Strakonice, nahradí SPYDER.", "e15_vyzbroj", "kub", "kub"],
  ["RBS-70", "Protivzdušná obrana", "32", "Švédsko", "ok", "Přenosné protiletadlové komplety krátkého dosahu.", "e15_vyzbroj", "rbs70", "rbs70"],
  ["JAS-39C/D Gripen", "Letectvo", "14 → 12", "Švédsko", "ok", "Pronájem prodloužen do 2035 (smlouva 1. 9. 2025, 16,7 mld Kč s DPH + ~4 mld modernizace); po roce 2027 12 kusů. Dočasně Pardubice.", "fb_gripen", "gripen", "gripen"],
  ["F-35A Lightning II", "Letectvo", "24", "USA / Itálie", "ord", "Celkem ~106 mld Kč (letouny, výzbroj, výcvik, podpora) + rekonstrukce Čáslavi. První kusy 2029 (výcvik v USA), v Česku od 2031, všechny do 2035.", "nv_caslav", "f35", "f35"],
  ["L-159 ALCA", "Letectvo", "24", "ČR", "ok", "Lehký bitevník a cvičný letoun; dočasně v Náměšti. Dlouhodobě je mají nahradit drony.", "nv_caslav", "l159", "l159"],
  ["Embraer C-390", "Letectvo", "2", "Brazílie", "ord", "11,3 mld Kč. První přistál v Praze 6. 7. 2026, druhý 2027–2028.", "av_c390", "c390", "c390"],
  ["CASA C-295", "Letectvo", "4", "Španělsko", "ok", "Taktický transport, Kbely.", "wiki", "c295", "c295"],
  ["UH-1Y Venom", "Vrtulníky", "10", "USA", "ok", "8 nakoupeno + 2 darem od USA. V červenci 2026 se jeden zřítil v Náměšti (1 mrtvá, 4 zranění); provoz H-1 obnoven od konce srpna.", "ctk_venom", "venom", "venom"],
  ["AH-1Z Viper", "Vrtulníky", "10", "USA", "ok", "4 nakoupeny + 6 darem od USA. Nahradily Mi-24/35. Rotace ~100 vojáků v Polsku (Heli Unit).", "ct_h1", "viper", "viper"],
  ["Mi-171Š", "Vrtulníky", "~16", "Rusko", "old", "Transportní; po modernizaci slouží nejméně do 2035, náhrada se připravuje.", "hn_akvizice", "mi171", "mi17"],
  ["W-3A Sokol", "Vrtulníky", "~10", "Polsko", "ok", "Pátrání a záchrana, doprava.", "wiki", "w3a", "w3"],
  ["CZ BREN 2 / CZ P-10 C", "Ruční zbraně", "—", "ČR", "ok", "Standardní útočná puška a pistole AČR; podrobně v sekci Pěchotní výzbroj.", "vepozs_zbrane", "w_bren2", "bren2"],
  ["Airbus A319CJ", "Letectvo", "2", "EU", "ok", "Vládní letka od 2007; plán čtyř nových letadel (A319CJ, business jet, L-410), specifikace se zpracovávají.", "blesk_airbus", null, "a319"],
  ["Drony (různé typy)", "Bezpilotní systémy", "3 000", "—", "ord", "Cíl do 2028, pět souběžných zakázek; typy a ceny nezveřejněny.", "sz_drony", null]
];

/* ---------- PĚCHOTNÍ VÝZBROJ ----------
 * [zbraň, kategorie, ráže, původ, stav (ok|old), poznámka, zdroj, foto key]
 * Počty kusů MO u ručních zbraní nezveřejňuje (kromě Minimi).
 */
ACR.INF = [
  ["CZ BREN 2", "útočná puška", "5,56 × 45 mm NATO (i 7,62 × 39 mm)", "Česká zbrojovka", "ok", "Standardní útočná puška; nástupce CZ 805 BREN. Modulární, varianty s různou délkou hlavně.", "az_pechota", "w_bren2", "bren2"],
  ["CZ BREN 2 PPS", "přesná puška", "7,62 × 51 mm NATO", "Česká zbrojovka", "ok", "Pro přesné střelce v bojových jednotkách; prodlužuje účinný dostřel družstva.", "vepozs_zbrane", "w_bren2", "bren2"],
  ["CZ 805 BREN A1", "útočná puška", "5,56 × 45 mm NATO", "Česká zbrojovka", "ok", "Zavedena od 2011, postupně nahrazována verzí BREN 2.", "vepozs_zbrane", "w_805a1", "bren805"],
  ["CZ 805 G1", "podvěsný granátomet", "40 mm", "Česká zbrojovka", "ok", "Proti cílům v zákopech a za překážkami.", "vepozs_zbrane", "w_805g1", "bren805"],
  ["CZ P-10 C / F", "pistole", "9 × 19 mm", "Česká zbrojovka", "ok", "Základní služební pistole; doplňuje ji CZ 75 SP-01 Phantom.", "az_pechota", "w_p10", "p10"],
  ["CZ Scorpion EVO 3 A1", "samopal", "9 × 19 mm", "Česká zbrojovka", "ok", "Osádky vozidel, speciální a policejní složky.", "az_pechota", "w_evo", "evo3"],
  ["FN Minimi (7,62 a 5,56)", "lehký kulomet", "7,62 × 51 / 5,56 × 45 mm", "FN Herstal (Belgie)", "ok", "Pořízeno 2021–2025 až 950 ks, z toho 12 ks 5,56 mm; nahrazuje UK vz. 59.", "czd_minimi", "w_minimi", "minimi"],
  ["M2 Browning", "těžký kulomet", "12,7 × 99 mm", "USA", "ok", "Na vozidlech a lafetách; dosluhují sovětské DŠK a NSV.", "az_pechota", null, "m2"],
  ["Carl Gustaf", "bezzákluzový kanon", "84 mm", "Saab (Švédsko)", "ok", "Používají mj. výsadkáři 43. výsadkového pluku.", "vepozs_zbrane", null, "cg"],
  ["RPG-7", "protitanková zbraň", "40 mm (granát nadráže)", "SSSR / licence", "old", "S optickým zaměřovačem, obsluha dvojice vojáků.", "vepozs_zbrane", null, "rpg7"],
  ["Spike LR", "protitanková řízená střela", "—", "Rafael (Izrael)", "ok", "Na Pandurech II s věží RCWS-30.", "czd_pandur", null, "spike"],
  ["Odstřelovací pušky (AI AWM, Sako TRG, Barrett M82, ZVI Falcon, CheyTac, Desert Tech HTI)", "odstřelovací a protimateriálové pušky", "7,62 mm až 12,7 mm", "různé", "ok", "Široké spektrum typů v malých počtech; dosluhují SVD Dragunov.", "az_pechota", "w_sniper", "awm"],
  ["Sa vz. 58, UK vz. 59, Škorpion vz. 61", "starší zbraně", "7,62 mm / 7,65 mm", "ČSSR", "old", "Ve skladech a u záloh; ve výzbroji bojových útvarů nahrazeny.", "az_pechota", null, "vz58"]
];

/* ---------- TAKTIKA A DOKTRÍNA ---------- [titulek, text, zdroj] */
ACR.TACTICS = [
  ["Kolektivní obrana v rámci NATO", "Armáda se připravuje hlavně na boj v aliančním rámci. Do Modelu sil NATO vyčleňuje od 2027 až 11 000 osob, jednotky se certifikují podle aliančních standardů a cvičí v mnohonárodních divizích.", "az_mandat"],
  ["Těžká brigáda pro operace vysoké intenzity", "7. mechanizovaná brigáda (Hranice) je jádrem těžkých sil: tanky Leopard, budoucí CV90 a Leopard 2A8. V 12/2025 prošla certifikací velení pro operace vysoké intenzity v rámci Mnohonárodní divize Severovýchod (Elbląg).", "mo_7mb"],
  ["Rychlé nasazení a lehké síly", "4. brigáda rychlého nasazení (Žatec) s kolovými Pandury a výsadkovým plukem slouží pro rychlou reakci a pro mise; od 2017 je afilována k německé 10. tankové divizi při zachování českého velení.", "demagog_4brn"],
  ["Teritoriální obrana a zálohy", "Od 10/2025 vzniká u každého krajského velitelství prapor územní obrany složený převážně z aktivních záloh: ochrana důležité infrastruktury, podpora při krizích a doplňování útvarů.", "az_jednotky"],
  ["Drony, elektronický boj a zkušenosti z Ukrajiny", "Nová koncepce do 2040 zdůrazňuje rychlé přezbrojení a nové technologie; armáda plánuje 3 000 menších dronů pro bojové jednotky a buduje 533. prapor bezpilotních systémů a 532. prapor elektronického boje.", "hn_akvizice"]
];

/* ---------- SMLOUVY, ČLENSTVÍ A AFILACE ---------- [rok, název, typ, popis, zdroj (klíč nebo URL)] */
ACR.TREATIES = [
  ["1999", "Severoatlantická smlouva (NATO)", "aliance", "Česko členem od 12. 3. 1999; článek 5 o kolektivní obraně. Závazek 2 % HDP, od summitu v Haagu 2025 cíl 5 % do 2035.", "https://www.nato.int/cps/en/natohq/official_texts_17120.htm"],
  ["2004", "Evropská unie – SBOP", "aliance", "Společná bezpečnostní a obranná politika EU, klauzule vzájemné pomoci (čl. 42 odst. 7 SEU), mise EUFOR, EUNAVFOR, EUMAM.", "https://www.consilium.europa.eu/cs/policies/defence-security/"],
  ["2023", "Dohoda o obranné spolupráci s USA (DCA)", "bilaterální", "Upravuje postavení amerických vojáků a dodavatelů při pobytu v ČR, výcvik a logistiku; neznamená trvalou základnu. Ratifikace dokončena 16. 8. 2023.", "eu_dca"],
  ["2017", "Afilace 4. brn k německé 10. tankové divizi", "afilace", "Deklarace o záměru v rámci Framework Nations Concept: společný výcvik a interoperabilita; brigáda zůstává pod českým velením a nasadit ji lze jen se souhlasem ČR.", "demagog_4brn"],
  ["2025", "7. mb v rámci Mnohonárodní divize Severovýchod", "afilace", "Velitelství 7. mechanizované brigády certifikováno pro působení v divizi NATO MND-NE (Elbląg, Polsko).", "mo_7mb"],
  ["2022", "Mnohonárodní bojové uskupení Slovensko", "mise", "ČR byla do 6/2024 vedoucí zemí, nyní druhý největší přispěvatel (Pandury z 42. mpr).", "https://mise.mo.gov.cz/aktualni-mise/slovensko/slovensko--234572/"],
  ["2027–2028", "Mandát zahraničních operací", "mandát", "Až 1 600 vojáků na východním křídle NATO v devíti zemích, až 2 000 spojeneckých vojáků na území ČR (ne trvale).", "czd_mandat"],
  ["—", "Formáty spolupráce", "regionální", "Visegrádská skupina, Slavkovský formát, Bukurešťská devítka a Středoevropská obranná spolupráce (CEDC).", "https://cs.wikipedia.org/wiki/Visegr%C3%A1dsk%C3%A1_skupina"]
];

/* ---------- ORGANIZAČNÍ STRUKTURA (vizuální strom) ----------
 * uzel: {n: název, t: posádka, z: klíč znaku (foto/index.json, skupina Znaky), s: NATO symbol, c: podřízené}
 */
ACR.ORG = {
  top: [
    {n: "Prezident republiky", t: "vrchní velitel ozbrojených sil", z: null, s: "hq"},
    {n: "Ministerstvo obrany", t: "Praha · ministr obrany", z: null, s: "hq"},
    {n: "Generální štáb AČR", t: "Praha-Dejvice · náčelník GŠ", z: "z_gs", s: "hq"}
  ],
  branches: [
    {n: "Velitelství pozemních sil", t: "Olomouc", z: "z_vps", s: "hq", c: [
      {n: "4. brigáda rychlého nasazení", t: "Žatec", z: "z_4brn", s: "inf", c: [{n: "41. mechanizovaný prapor", t: "Žatec"}, {n: "42. mechanizovaný prapor", t: "Tábor"}, {n: "44. lehký motorizovaný prapor", t: "Jindřichův Hradec"}]},
      {n: "7. mechanizovaná brigáda", t: "Hranice", z: "z_7mb", s: "arm", c: [{n: "71. mechanizovaný prapor", t: "Hranice"}, {n: "72. mechanizovaný prapor", t: "Přáslavice"}, {n: "73. tankový prapor", t: "Přáslavice"}, {n: "74. mechanizovaný prapor", t: "Bučovice"}]},
      {n: "43. výsadkový pluk", t: "Chrudim", z: "z_43", s: "inf"},
      {n: "13. dělostřelecký pluk", t: "Jince", z: "z_13", s: "art", c: [{n: "131. dělostřelecký oddíl", t: "Jince"}, {n: "132. dělostřelecký oddíl", t: "Jince"}]},
      {n: "15. ženijní pluk", t: "Bechyně", z: "z_15", s: "eng", c: [{n: "151. ženijní prapor", t: "Bechyně"}, {n: "152. ženijní prapor", t: "Bechyně"}, {n: "153. ženijní prapor", t: "Olomouc"}]},
      {n: "31. pluk RCHBO", t: "Liberec", z: "z_31", s: "cbrn", c: [{n: "311. prapor RCHBO", t: "Liberec"}, {n: "312. prapor RCHBO", t: "Liberec"}, {n: "314. centrum výstrahy ZHN", t: "Hostivice"}]},
      {n: "53. pluk průzkumu a EB", t: "Opava", z: "z_53", s: "ew", c: [{n: "102. průzkumný prapor", t: "Prostějov", z: "z_102"}, {n: "532. prapor elektronického boje", t: "Opava"}, {n: "533. prapor bezpilotních systémů", t: "Prostějov"}]},
      {n: "14. pluk logistické podpory", t: "Pardubice", z: "z_14", s: "log", c: [{n: "141. zásobovací prapor", t: "Pardubice"}, {n: "142. prapor oprav", t: "Klatovy"}, {n: "143. zásobovací prapor", t: "Lipník nad Bečvou"}]}
    ]},
    {n: "Velitelství vzdušných sil", t: "Praha", z: "z_vzs", s: "hq", c: [
      {n: "21. základna taktického letectva", t: "Čáslav (dočasně Pardubice a Náměšť)", z: "z_21", s: "air"},
      {n: "22. základna vrtulníkového letectva", t: "Náměšť nad Oslavou", z: "z_22", s: "air"},
      {n: "24. základna dopravního letectva", t: "Praha-Kbely", z: "z_24", s: "air"},
      {n: "25. protiletadlový raketový pluk", t: "Strakonice", z: "z_25", s: "ad"},
      {n: "26. pluk velení, řízení a průzkumu", t: "Stará Boleslav", z: "z_26", s: "radar", c: [{n: "261. středisko řízení (CRC)", t: "Hlavenec"}, {n: "262. radiotechnický prapor (7 rot)", t: "Hlavenec"}, {n: "263. prapor podpory", t: "Hlavenec"}]}
    ]},
    {n: "Velitelství teritoriálních sil", t: "Tábor", z: "z_ters", s: "hq", c: [
      {n: "14 krajských vojenských velitelství", t: "krajská města", s: "ter"},
      {n: "14 praporů územní obrany (111.–241.)", t: "při KVV, převážně aktivní záloha", s: "inf"},
      {n: "Pluk podpory nasaditelných sil", t: "Rakovník", s: "log"}
    ]},
    {n: "Velitelství informačních a kybernetických sil", t: "Brno", z: "z_kys", s: "cyber", c: [
      {n: "91. skupina informačního boje", t: "Olomouc", s: "cyber"},
      {n: "92. skupina kybernetického boje", t: "Brno", s: "cyber"}
    ]},
    {n: "Ředitelství speciálních sil MO", t: "Praha", z: null, s: "sof", c: [
      {n: "601. skupina speciálních sil", t: "Prostějov", z: "z_601", s: "sof"},
      {n: "Centrum podpory speciálních sil", t: "Olomouc", s: "sof"}
    ]},
    {n: "Velitelství, výcvik a agentury", t: "různé posádky", z: null, s: "hq", c: [
      {n: "Velitelství pro operace", t: "Praha", s: "hq"},
      {n: "Velitelství výcviku – Vojenská akademie", t: "Vyškov", s: "edu"},
      {n: "Agentura logistiky", t: "Stará Boleslav", s: "log"},
      {n: "Agentura komunikačních a informačních systémů", t: "Praha", s: "misc"},
      {n: "Agentura vojenského zdravotnictví", t: "Hradec Králové", s: "med"}
    ]}
  ],
  ext: [
    {n: "Hradní stráž", t: "Praha · v působnosti Kanceláře prezidenta", z: "z_hs", s: "guard"},
    {n: "Vojenská policie", t: "Praha · podřízena ministrovi obrany", z: "z_vp", s: "mp"},
    {n: "Vojenské zpravodajství", t: "Praha · podřízeno ministrovi obrany", z: null, s: "misc"}
  ]
};

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

/* ---------- AKCE A MILNÍKY do konce 2027 ----------
 * Každá akce jen jednou. [řazení YYYY-MM-DD, datum k zobrazení, název, místo, popis, zdroj, druh (akce|milnik|vyroci), stav (potvrzeno|ocekavano), foto key]
 * Prošlé položky (datum < dnes) se na webu skryjí automaticky.
 */
ACR.EVENTS = [
  ["2026-10-23", "21.–23. 10. 2026", "Future Forces Exhibition & Forum", "Praha, PVA Expo Letňany", "530 vystavovatelů ze 70 zemí; poprvé představeno CV90 MkIV v české konfiguraci.", "mo_fff26", "akce", "potvrzeno"],
  ["2026-10-30", "týden od 26. 10. 2026", "Vláda projedná KVAČR 2040", "Praha, Úřad vlády", "Koncepce výstavby armády do 2040, kterou 20. 10. vzala na vědomí Bezpečnostní rada státu.", "ctk_kvacr", "milnik", "ocekavano"],
  ["2026-10-28", "28. 10. 2026", "Den vzniku samostatného Československa", "Praha, Pražský hrad", "Státní svátek: jmenování generálů a vyznamenání prezidentem, slavnostní nástup Hradní stráže.", "zakon245", "vyroci", "potvrzeno", "hradni"],
  ["2026-11-11", "11. 11. 2026", "Den válečných veteránů", "celá republika, Praha – Vítkov", "Významný den; pietní akty AČR a sbírka Českého červeného kříže a spolků veteránů.", "zakon245", "vyroci", "potvrzeno"],
  ["2026-12-31", "do konce 2026", "První CV90 MkIV pro 7. mb", "Švédsko / VOP CZ Šenov", "Plán: prvních 10 vozidel CV90 k vojskovým zkouškám v roce 2026; k 13. 10. žádné převzato. Jako první je dostane 74. mechanizovaný prapor.", "hn_akvizice", "milnik", "ocekavano", "cv90"],
  ["2027-04-01", "duben 2027", "CAESAR: začátek vojskových zkoušek", "13. dělostřelecký pluk, Jince", "Podle harmonogramu po odstranění nedostatků dodavatelem; zařazení do výzbroje 2028.", "ed_caesar", "milnik", "ocekavano", "caesar"],
  ["2027-01-01", "1. 1. 2027", "Nový mandát zahraničních operací", "východní křídlo NATO", "Strop klesá z 2 000 na 1 600 vojáků, nově i Finsko; příspěvek do Modelu sil NATO roste na 11 000.", "az_mandat", "milnik", "potvrzeno"],
  ["2027-05-26", "26.–28. 5. 2027", "IDET 2027", "Brno, Výstaviště", "Mezinárodní veletrh obranné a bezpečnostní techniky, souběžně PYROS a ISET.", "idet27", "akce", "potvrzeno", "spyder"],
  ["2027-06-15", "červen 2027", "Bahna – Den pozemního vojska", "Strašice, vojenský areál", "Největší ukázka pozemních sil pro veřejnost; koná se tradičně v červnu, termín 2027 zatím nezveřejněn.", "bahna26", "akce", "ocekavano"],
  ["2027-06-30", "30. 6. 2027", "Den ozbrojených sil ČR", "celá republika", "Významný den připomínající bitvu u Zborova a vznik ozbrojených sil.", "zakon245", "vyroci", "potvrzeno"],
  ["2027-09-18", "září 2027", "Dny NATO a Dny Vzdušných sil AČR", "Ostrava-Mošnov", "Největší bezpečnostní show v Evropě; koná se tradičně třetí víkend v září, termín 2027 zatím nezveřejněn.", "ct_natodays25", "akce", "ocekavano", "natodays"],
  ["2027-10-01", "říjen 2027", "SPYDER: první ostré střelby", "25. protiletadlový raketový pluk", "Plánované ostré střelby nového systému PVO; integrace do sítě do roku 2028.", "ex_spyder", "milnik", "ocekavano", "spyder"],
  ["2027-12-30", "2027", "Druhý Embraer C-390", "24. základna dopravního letectva, Kbely", "Dodávka druhého transportního letounu.", "av_c390", "milnik", "ocekavano", "c390"],
  ["2027-12-31", "od 2027", "Gripeny: nová smlouva, 12 letounů", "21. zTL (dočasně Pardubice)", "Začíná prodloužený pronájem do 2035 se 12 letouny místo 14.", "fb_gripen", "milnik", "potvrzeno", "gripen"]
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
  ["", "Ministr vs. armáda: šéf kybernetických sil", "Ministr Zůna nařídil náčelníkovi GŠ odvolat brig. gen. Radka Harateka, velitele informačních a kybernetických sil, kvůli operacím „Karel“ a „Volby 2025“. Generální štáb rozkaz nesplnil a Haratek podle mluvčího má důvěru náčelníka (15. 10. 2026).", "dn_haratek"],
  ["", "Rozpočet 2027: rekord, ale 2,04 % HDP", "Návrh kapitoly MO 190,9 mld Kč je o 23 % vyšší než 2026, obranné výdaje ale dosahují jen 2,04 % HDP, zatímco haagský závazek NATO míří k 3,5 % jádrových výdajů do 2035. Ministr sám upozorňuje na zpoždění podepsaných zakázek.", "ed_rozp27"],
  ["", "CAESAR: zaplaceno 7,2 mld, dodáno nic", "První čtyři houfnice měly přijít v dubnu 2026. Kontrolní zkoušky odhalily nedostatky (mj. elektromagnetické záření v kabinách), vojskové zkoušky nezačaly, zařazení se posouvá na 2028. Ministr dává přednost dodání před zrušením smlouvy.", "ct_caesar26"],
  ["w", "Zrušený tendr na obrněnce za 25 mld", "Po osmi letech příprav MO zrušilo zakázku na 185 čtyřkolových obrněnců pro ženisty, zdravotníky, speciální síly a Vojenskou policii (až 24,7 mld Kč) z „ekonomických důvodů“. Nový tendr zatím není.", "ns_mrap"],
  ["w", "Nábor: rekord, ale počty se liší", "Ministr hlásil téměř 3 000 nových vojáků (celý rezort), armáda samotná do 20. 8. přijala 2 394 a čistě přibylo 1 875. Premiér chce rychlejší růst než 32 000 vojáků do 2040.", "ir_nabor26"],
  ["w", "Havárie Venomu v Náměšti", "V červenci 2026 se při přistání zřítil UH-1Y Venom, zemřela vojákyně a čtyři lidé byli zraněni. Provoz všech H-1 byl na měsíc pozastaven; policie případ prověřuje jako obecné ohrožení z nedbalosti.", "ctk_venom"],
  ["w", "Nákupy bez tendru", "F-35, Leopard 2A8 i CV90 pořízeny mezivládními dohodami nebo jednacím řízením. Kritici upozorňují na cenu a transparentnost, zastánci na rychlost a interoperabilitu.", "ctk_2a8"],
  ["w", "Mezera v letectvu", "Rekonstrukce Čáslavi vyhnala letadla do Pardubic a Náměšti; Gripeny se po roce 2027 zmenší na 12 kusů, F-35 budou v Česku od 2031.", "nv_caslav"],
  ["n", "Aktivní záloha", "Poslední zveřejněný stav 4 849 záložníků proti cíli 10 000 do 2030; nová koncepce podle ministra počítá až s 15 000. Od 10/2025 vzniká 14 praporů územní obrany u krajských velitelství.", "az_info26"],
  ["n", "Podpora Ukrajiny", "Česko už na muniční iniciativu finančně nepřispívá, jen ji administrativně zajišťuje; počet přispívajících států klesl z 18 na 9. Od vzniku iniciativa dodala zhruba 4,4 milionu kusů velkorážové munice.", "e24_mi"]
];

/* ---------- MÉDIA ---------- [skupina, název, url, poznámka] */
ACR.MEDIA = [
  ["Časopisy a magazíny", "A report – časopis MO (PDF 7–8/2026)", "https://mocr.mo.gov.cz/images/ar/ar7-8_2026.pdf", "celé vydání zdarma v PDF"],
  ["Časopisy a magazíny", "A report 2/2026 (PDF)", "https://mocr.mo.gov.cz/images/ar/AR_2_26_final.pdf", "celé vydání zdarma v PDF"],
  ["Časopisy a magazíny", "ATM – Armádní technický magazín", "https://www.atmonline.cz/", "měsíčník; tištěná a elektronická verze v předplatném vydavatele"],
  ["Časopisy a magazíny", "Magnet Press – vydavatel ATM", "https://magnetpress.online/", "předplatné ATM a ročenek"],
  ["Časopisy a magazíny", "Vojenské rozhledy", "https://www.vojenskerozhledy.cz/", "odborný časopis MO, články v PDF zdarma"],
  ["Zpravodajské weby", "CZ Defence (česky)", "https://www.czdefence.cz/", "obrana a průmysl, zprávy z MO"],
  ["Zpravodajské weby", "CZ Defence (anglicky)", "https://www.czdefence.com/", ""],
  ["Zpravodajské weby", "Armádní noviny", "https://www.armadninoviny.cz/", "pozemní, letecká a námořní technika"],
  ["Zpravodajské weby", "Armádní zpravodaj", "https://armadnizpravodaj.cz/", "události, výzbroj, historie"],
  ["Zpravodajské weby", "ARMYmag", "https://www.armymag.cz/", ""],
  ["Zpravodajské weby", "Ekonomický deník – obrana", "https://ekonomickydenik.cz/", "akvizice a rozpočet"],
  ["Zpravodajské weby", "ČT24 – téma výzbroj", "https://ct24.ceskatelevize.cz/tema/vyzbroj-53633", ""],
  ["Zpravodajské weby", "Valka.cz", "https://www.valka.cz/", "encyklopedie a fórum"],
  ["Oficiální weby", "Armáda ČR", "https://acr.mo.gov.cz/", ""],
  ["Oficiální weby", "Ministerstvo obrany", "https://mocr.mo.gov.cz/", ""],
  ["Oficiální weby", "Vzdušné síly – 21. zTL Čáslav", "http://afbcaslav.mo.gov.cz/", "Gripeny, L-159"],
  ["Oficiální weby", "Vzdušné síly – 22. zVrL Náměšť", "https://lznamest.mo.gov.cz/", "vrtulníky"],
  ["Oficiální weby", "Vzdušné síly – 24. zDL Kbely", "http://zdl.mo.gov.cz/", "dopravní letectvo"],
  ["Oficiální weby", "Velitelství pozemních sil", "https://vepozs.mo.gov.cz/", ""],
  ["Oficiální weby", "Zahraniční mise AČR", "https://mise.mo.gov.cz/", ""],
  ["Oficiální weby", "Aktivní záloha", "https://aktivnizaloha.mo.gov.cz/", ""],
  ["Oficiální weby", "Do armády – nábor", "https://doarmady.mo.gov.cz/", ""],
  ["Oficiální weby", "Vojenský historický ústav", "https://www.vhu.cz/", "muzea, veteráni"],
  ["Videa a podcasty", "YouTube: Armáda České republiky", "https://www.youtube.com/results?search_query=Arm%C3%A1da+%C4%8Cesk%C3%A9+republiky", "oficiální kanál a reportáže"],
  ["Videa a podcasty", "YouTube: CV90 pro AČR", "https://www.youtube.com/results?search_query=CV90+%C4%8Desk%C3%A1+arm%C3%A1da", ""],
  ["Videa a podcasty", "YouTube: Hradní stráž – střídání stráží", "https://www.youtube.com/results?search_query=Hradn%C3%AD+str%C3%A1%C5%BE+st%C5%99%C3%ADd%C3%A1n%C3%AD+str%C3%A1%C5%BE%C3%AD", ""],
  ["Videa a podcasty", "Deník – Military podcast", "https://www.denik.cz/military-podcast/", ""],
  ["Videa a podcasty", "Spotify: podcasty o AČR", "https://open.spotify.com/search/arm%C3%A1da%20%C4%8Desk%C3%A9%20republiky/podcasts", "vyhledávání"]
];
