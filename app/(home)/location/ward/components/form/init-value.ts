import { Ward } from "@/types/location/ward";

import { wardDefaultValues } from "./default-values";

import { WardFormSchema } from "./schema";

export function initWardFormValues(ward?: Ward): WardFormSchema {
  if (!ward) {
    return structuredClone(wardDefaultValues);
  }

  return {
    // ======================================================
    // RELATION
    // ======================================================

    districtId: ward.districtId ?? "",

    // ======================================================
    // BASIC
    // ======================================================

    code: ward.code ?? null,
    name: ward.name ?? "",
    nativeName: ward.nativeName ?? null,

    // ======================================================
    // LOCATION
    // ======================================================

    latitude: ward.latitude ?? null,
    longitude: ward.longitude ?? null,

    // ======================================================
    // SEARCH
    // ======================================================

    searchable: ward.searchable ?? true,
    tagIds: ward.tags?.map((tag) => tag.id) ?? [],
    searchPriority: ward.searchPriority ?? 0,

    // ======================================================
    // MEDIA
    // ======================================================

    thumbnail: ward.thumbnail ?? "",
    coverImage: ward.coverImage ?? "",
    bannerImage: ward.bannerImage ?? "",
    images: ward.images ?? [],
    video: ward.video ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    verified: ward.verified ?? false,
    active: ward.active ?? false,
  };
}
