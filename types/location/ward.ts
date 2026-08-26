import { SearchTag } from "../searchs/search/tag.types";
import type { Address } from "./address";
import type { District } from "./district";

export interface Ward {
  id: string;

  // =========================
  // RELATION
  // =========================
  districtId: string;
  district?: District;

  // =========================
  // BASIC
  // =========================
  code?: string | null;
  name: string;
  nativeName?: string | null;

  // =========================
  // LOCATION
  // =========================
  latitude?: number | null;
  longitude?: number | null;

  // =========================
  // RELATIONS
  // =========================
  addresses?: Address[];

  active: boolean;
  verified: boolean;

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

  // =========================
  // TIMESTAMP
  // =========================
  createdAt: string;
  updatedAt: string;
}
