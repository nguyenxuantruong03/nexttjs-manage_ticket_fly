import { SearchTag } from "@/types/searchs/search/tag.types";
import type { Address } from "../address";
import { PlaceType } from "./place-type.type";

export interface Place {
  id: string;

  // ======================================================
  // BASIC
  // ======================================================

  name: string;

  nativeName?: string | null;

  slug: string;

  subtitle?: string | null;

  shortDescription?: string | null;

  description?: string | null;

  // ======================================================
  // LOCATION
  // ======================================================

  addressId?: string | null;

  address?: Address | null;

  latitude?: number | null;

  longitude?: number | null;

  // ======================================================
  // CATEGORY
  // ======================================================

  placeTypeId: string;

  placeType: PlaceType;
  tagIds: string[];
  tags: SearchTag[];

  featured: boolean;

  searchable: boolean;

  searchPriority: number;

  // ======================================================
  // MEDIA
  // ======================================================

  thumbnail?: string | null;

  coverImage?: string | null;

  images: string[];

  // ======================================================
  // SEARCH
  // ======================================================

  aliases: string[];

  keywords: string[];

  searchText: string;

  // ======================================================
  // STATUS
  // ======================================================

  verified: boolean;

  active: boolean;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
