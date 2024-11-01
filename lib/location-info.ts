type LocationInfo = {
  description: string;
  attractions: string[];
  tips: string[];
  bestTimeToVisit: string;
  gettingThere: string;
  localTransport: string;
  history?: string;
  culture?: string;
  events?: string[];
};

const locationData: Record<string, LocationInfo> = {
  "Costa del Sol": {
    description: "The Costa del Sol is a region in southern Spain known for its beautiful Mediterranean beaches, vibrant coastal towns, and year-round sunny weather.",
    attractions: [
      "Puerto Banús Marina",
      "Marbella Old Town",
      "Nerja Caves",
      "Málaga Historic Center",
      "Benalmádena Marina"
    ],
    tips: [
      "Visit in shoulder season (May-June or September-October) for better rates",
      "Use the coastal train to explore different towns",
      "Book popular restaurants in advance during peak season",
      "Consider inland excursions to white villages",
      "Try local espeto (grilled sardines) at beach restaurants"
    ],
    bestTimeToVisit: "Spring (March to May) and Autumn (September to November) offer pleasant temperatures and fewer crowds",
    gettingThere: "Fly into Málaga Airport, well-connected to major European cities. Train and bus connections available to coastal towns",
    localTransport: "Efficient coastal train (Cercanías) connects major towns. Buses and taxis widely available",
    events: [
      "Málaga Film Festival (March)",
      "San Juan Festival (June)",
      "Marbella Feria (June)",
      "Nerja Caves Festival (July)"
    ]
  },
  "Costa Blanca": {
    description: "The Costa Blanca offers a perfect blend of tourist facilities and traditional Spanish culture along its white sandy coastline.",
    attractions: [
      "Benidorm Old Town",
      "Alicante Castle",
      "Guadalest Valley",
      "Terra Mítica Theme Park",
      "Altea Artist Quarter"
    ],
    tips: [
      "Book accommodations early for summer months",
      "Visit beaches early morning or late afternoon",
      "Try local rice dishes beyond paella",
      "Take advantage of tourist info offices",
      "Consider inland excursions for authentic experiences"
    ],
    bestTimeToVisit: "May to October for beach weather, though the region is pleasant year-round",
    gettingThere: "Alicante Airport is the main gateway. Good bus and train connections along the coast",
    localTransport: "TRAM connects coastal towns. Buses and taxis available everywhere"
  }
  // Add more locations as needed...
};

export function getLocationInfo(locationName: string): LocationInfo {
  return locationData[locationName] || {
    description: `Discover the unique charm of ${locationName}, a captivating destination in Spain.`,
    attractions: [
      "Historic sites",
      "Local markets",
      "Traditional restaurants",
      "Natural attractions",
      "Cultural venues"
    ],
    tips: [
      "Visit during off-peak seasons",
      "Try local specialties",
      "Use public transportation",
      "Book accommodations in advance",
      "Check local events calendar"
    ],
    bestTimeToVisit: "Spring (March to May) and Autumn (September to November) typically offer the most pleasant weather",
    gettingThere: "Accessible by public transportation. Check local transport websites for specific routes",
    localTransport: "Most areas are walkable, with public buses and taxis available"
  };
}