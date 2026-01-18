export const scenes = { 
  start: { text: "Egy ködös erdei ösvényen állsz. A fák között valami fémesen csillan, és a távolban halk vízcsobogás hallatszik.",
    image: "start.webp",
    choices: [
    {id: "start_glint", text: "Elindulok a csillanás felé.", next: "glint"},
    {id: "start_stream", text: "A vízcsobogást követem.", next: "stream"},
  ],
  },

  glint: { text: "A csillanás közelebb érve egy félig sárba süppedt, régi medál. Amint megérinted, a köd egy pillanatra megmozdul körülötted.",
    image: "glint.webp",
    choices: [
      { id: "glint_start", text: "Felveszem a medált, és visszamegyek az elágazáshoz.", next: "start", addItem: "Régi medál" },
      { id: "glint_light", text:  "A ködben egy halvány fényt követek tovább.", next: "light" }
    ]
  },

    stream: {
    text: "A vízcsobogás egy keskeny patakhoz vezet. A parton friss lábnyomok és egy elszakadt kötéldarab hever.",
    image: "stream.webp",
    choices: [
      { id: "stream_start", text: "Megvizsgálom a lábnyomokat, aztán visszamegyek.", next: "start" },
      { id: "stream_downstream", text: "A patak mentén elindulok lefelé.", next: "downstream" },
    ],
  },

  light: {
    image: "light.webp",
    text: "A ködben derengő fény egy kidőlt kőoszlopokkal jelölt ösvényhez vezet. A medál hideg lesz a tenyeredben, mintha figyelmeztetne.(szükséges a Régi medál megléte)",
    choices: [
      { id: "light_stones", text: "Átlépek a kőoszlopok között.", next: "stones" },
      { id: "light_trees", text: "Megkerülöm őket, és a fák között kerülök.", next: "trees" },
      { id: "light_gate", text: "A medállal megérinted az oszlopot", next: "gate", requiresItem: "Régi medál"}
    ],
  },

  downstream: {
    image: "downstream.webp",
    text: "A patak lefelé keskeny szurdokba kanyarodik. A víz mellett egy rongyos zsák lóg egy ágon, benne valami zörög.",
    choices: [
      { id: "downstream_bag", text: "Kinyitom a zsákot.", next: "bag" },
      { id: "downstream_gorge", text: "Ott hagyom, és sietek tovább a szurdokba.", next: "gorge" },
    ],
  },

  stones: {
    image: "stones.webp",
    text: "Ahogy átlépsz a kőoszlopok között, a köd hirtelen elvékonyodik. A talajon vésett jelek futnak egy kör alakú mélyedésbe, mintha valamit várnának.",
    choices: [
        { id: "stones_touch", text: "Megérintem a vésett jeleket.", next: "markings" },
        { id: "stones_listen", text: "Csendben figyelek, hátha mozog valami.", next: "whisper" },
  ],
},

trees: {
    image: "trees.webp",
    text: "A fák között kerülve az erdő sűrűbb és sötétebb. Egy alacsony ág alatt átbújva egy elhagyott tűzrakóhelyre bukkansz, hamu még melegnek tűnik.",
    choices: [
        { id: "trees_search", text: "Átkutatom a tűzrakóhelyet.", next: "camp" },
        { id: "trees_hide", text: "Elbújok és kivárok.", next: "footsteps" },
    ],
},

bag: {
    image: "bag.webp",
    text: "A zsákban egy üvegcse csörög: áttetsző folyadék, parafadugóval. A címke kopott, de ki tudod venni: 'Köd ellen'.",
    choices: [
        { id: "bag_take", text: "Elteszem az üvegcsét.", next: "downstream", addItem: "Ködoldó üvegcse" },
        { id: "bag_open", text: "Kinyitom és beleszagolok.", next: "dizzy" },
    ],
},

gorge: {
    image: "gorge.webp",
    text: "A szurdokban a víz hangja felerősödik. A sziklafalba egy keskeny rés nyílik, mintha egy rejtett átjáró lenne, de belül teljes sötétség van.",
    choices: [
        { id: "gorge_enter", text: "Bemegyek a résen.", next: "crack" },
        { id: "gorge_wait", text: "Várok és figyelem a környéket.", next: "echo" },
    ],
},
// ------------------------
  markings: {
    image: "markings.webp",
    text: "A vésett jelek hidegek, mint a jég. Amint végigsimítod őket, a kör alakú mélyedésben halványan felizzik valami. A köd körülötted örvényleni kezd, és távoli suttogás felel a mozdulatodra.",
    choices: [
      { id: "markings_focus", text: "Koncentrálok, és megpróbálom követni a jelek vonalát.", next: "sigil" },
      { id: "markings_back", text: "Elengedem és hátralépek. Nem tetszik ez az egész.", next: "stones" },
    ],
  },

  sigil: {
    image: "sigil.webp",
    text: "A jelek egyetlen mintává állnak össze: mintha egy pecsét lenne. A levegő megnehezül, és a mélyedésben egy apró rés nyílik. Olyan, mintha valami odabentről nézne rád.",
    choices: [
      { id: "sigil_offer_medal", text: "A Régi medált a mélyedés fölé tartom.", next: "altar", requiresItem: "Régi medál" },
      { id: "sigil_reach_in", text: "Benézek és benyúlok a résbe.", next: "death_grab" },
      { id: "sigil_leave", text: "Nem kockáztatok. Inkább visszamegyek.", next: "stones" },
    ],
  },

  whisper: {
    image: "whisper.webp",
    text: "Néhány lélegzetnyi csend után meghallod: nem a szél az, hanem suttogás. A ködben alakok mozognak, mintha körbejárnának. Egy hang a nevedet formázza — pedig nem mondtad ki senkinek.",
    choices: [
      { id: "whisper_run", text: "Megfordulok és elfutok a kőoszlopok közül.", next: "stones" },
      { id: "whisper_answer", text: "Válaszolok a suttogásnak: „Ki vagy?”", next: "shadow" },
    ],
  },

  shadow: {
    image: "shadow.webp",
    text: "Ahogy megszólalsz, a köd egyszerre elnémul. Egy árnyalak lép közelebb, és a testeden átfut a hideg. A hang már nem kérdez — parancsol: „Add vissza, ami az enyém.”",
    choices: [
      { id: "shadow_give_medal", text: "Átadom a Régi medált.", next: "curse_end", requiresItem: "Régi medál" },
      { id: "shadow_refuse", text: "Nem adom. Hátralépek.", next: "death_shadow" },
      { id: "shadow_use_potion", text: "Előveszem a Ködoldó üvegcsét és szétfröcskölöm.", next: "clear_path", requiresItem: "Ködoldó üvegcse" },
    ],
  },

  camp: {
    image: "camp.webp",
    text: "A tűzrakóhely hamuja között egy félig elégett térképdarab és egy rozsdás késpenge hever. A térképen egy jel: kőkapu a patak fölött. A késpenge nyelén rovások futnak, mintha valaki számolt volna vele… vagy valamit jelölt.",
    choices: [
      { id: "camp_take_map", text: "Elteszem a térképdarabot.", next: "trees", addItem: "Térképdarab" },
      { id: "camp_take_blade", text: "Felveszem a rozsdás pengét.", next: "trees", addItem: "Rozsdás penge" },
      { id: "camp_follow_mark", text: "A térkép jelét követem a sűrűben.", next: "gate" },
    ],
  },

  footsteps: {
    image: "footsteps.webp",
    text: "Elbújsz a bokrok mögé. Léptek közelednek — két alak, köpenyben. Nem látod az arcukat, de a hangjuk ismerősnek tűnik, mintha utánad jöttek volna. A köd körülöttük úgy simul, mintha engedelmeskedne nekik.",
    choices: [
      { id: "footsteps_wait", text: "Kivárok, amíg elmennek.", next: "ambush" },
      { id: "footsteps_attack", text: "Előugrok és rájuk támadok.", next: "death_blades" },
      { id: "footsteps_sneak", text: "Halkan utánuk osonok.", next: "trail" },
    ],
  },

  ambush: {
    image: "ambush.webp",
    text: "Túl sokáig maradsz mozdulatlan. A sötét nem csak elrejt — figyel is. Egy hideg kéz a válladra simul, és a gerincedben végigfut a bénító borzongás. Nem kiáltasz. Nem is tudnál.",
    choices: [
      { id: "ambush_potion", text: "Ködoldó üvegcse! Most!", next: "clear_path", requiresItem: "Ködoldó üvegcse" },
      { id: "ambush_scream", text: "Kirántom magam és kiáltok.", next: "death_ambush" },
    ],
  },

  trail: {
    image: "trail.webp",
    text: "Az alakok egy elágazáshoz érnek. Az egyik letesz valamit a földre: egy lapos kődarabot, rajta ugyanaz a jel, mint a medálon. A másik a patak irányába mutat. Nem beszélnek sokat — mintha nem lenne rá szükségük.",
    choices: [
      { id: "trail_take_slate", text: "Felkapom a kőlapot, amint továbbmennek.", next: "trees", addItem: "Jeles kőlap" },
      { id: "trail_follow_stream", text: "A patak felé követem őket.", next: "downstream" },
    ],
  },

  dizzy: {
    image: "dizzy.webp",
    text: "A folyadék szaga édeskés és túl erős. A fejed zúgni kezd, mintha harang kondulna a koponyádban. A fák megnyúlnak, a talaj hullámzik, és a köd hirtelen túl közel kerül. A lábad alól kicsúszik a világ.",
    choices: [
      { id: "dizzy_hold", text: "Megpróbálok kapaszkodni és várni.", next: "death_poison" },
      { id: "dizzy_spit", text: "Azonnal eldobom és hátrálok.", next: "downstream" },
    ],
  },

  crack: {
    image: "crack.webp",
    text: "A rés szűk, a levegő nyirkos. Bent a sötétség szinte tapad a bőrödhöz. A járat végül kettéválik: balra mélyebb feketeség, jobbra halk széljárás. A választás egyszerűnek tűnik — és pont ettől veszélyes.",
    choices: [
      { id: "crack_left", text: "Balra megyek, lefelé.", next: "death_depth" },
      { id: "crack_right", text: "Jobbra megyek a szél felé.", next: "chamber" },
      { id: "crack_back", text: "Visszafordulok. Ez nem jó ötlet.", next: "gorge" },
    ],
  },

  echo: {
    image: "echo.webp",
    text: "Vársz. A szurdok visszhangja furcsán torzítja a hangokat — mintha valaki a nevedet ismételné. A köd lassan beszüremlik a résbe is, és a levegő hűvösebb lesz minden lélegzettel.",
    choices: [
      { id: "echo_enter", text: "Inkább bemegyek a résen, mielőtt ideér.", next: "crack" },
      { id: "echo_potion", text: "Ködoldó üvegcse segítségével kitisztítom a bejáratot.", next: "chamber", requiresItem: "Ködoldó üvegcse" },
      { id: "echo_stay", text: "Nem mozdulok.", next: "death_fog" },
    ],
  },

  gate: {
    image: "gate.webp",
    text: "A kőoszlopok mögött valóban kapu áll: két repedt monolit, köztük alig látható jel. Itt a köd vékonyabb, és a levegő tele van statikus bizsergéssel. A medál a tenyeredben felmelegszik, mintha felismerte volna a helyet.",
    choices: [
      { id: "gate_touch", text: "Megérintem a monolit közepét.", next: "sanctum" },
      { id: "gate_medal", text: "A Régi medált a jelhez illesztem.", next: "sanctum", requiresItem: "Régi medál" },
      { id: "gate_back", text: "Visszalépek. Előbb felkészülök.", next: "light" },
    ],
  },

  altar: {
    image: "altar.webp",
    text: "A jel felizzik, és a kő megremeg. A rés kitágul, majd egy kőből faragott oltár emelkedik ki a mélyedésből. A tetején üres foglalat vár, mintha pontosan erre a pillanatra építették volna.",
    choices: [
      { id: "altar_place_slate", text: "A Jeles kőlapot a foglalatba illesztem.", next: "sanctum", requiresItem: "Jeles kőlap" },
      { id: "altar_place_medal", text: "A Régi medált a foglalatába teszem.", next: "seal_end", requiresItem: "Régi medál" },
      { id: "altar_leave", text: "Nem kockáztatok, visszamegyek.", next: "stones" },
    ],
  },

  clear_path: {
    image: "clear_path.webp",
    text: "A Ködoldó üvegcse szétfröcscsen, és a köd úgy húzódik szét, mintha függönyt rántottak volna félre. Előtted tiszta ösvény rajzolódik ki: egyenesen a kőkapu felé. Most végre nem csak sejted, merre kell menni — látod is.",
    choices: [
      { id: "clear_go", text: "Végigmegyek a kitisztult ösvényen.", next: "gate" },
      { id: "clear_back", text: "Visszamegyek az elágazáshoz és újratervezek.", next: "start" },
    ],
  },

  chamber: {
    image: "chamber.webp",
    text: "A járat egy kicsi, kővel kirakott kamrába torkollik. A falon csillogó írás fut: „A köd csak kapu. A kapu csak alku.” A földön egy repedt tükördarab hever, és a felületén olyan fény villan, ami itt nem létezhetne.",
    choices: [
      { id: "chamber_take_mirror", text: "Felveszem a tükördarabot.", next: "chamber", addItem: "Tükördarab" },
      { id: "chamber_follow_symbols", text: "Követem az írást a fal mentén.", next: "sanctum" },
    ],
  },
  
  sanctum: {
    image: "sanctum.webp",
    text: "Egy romos szentélybe érsz. Középen kút-szerű mélyedés, körben csontfehér kövek. A köd itt nem mozog — mintha visszafojtaná a lélegzetét. A csend olyan sűrű, hogy szinte hallod a saját gondolataid.",
    choices: [
      { id: "sanctum_look_in", text: "Belenézek a mélyedésbe.", next: "well" },
      { id: "sanctum_step_circle", text: "Belépek a kőgyűrű közepébe.", next: "ritual" },
      { id: "sanctum_leave", text: "Hátrálok. Túl csendes.", next: "gate" },
    ],
  },

  well: {
    image: "well.webp",
    text: "A mélyedésben nem víz van, hanem fekete köd. A felszíne tükörként csillan. Egy arc néz vissza — a tiéd, de a szeme nem a te szemed. A pillanat olyan, mintha a valóság elfelejtette volna, ki az igazi.",
    choices: [
      { id: "well_touch", text: "Megérintem a fekete köd felszínét.", next: "death_well" },
      { id: "well_mirror", text: "A Tükördarabbal a felszín fölé tartok.", next: "truth", requiresItem: "Tükördarab" },
      { id: "well_back", text: "Elfordulok.", next: "sanctum" },
    ],
  },

  truth: {
    image: "truth.webp",
    text: "A tükördarabban a köd mögötti valóság villan fel: egy rácsos ajtó, és mögötte tiszta égbolt. A kijárat létezik. De az ajtó mellett jelek izzanak: a kapu csak akkor nyílik, ha valaki lezárja a ködöt… belülről.",
    choices: [
      { id: "truth_seal", text: "Lezárom a kaput, bármi áron.", next: "seal_end" },
      { id: "truth_escape", text: "Kockáztatok és a rácsos ajtót keresem.", next: "escape_end" },
    ],
  },

  ritual: {
    image: "ritual.webp",
    text: "Amint belépsz a körbe, a kövek felizzanak. A levegő megáll, mintha visszatartaná a világ a lélegzetét. A medál (ha nálad van) vibrálni kezd, és egy hang felmorajlik a szentélyben: „Válassz: áldozat vagy menekülés.”",
    choices: [
      { id: "ritual_sacrifice", text: "Áldozatot hozok: itt maradok, hogy lezárjam a ködöt.", next: "seal_end" },
      { id: "ritual_break", text: "Megpróbálom áttörni a kört.", next: "death_circle" },
      { id: "ritual_medal", text: "A Régi medált a kör közepébe teszem.", next: "seal_end", requiresItem: "Régi medál" },
    ],
  },

  // --- ENDINGS ---
  seal_end: {
    image: "seal_end.webp",
    text: "A köd összerándul, mintha fájna neki. A jelek kialszanak, a szentély megremeg, és a monolitok között a levegő végre újra élni kezd. Érzed, hogy a kapu záródik — és vele együtt valami benned is elcsendesül. A köd többé nem követ senkit. Te viszont… nem térsz vissza ugyanolyannak.",
    choices: [
      { id: "seal_restart", text: "Újrakezdem a történetet.", next: "start" },
    ],
  },

  escape_end: {
    image: "escape_end.webp",
    text: "A rácsos ajtó valóban ott van. Futni kezdesz, és a köd üvölt mögötted, mintha saját hangja lenne. Az utolsó pillanatban átveted magad a résen. A levegő tiszta. A csillagok élesek. A világ… valódi. Menekültél. De a zsebedben ott maradt a medál súlya — és valami még mindig figyel.",
    choices: [
      { id: "escape_restart", text: "Újrakezdem és más döntéseket hozok.", next: "start" },
    ],
  },

  curse_end: {
    image: "curse_end.webp",
    text: "Átadod a medált. Az árnyalak nem köszön, nem hálálkodik — csak elfogadja, mintha mindig is ez lett volna a rend. A köd visszahúzódik, és te szabadnak érzed magad… egészen addig, amíg rá nem jössz, hogy a saját árnyékod nem követ többé. A köd elengedett. De valamit elvitt.",
    choices: [
      { id: "curse_restart", text: "Újrakezdem.", next: "start" },
    ],
  },

  // --- DEATHS ---
  death_grab: {
    image: "death_grab.webp",
    text: "Benézel a résbe — és a sötét megmozdul. Ujjak fonódnak a csuklódra, hidegek és erősek. Egyetlen rántás, és a világ eltűnik egy mély, fekete csendben.",
    choices: [
      { id: "death_grab_restart", text: "Újrakezdem.", next: "start" },
    ],
  },

  death_shadow: {
    image: "death_shadow.webp",
    text: "Az árnyalak közelebb lép. Nem támad — csak elveszi a levegőt körülötted. Hiába kapálózol, a köd nem enged át több lélegzetet. A pánik nem a vég… csak az utolsó társad.",
    choices: [
      { id: "death_shadow_restart", text: "Újrakezdem.", next: "start" },
    ],
  },

  death_blades: {
    image: "death_blades.webp",
    text: "Előugrasz, de rosszul méred fel a helyzetet. A köpenyek alól pengék villannak. Egyetlen rossz mozdulat — és a köd vörösre színeződik körülötted. A világ halk lesz. Túl halk.",
    choices: [
      { id: "death_blades_restart", text: "Újrakezdem.", next: "start" },
    ],
  },

  death_ambush: {
    image: "death_ambush.webp",
    text: "Kiáltasz, de a hangodat elnyeli a köd. A kéz megszorít, a látásod beszűkül, és a sötét lassan, könyörtelenül elmerít, mintha sosem lett volna jogod kilépni belőle.",
    choices: [
      { id: "death_ambush_restart", text: "Újrakezdem.", next: "start" },
    ],
  },

  death_poison: {
    image: "death_poison.webp",
    text: "A szíved túl gyorsan ver, aztán hirtelen túl lassan. A világ elmosódik, a patak hangja távolodik. Az üvegcse nem a köd ellen volt — hanem neked. És a köd türelmesen kivárta, hogy működjön.",
    choices: [
      { id: "death_poison_restart", text: "Újrakezdem.", next: "start" },
    ],
  },

  death_depth: {
    image: "death_depth.webp",
    text: "Balra mész, és a talaj hirtelen eltűnik. Zuhansz, de nincs hang, nincs visszhang — csak a saját lélegzeted utolsó emléke. A sötét nem fogad be… elnyel.",
    choices: [
      { id: "death_depth_restart", text: "Újrakezdem.", next: "start" },
    ],
  },

  death_fog: {
    image: "death_fog.webp",
    text: "Nem mozdulsz. A köd csendben rád talál. Nem siet, nem harcol. Csak betölt mindent, amíg már te sem vagy biztos benne, hogy valaha léteztél.",
    choices: [
      { id: "death_fog_restart", text: "Újrakezdem.", next: "start" },
    ],
  },

  death_well: {
    image: "death_well.webp",
    text: "Megérinted a fekete ködöt. A felszín nem folyadék — ajtó. És az ajtó túloldalán valami éhes. A kezed nem jön vissza. A tested sem.",
    choices: [
      { id: "death_well_restart", text: "Újrakezdem.", next: "start" },
    ],
  },

  death_circle: {
    image: "death_circle.webp",
    text: "Áttörnéd a kört, de a kövek felizzanak, és a tested megáll. A szentély eldönti helyetted: te leszel a zár. A köd utoljára megsimít — és a csend rád csukódik.",
    choices: [
      { id: "death_circle_restart", text: "Újrakezdem.", next: "start" },
    ],
  },


  
};
