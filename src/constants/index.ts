export const navbarRoutes = [
  { name: "navbar.main", link: "/" },
  { name: "navbar.about", link: "/about" },
  { name: "navbar.products", link: "/products" },
  { name: "navbar.contact", link: "#contact" },
];
export const fishCategories = [
  {
    id: "demersal",
    image: "/img/fish/SOLE.png",
    name: {
      en: "Demersal Fish",
      fr: "Poisson Démersal",
      es: "Pescado Demersal",
    },
  },
  {
    id: "pelagic",
    image: "/img/fish/PEZ_LEMON.png",
    name: {
      en: "Pelagic Fish",
      fr: "Poisson Pélagique",
      es: "Pescado Pelágico",
    },
  },
  {
    id: "cephalopod",
    image: "/img/fish/CALAMAR.png",
    name: {
      en: "Cephalopods",
      fr: "Céphalopodes",
      es: "Cefalópodos",
    },
  },
];
export const products = {
  cephalopod: [
    {
      id: "CALAMAR",
      image: "/img/fish/CALAMAR.png",
      name: "CALAMAR",
      desc: {
        en: "European squid (Loligo vulgaris) is a fast-swimming cephalopod with tender white meat, widely used in Mediterranean and Atlantic cuisines. Its delicate taste makes it ideal for grilling, frying, or stewi",
        fr: "Calmar européen (Loligo vulgaris) est un céphalopode rapide à la chair blanche et tendre, très prisé dans la cuisine méditerranéenne et atlantique. Son goût subtil le rend idéal pour la grillade, la friture ou le mijoté.",
        es: "Calamar europeo (Loligo vulgaris) es un cefalópodo de rápido nado con carne blanca y tierna, muy usado en la cocina mediterránea y atlántica. Su sabor delicado lo hace perfecto para asar, freír o guisar.",
      },
      scientifcName: "Loligo vulgaris",
    },
    {
      id: "PUNTILLA",
      image: "/img/fish/PUNTILLA.png",
      name: "PUNTILLA",
      desc: {
        en: "Alloteuthis media, known as the Middle squid, is a cephalopod found in the Mediterranean Sea and adjacent Atlantic waters. It is valued for its tender white meat and is commonly used in Mediterranean dishes.",
        fr: "Alloteuthis media, appelée calmar moyen, est un céphalopode présent en Méditerranée et dans l’Atlantique proche. Sa chair blanche tendre est appréciée dans la cuisine méditerranéenne.",
        es: "Alloteuthis media, conocida como calamar medio, es un cefalópodo del Mediterráneo y el Atlántico cercano. Su carne blanca y tierna es valorada en la gastronomía local.",
      },
      scientifcName: "Alloteuthis media",
    },
    {
      id: "SEPIOLA",
      image: "/img/fish/SEPIOLA.png",
      name: "SEPIOLA",
      desc: {
        en: "Sepia elegans, known as the Elegant cuttlefish, is a small cephalopod found in Mediterranean and nearby Atlantic waters. It is valued for its tender flesh and delicate flavor, commonly used in local cuisines.",
        fr: "Sepia elegans, appelée Seiche élégante, est un petit céphalopode présent en Méditerranée et dans l’Atlantique proche. Sa chair tendre et délicate est appréciée en cuisine locale.",
        es: "Sepia elegans, conocida como Sepia elegante, es un cefalópodo pequeño que habita el Mediterráneo y el Atlántico cercano. Su carne tierna y sabor delicado son valorados en la gastronomía regional.",
      },
      scientifcName: "Sepia elegans",
    },
    {
      id: "CHOCO",
      image: "/img/fish/CHOCO.png",
      name: "CHOCO",
      desc: {
        en: "Common cuttlefish (Sepia officinalis) is a cephalopod renowned for its soft texture, subtle flavor, and intelligent behavior. It inhabits coastal waters and is widely used in Mediterranean cuisine.",
        fr: "Seiche commune (Sepia officinalis) est un céphalopode apprécié pour sa chair tendre et son goût délicat. Présente dans les eaux côtières, elle est très utilisée dans la cuisine méditerranéenne.",
        es: "Sepia común (Sepia officinalis) es un cefalópodo muy valorado por su carne tierna y su sabor suave. Vive en aguas costeras y es popular en la cocina mediterránea.",
      },
      scientifcName: "Sepia officinalis",
    },
  ],
  pelagic: [
    {
      id: "PEZ_LEMON",
      image: "/img/fish/PEZ_LEMON.png",
      name: "PEZ LEMON",
      desc: {
        en: "Greater amberjack (Seriola dumerili) is a powerful pelagic fish prized for its firm, flavorful flesh. Found in open waters and near reefs, it’s popular in both commercial and sport fishing.",
        fr: "Sériole couronnée (Seriola dumerili) est un poisson pélagique de grande taille, apprécié pour sa chair ferme et savoureuse. On la trouve dans les eaux libres et près des récifs.",
        es: "Serviola (Seriola dumerili) es un pez pelágico grande y rápido, valorado por su carne firme y sabrosa. Habita aguas abiertas y zonas cercanas a arrecifes.",
      },
      scientifcName: "Seriola dumerili",
    },
    {
      id: "sardines",
      image: "/img/fish/SARDINE.png",
      name: "Sardines",
      desc: { en: "Sardines", fr: "Sardines", es: "Sardinas" },
      scientifcName: "",
    },
    ,
    {
      id: "ALMENDRITA",
      image: "/img/fish/ALMENDRITA.png",
      name: "ALMENDRITA",
      desc: {
        en: "Boops boops, commonly called Bogue, is a small pelagic fish found in Mediterranean and Atlantic coastal waters. It has a slender silver body and is popular for light frying and grilling.",
        fr: "Boops boops, appelé Bogue, est un petit poisson pélagique présent en Méditerranée et dans l’Atlantique. Il se distingue par son corps argenté et ses yeux en forme d’amande.",
        es: "Boops boops, conocido como Almendrita, es un pequeño pez pelágico del Mediterráneo y Atlántico. Destaca por su cuerpo plateado y ojos almendrados.",
      },
      scientifcName: "Boops boops",
    },

    {
      id: "F.SAN_PEDRO",
      image: "/img/fish/SAN_PEDRO.png",
      name: "F.SAN PEDRO",
      desc: {
        en: "Zenopsis conchifer, known as the Silvery John dory, is a demersal fish found in Mediterranean and nearby Atlantic waters. It is prized for its firm white flesh and delicate flavor.",
        fr: "Zenopsis conchifer, appelé Saint-Pierre argenté, est un poisson démersal présent en Méditerranée et dans l’Atlantique proche. Sa chair blanche ferme et délicate est très appréciée.",
        es: "Zenopsis conchifer, conocido como San Pedro plateado, es un pez demersal del Mediterráneo y Atlántico cercano. Su carne blanca firme y sabor delicado son valorados en la gastronomía regional.",
      },
      scientifcName: "Zenopsis conchifer",
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
      image: "/img/fish/LENGUADO_RUBIO.png",
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
        en: "Psetta maxima (Turbot) is a premium demersal flatfish valued for its delicate white flesh and rich flavor. Found in the Atlantic and Mediterranean, it's a top choice for gourmet seafood dishes.",
        fr: "Psetta maxima (Turbot) est un poisson plat démersal prisé pour sa chair blanche et savoureuse. Originaire de l’Atlantique et de la Méditerranée, il est très utilisé en cuisine gastronomique.",
        es: "Psetta maxima (Rodaballo) es un pez plano demersal valorado por su carne blanca y sabor delicado. Presente en el Atlántico y Mediterráneo, es ideal para la cocina gourmet.",
      },
      scientifcName: "Psetta maxima",
    },
    {
      id: "PLATOSA",
      image: "/img/fish/PLATOSA.png",
      name: "PLATOSA",
      desc: {
        en: "Scophthalmus spp. are demersal flatfish species found in the Atlantic and Mediterranean waters. Known for their mild flavor and firm white flesh, they are highly valued in high-end seafood cuisine.",
        fr: "Scophthalmus spp. sont des poissons plats démersaux présents dans l’Atlantique et la Méditerranée. Appréciés pour leur chair blanche ferme et leur goût doux, ils sont utilisés en cuisine raffinée.",
        es: "Scophthalmus spp. son peces planos demersales que habitan en el Atlántico y el Mediterráneo. Son valorados por su carne blanca firme y sabor suave, ideales para platos gourmet.",
      },
      scientifcName: "Scophthalmus spp",
    },
    {
      id: "ACEDIA",
      image: "/img/fish/ACEDIA.png",
      name: "ACEDIA",
      desc: {
        en: "Dicologlossa spp. are demersal flatfish species typically found on sandy seabeds in Atlantic and Mediterranean waters. They are appreciated for their tender white flesh and subtle flavor, making them ideal for refined seafood dishes.",
        fr: "Dicologlossa spp. sont des poissons plats démersaux vivant sur les fonds sableux de l’Atlantique et de la Méditerranée. Leur chair blanche tendre et leur goût délicat en font un choix prisé en cuisine fine.",
        es: "Dicologlossa spp. son peces planos demersales que habitan fondos arenosos del Atlántico y el Mediterráneo. Su carne blanca y tierna, junto con su sabor suave, los hace ideales para la cocina gourmet.",
      },
      scientifcName: "Dicologlossa spp",
    },
    {
      id: "LENGUARDO_NEGRO",
      image: "/img/fish/LENGUARDO_NEGRO.png",
      name: "LENGUARDO NEGRO",
      desc: {
        en: "Microchirus spp. are demersal flatfish commonly found in sandy or muddy bottoms of the Atlantic Ocean and Mediterranean Sea. Known for their delicate texture and mild flavor, they are suitable for a variety of seafood recipes.",
        fr: "Microchirus spp. sont des poissons plats démersaux vivant sur des fonds sableux ou vaseux de l’Atlantique et de la Méditerranée. Leur chair fine et leur goût doux en font un ingrédient apprécié en cuisine marine.",
        es: "Microchirus spp. son peces planos demersales que habitan fondos arenosos o fangosos del Atlántico y del Mediterráneo. Se valoran por su textura delicada y sabor suave, ideales para recetas de mariscos.",
      },
      scientifcName: "Microchirus spp",
    },
    {
      id: "BRECA",
      image: "/img/fish/BRECA.png",
      name: "BRECA",
      desc: {
        en: "Pagellus acarne, also known as Common Pandora, is a demersal fish found in the Mediterranean Sea and Eastern Atlantic. It is valued for its tender flesh and mild flavor, making it ideal for grilling or baking in Mediterranean cuisine.",
        fr: "Pagellus acarne, appelé également Pageot acarné, est un poisson démersal présent en Méditerranée et dans l’Atlantique Est. Sa chair tendre et son goût délicat en font un choix populaire pour les grillades ou les plats au four.",
        es: "Pagellus acarne, conocido como Besugo acarne, es un pez demersal que habita en el mar Mediterráneo y el Atlántico oriental. Se aprecia por su carne tierna y sabor suave, ideal para asados y recetas mediterráneas.",
      },
      scientifcName: "Pagellus acarne",
    },
    {
      id: "BESUGO",
      image: "/img/fish/BESUGO.png",
      name: "BESUGO",
      desc: {
        en: "Pagellus bogaraveo, known as Blackspot Seabream, is a demersal fish found in the Eastern Atlantic and Mediterranean Sea. Recognized by its red-pink body and black spot near the head, it’s appreciated for its firm, tasty flesh — perfect for grilling and traditional dishes.",
        fr: "Pagellus bogaraveo, appelé Pageot rose, est un poisson démersal présent dans l’Atlantique Est et la Méditerranée. Reconnaissable à sa couleur rosée et sa tache noire près de la tête, il est prisé pour sa chair ferme et savoureuse, idéale pour les grillades.",
        es: "Pagellus bogaraveo, conocido como Besugo, es un pez demersal del Atlántico oriental y el mar Mediterráneo. Se distingue por su cuerpo rosado y una mancha negra cerca de la cabeza. Su carne firme y sabrosa lo convierte en una elección ideal para asar y recetas tradicionales.",
      },
      scientifcName: "Pagellus bogaraveo",
    },
    {
      id: "DORADA",
      image: "/img/fish/DORADA.png",
      name: "DORADA",
      desc: {
        en: "Sparus aurata, known as Gilthead Seabream, is a demersal fish commonly found in the Mediterranean Sea and Eastern Atlantic. It’s prized for its tender white flesh and mild, slightly sweet flavor, making it a favorite in Mediterranean cuisine and healthy seafood dishes.",
        fr: "Sparus aurata, appelé Dorade royale, est un poisson démersal très répandu en Méditerranée et dans l’Atlantique Est. Il est reconnu pour sa chair blanche tendre et son goût doux légèrement sucré, très apprécié en cuisine méditerranéenne.",
        es: "Sparus aurata, conocido como Dorada, es un pez demersal muy común en el mar Mediterráneo y el Atlántico oriental. Su carne blanca y tierna, con un sabor suave y ligeramente dulce, lo hace muy popular en la cocina mediterránea.",
      },
      scientifcName: "Sparus aurata",
    },
    {
      id: "SAMA",
      image: "/img/fish/SAMA.png",
      name: "SAMA",
      desc: {
        en: "Dentex gibbosus, also called Large-eye Dentex, is a demersal predator fish found in the Mediterranean Sea and Eastern Atlantic. With its firm flesh and strong flavor, it is ideal for grilling, baking, or seafood stews.",
        fr: "Dentex gibbosus, aussi appelé Denté bossu, est un poisson prédateur démersal présent en Méditerranée et dans l’Atlantique Est. Sa chair ferme et sa saveur marquée en font un excellent choix pour les grillades, les cuissons au four ou les plats mijotés.",
        es: "Dentex gibbosus, conocido como Dentón ojón, es un pez depredador demersal del Mediterráneo y del Atlántico oriental. Su carne firme y sabor intenso lo hacen perfecto para asar, hornear o preparar guisos marinos.",
      },
      scientifcName: "Dentex gibbosus",
    },
    {
      id: "PARGO",
      image: "/img/fish/PARGO.png",
      name: "PARGO",
      desc: {
        en: "Pagrus pagrus, known as Red Seabream, is a demersal fish native to the Eastern Atlantic and Mediterranean Sea. It’s appreciated for its firm white flesh and rich flavor, making it a popular choice for grilling and seafood dishes.",
        fr: "Pagrus pagrus, appelé Pageot commun, est un poisson démersal originaire de l’Atlantique Est et de la Méditerranée. Sa chair blanche ferme et sa saveur prononcée en font un poisson très apprécié pour les grillades et plats de fruits de mer.",
        es: "Pagrus pagrus, conocido como Pargo rosado, es un pez demersal del Atlántico oriental y del mar Mediterráneo. Su carne blanca firme y su sabor intenso lo hacen ideal para asar y preparar platos marinos.",
      },
      scientifcName: "Pagrus pagrus",
    },
    {
      id: "HURTA",
      image: "/img/fish/HURTA.png",
      name: "HURTA",
      desc: {
        en: "Pagrus auriga, also known as Redband Seabream, is a demersal fish found in the Eastern Atlantic and Mediterranean waters. Recognized by the red band near its gill, it offers firm white flesh and a refined flavor, perfect for grilled or baked dishes.",
        fr: "Pagrus auriga, appelé Pageot à bande, est un poisson démersal présent dans l’Atlantique Est et la Méditerranée. Reconnaissable à la bande rouge près de ses ouïes, il possède une chair blanche ferme et un goût raffiné, idéal pour les grillades ou les cuissons au four",
        es: "Pagrus auriga, conocido como Pargo listado, es un pez demersal que habita en el Atlántico oriental y el mar Mediterráneo. Identificable por su banda roja cerca de las agallas, ofrece carne blanca firme y sabor delicado, ideal para asar u hornear.",
      },
      scientifcName: "Pagrus auriga",
    },
    {
      id: "SARGO",
      image: "/img/fish/SARGO.png",
      name: "SARGO",
      desc: {
        en: "Diplodus sargus, commonly called White Seabream, is a demersal fish found in the Mediterranean Sea and Eastern Atlantic. Known for its firm texture and mild flavor, it is popular in Mediterranean seafood dishes.",
        fr: "Diplodus sargus, appelé Sargo commun, est un poisson démersal présent en Méditerranée et dans l’Atlantique Est. Sa chair ferme et son goût doux en font un poisson apprécié dans la cuisine méditerranéenne.",
        es: "Diplodus sargus, conocido como Sargo blanco, es un pez demersal del mar Mediterráneo y del Atlántico oriental. Su carne firme y sabor suave lo hacen popular en la cocina mediterránea.",
      },
      scientifcName: "Diplodus sargus",
    },
    {
      id: "RAPE",
      image: "/img/fish/RAPE.png",
      name: "RAPE",
      desc: {
        en: "Lophius budegassa, known as the Blackbellied Angler, is a demersal predator fish found in the Mediterranean Sea and Eastern Atlantic. It is prized for its firm, white flesh and unique appearance, often used in gourmet seafood dishes.",
        fr: "Lophius budegassa, appelé Baudroie noire, est un poisson prédateur démersal présent en Méditerranée et dans l’Atlantique Est. Sa chair blanche ferme et son aspect particulier en font un choix apprécié en cuisine gastronomique.",
        es: "Lophius budegassa, conocido como Rape negra, es un pez depredador demersal del Mediterráneo y Atlántico oriental. Se valora por su carne blanca firme y su apariencia singular, muy utilizado en la cocina gourmet.",
      },
      scientifcName: "Lophius budegassa",
    },
    {
      id: "GALLO",
      image: "/img/fish/GALLO.png",
      name: "GALLO",
      desc: {
        en: "Zeus faber, commonly called John Dory, is a demersal fish found in the Mediterranean Sea and Eastern Atlantic. Known for its distinctive flat body and mild, firm flesh, it is popular in fine dining and seafood cuisine.",
        fr: "Zeus faber, appelé Saint-Pierre, est un poisson démersal présent en Méditerranée et dans l’Atlantique Est. Reconnu pour son corps plat distinctif et sa chair ferme et délicate, il est prisé en gastronomie.",
        es: "Zeus faber, conocido como San Pedro, es un pez demersal del mar Mediterráneo y el Atlántico oriental. Se caracteriza por su cuerpo plano distintivo y su carne firme y suave, muy valorado en la alta cocina.",
      },
      scientifcName: "Zeus faber",
    },
    {
      id: "RASCACIO",
      image: "/img/fish/RASCACIO.png",
      name: "RASCACIO",
      desc: {
        en: "Scorpaena scrofa, known as the Large Red Scorpionfish, is a demersal fish found in the Mediterranean Sea and Eastern Atlantic. Recognized for its reddish color and venomous spines, it has firm flesh prized in Mediterranean cuisine.",
        fr: "Scorpaena scrofa, appelée Rascasse rouge, est un poisson démersal présent en Méditerranée et dans l’Atlantique Est. Reconnue pour sa couleur rouge et ses épines venimeuses, sa chair ferme est appréciée en cuisine méditerranéenne.",
        es: "Scorpaena scrofa, conocido como Rascacio rojo, es un pez demersal del Mediterráneo y Atlántico oriental. Destacado por su color rojizo y espinas venenosas, su carne firme es valorada en la cocina mediterránea.",
      },
      scientifcName: "Scorpaena scrofa",
    },
    {
      id: "MERO_BLANCO",
      image: "/img/fish/MERO_BLANCO.png",
      name: "MERO BLANCO",
      desc: {
        en: "Epinephelus aeneus, known as the Honeycomb Grouper, is a demersal fish found in the Mediterranean Sea and Eastern Atlantic. It features firm flesh with a mild flavor and is highly prized in seafood cuisine.",
        fr: "Epinephelus aeneus, appelé Mérou bronze, est un poisson démersal présent en Méditerranée et dans l’Atlantique Est. Il possède une chair ferme au goût doux, très apprécié en gastronomie marine.",
        es: "Epinephelus aeneus, conocido como Mero bronce, es un pez demersal del Mediterráneo y Atlántico oriental. Tiene carne firme y sabor suave, muy valorado en la cocina de mariscos.",
      },
      scientifcName: "Epinephelus aeneus",
    },
    {
      id: "MERO_AMARILLO",
      image: "/img/fish/MERO_AMARILLO.png",
      name: "MERO AMARILLO",
      desc: {
        en: "Epinephelus marginatus, commonly known as the Dusky Grouper, is a large demersal fish inhabiting rocky coastal areas in the Mediterranean and Atlantic Ocean. It is highly valued for its firm texture, delicate flavor, and significance in marine biodiversity.",
        fr: "Epinephelus marginatus, appelé Mérou brun, est un gros poisson démersal vivant dans les zones rocheuses côtières de la Méditerranée et de l’Atlantique. Il est très recherché pour sa chair ferme, sa saveur délicate et son rôle écologique.",
        es: "Epinephelus marginatus, conocido como Mero moreno, es un pez demersal grande que habita en zonas rocosas del Mediterráneo y del Atlántico. Su carne firme y su sabor delicado lo hacen muy apreciado, además de su importancia ecológica.",
      },
      scientifcName: "Epinephelus marginatus",
    },
    {
      id: "BERYX",
      image: "/img/fish/BERYX.png",
      name: "BERYX",
      desc: {
        en: "Beryx decadactylus, commonly known as the Alfonsino, is a deep-sea demersal species characterized by its bright red color and excellent flesh quality. Found in deep Atlantic and Mediterranean waters, it is prized for its sweet, firm meat and is often used in gourmet cuisine.",
        fr: "Beryx decadactylus, ou Beryx long, est un poisson démersal des grandes profondeurs, reconnu pour sa couleur rouge vif et sa chair de qualité supérieure. Présent dans les eaux profondes de l’Atlantique et de la Méditerranée, il est très apprécié en gastronomie.",
        es: "Beryx decadactylus, conocido como Bericio rojo, es un pez demersal de aguas profundas, famoso por su color rojo brillante y su carne sabrosa. Habita en aguas profundas del Atlántico y el Mediterráneo, siendo muy valorado en la alta cocina.",
      },
      scientifcName: "Beryx decadactylus",
    },
    {
      id: "POLLO",
      image: "/img/fish/POLLO.png",
      name: "POLLO",
      desc: {
        en: "Helicolenus dactylopterus, commonly known as the Blackbelly rosefish, is a deep-water demersal fish found in the Atlantic Ocean and the Mediterranean Sea. It is recognized for its firm texture and is often used in stews and oven-baked recipes.",
        fr: "Helicolenus dactylopterus, aussi appelé Rascasse noire, est un poisson démersal des eaux profondes de l’Atlantique et de la Méditerranée. Il est apprécié pour sa chair ferme, idéale pour les plats mijotés ou au four.",
        es: "Helicolenus dactylopterus, conocido como Gallineta, es un pez demersal de aguas profundas, común en el Atlántico y el Mediterráneo. Tiene una textura firme y es muy utilizado en guisos y al horno.",
      },
      scientifcName: "Helicolenus dactylopterus",
    },
    {
      id: "CORVINA",
      image: "/img/fish/CORVINA.png",
      name: "CORVINA",
      desc: {
        en: "Argyrosomus regius, known as the Meagre, is a large demersal fish found in the Mediterranean and Eastern Atlantic waters. With a delicate, flaky texture and mild flavor, it is highly prized in gastronomy and aquaculture.",
        fr: "Argyrosomus regius, appelé Maigre, est un grand poisson démersal vivant dans les eaux méditerranéennes et de l’Atlantique Est. Sa chair tendre et savoureuse en fait un poisson très recherché en gastronomie et aquaculture.",
        es: "Argyrosomus regius, conocido como Corvina, es un pez demersal grande que habita en el Mediterráneo y el Atlántico oriental. Su carne blanca, suave y sabrosa lo hace muy apreciado tanto en la cocina como en la acuicultura.",
      },
      scientifcName: "Argyrosomus regius",
    },
    {
      id: "BURRO",
      image: "/img/fish/BURRO.png",
      name: "BURRO",
      desc: {
        en: "Plectorhinchus mediterraneus, commonly known as the Rubberlip grunt, is a demersal fish inhabiting the Mediterranean Sea and adjacent Atlantic waters. It has a firm white flesh and is popular in traditional Mediterranean cuisine.",
        fr: "Plectorhinchus mediterraneus, appelé Grondin à lèvres épaisses, est un poisson démersal que l'on trouve dans la Méditerranée et l'Atlantique proche. Sa chair blanche et ferme est appréciée dans la cuisine méditerranéenne.",
        es: "Plectorhinchus mediterraneus, conocido como Roncador mediterráneo, es un pez demersal del Mediterráneo y del Atlántico oriental. Su carne blanca y firme es muy valorada en la cocina local.",
      },
      scientifcName: "Plectorhinchus mediterraneus",
    },
    {
      id: "CHERNA",
      image: "/img/fish/CHERNA.png",
      name: "CHERNA",
      desc: {
        en: "Polyprion americanus, commonly known as the Atlantic wreckfish, is a large demersal fish inhabiting deep rocky waters of the Atlantic Ocean. It has a firm, mild-flavored white flesh, ideal for grilling or baking.",
        fr: "Polyprion americanus, ou Mérou de l'Atlantique, est un gros poisson démersal vivant dans les fonds rocheux de l'océan Atlantique. Sa chair blanche, ferme et savoureuse, est très prisée en cuisine.",
        es: "Polyprion americanus, conocido como Cherna americana, es un pez demersal de gran tamaño que habita en aguas profundas y rocosas del Atlántico. Su carne blanca y firme es ideal para platos asados o al horno.",
      },
      scientifcName: "Polyprion americanus",
    },
    {
      id: "ARAÑA",
      image: "/img/fish/ARAÑA.png",
      name: "ARAÑA",
      desc: {
        en: "Greater weever (Trachinus draco) is a venomous demersal fish with a slender body and sharp dorsal spines. Found in shallow sandy coastal waters, it has delicate, tasty flesh but must be handled with care.",
        fr: "Grande vive (Trachinus draco), appelée 'Araignée de mer' ou 'Araña' dans certains pays, est un poisson démersal venimeux. Sa chair est fine et délicieuse, bien qu'il faille se méfier de ses épines dorsales.",
        es: "Araña (Trachinus draco) es un pez demersal venenoso muy común en el Mediterráneo. Tiene espinas dorsales peligrosas, pero su carne es fina y apreciada en la gastronomía local.",
      },
      scientifcName: "Trachinus draco",
    },

    {
      id: "MERO_DENTON",
      image: "/img/fish/MERO_DENTON.png",
      name: "MERO DENTON",
      desc: {
        en: "Epinephelus caninus, known as the Dogtooth Grouper, is a large demersal fish found in deep waters of the Mediterranean Sea and Atlantic Ocean. Prized for its firm texture and rich flavor, it is a sought-after species in sport and commercial fishing.",
        fr: "Epinephelus caninus, appelé Mérou canin, est un gros poisson démersal vivant dans les eaux profondes de la Méditerranée et de l’Atlantique. Sa chair ferme et savoureuse est très appréciée en pêche sportive et commerciale.",
        es: "Epinephelus caninus, conocido como Mero canino, es un pez demersal grande que habita en aguas profundas del Mediterráneo y Atlántico. Su carne firme y sabor intenso lo hacen muy valorado en pesca deportiva y comercial.",
      },
      scientifcName: "Epinephelus caninus",
    },
    {
      id: "MERO_ABADEJO",
      image: "/img/fish/MERO_ABADEJO.png",
      name: "MERO ABADEJO",
      desc: {
        en: "Epinephelus costae, known as the Goldblotch Grouper, is a demersal fish inhabiting rocky bottoms of the Mediterranean Sea and adjacent Atlantic waters. It is prized for its firm, flavorful flesh and distinctive golden blotches.",
        fr: "Epinephelus costae, appelé Mérou doré, est un poisson démersal vivant sur les fonds rocheux de la Méditerranée et de l’Atlantique proche. Sa chair ferme et savoureuse, marquée de taches dorées, est très appréciée.",
        es: "Epinephelus costae, conocido como Mero dorado, es un pez demersal que habita fondos rocosos del Mediterráneo y el Atlántico adyacente. Su carne firme y sabrosa con manchas doradas lo hacen muy valorado.",
      },
      scientifcName: "Epinephelus costae",
    },
    {
      id: "HERRERA",
      image: "/img/fish/HERRERA.png",
      name: "HERRERA",
      desc: {
        en: "Lithognathus mormyrus, known as the Striped seabream, is a demersal fish found in Mediterranean and nearby Atlantic coastal waters. It has a firm texture and a mild, sweet flavor, popular in local cuisines.",
        fr: "Lithognathus mormyrus, appelé Sargo rayado, est un poisson démersal vivant en Méditerranée et dans l’Atlantique proche des côtes. Sa chair ferme et douce est très appréciée en cuisine locale.",
        es: "Lithognathus mormyrus, conocido como Sargo listado, es un pez demersal del Mediterráneo y Atlántico cercano. Su carne firme y sabor suave es valorada en la gastronomía regional.",
      },
      scientifcName: "Lithognathus mormyrus",
    },
    {
      id: "COLA",
      image: "/img/fish/COLA.png",
      name: "COLA",
      desc: {
        en: "Merluccius merluccius, known as the European hake, is a widely distributed demersal fish in the Mediterranean Sea and Eastern Atlantic. It has a delicate, white, flaky flesh and is popular in many European cuisines.",
        fr: "Merluccius merluccius, appelé Merlu, est un poisson démersal largement présent en Méditerranée et dans l’Atlantique Est. Sa chair blanche délicate est très appréciée en cuisine européenne.",
        es: "Merluccius merluccius, conocido como Merluza, es un pez demersal común en el Mediterráneo y Atlántico oriental. Su carne blanca y delicada es popular en muchas cocinas europeas.",
      },
      scientifcName: "Merluccius merluccius",
    },
    {
      id: "CAZON",
      image: "/img/fish/CAZON.png",
      name: "CAZON",
      desc: {
        en: "Mustelus mustelus, known as the Common smoothhound, is a demersal shark species found in Mediterranean and nearby Atlantic waters. It has a mild flavor and firm texture, commonly used in regional seafood dishes.",
        fr: "Mustelus mustelus, appelé Musette, est une espèce de requin démersal présente en Méditerranée et dans l’Atlantique proche. Sa chair ferme au goût doux est souvent utilisée en cuisine locale.",
        es: "Mustelus mustelus, conocido como Tiburón pintarroja, es una especie de tiburón demersal que habita en el Mediterráneo y Atlántico cercano. Su carne firme y sabor suave es muy apreciada.",
      },
      scientifcName: "Mustelus mustelus",
    },
    {
      id: "SALMONETE",
      image: "/img/fish/SALMONETE.png",
      name: "SALMONETE",
      desc: {
        en: "Mullus surmuletus, known as the Red mullet, is a demersal fish found in the Mediterranean Sea and nearby Atlantic waters. It is prized for its delicate flavor and tender, flaky flesh, widely used in Mediterranean cuisine.",
        fr: "Mullus surmuletus, appelé Rouget barbet, est un poisson démersal vivant en Méditerranée et dans l’Atlantique proche. Sa chair tendre et son goût délicat sont très appréciés en cuisine méditerranéenne.",
        es: "Mullus surmuletus, conocido como Salmonete, es un pez demersal del Mediterráneo y Atlántico cercano. Su carne tierna y sabor delicado son muy valorados en la gastronomía mediterránea.",
      },
      scientifcName: "Mullus surmuletus",
    },
    {
      id: "BRECA",
      image: "/img/fish/BRECA.png",
      name: "BRECA",
      desc: {
        en: "Pagellus erythrinus, known as the Common pandora, is a demersal fish found in Mediterranean and nearby Atlantic waters. It has a firm texture and delicate flavor, popular in local seafood dishes.",
        fr: "Pagellus erythrinus, appelé Pageot commun, est un poisson démersal vivant en Méditerranée et dans l’Atlantique proche. Sa chair ferme et son goût délicat sont très appréciés en cuisine locale.",
        es: "Pagellus erythrinus, conocido como Pagel común, es un pez demersal del Mediterráneo y Atlántico cercano. Su carne firme y sabor delicado son valorados en la gastronomía regional.",
      },
      scientifcName: "Pagellus erythrinus",
    },
    {
      id: "ZAPATA",
      image: "/img/fish/ZAPATA.png",
      name: "ZAPATA",
      desc: {
        en: "Pagrus caeruleostictus, known as the Blue-spotted seabream, is a demersal fish found in the Mediterranean and nearby Atlantic waters. It is recognized by its firm flesh and distinctive blue spots, prized in local culinary traditions.",
        fr: "Pagrus caeruleostictus, appelé Daurade tachetée bleue, est un poisson démersal présent en Méditerranée et dans l’Atlantique proche. Sa chair ferme et ses taches bleues distinctives sont très appréciées en cuisine locale.",
        es: "Pagrus caeruleostictus, conocido como Besugo azul, es un pez demersal del Mediterráneo y Atlántico cercano. Su carne firme y sus manchas azules distintivas son valoradas en la gastronomía regional.",
      },
      scientifcName: "Pagrus caeruleostictus",
    },
    {
      id: "ARMADIO",
      image: "/img/fish/ARMADIO.png",
      name: "ARMADIO",
      desc: {
        en: "Peristedion cataphractum, known as the Armored searobin, is a demersal fish characterized by its bony armored plates. Found in the Mediterranean and nearby Atlantic waters, it has firm white flesh and a mild flavor.",
        fr: "Peristedion cataphractum, appelé Poisson-couronne cuirassé, est un poisson démersal reconnaissable à ses plaques osseuses armurées. Présent en Méditerranée et dans l’Atlantique proche, sa chair blanche est ferme et délicate.",
        es: "Peristedion cataphractum, conocido como Gallineta acorazada, es un pez demersal caracterizado por sus placas óseas armadas. Habita el Mediterráneo y el Atlántico cercano, con carne blanca firme y sabor suave.",
      },
      scientifcName: "Peristedion cataphractum",
    },
    {
      id: "MOSTELLE",
      image: "/img/fish/MOSTELLE.png",
      name: "MOSTELLE",
      desc: {
        en: "Phycis phycis, known as the Forkbeard, is a demersal fish commonly found in the Mediterranean Sea and nearby Atlantic waters. It has firm white flesh with a mild flavor, popular in local seafood dishes.",
        fr: "Phycis phycis, appelé Phycis commun, est un poisson démersal fréquent en Méditerranée et dans l’Atlantique proche. Sa chair blanche ferme au goût doux est appréciée en cuisine locale.",
        es: "Phycis phycis, conocido como Phycis común, es un pez demersal común en el Mediterráneo y Atlántico cercano. Su carne blanca firme y sabor suave son valorados en la gastronomía regional.",
      },
      scientifcName: "Phycis phycis",
    },
    {
      id: "PAMPANO",
      image: "/img/fish/PAMPANO.png",
      name: "PAMPANO",
      desc: {
        en: "Schedophilus ovalis, known as the Round whiff, is a demersal flatfish found in Mediterranean and nearby Atlantic waters. It has tender white flesh and is appreciated for its mild flavor.",
        fr: "Schedophilus ovalis, appelé Poisson-plat rond, est un poisson démersal plat présent en Méditerranée et dans l’Atlantique proche. Sa chair blanche tendre est appréciée pour sa saveur douce.",
        es: "Schedophilus ovalis, conocido como Lenguado redondo, es un pez plano demersal que habita el Mediterráneo y el Atlántico cercano. Su carne blanca y tierna es valorada por su sabor suave.",
      },
      scientifcName: "Schedophilus ovalis",
    },

    {
      id: "LENGUADO_ARENA",
      image: "/img/fish/LENGUADO_ARENA.png",
      name: "LENGUADO ARENA",
      desc: {
        en: "Solea lascaris, known as the Mediterranean sole, is a demersal flatfish found in the Mediterranean Sea and nearby Atlantic waters. It has tender white flesh and a mild, delicate flavor, highly prized in regional cuisine.",
        fr: "Solea lascaris, appelée Sole méditerranéenne, est un poisson plat démersal présent en Méditerranée et dans l’Atlantique proche. Sa chair blanche tendre et son goût délicat sont très appréciés en cuisine locale.",
        es: "Solea lascaris, conocida como Lenguado mediterráneo, es un pez plano demersal del Mediterráneo y Atlántico cercano. Su carne blanca tierna y sabor delicado son valorados en la gastronomía regional.",
      },
      scientifcName: "Solea lascaris",
    },
    {
      id: "VIVE",
      image: "/img/fish/VIVE.png",
      name: "VIVE",
      desc: {
        en: "Trachinus radiatus, known as the Spotted weever, is a demersal fish found in Mediterranean and nearby Atlantic coastal waters. It has venomous spines and is known for its spotted body. The flesh is firm and mild in flavor.",
        fr: "Trachinus radiatus, appelé Grondin tacheté, est un poisson démersal présent en Méditerranée et dans l’Atlantique proche des côtes. Il possède des épines venimeuses et un corps tacheté. Sa chair est ferme et au goût doux.",
        es: "Trachinus radiatus, conocido como Rascacio manchado, es un pez demersal del Mediterráneo y Atlántico cercano. Tiene espinas venenosas y un cuerpo manchado. Su carne es firme y de sabor suave.",
      },
      scientifcName: "Trachinus radiatus",
    },
    {
      id: "RATA",
      image: "/img/fish/RATA.png",
      name: "RATA",
      desc: {
        en: "Uranoscopus scaber, known as the Stargazer, is a demersal fish found in Mediterranean and nearby Atlantic waters. It is known for its upward-facing eyes and venomous spines. The flesh is firm and mild in flavor.",
        fr: "Uranoscopus scaber, appelé Poisson-soleil, est un poisson démersal vivant en Méditerranée et dans l’Atlantique proche. Il se distingue par ses yeux tournés vers le haut et ses épines venimeuses. Sa chair est ferme et au goût doux.",
        es: "Uranoscopus scaber, conocido como Pez astrólogo, es un pez demersal del Mediterráneo y Atlántico cercano. Se caracteriza por sus ojos orientados hacia arriba y espinas venenosas. Su carne es firme y de sabor suave.",
      },
      scientifcName: "Uranoscopus scaber",
    },
  ],
};
