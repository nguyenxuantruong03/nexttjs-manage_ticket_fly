// ======================================================
// CITY TYPES
// ======================================================

import { Country } from "./country/country";

import { Address } from "./address";
import { Timezone } from "./timezone";
import { SearchTag } from "../searchs/search/tag.types";

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

  timezoneId?: string;
  timezone?: Timezone;

  // ======================================================
  // SEARCH
  // ======================================================

  searchPriority: number;

  displayOrder: number;

  popularityScore: number;

  featured: boolean;

  popular: boolean;

  searchable: boolean;

  tagIds: string[];
  tags: SearchTag[];

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
  // STATUS
  // ======================================================

  verified: boolean;

  active: boolean;

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
