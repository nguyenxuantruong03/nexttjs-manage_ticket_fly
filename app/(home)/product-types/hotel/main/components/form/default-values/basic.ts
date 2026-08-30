import { HotelStatus } from "@/types/product-types/hotel/enum/enums";

import { HotelSchemaForm } from "../schema/core/hotel.schema";

export const hotelBasicDefaultValues = {
  // BASIC

  name: "",

  status: HotelStatus.DRAFT,

  serviceTypeId: "",

  bookingItemTypeId: "",

  // BRAND / RATING

  brandId: null,

  starRatingId: null,

  // SEARCH

  tagIds: [],

  searchable: true,

  searchPriority: 0,

  featured: false,

  // INFORMATION

  information: {
    addressId: "",

    providerBookingId: "",

    tower: null,

    floor: null,

    unitNumber: null,
  },
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
