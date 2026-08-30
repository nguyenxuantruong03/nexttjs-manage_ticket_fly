import { SearchTagFormSchema } from "./schema";

import { searchTagDefaultValues } from "./default-values";

import { SearchTag } from "@/types/searchs/search/tag.types";

export function initSearchTagFormValues(
  searchTag?: SearchTag,
): SearchTagFormSchema {
  if (!searchTag) {
    return structuredClone(searchTagDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: searchTag.name ?? "",

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      searchTag.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: searchTag.active ?? true,
  };
}
