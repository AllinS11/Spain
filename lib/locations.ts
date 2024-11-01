export interface Location {
  name: string;
  region: string;
  description: string;
  bookingUrl: string;
  highlights: string[];
  recipe?: string;
}

export const locations: Location[] = [
  // Andalusia Locations
  {
    name: "Costa del Sol",
    region: "andalusia",
    description: "A stunning coastal region known for its beautiful beaches, vibrant resorts, and year-round sunshine. The perfect destination for beach lovers and water sports enthusiasts.",
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
    description: "Europe's southernmost ski resort offering both winter sports and summer hiking, with stunning views of the Mediterranean Sea on clear days.",
    bookingUrl: "https://www.booking.com/region/es/sierra-nevada-ski.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Ski Resorts",
      "Mulhacén Peak",
      "Mountain Villages",
      "Hiking Trails",
      "Alpine Flora"
    ]
  },
  // Catalonia Locations
  {
    name: "Costa Brava",
    region: "catalonia",
    description: "A rugged coastal region with dramatic cliffs, hidden coves, and medieval towns. Perfect for combining beach holidays with cultural experiences.",
    bookingUrl: "https://www.booking.com/region/es/costa-brava.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Tossa de Mar Castle",
      "Cadaqués",
      "Cap de Creus",
      "Medieval Villages",
      "Salvador Dalí Museum"
    ]
  },
  {
    name: "Montserrat",
    region: "catalonia",
    description: "A unique mountain range home to the famous Benedictine monastery and distinctive rock formations. A spiritual and natural wonder.",
    bookingUrl: "https://www.booking.com/region/es/parque-natural-de-la-muntanya-de-montserrat.en.html?aid=2414066&no_rooms=1&group_adults=2",
    highlights: [
      "Benedictine Monastery",
      "Black Madonna",
      "Mountain Hiking",
      "Cable Car Rides",
      "Choir Performances"
    ]
  }
  // Continue with all locations...
];