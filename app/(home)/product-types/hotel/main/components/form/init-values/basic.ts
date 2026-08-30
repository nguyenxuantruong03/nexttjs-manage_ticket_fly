import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { HotelSchemaForm } from "../schema/core/hotel.schema";

export function initHotelBasicValues(
  hotel: Hotel,
): Pick<
  HotelSchemaForm,
  | "name"
  | "status"
  | "serviceTypeId"
  | "bookingItemTypeId"
  | "brandId"
  | "starRatingId"
  | "tagIds"
  | "searchable"
  | "searchPriority"
  | "featured"
  | "information"
> {
  return {
    // BASIC

    name: hotel.name ?? "",

    status: hotel.status,

    serviceTypeId: hotel.serviceTypeId ?? "",

    bookingItemTypeId: hotel.bookingItemTypeId ?? "",

    // BRAND / RATING

    brandId: hotel.brandId ?? null,

    starRatingId: hotel.starRatingId ?? null,

    // SEARCH

    tagIds: hotel.tagIds ?? [],

    searchable: hotel.searchable ?? true,

    searchPriority: hotel.searchPriority ?? 0,

    featured: hotel.featured ?? false,

    // INFORMATION

    information: hotel.information
      ? {
          addressId: hotel.information.addressId ?? "",
          providerBookingId: hotel.information.providerBookingId ?? "",
          tower: hotel.information.tower ?? null,
          floor: hotel.information.floor ?? null,
          unitNumber: hotel.information.unitNumber ?? null,
        }
      : null,
  } satisfies Pick<
    HotelSchemaForm,
    | "name"
    | "status"
    | "serviceTypeId"
    | "bookingItemTypeId"
    | "brandId"
    | "starRatingId"
    | "tagIds"
    | "searchable"
    | "searchPriority"
    | "featured"
    | "information"
  >;
}
