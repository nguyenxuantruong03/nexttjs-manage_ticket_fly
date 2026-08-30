import { District } from "@/types/location/district";

import { districtDefaultValues } from "./default-values";

import { DistrictFormSchema } from "./schema";

export function initDistrictFormValues(
  district?: District,
): DistrictFormSchema {
  if (!district) {
    return structuredClone(districtDefaultValues);
  }

  return {
    // ======================================================
    // RELATION
    // ======================================================

    cityId: district.cityId ?? "",

    // ======================================================
    // BASIC
    // ======================================================

    code: district.code ?? null,
    name: district.name ?? "",
    nativeName: district.nativeName ?? null,

    // ======================================================
    // LOCATION
    // ======================================================

    latitude: district.latitude ?? null,
    longitude: district.longitude ?? null,

    // ======================================================
    // SEARCH
    // ======================================================

    searchable: district.searchable ?? true,
    tagIds: district.tags?.map((tag) => tag.id) ?? [],
    searchPriority: district.searchPriority ?? 0,

    // ======================================================
    // MEDIA
    // ======================================================

    thumbnail: district.thumbnail ?? "",
    coverImage: district.coverImage ?? "",
    bannerImage: district.bannerImage ?? "",
    images: district.images ?? [],
    video: district.video ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    verified: district.verified ?? false,
    active: district.active ?? false,
  };
}
