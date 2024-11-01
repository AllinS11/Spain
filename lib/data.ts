import { MAIN_REGIONS } from './constants';

export interface Location {
  name: string;
  region: string;
  description: string;
  bookingUrl: string;
  highlights: string[];
  recipe?: string;
}

export const locations: Location[] = [
  // Andalusia
  {
    name: "Costa del Sol",
    region: "andalusia",
    description: "A stunning coastal region with beautiful beaches, vibrant resorts, and year-round sunshine.",
    bookingUrl: "https://www.booking.com/region/es/costa-del-sol.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Marbella Old Town",
      "Puerto Banús Marina",
      "Málaga Historic Center",
      "Benalmádena Marina",
      "Nerja Caves"
    ]
  },
  {
    name: "Sierra Nevada",
    region: "andalusia",
    description: "Europe's southernmost ski resort offering both winter sports and summer hiking.",
    bookingUrl: "https://www.booking.com/region/es/sierra-nevada-ski.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Ski Resorts",
      "Mulhacén Peak",
      "Mountain Villages",
      "Hiking Trails",
      "Alpine Flora"
    ]
  },
  {
    name: "Seville",
    region: "andalusia",
    description: "The capital of Andalusia, known for its stunning architecture and flamenco culture.",
    bookingUrl: "https://www.booking.com/city/es/sevilla.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Real Alcázar",
      "Giralda Tower",
      "Plaza de España",
      "Santa Cruz Quarter",
      "Cathedral"
    ]
  },

  // Aragon
  {
    name: "Zaragoza",
    region: "aragon",
    description: "Historic capital with impressive Mudéjar architecture and rich Roman heritage.",
    bookingUrl: "https://www.booking.com/city/es/zaragoza.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Basílica de Nuestra Señora del Pilar",
      "Aljafería Palace",
      "Roman Theater",
      "Central Market",
      "Mudéjar Architecture"
    ]
  },
  {
    name: "Huesca",
    region: "aragon",
    description: "Gateway to the Pyrenees with medieval monuments and mountain adventures.",
    bookingUrl: "https://www.booking.com/city/es/huesca.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Gothic Cathedral",
      "San Pedro el Viejo Monastery",
      "Town Hall",
      "Provincial Museum",
      "Huesca Mountains"
    ]
  },
  {
    name: "Teruel",
    region: "aragon",
    description: "Known for its Mudéjar architecture and romantic legend of the Lovers of Teruel.",
    bookingUrl: "https://www.booking.com/city/es/teruel.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Mudéjar Towers",
      "Mausoleum of the Lovers",
      "Cathedral",
      "Torico Square",
      "Dinópolis Theme Park"
    ]
  },

  // Asturias
  {
    name: "Oviedo",
    region: "asturias",
    description: "Elegant capital city with pre-Romanesque architecture and cider culture.",
    bookingUrl: "https://www.booking.com/city/es/oviedo.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Cathedral of San Salvador",
      "Santa María del Naranco",
      "Old Town",
      "Cider Street",
      "Campo San Francisco"
    ]
  },
  {
    name: "Picos de Europa",
    region: "asturias",
    description: "Dramatic mountain range offering hiking, climbing, and stunning landscapes.",
    bookingUrl: "https://www.booking.com/region/es/picos-de-europa.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Covadonga Lakes",
      "Cares Trail",
      "Bulnes Funicular",
      "Naranjo de Bulnes",
      "Mountain Villages"
    ]
  },
  {
    name: "Gijón",
    region: "asturias",
    description: "Coastal city combining beach life with cultural attractions and Roman history.",
    bookingUrl: "https://www.booking.com/city/es/gijon.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "San Lorenzo Beach",
      "Roman Baths",
      "Cimadevilla Quarter",
      "Atlantic Botanical Garden",
      "Aquarium"
    ]
  },

  // Balearic Islands
  {
    name: "Mallorca",
    region: "balearic-islands",
    description: "Largest Balearic island with beautiful beaches, mountains, and historic towns.",
    bookingUrl: "https://www.booking.com/region/es/mallorca.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Palma Cathedral",
      "Serra de Tramuntana",
      "Cala d'Or Beaches",
      "Valldemossa",
      "Drach Caves"
    ]
  },
  {
    name: "Ibiza",
    region: "balearic-islands",
    description: "Famous for nightlife but also offering beautiful beaches and UNESCO heritage.",
    bookingUrl: "https://www.booking.com/region/es/ibiza.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Dalt Vila",
      "Es Vedrà",
      "Cala Comte",
      "Hippy Markets",
      "Sunset Strip"
    ]
  },
  {
    name: "Menorca",
    region: "balearic-islands",
    description: "Quieter island known for prehistoric sites and pristine beaches.",
    bookingUrl: "https://www.booking.com/region/es/menorca.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Ciutadella Old Town",
      "Monte Toro",
      "Prehistoric Sites",
      "Cami de Cavalls",
      "Port Mahon"
    ]
  },

  // Basque Country
  {
    name: "San Sebastian",
    region: "basque-country",
    description: "Elegant coastal city renowned for its pintxos bars, beautiful beaches, and exceptional dining scene.",
    bookingUrl: "https://www.booking.com/city/es/san-sebastian.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "La Concha Beach",
      "Old Town Pintxos Bars",
      "Monte Igueldo",
      "Kursaal Congress Centre",
      "San Telmo Museum"
    ]
  },
  {
    name: "Bilbao",
    region: "basque-country",
    description: "Vibrant city famous for the Guggenheim Museum and its transformation from industrial port to cultural hub.",
    bookingUrl: "https://www.booking.com/city/es/bilbao.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Guggenheim Museum",
      "Casco Viejo (Old Town)",
      "Fine Arts Museum",
      "Ribera Market",
      "Vizcaya Bridge"
    ]
  },
  {
    name: "Vitoria-Gasteiz",
    region: "basque-country",
    description: "Green capital of the Basque Country with a beautiful medieval center and modern sustainable design.",
    bookingUrl: "https://www.booking.com/city/es/vitoria.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Medieval Quarter",
      "Santa María Cathedral",
      "Artium Museum",
      "Green Belt",
      "Plaza de la Virgen Blanca"
    ]
  },

  // Canary Islands
  {
    name: "Tenerife",
    region: "canary-islands",
    description: "Largest Canary Island with diverse landscapes from beaches to volcanic peaks.",
    bookingUrl: "https://www.booking.com/region/es/tenerife.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Mount Teide",
      "Loro Parque",
      "Los Gigantes Cliffs",
      "Santa Cruz City",
      "Anaga Rural Park"
    ]
  },
  {
    name: "Gran Canaria",
    region: "canary-islands",
    description: "Island known for its diverse landscapes and year-round spring climate.",
    bookingUrl: "https://www.booking.com/region/es/gran-canaria.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Maspalomas Dunes",
      "Las Canteras Beach",
      "Roque Nublo",
      "Vegueta Historic Quarter",
      "Puerto de Mogán"
    ]
  },
  {
    name: "Lanzarote",
    region: "canary-islands",
    description: "Volcanic island with unique landscapes and César Manrique's artistic legacy.",
    bookingUrl: "https://www.booking.com/region/es/lanzarote.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Timanfaya National Park",
      "Jameos del Agua",
      "César Manrique Foundation",
      "Papagayo Beaches",
      "La Geria Wine Region"
    ]
  },

  // Cantabria
  {
    name: "Santander",
    region: "cantabria",
    description: "Elegant coastal capital with beautiful beaches and rich cultural heritage.",
    bookingUrl: "https://www.booking.com/city/es/santander.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "El Sardinero Beach",
      "Peninsula of La Magdalena",
      "Centro Botín",
      "Cathedral",
      "Maritime Museum"
    ]
  },
  {
    name: "Picos de Europa",
    region: "cantabria",
    description: "Mountain range offering spectacular hiking and traditional villages.",
    bookingUrl: "https://www.booking.com/region/es/picos-de-europa.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Fuente Dé Cable Car",
      "Potes Village",
      "Monastery of Santo Toribio",
      "Hiking Trails",
      "Wildlife Watching"
    ]
  },
  {
    name: "Santillana del Mar",
    region: "cantabria",
    description: "Medieval town known as 'The Town of Three Lies' - neither holy, flat, nor by the sea.",
    bookingUrl: "https://www.booking.com/city/es/santillana-del-mar.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Collegiate Church",
      "Medieval Town Center",
      "Altamira Cave Museum",
      "Torture Museum",
      "Regina Coeli Convent"
    ]
  },

  // Castile and León
  {
    name: "Salamanca",
    region: "castile-and-leon",
    description: "Historic university city known for its golden sandstone architecture.",
    bookingUrl: "https://www.booking.com/city/es/salamanca.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Plaza Mayor",
      "Old Cathedral",
      "New Cathedral",
      "University",
      "Casa de las Conchas"
    ]
  },
  {
    name: "Segovia",
    region: "castile-and-leon",
    description: "UNESCO World Heritage city famous for its Roman aqueduct and medieval architecture.",
    bookingUrl: "https://www.booking.com/city/es/segovia.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Roman Aqueduct",
      "Alcázar",
      "Cathedral",
      "Jewish Quarter",
      "Plaza Mayor"
    ]
  },
  {
    name: "Burgos",
    region: "castile-and-leon",
    description: "Historic city on the Camino de Santiago with impressive Gothic architecture.",
    bookingUrl: "https://www.booking.com/city/es/burgos.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Gothic Cathedral",
      "Monastery of Las Huelgas",
      "Castle Hill",
      "Museum of Human Evolution",
      "El Cid Monument"
    ]
  },

  // Castilla-La Mancha
  {
    name: "Toledo",
    region: "castilla-la-mancha",
    description: "Former imperial capital known as the 'City of Three Cultures'.",
    bookingUrl: "https://www.booking.com/city/es/toledo.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Cathedral",
      "Alcázar",
      "Jewish Quarter",
      "El Greco Museum",
      "Monastery of San Juan de los Reyes"
    ]
  },
  {
    name: "Cuenca",
    region: "castilla-la-mancha",
    description: "Medieval city famous for its hanging houses built on rocky cliffs.",
    bookingUrl: "https://www.booking.com/city/es/cuenca.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Hanging Houses",
      "Gothic Cathedral",
      "Abstract Art Museum",
      "San Pablo Bridge",
      "Castle Ruins"
    ]
  },
  {
    name: "Consuegra",
    region: "castilla-la-mancha",
    description: "Town famous for its historic windmills and castle, reminiscent of Don Quixote.",
    bookingUrl: "https://www.booking.com/city/es/consuegra.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Windmills",
      "Medieval Castle",
      "Saffron Museum",
      "Archaeological Site",
      "Historic Center"
    ]
  },

  // Catalonia
  {
    name: "Barcelona",
    region: "catalonia",
    description: "Cosmopolitan capital of Catalonia, known for Gaudí's architecture, vibrant culture, and Mediterranean lifestyle.",
    bookingUrl: "https://www.booking.com/city/es/barcelona.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Sagrada Familia",
      "Park Güell",
      "Gothic Quarter",
      "Las Ramblas",
      "Casa Batlló"
    ]
  },
  {
    name: "Girona",
    region: "catalonia",
    description: "Medieval city with one of Europe's best-preserved Jewish quarters and stunning Gothic cathedral.",
    bookingUrl: "https://www.booking.com/city/es/girona.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Gothic Cathedral",
      "Jewish Quarter",
      "Arab Baths",
      "City Walls",
      "Colorful Houses of Onyar"
    ]
  },
  {
    name: "Costa Brava",
    region: "catalonia",
    description: "Rugged coastal region combining beautiful beaches with charming medieval towns and Dalí's legacy.",
    bookingUrl: "https://www.booking.com/region/es/costa-brava.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Tossa de Mar",
      "Cadaqués",
      "Cap de Creus",
      "Dalí Theatre-Museum",
      "Calella de Palafrugell"
    ]
  },

  // Extremadura
  {
    name: "Cáceres",
    region: "extremadura",
    description: "UNESCO World Heritage city with perfectly preserved medieval old town.",
    bookingUrl: "https://www.booking.com/city/es/caceres.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Plaza Mayor",
      "Old Town",
      "Palace of the Golfines",
      "Co-Cathedral of Santa María",
      "Arab Walls"
    ]
  },
  {
    name: "Mérida",
    region: "extremadura",
    description: "Ancient Roman capital with the best-preserved Roman ruins in Spain.",
    bookingUrl: "https://www.booking.com/city/es/merida.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Roman Theater",
      "Roman Bridge",
      "Temple of Diana",
      "National Museum of Roman Art",
      "Amphitheater"
    ]
  },
  {
    name: "Trujillo",
    region: "extremadura",
    description: "Historic town known for its medieval architecture and conquistador history.",
    bookingUrl: "https://www.booking.com/city/es/trujillo.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Plaza Mayor",
      "Castle",
      "Palace of the Conquest",
      "Church of Santa María la Mayor",
      "Medieval Walls"
    ]
  },

  // Galicia
  {
    name: "Santiago de Compostela",
    region: "galicia",
    description: "Historic pilgrimage destination and capital of Galicia, famous for its cathedral and medieval old town.",
    bookingUrl: "https://www.booking.com/city/es/santiago-de-compostela.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Cathedral of Santiago",
      "Praza do Obradoiro",
      "Old Town",
      "Alameda Park",
      "Mercado de Abastos"
    ]
  },
  {
    name: "A Coruña",
    region: "galicia",
    description: "Coastal city known for its Roman lighthouse, urban beaches, and excellent seafood.",
    bookingUrl: "https://www.booking.com/city/es/la-coruna.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Tower of Hercules",
      "Mount San Pedro",
      "Riazor Beach",
      "Maria Pita Square",
      "Science Museum"
    ]
  },
  {
    name: "Rías Baixas",
    region: "galicia",
    description: "Coastal region famous for its seafood, albariño wine, and beautiful estuaries.",
    bookingUrl: "https://www.booking.com/region/es/rias-baixas.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Cíes Islands",
      "Cambados Wine Region",
      "Pontevedra Old Town",
      "O Grove Seafood",
      "Atlantic Islands National Park"
    ]
  },

  // La Rioja
  {
    name: "Logroño",
    region: "la-rioja",
    description: "Capital city known for its wine culture and tapas streets.",
    bookingUrl: "https://www.booking.com/city/es/logrono.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Calle del Laurel",
      "Cathedral",
      "Wine Culture Museum",
      "Ebro Park",
      "Stone Bridge"
    ]
  },
  {
    name: "Haro",
    region: "la-rioja",
    description: "Wine capital of La Rioja with historic bodegas and wine festivals.",
    bookingUrl: "https://www.booking.com/city/es/haro.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Wine Quarter",
      "Plaza de la Paz",
      "Santo Tomás Church",
      "Wine Battle Festival",
      "Historic Bodegas"
    ]
  },
  {
    name: "San Millán de la Cogolla",
    region: "la-rioja",
    description: "UNESCO World Heritage monasteries where the first words in Spanish were written.",
    bookingUrl: "https://www.booking.com/city/es/san-millan-de-la-cogolla.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Suso Monastery",
      "Yuso Monastery",
      "Language Museum",
      "Medieval Village",
      "Hiking Trails"
    ]
  },

  // Madrid
  {
    name: "Madrid City",
    region: "madrid",
    description: "Spain's vibrant capital, combining world-class art museums, historic architecture, and modern urban life.",
    bookingUrl: "https://www.booking.com/city/es/madrid.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Prado Museum",
      "Royal Palace",
      "Retiro Park",
      "Plaza Mayor",
      "Gran Vía"
    ]
  },
  {
    name: "El Escorial",
    region: "madrid",
    description: "Historic site of the Royal Monastery, a testament to Spain's imperial past.",
    bookingUrl: "https://www.booking.com/city/es/san-lorenzo-de-el-escorial.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Royal Monastery",
      "Basilica",
      "Royal Library",
      "Kings and Princes Quarters",
      "Gardens"
    ]
  },
  {
    name: "Aranjuez",
    region: "madrid",
    description: "Royal site known for its palace, gardens, and cultural landscape.",
    bookingUrl: "https://www.booking.com/city/es/aranjuez.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Royal Palace",
      "Prince's Garden",
      "Island Garden",
      "Historic Quarter",
      "Strawberry Train"
    ]
  },

  // Murcia
  {
    name: "Murcia City",
    region: "murcia",
    description: "Historic city known for its baroque cathedral and excellent tapas.",
    bookingUrl: "https://www.booking.com/city/es/murcia.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Cathedral",
      "Casino",
      "Plaza de las Flores",
      "Santa Clara Monastery",
      "Science Museum"
    ]
  },
  {
    name: "Cartagena",
    region: "murcia",
    description: "Port city with Roman ruins and modernist architecture.",
    bookingUrl: "https://www.booking.com/city/es/cartagena.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Roman Theater",
      "Naval Museum",
      "Modernist Buildings",
      "Fortress",
      "Port Area"
    ]
  },
  {
    name: "Mar Menor",
    region: "murcia",
    description: "Europe's largest saltwater lagoon with healing mud baths.",
    bookingUrl: "https://www.booking.com/region/es/mar-menor.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Mud Baths",
      "La Manga Strip",
      "Water Sports",
      "Fishing Villages",
      "Salt Flats"
    ]
  },

  // Navarre
  {
    name: "Pamplona",
    region: "navarre",
    description: "Historic capital famous for the Running of the Bulls festival.",
    bookingUrl: "https://www.booking.com/city/es/pamplona.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "City Walls",
      "Cathedral",
      "Plaza del Castillo",
      "Bull Running Route",
      "Citadel"
    ]
  },
  {
    name: "Tudela",
    region: "navarre",
    description: "Second largest city with rich Jewish and Moorish heritage.",
    bookingUrl: "https://www.booking.com/city/es/tudela.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Cathedral",
      "Jewish Quarter",
      "Plaza de los Fueros",
      "Muñoz Sola Museum",
      "Bardenas Reales"
    ]
  },
  {
    name: "Roncesvalles",
    region: "navarre",
    description: "Historic mountain pass and starting point of the Camino de Santiago in Spain.",
    bookingUrl: "https://www.booking.com/city/es/roncesvalles.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Royal Collegiate Church",
      "Pilgrims' Hostel",
      "Chapel of Sancti Spiritus",
      "Museum",
      "Hiking Trails"
    ]
  },

  // Valencia
  {
    name: "Valencia City",
    region: "valencian-community",
    description: "Modern city known for its City of Arts and Sciences, historic center, and birthplace of paella.",
    bookingUrl: "https://www.booking.com/city/es/valencia.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "City of Arts and Sciences",
      "Central Market",
      "La Lonja",
      "Cathedral",
      "Turia Gardens"
    ]
  },
  {
    name: "Alicante",
    region: "valencian-community",
    description: "Coastal city with a historic castle, beautiful beaches, and vibrant nightlife.",
    bookingUrl: "https://www.booking.com/city/es/alicante.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Santa Bárbara Castle",
      "Postiguet Beach",
      "Explanada de España",
      "Old Quarter",
      "San Nicolas Cathedral"
    ]
  },
  {
    name: "Morella",
    region: "valencian-community",
    description: "Medieval walled town perched on a hilltop in the mountainous interior of Valencia.",
    bookingUrl: "https://www.booking.com/city/es/morella.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Castle",
      "Gothic Basilica",
      "Medieval Walls",
      "Jewish Quarter",
      "Dinosaur Museum"
    ]
  }
];

export function getRegionLocations(regionId: string): Location[] {
  return locations.filter(location => location.region === regionId);
}

export function getLocationBySlug(regionId: string, locationSlug: string): Location | undefined {
  return locations.find(
    location => 
      location.region === regionId && 
      location.name.toLowerCase().replace(/\s+/g, '-') === locationSlug
  );
}

export function getRegionById(id: string) {
  return MAIN_REGIONS.find(region => region.id === id);
}