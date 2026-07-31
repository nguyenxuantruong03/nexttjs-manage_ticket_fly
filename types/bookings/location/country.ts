// ======================================================
// COUNTRY TYPES
// ======================================================

import { City, Continent } from "./city";
import { Timezone } from "./timezone";

// ======================================================
// COUNTRY
// ======================================================

export interface Country {
  currencyId: string;
  id: string;

  // ======================================================
  // BASIC
  // ======================================================

  name: string;

  officialName?: string;

  code: string;

  iso2: string;

  iso3: string;

  phoneCode?: string;

  capital?: string;

  // ======================================================
  // LOCATION
  // ======================================================

  continent: Continent;

  timezoneId?: string;
  timezone?: Timezone;

  languageIds: string[];

  // ======================================================
  // MEDIA
  // ======================================================

  flag?: string;

  thumbnail?: string;

  coverImage?: string;

  // ======================================================
  // SEARCH
  // ======================================================

  tagIds: string[];

  searchPriority: number;

  featured: boolean;

  searchable: boolean;

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  // ======================================================
  // RELATIONS
  // ======================================================

  cities: City[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: string;

  updatedAt: string;
}
