export type PropertyType =
  | "apartment"
  | "house"
  | "villa"
  | "studio"
  | "office"
  | "land"
  | "commercial";
export type PropertyStatus = "for_sale" | "for_rent" | "sold" | "reserved";
export type PropertyLocation =
  | "sofia"
  | "plovdiv"
  | "varna"
  | "burgas"
  | "ruse"
  | "veliko_tarnovo"
  | "bansko"
  | "sunny_beach"
  | "golden_sands";

export interface Property {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  price: number;
  pricePerSqm?: number;
  type: PropertyType;
  status: PropertyStatus;
  location: PropertyLocation;
  address: string;
  area: number; // in sqm
  bedrooms: number;
  bathrooms: number;
  floor?: number;
  totalFloors?: number;
  yearBuilt?: number;
  features: string[];
  amenities: string[];
  images: string[];
  thumbnail: string;
  agent: Agent;
  createdAt: string;
  updatedAt: string;
  featured: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  bio: Record<string, string>;
  languages: string[];
  properties: number;
}

export interface SearchFilters {
  query?: string;
  type?: PropertyType;
  status?: PropertyStatus;
  location?: PropertyLocation;
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  bedrooms?: number;
  bathrooms?: number;
}

export interface Translation {
  [key: string]: string | Record<string, string>;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}
