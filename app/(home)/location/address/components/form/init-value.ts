import { AddressFormSchema } from "@/app/(home)/location/address/components/form/schema";

import { addressDefaultValues } from "./default-values";

import { Address } from "@/types/location/address";

export function initAddressFormValues(address?: Address): AddressFormSchema {
  if (!address) {
    return structuredClone(addressDefaultValues);
  }

  return {
    // ======================================================
    // ADDRESS
    // ======================================================

    name: address.name ?? null,
    houseNumber: address.houseNumber ?? null,
    street: address.street ?? null,
    wardId: address.wardId ?? null,
    districtId: address.districtId ?? null,
    postcode: address.postcode ?? null,

    // ======================================================
    // LOCATION
    // ======================================================

    countryId: address.countryId ?? "",
    cityId: address.cityId ?? "",
    latitude: address.latitude ?? null,
    longitude: address.longitude ?? null,
    plusCode: address.plusCode ?? null,
    precision: address.precision,

    // ======================================================
    // MEDIA
    // ======================================================

    thumbnail: address.thumbnail ?? "",
    coverImage: address.coverImage ?? "",
    bannerImage: address.bannerImage ?? "",
    images: address.images ?? [],
    video: address.video ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    verified: address.verified ?? false,
    active: address.active ?? false,
  };
}
