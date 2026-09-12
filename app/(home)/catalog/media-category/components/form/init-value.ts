import { MediaCategoryFormSchema } from "./schema";

import { mediaCategoryDefaultValues } from "./default-values";

import { MediaCategory } from "@/types/common/catalog/media-category";

export function initMediaCategoryFormValues(
  mediaCategory?: MediaCategory,
): MediaCategoryFormSchema {
  if (!mediaCategory) {
    return structuredClone(mediaCategoryDefaultValues);
  }

  return {
    name: mediaCategory.name ?? "",

    description: mediaCategory.description ?? null,

    icon: mediaCategory.icon ?? null,

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      mediaCategory.bookingTypes?.map(
        (bookingType) => bookingType.id,
      ) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: mediaCategory.active ?? true,

    sortOrder: mediaCategory.sortOrder ?? 0,
  };
}