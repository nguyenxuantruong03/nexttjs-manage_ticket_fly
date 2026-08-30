import { PlaceType } from "@/types/location/place/place-type.type";

import { placeTypeDefaultValues } from "./default-values";

import { PlaceTypeFormSchema } from "./schema";

export function initPlaceTypeFormValues(
  placeType?: PlaceType,
): PlaceTypeFormSchema {
  if (!placeType) {
    return structuredClone(placeTypeDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: placeType.name ?? "",
    nativeName: placeType.nativeName ?? null,
    code: placeType.code ?? "",
    description: placeType.description ?? null,

    // ======================================================
    // MEDIA
    // ======================================================

    icon: placeType.icon ?? null,
    thumbnail: placeType.thumbnail ?? null,

    // ======================================================
    // DISPLAY
    // ======================================================

    sortOrder: placeType.sortOrder ?? 0,

    // ======================================================
    // STATUS
    // ======================================================

    active: placeType.active ?? true,
  };
}
