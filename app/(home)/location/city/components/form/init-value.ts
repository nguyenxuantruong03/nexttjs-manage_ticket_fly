import { CityFormSchema } from "@/app/(home)/location/city/components/form/schema";

import { cityDefaultValues } from "./default-values";

import { City } from "@/types/location/city";

export function initCityFormValues(city?: City): CityFormSchema {
  if (!city) {
    return structuredClone(cityDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: city.name ?? "",
    nativeName: city.nativeName ?? "",
    code: city.code ?? "",
    iataCode: city.iataCode ?? "",
    subtitle: city.subtitle ?? "",
    shortDescription: city.shortDescription ?? "",
    description: city.description ?? "",

    // ======================================================
    // COUNTRY
    // ======================================================

    countryId: city.countryId ?? "",
    administrativeArea: city.administrativeArea ?? "",
    region: city.region ?? "",
    isCapital: city.isCapital ?? false,

    // ======================================================
    // LOCATION
    // ======================================================

    latitude: city.latitude ?? undefined,
    longitude: city.longitude ?? undefined,
    elevation: city.elevation ?? undefined,
    timezoneId: city.timezoneId ?? "",

    // ======================================================
    // SEARCH
    // ======================================================

    searchPriority: city.searchPriority ?? 0,
    displayOrder: city.displayOrder ?? 0,
    popularityScore: city.popularityScore ?? 0,
    featured: city.featured ?? false,
    popular: city.popular ?? false,
    searchable: city.searchable ?? true,

    tagIds: city.tags?.map((tag) => tag.id) ?? [],

    // ======================================================
    // MEDIA
    // ======================================================

    thumbnail: city.thumbnail ?? "",
    coverImage: city.coverImage ?? "",
    bannerImage: city.bannerImage ?? "",
    images: city.images ?? [],
    video: city.video ?? "",

    // ======================================================
    // TRAVEL
    // ======================================================

    bestMonths: city.bestMonths ?? [],
    rainyMonths: city.rainyMonths ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    verified: city.verified ?? false,
    active: city.active ?? false,
  };
}
