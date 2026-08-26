// ======================================================
// COUNTRY TYPES
// ======================================================

import type { City } from "../city";
import type { Timezone } from "../timezone";
import type { Language } from "../language";
import type { Currency } from "../currency";
import type { Address } from "../address";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { Continent } from "./continent.type";

// ======================================================
// COUNTRY
// ======================================================

export interface Country {
  id: string;

  // ======================================================
  // BASIC
  // ======================================================

  name: string;

  officialName?: string | null;

  slug: string;

  code: string;

  iso2: string;

  iso3: string;

  phoneCode?: string | null;

  capital?: string | null;

  // ======================================================
  // LOCATION
  // ======================================================

  continentId: string;

  continent: Continent;

  timezoneId?: string | null;

  timezone?: Timezone | null;

  languages: Language[];
  languageIds: string[]

  // ======================================================
  // MEDIA
  // ======================================================

  flag?: string | null;

  thumbnail?: string;
  coverImage?: string;
  bannerImage?: string;
  images: string[];
  video?: string;

  // ======================================================
  // SEARCH
  // ======================================================

  aliases: string[];

  tags: SearchTag[];
  tagIds: string[];

  keywords: string[];

  searchText: string;

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

  currencyId: string;

  currency?: Currency | null;

  cities: City[];

  addresses: Address[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
