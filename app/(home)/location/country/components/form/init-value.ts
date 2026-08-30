import { CountryFormSchema } from "@/app/(home)/location/country/components/form/schema";

import { countryDefaultValues } from "./default-values";

import { Country } from "@/types/location/country/country";

export function initCountryFormValues(country?: Country): CountryFormSchema {
  if (!country) {
    return structuredClone(countryDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: country.name ?? "",
    currencyId: country.currencyId ?? "",
    officialName: country.officialName ?? null,
    code: country.code ?? "",
    iso2: country.iso2 ?? "",
    iso3: country.iso3 ?? "",
    phoneCode: country.phoneCode ?? null,
    capital: country.capital ?? null,

    // ======================================================
    // LOCATION
    // ======================================================

    continentId: country.continentId ?? "",
    timezoneId: country.timezoneId ?? null,

    // ======================================================
    // MEDIA
    // ======================================================

    flag: country.flag ?? null,
    thumbnail: country.thumbnail ?? "",
    coverImage: country.coverImage ?? "",
    bannerImage: country.bannerImage ?? "",
    images: country.images ?? [],
    video: country.video ?? "",

    // ======================================================
    // SEARCH
    // ======================================================

    tagIds: country.tags?.map((tag) => tag.id) ?? [],

    languageIds: country.languages?.map((language) => language.id) ?? [],

    searchPriority: country.searchPriority ?? 0,
    featured: country.featured ?? false,
    searchable: country.searchable ?? true,

    // ======================================================
    // STATUS
    // ======================================================

    active: country.active ?? true,
  };
}
