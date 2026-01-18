export const scenes = {
  start: {
    image: "csoki_start.webp",
    text: "Csoki, a pici yorkie, ma reggel extra kíváncsi hangulatban ébredt. A napsütés becsúszik az ablakon, és a farka máris pörög, mint egy kis propeller. A kert felől valami finom illat érkezik…",
    choices: [
      { id: "start_garden", text: "Kiszaladok a kertbe megnézni!", next: "garden" },
      { id: "start_bowl", text: "Először megnézem a tálkám." , next: "bowl" },
    ],
  },

  bowl: {
    image: "csoki_bowl.webp",
    text: "A tálkában pár ropogós falat vár rád, de mellette egy apró cetli hever: „Csoki, ma kaland nap van! Kövesd a piros szalagot!” A földön tényleg ott kanyarog egy piros szalag, mint egy útvonal.",
    choices: [
      { id: "bowl_follow", text: "Követem a piros szalagot.", next: "trail" },
      { id: "bowl_snack", text: "Bekapok egy falatot, aztán indulok.", next: "trail" },
    ],
  },

  garden: {
    image: "csoki_garden.webp",
    text: "A kertben egy pillangó repül el az orrod előtt, a fű tetején csillognak a reggeli cseppek. A bokor alatt egy kis sípolás hallatszik… mintha valaki segítséget kérne.",
    choices: [
      { id: "garden_help", text: "Odamegyek és megnézem, ki az.", next: "friend" },
      { id: "garden_run", text: "Előbb körbeszaladok örömömben!", next: "trail" },
    ],
  },

  friend: {
    image: "csoki_friend.webp",
    text: "A bokor alatt egy pici sünike gubbaszt. A tüskéi között egy levél akadt meg, és nem meri megmozdítani. Rád néz, és nagyon halkan szuszog: „Szia… segítesz?”",
    choices: [
      { id: "friend_gentle", text: "Nagyon óvatosan leszedem róla a levelet.", next: "trail", addItem: "Sünike barát" },
      { id: "friend_bark", text: "Ugatok egy bátorítót, hogy ne féljen.", next: "trail", addItem: "Sünike barát" },
    ],
  },

  trail: {
    image: "csoki_trail.webp",
    text: "A piros szalag a kertkapun túl egy kis ösvényhez vezet. Az úton puha szirmok hevernek, mintha valaki direkt díszítette volna fel neked. A távolban egy nagy fa alatt valami csillog.",
    choices: [
      { id: "trail_tree", text: "Megyek a csillogás felé a nagy fához.", next: "tree" },
      { id: "trail_sniff", text: "Minden egyes szirmot megszimatolok közben.", next: "tree" },
    ],
  },

  tree: {
    image: "csoki_tree.webp",
    text: "A nagy fa alatt egy kis kosár vár. Mellette egy kék masni és egy üzenet: „A legjobb kaland a barátokkal az igazi.” A kosárban egy puha játékcsont és egy apró nyakörv-biléta: „Csoki, a Bátor.”",
    choices: [
      { id: "tree_take", text: "Felveszem a játékcsontot.", next: "picnic", addItem: "Játékcsont" },
      { id: "tree_proud", text: "Büszkén kihúzom magam (nagyon kis kutya módra).", next: "picnic" },
    ],
  },

  picnic: {
    image: "csoki_picnic.webp",
    text: "A fa mögül előbújnak a barátaid: egy cica, egy nyuszi, és ha segítettél neki, a sünike is ott toporog. Egy mini piknik van terítve: víz, falatkák, és egy puha takaró. Mindenki rád mosolyog.",
    choices: [
      { id: "picnic_play", text: "Játék! Dobom a játékcsontot.", next: "ending_play" },
      { id: "picnic_cuddle", text: "Összebújok velük a takarón.", next: "ending_cuddle" },
    ],
  },

  ending_play: {
    image: "csoki_ending_play.webp",
    text: "Csoki ma igazi bajnok volt! Futottál, szimatoltál, segítettél, és a végén egy hatalmasat játszottál a barátaiddal. A nap végén fáradtan, boldogan huppansz le, és csak annyit gondolsz: „Holnap is kaland!”",
    choices: [
      { id: "ending_play_restart", text: "Újrakezdem a történetet.", next: "start" },
    ],
  },

  ending_cuddle: {
    image: "csoki_ending_cuddle.webp",
    text: "Csoki ma is a legaranyosabb hős volt. Nem kellett nagy varázslat, csak egy kedves szív és egy pici yorkie-bátorság. Összebújva hallgatjátok a levelek susogását, és a világ pont úgy jó, ahogy van.",
    choices: [
      { id: "ending_cuddle_restart", text: "Újrakezdem a történetet.", next: "start" },
    ],
  },
};
