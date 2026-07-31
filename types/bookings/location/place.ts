import type { Address } from "./address";

export enum PlaceType {
  LANDMARK = "LANDMARK",
  ATTRACTION = "ATTRACTION",
  BEACH = "BEACH",
  PARK = "PARK",
  MUSEUM = "MUSEUM",
  TEMPLE = "TEMPLE",
  CHURCH = "CHURCH",
  MOSQUE = "MOSQUE",
  PALACE = "PALACE",
  CASTLE = "CASTLE",
  MOUNTAIN = "MOUNTAIN",
  LAKE = "LAKE",
  RIVER = "RIVER",
  WATERFALL = "WATERFALL",
  ISLAND = "ISLAND",
  VIEWPOINT = "VIEWPOINT",
  SHOPPING_MALL = "SHOPPING_MALL",
  MARKET = "MARKET",
  RESTAURANT = "RESTAURANT",
  CAFE = "CAFE",
  BAR = "BAR",
  STADIUM = "STADIUM",
  THEME_PARK = "THEME_PARK",
  ZOO = "ZOO",
  AQUARIUM = "AQUARIUM",
  AIRPORT = "AIRPORT",
  TRAIN_STATION = "TRAIN_STATION",
  BUS_STATION = "BUS_STATION",
  PORT = "PORT",
  UNIVERSITY = "UNIVERSITY",
  HOSPITAL = "HOSPITAL",
  OTHER = "OTHER",
}

export interface Place {
  id: string;

  // =========================
  // BASIC
  // =========================
  name: string;
  nativeName?: string | null;
  subtitle?: string | null;
  shortDescription?: string | null;
  description?: string | null;

  // =========================
  // LOCATION
  // =========================
  addressId?: string | null;
  address?: Address | null;

  latitude?: number | null;
  longitude?: number | null;

  // =========================
  // CATEGORY
  // =========================
  type: PlaceType;

  featured: boolean;
  searchable: boolean;
  searchPriority: number;

  // =========================
  // MEDIA
  // =========================
  thumbnail?: string | null;
  coverImage?: string | null;
  images: string[];

  tagIds: string[];

  // =========================
  // STATUS
  // =========================
  verified: boolean;
  active: boolean;

  // =========================
  // TIMESTAMP
  // =========================
  createdAt: string;
  updatedAt: string;
}
