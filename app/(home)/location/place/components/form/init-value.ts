import { PlaceFormSchema } from "@/app/(home)/location/place/components/form/schema";

import { placeDefaultValues } from "./default-values";

import { Place } from "@/types/location/place/place";

export function initPlaceFormValues(place?: Place): PlaceFormSchema {
  if (!place) {
    return structuredClone(placeDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: place.name ?? "",
    nativeName: place.nativeName ?? null,
    subtitle: place.subtitle ?? null,
    shortDescription: place.shortDescription ?? null,
    description: place.description ?? null,

    // ======================================================
    // LOCATION
    // ======================================================

    addressId: place.addressId ?? null,
    latitude: place.latitude ?? null,
    longitude: place.longitude ?? null,

    // ======================================================
    // PLACE TYPE
    // ======================================================

    placeTypeId: place.placeTypeId ?? "",

    // ======================================================
    // SEARCH / FEATURE
    // ======================================================

    featured: place.featured ?? false,
    searchable: place.searchable ?? true,
    searchPriority: place.searchPriority ?? 0,

    // ======================================================
    // MEDIA
    // ======================================================

    thumbnail: place.thumbnail ?? null,
    coverImage: place.coverImage ?? null,
    images: place.images ?? [],

    // ======================================================
    // TAGS
    // ======================================================

    tagIds: place.tags?.map((tag) => tag.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    verified: place.verified ?? false,
    active: place.active ?? true,
  };
}
