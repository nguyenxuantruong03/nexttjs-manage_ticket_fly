import { SearchTag } from "../searchs/search/tag.types";
import { Address } from "./address";
import { City } from "./city";
import { Ward } from "./ward";

export interface District {
  id: string;

  cityId: string;
  city?: City;

  code?: string | null;
  name: string;
  nativeName?: string | null;

  latitude?: number | null;
  longitude?: number | null;

  addresses?: Address[];
  wards?: Ward[];

  tagIds: string[];
  tags: SearchTag[];
  searchable: boolean;
  searchPriority: number;

  // ======================================================
  // MEDIA
  // ======================================================

  thumbnail?: string;
  coverImage?: string;
  bannerImage?: string;
  images: string[];
  video?: string;

  active: boolean;
  verified: boolean;

  createdAt: Date;
  updatedAt: Date;
}
