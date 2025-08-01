export const navbarRoutes = [
  { name: "navbar.main", link: "/" },
  { name: "navbar.about", link: "/about" },
  { name: "navbar.products", link: "/products" },
  { name: "navbar.contact", link: "/contact" },
];
export const fishCategories = [
  {
    id: "frozen_fish",
    image: "/img/fish/sardine.png",
    name: {
      en: "Frozen Fish",
      fr: "Poisson Surgelé",
      es: "Pescado Congelado",
    },
  },
  {
    id: "fresh_fish",
    image: "/img/fish/sepia.png",
    name: {
      en: "Fresh Fish",
      fr: "Poisson Frais",
      es: "Pescado Fresco",
    },
  },
  {
    id: "pelagic",
    image: "/img/fish/tuna.png",
    name: {
      en: "Pelagic Fish",
      fr: "Poisson Pélagique",
      es: "Pescado Pelágico",
    },
  },
  {
    id: "demersal",
    image: "/img/fish/sole.png",
    name: {
      en: "Demersal Fish",
      fr: "Poisson Démersal",
      es: "Pescado Demersal",
    },
  },
];
export const products = {
  frozen_fish: [
    {
      id: "sardines",
      image: "/img/fish/sardine.png",
      name: { en: "Sardines", fr: "Sardines", es: "Sardinas" },
      desc: { en: "Sardines", fr: "Sardines", es: "Sardinas" },
      scientifcName: "",
    },
    {
      id: "mackerel",
      image: "/img/fish/maquerau.png",
      name: { en: "Mackerel", fr: "Maquereau", es: "Caballa" },
    },
    {
      id: "tuna",
      image: "/img/fish/tuna.png",
      name: { en: "Tuna", fr: "Thon", es: "Atún" },
    },
    {
      id: "herring",
      image: "/img/fish/herring.png",
      name: { en: "Herring", fr: "Hareng", es: "Arenque" },
    },
    {
      id: "anchovies",
      image: "/img/fish/anchovies.png",
      name: { en: "Anchovies", fr: "Anchois", es: "Anchoas" },
    },
  ],
  fresh_fish: [
    {
      id: "sea_bass",
      image: "/img/fish/sea_bass.png",
      name: { en: "Sea Bass", fr: "Bar", es: "Lubina" },
    },
    {
      id: "gilt_head_bream",
      image: "/img/fish/gilt_head_bream.png",
      name: { en: "Gilt-head Bream", fr: "Dorade", es: "Dorada" },
    },
    {
      id: "rainbow_trout",
      image: "/img/fish/rainbow_trout.png",
      name: {
        en: "Rainbow Trout",
        fr: "Truite arc-en-ciel",
        es: "Trucha arcoíris",
      },
    },
    {
      id: "carp",
      image: "/img/fish/carp.png",
      name: { en: "Carp", fr: "Carpe", es: "Carpa" },
    },
  ],
  pelagic: [
    {
      id: "anchovies",
      image: "/img/fish/anchovies.png",
      name: { en: "Anchovies", fr: "Anchois", es: "Anchoas" },
    },
    {
      id: "herring",
      image: "/img/fish/herring.png",
      name: { en: "Herring", fr: "Hareng", es: "Arenque" },
    },
    {
      id: "sardine",
      image: "/img/fish/sardine.png",
      name: { en: "Sardine", fr: "Sardine", es: "Sardina" },
    },
    {
      id: "mackerel",
      image: "/img/fish/mackerel.png",
      name: { en: "Mackerel", fr: "Maquereau", es: "Caballa" },
    },
  ],
  demersal: [
    {
      id: "ACEDIA",
      image: "/img/fish/ACEDIA.png",
      name: "ACEDIA",
      desc: {
        en: "Dicologlossa spp. are demersal fish species that live close to the seabed. They are known for their flattened bodies adapted for life near the ocean floor. These fish are commonly found in coastal waters and are valued for their mild flavor and firm texture.",
        fr: "Les espèces Dicologlossa spp. sont des poissons démersaux vivant près du fond marin. Ils sont reconnaissables à leur corps aplati, adapté à la vie au fond de l’océan. Ces poissons se trouvent généralement en eaux côtières et sont appréciés pour leur saveur douce et leur texture ferme.",
        es: "Las especies Dicologlossa spp. son peces demersales que viven cerca del fondo marino. Se caracterizan por sus cuerpos aplanados adaptados para la vida en el lecho oceánico. Estos peces se encuentran comúnmente en aguas costeras y son valorados por su sabor suave y textura firme.",
      },
      scientifcName: "Dicologlossa spp",
    },
    {
      id: "LENGUADO_RUBIO",
      image: "/img/fish/LENGUADO RUBIO.png",
      name: "LENGUADO RUBIO",
      desc: {
        en: "Solea senegalensis is a demersal flatfish species known as the Senegalese sole. It lives on sandy or muddy seabeds in shallow coastal waters. It is highly valued for its delicate flesh and is commonly used in Mediterranean cuisine.",
        fr: "Solea senegalensis est une espèce de poisson plat démersal, connue sous le nom de sole sénégalaise. Elle vit sur les fonds sablonneux ou vaseux dans les eaux côtières peu profondes. Elle est très appréciée pour sa chair délicate et utilisée dans la cuisine méditerranéenne.",
        es: "Solea senegalensis es una especie de pez plano demersal conocida como la lenguado senegalés. Vive sobre fondos arenosos o fangosos en aguas costeras poco profundas. Es muy apreciada por su carne delicada y se utiliza comúnmente en la cocina mediterránea.",
      },
      scientifcName: "Solea senegalensis",
    },
     {
      id: "RODABALLO",
      image: "/img/fish/RODABALLO.png",
      name: "RODABALLO",
      desc: {
        en: "Solea senegalensis is a demersal flatfish species known as the Senegalese sole. It lives on sandy or muddy seabeds in shallow coastal waters. It is highly valued for its delicate flesh and is commonly used in Mediterranean cuisine.",
        fr: "Solea senegalensis est une espèce de poisson plat démersal, connue sous le nom de sole sénégalaise. Elle vit sur les fonds sablonneux ou vaseux dans les eaux côtières peu profondes. Elle est très appréciée pour sa chair délicate et utilisée dans la cuisine méditerranéenne.",
        es: "Solea senegalensis es una especie de pez plano demersal conocida como la lenguado senegalés. Vive sobre fondos arenosos o fangosos en aguas costeras poco profundas. Es muy apreciada por su carne delicada y se utiliza comúnmente en la cocina mediterránea.",
      },
      scientifcName: "Solea senegalensis",
    },
    {
      id: "sole",
      image: "/img/fish/sole.png",
      name: { en: "Sole", fr: "Sole", es: "Lenguado" },
    },
    {
      id: "cod",
      image: "/img/fish/cod.png",
      name: { en: "Cod", fr: "Morue", es: "Bacalao" },
    },
    {
      id: "hake",
      image: "/img/fish/hake.png",
      name: { en: "Hake", fr: "Merlu", es: "Merluza" },
    },
    {
      id: "plaice",
      image: "/img/fish/plaice.png",
      name: { en: "Plaice", fr: "Plie", es: "Platija" },
    },
  ],
};
