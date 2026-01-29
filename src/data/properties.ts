import { Property, Agent } from "@/types";

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Ivan Petrov",
    email: "ivan.petrov@example.com",
    phone: "+359 888 123 456",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: {
      en: "Ivan has over 10 years of experience in real estate.",
      bg: "Иван има над 10 години опит в недвижимите имоти.",
    },
    languages: ["English", "Bulgarian", "Russian"],
    properties: 45,
  },
  {
    id: "agent-2",
    name: "Maria Georgieva",
    email: "maria.georgieva@example.com",
    phone: "+359 889 234 567",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    bio: {
      en: "Maria is a bilingual agent with expertise in international clients.",
      bg: "Мария е двуезичен агент с опит в международни клиенти.",
    },
    languages: ["English", "Bulgarian", "German"],
    properties: 38,
  },
  {
    id: "agent-3",
    name: "Dimitar Stoyanov",
    email: "dimitar.stoyanov@example.com",
    phone: "+359 887 345 678",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    bio: {
      en: "Dimitar specializes in commercial real estate and land.",
      bg: "Димитър се специализира в търговски имоти и парцели.",
    },
    languages: ["English", "Bulgarian", "French"],
    properties: 52,
  },
];

export const properties: Property[] = [
  {
    id: "prop-1",
    title: {
      en: "Luxury 3-Bedroom Apartment in Sofia",
      bg: "Луксозен 3-стаен апартамент в София",
    },
    description: {
      en: "Stunning luxury apartment in the heart of Sofia.",
      bg: "Зашеметяващ луксозен апартамент в центъра на София.",
    },
    price: 450000,
    pricePerSqm: 4500,
    type: "apartment",
    status: "for_sale",
    location: "sofia",
    address: "23 Vitosha Boulevard, Sofia 1000",
    area: 100,
    bedrooms: 3,
    bathrooms: 2,
    floor: 3,
    totalFloors: 6,
    yearBuilt: 2018,
    features: ["Air Conditioning", "Central Heating", "Elevator", "Balcony"],
    amenities: ["24/7 Security", "Underground Parking", "Garden"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    agent: agents[0],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T14:30:00Z",
    featured: true,
    coordinates: { lat: 42.6975, lng: 23.3241 },
  },
  {
    id: "prop-2",
    title: {
      en: "Modern Villa with Pool in Varna",
      bg: "Модерна вила с басейн във Варна",
    },
    description: {
      en: "Beautiful modern villa near the beach.",
      bg: "Красива модерна вила близо до плажа.",
    },
    price: 850000,
    pricePerSqm: 2429,
    type: "villa",
    status: "for_sale",
    location: "varna",
    address: "45 Sea View Street, Varna 9000",
    area: 350,
    bedrooms: 4,
    bathrooms: 3,
    floor: 2,
    totalFloors: 3,
    yearBuilt: 2020,
    features: ["Swimming Pool", "Garden", "Garage", "Smart Home"],
    amenities: ["Private Beach Access", "Outdoor Kitchen", "BBQ Area"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    agent: agents[1],
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-01-18T11:00:00Z",
    featured: true,
    coordinates: { lat: 43.2141, lng: 27.9147 },
  },
  {
    id: "prop-3",
    title: {
      en: "Cozy Studio in Sunny Beach",
      bg: "Уютно студио в Слънчев бряг",
    },
    description: {
      en: "Perfect investment opportunity in Sunny Beach.",
      bg: "Перфектна инвестиционна възможност в Слънчев бряг.",
    },
    price: 45000,
    pricePerSqm: 1125,
    type: "studio",
    status: "for_sale",
    location: "sunny_beach",
    address: "Apartment 205, Sunny Beach 8240",
    area: 40,
    bedrooms: 1,
    bathrooms: 1,
    floor: 2,
    totalFloors: 6,
    yearBuilt: 2015,
    features: ["Balcony", "Sea View", "Air Conditioning"],
    amenities: ["Swimming Pool", "Fitness Center", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    agent: agents[2],
    createdAt: "2024-01-05T09:00:00Z",
    updatedAt: "2024-01-15T16:00:00Z",
    featured: true,
    coordinates: { lat: 42.6506, lng: 27.7078 },
  },
  {
    id: "prop-4",
    title: {
      en: "Traditional House in Veliko Tarnovo",
      bg: "Традиционна къща във Велико Търново",
    },
    description: {
      en: "Authentic Bulgarian house in historic Veliko Tarnovo.",
      bg: "Автентична българска къща в историческия Велико Търново.",
    },
    price: 280000,
    pricePerSqm: 1867,
    type: "house",
    status: "for_sale",
    location: "veliko_tarnovo",
    address: "78 Samovodska Street, Veliko Tarnovo 5000",
    area: 150,
    bedrooms: 5,
    bathrooms: 3,
    floor: 2,
    totalFloors: 2,
    yearBuilt: 1890,
    features: ["Fireplace", "Courtyard", "Mountain View"],
    amenities: ["Garden", "Parking", "Storage"],
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop",
    agent: agents[0],
    createdAt: "2024-01-08T12:00:00Z",
    updatedAt: "2024-01-16T09:30:00Z",
    featured: false,
    coordinates: { lat: 43.0756, lng: 25.6172 },
  },
  {
    id: "prop-5",
    title: {
      en: "Luxury Penthouse in Plovdiv",
      bg: "Луксозен пентхаус в Пловдив",
    },
    description: {
      en: "Exclusive penthouse with panoramic views.",
      bg: "Ексклузивен пентхаус с панорамен изглед.",
    },
    price: 520000,
    pricePerSqm: 5200,
    type: "apartment",
    status: "for_sale",
    location: "plovdiv",
    address: "12 Kamenitza Street, Plovdiv 4000",
    area: 100,
    bedrooms: 3,
    bathrooms: 2,
    floor: 12,
    totalFloors: 12,
    yearBuilt: 2021,
    features: ["Panoramic Views", "Private Terrace", "Smart Home"],
    amenities: ["Underground Parking", "Rooftop Garden", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    agent: agents[1],
    createdAt: "2024-01-12T14:00:00Z",
    updatedAt: "2024-01-19T10:00:00Z",
    featured: true,
    coordinates: { lat: 42.1354, lng: 24.7453 },
  },
  {
    id: "prop-6",
    title: {
      en: "Ski Chalet in Bansko",
      bg: "Ски Шале в Банско",
    },
    description: {
      en: "Beautiful ski chalet near the lift.",
      bg: "Красиво ски шале близо до лифта.",
    },
    price: 320000,
    pricePerSqm: 1600,
    type: "villa",
    status: "for_sale",
    location: "bansko",
    address: "25 Pirin Street, Bansko 2770",
    area: 200,
    bedrooms: 4,
    bathrooms: 3,
    floor: 2,
    totalFloors: 3,
    yearBuilt: 2017,
    features: ["Fireplace", "Mountain View", "Garden"],
    amenities: ["Near Ski Lift", "Sauna", "Hot Tub"],
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&h=400&fit=crop",
    agent: agents[2],
    createdAt: "2024-01-03T11:00:00Z",
    updatedAt: "2024-01-14T15:00:00Z",
    featured: false,
    coordinates: { lat: 41.8373, lng: 23.4881 },
  },
  {
    id: "prop-7",
    title: {
      en: "Office in Sofia Business Park",
      bg: "Офис в София Бизнес Парк",
    },
    description: {
      en: "Premium office space in Business Park.",
      bg: "Премиум офис пространство в Бизнес Парк.",
    },
    price: 2500,
    pricePerSqm: 17,
    type: "office",
    status: "for_rent",
    location: "sofia",
    address: "Office 501, Business Tower, Sofia 1766",
    area: 150,
    bedrooms: 0,
    bathrooms: 2,
    floor: 5,
    totalFloors: 10,
    yearBuilt: 2019,
    features: ["Open Plan", "Meeting Rooms", "Parking"],
    amenities: ["Security", "Central AC", "Elevator"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    agent: agents[2],
    createdAt: "2024-01-06T13:00:00Z",
    updatedAt: "2024-01-17T08:00:00Z",
    featured: false,
    coordinates: { lat: 42.6525, lng: 23.3541 },
  },
  {
    id: "prop-8",
    title: {
      en: "Beachfront Apartment in Golden Sands",
      bg: "Апартамент на плажа в Златни пясъци",
    },
    description: {
      en: "Spectacular beachfront apartment.",
      bg: "Спектакълен апартамент на плажа.",
    },
    price: 195000,
    pricePerSqm: 3250,
    type: "apartment",
    status: "for_sale",
    location: "golden_sands",
    address: "Apartment 1801, Golden Sands 9007",
    area: 60,
    bedrooms: 2,
    bathrooms: 2,
    floor: 18,
    totalFloors: 20,
    yearBuilt: 2016,
    features: ["Beach Access", "Sea View", "Balcony"],
    amenities: ["Multiple Pools", "Restaurant", "Spa"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    agent: agents[1],
    createdAt: "2024-01-09T10:00:00Z",
    updatedAt: "2024-01-18T14:00:00Z",
    featured: true,
    coordinates: { lat: 43.2833, lng: 28.0333 },
  },
  {
    id: "prop-9",
    title: {
      en: "Commercial Property in Burgas",
      bg: "Търговски имот в Бургас",
    },
    description: {
      en: "Excellent commercial opportunity.",
      bg: "Отлична търговска възможност.",
    },
    price: 450000,
    pricePerSqm: 1500,
    type: "commercial",
    status: "for_sale",
    location: "burgas",
    address: "45 Alexandrovska Street, Burgas 8000",
    area: 300,
    bedrooms: 0,
    bathrooms: 2,
    floor: 1,
    totalFloors: 3,
    yearBuilt: 1995,
    features: ["High Ceilings", "Large Windows"],
    amenities: ["Storage", "Parking Nearby"],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    agent: agents[2],
    createdAt: "2024-01-07T15:00:00Z",
    updatedAt: "2024-01-16T12:00:00Z",
    featured: false,
    coordinates: { lat: 42.5048, lng: 27.4626 },
  },
  {
    id: "prop-10",
    title: {
      en: "Building Land in Ruse",
      bg: "Строителен терен в Русе",
    },
    description: {
      en: "Prime building land in Ruse.",
      bg: "Премиерен строителен терен в Русе.",
    },
    price: 120000,
    pricePerSqm: 60,
    type: "land",
    status: "for_sale",
    location: "ruse",
    address: "Land Plot 12, Ruse 7000",
    area: 2000,
    bedrooms: 0,
    bathrooms: 0,
    yearBuilt: undefined,
    features: ["Flat Terrain", "Utilities Available"],
    amenities: ["Near River", "Quiet Area"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
    agent: agents[0],
    createdAt: "2024-01-04T09:00:00Z",
    updatedAt: "2024-01-13T11:00:00Z",
    featured: false,
    coordinates: { lat: 43.8357, lng: 25.9666 },
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((property) => property.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((property) => property.featured);
}

export function getPropertiesByStatus(status: string): Property[] {
  return properties.filter((property) => property.status === status);
}

export function getPropertiesByLocation(location: string): Property[] {
  return properties.filter((property) => property.location === location);
}

export function searchProperties(filters: Record<string, unknown>): Property[] {
  return properties.filter((property) => {
    if (filters.type && property.type !== filters.type) return false;
    if (filters.status && property.status !== filters.status) return false;
    if (filters.location && property.location !== filters.location)
      return false;
    if (filters.minPrice && property.price < Number(filters.minPrice))
      return false;
    if (filters.maxPrice && property.price > Number(filters.maxPrice))
      return false;
    if (filters.minArea && property.area < Number(filters.minArea))
      return false;
    if (filters.maxArea && property.area > Number(filters.maxArea))
      return false;
    if (filters.bedrooms && property.bedrooms < Number(filters.bedrooms))
      return false;
    return true;
  });
}
