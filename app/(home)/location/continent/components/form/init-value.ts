import { ContinentFormSchema } from "@/app/(home)/location/continent/components/form/schema";

import { continentDefaultValues } from "./default-values";

import { Continent } from "@/types/location/country/continent.type";

export function initContinentFormValues(
  continent?: Continent,
): ContinentFormSchema {
  if (!continent) {
    return structuredClone(continentDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: continent.name ?? "",
    nativeName: continent.nativeName ?? null,
    code: continent.code ?? "",
    description: continent.description ?? null,

    // ======================================================
    // MEDIA
    // ======================================================

    thumbnail: continent.thumbnail ?? null,
    coverImage: continent.coverImage ?? null,

    // ======================================================
    // DISPLAY
    // ======================================================

    sortOrder: continent.sortOrder ?? 0,

    // ======================================================
    // STATUS
    // ======================================================

    active: continent.active ?? true,
  };
}
