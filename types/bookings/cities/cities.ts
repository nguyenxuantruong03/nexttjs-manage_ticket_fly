// ======================================================
// CITY TYPES
// ======================================================

import { Country } from "./country";

import { Address } from "./address";

// ======================================================
// CITY
// ======================================================

export interface City {
  id: string;

  // ======================================================
  // BASIC
  // ======================================================

  name: string;

  nativeName?: string;

  slug: string;

  code?: string;

  iataCode?: string;

  subtitle?: string;

  shortDescription?: string;

  description?: string;

  // ======================================================
  // COUNTRY
  // ======================================================

  countryId: string;

  country?: Country;

  administrativeArea?: string;

  region?: string;

  isCapital: boolean;

  // ======================================================
  // LOCATION
  // ======================================================

  latitude?: number;

  longitude?: number;

  elevation?: number;

  timezone?: string;

  utcOffset?: string;

  // ======================================================
  // SEARCH
  // ======================================================

  priority: number;

  displayOrder: number;

  popularityScore: number;

  featured: boolean;

  popular: boolean;

  searchable: boolean;

  aliases: string[];

  keywords: string[];

  tags: string[];

  // ======================================================
  // MEDIA
  // ======================================================

  thumbnail?: string;

  coverImage?: string;

  bannerImage?: string;

  images: string[];

  video?: string;

  // ======================================================
  // TRAVEL
  // ======================================================

  bestMonths: string[];

  rainyMonths: string[];

  // ======================================================
  // SEO
  // ======================================================

  seoTitle?: string;

  seoDescription?: string;

  seoKeywords: string[];

  // ======================================================
  // STATUS
  // ======================================================

  verified: boolean;

  status: CityStatus;

  // ======================================================
  // RELATIONS
  // ======================================================

  addresses: Address[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: string;

  updatedAt: string;
}

// ======================================================
// CITY ENUMS
// ======================================================

export enum CityStatus {
  ACTIVE = "ACTIVE",

  HIDDEN = "HIDDEN",

  COMING_SOON = "COMING_SOON",

  DISABLED = "DISABLED",
}

export enum Continent {
  AFRICA = "AFRICA",

  ANTARCTICA = "ANTARCTICA",

  ASIA = "ASIA",

  EUROPE = "EUROPE",

  NORTH_AMERICA = "NORTH_AMERICA",

  SOUTH_AMERICA = "SOUTH_AMERICA",

  OCEANIA = "OCEANIA",
}
