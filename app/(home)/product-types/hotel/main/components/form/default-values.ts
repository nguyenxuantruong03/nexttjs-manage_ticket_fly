import { HotelStatus } from "@/types/product-types/hotel/enum/enums";

import { HotelSchemaForm } from "../schema/core/hotel.schema";

/**
 * Rebuilt to match hotelFieldGroups exactly — every array/object the field
 * groups drill into now ships with a seed row/object (instead of `[]` /
 * `null`), using only the exact fields hotelFieldGroups actually reads.
 *
 * Fixes applied vs. the previous hotelDefaultValues:
 * - `medias` (hotel-level, top of HotelSchema): was missing entirely — the
 *   "media" group reads mediaId/categoryId/isPrimary/sortOrder directly on
 *   it. Added with one seed row.
 * - `facilities`: was `[]`; the "facilities" group only reads `.facilityId`
 *   — seeded with one row.
 * - `roomTypes`: was `[]`; the "rooms" group reads a large set of fields
 *   (category/bathroom/view ids, size/bed/bathroom/floor counts, guest
 *   limits, flags, plus nested bedTypes/facilities/medias) — seeded with
 *   one fully-shaped row.
 * - `hotelPackageMapper`: was `[]`; the "packages" group reads `.packageId`
 *   — seeded with one row.
 * - `policies` (top-level policy mapper, distinct from checkinPolicy): was
 *   `[]`; the "hotelPolicyMapper" group reads policyId/valueBoolean/
 *   valueNumber/valueText/valueJson/active — seeded with one row.
 * - `checkinPolicy`: was `null`; the "policies" group edits
 *   checkInFrom/checkInUntil/checkOutUntil/minimumAge directly on it, so
 *   it's now a populated object instead.
 * - `accessibilities`, `sustainabilities`, `openingHours`, `descriptions`:
 *   were all `[]`; the "details" group drills into each — all seeded with
 *   one row.
 * - `awards`: was `[]`; the "details" group reads name/issuer/awardDate/
 *   year/description/awardUrl/active plus nested medias.0.mediaId/
 *   isPrimary/sortOrder — seeded with one row incl. nested media.
 * - `hotelExtraMapper`: was `[]`; the "extras" group reads extraId/active/
 *   sortOrder — seeded with one row.
 * - `mealOptions`: was `[]`; the "meal" group reads a full set of dining
 *   fields plus nested prices.0.name/price/currency/active — seeded with
 *   one row incl. nested price.
 * - `contacts`: was `null`; the "details" group edits phone/email/website
 *   directly on it, so it's now a populated object instead.
 * - `inventories`: left as `[]` — hotelFieldGroups has NO group at all for
 *   this field (hotelInventorySchema was never provided), so there is
 *   nothing to seed against. Send that schema to fill it in correctly.
 */
export const hotelDefaultValues: HotelSchemaForm = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",
  status: HotelStatus.DRAFT,
  serviceTypeId: "",
  bookingItemTypeId: "",

  // ======================================================
  // BRAND / RATING
  // ======================================================

  brandId: null,
  starRatingId: null,

  // ======================================================
  // SEARCH
  // ======================================================

  tagIds: [],
  searchable: true,
  searchPriority: 0,
  featured: false,

  // ======================================================
  // INFORMATION
  // ======================================================

  information: {
    addressId: "",
    providerBookingId: "",
    tower: null,
    floor: null,
    unitNumber: null,
  },

  // ======================================================
  // MEDIA (hotel-level)
  // ======================================================

  medias: [
    {
      mediaId: "",
      categoryId: "",
      isPrimary: true,
      sortOrder: 0,
    },
  ],

  // ======================================================
  // INVENTORY
  // ======================================================

  // LƯU Ý: hotelInventorySchema chưa được cung cấp và hotelFieldGroups
  // không có group nào cho field này — giữ mảng rỗng.
  inventories: [],

  // ======================================================
  // ROOM TYPES
  // ======================================================

  roomTypes: [
    {
      categoryId: "",
      bathroomTypeId: "",
      viewId: "",

      code: "",
      name: "",
      description: "",

      roomSize: undefined,
      bedCount: undefined,
      bathroomCount: undefined,
      floor: undefined,

      maxGuests: undefined,
      maxAdults: undefined,
      maxChildren: undefined,

      smokingAllowed: false,
      balcony: false,
      kitchen: false,
      accessible: false,

      active: true,
      sortOrder: 0,

      bedTypes: [
        {
          bedTypeId: "",
          quantity: 1,
        },
      ],

      facilities: [
        {
          facilityId: "",
          quantity: 1,
          note: "",
        },
      ],

      medias: [
        {
          mediaId: "",
          categoryId: "",
          isPrimary: true,
          sortOrder: 0,
        },
      ],
    },
  ],

  // ======================================================
  // PACKAGE
  // ======================================================

  hotelPackageMapper: [{ packageId: "" }],

  // ======================================================
  // FACILITIES (hotel-level)
  // ======================================================

  facilities: [{ facilityId: "" }],

  // ======================================================
  // POLICIES (policy mapper — distinct from checkinPolicy below)
  // ======================================================

  policies: [
    {
      policyId: "",
      valueBoolean: false,
      valueNumber: undefined,
      valueText: "",
      valueJson: undefined,
      active: true,
    },
  ],

  checkinPolicy: {
    checkInFrom: "",
    checkInUntil: "",
    checkOutUntil: "",
    minimumAge: undefined,
  },

  // ======================================================
  // ACCESSIBILITY
  // ======================================================

  accessibilities: [{ accessibilityId: "" }],

  // ======================================================
  // AWARDS
  // ======================================================

  awards: [
    {
      name: "",
      issuer: "",
      awardDate: new Date(),
      year: undefined,
      description: "",
      awardUrl: "",
      active: true,

      medias: [
        {
          mediaId: "",
          isPrimary: true,
          sortOrder: 0,
        },
      ],
    },
  ],

  // ======================================================
  // EXTRAS
  // ======================================================

  hotelExtraMapper: [
    {
      extraId: "",
      active: true,
      sortOrder: 0,
    },
  ],

  // ======================================================
  // DINING
  // ======================================================

  mealOptions: [
    {
      mealTypeId: "",
      serviceTypeId: "",

      name: "",
      openingHours: "",
      capacity: undefined,
      description: "",
      location: "",
      dressCode: "",
      reservationRequired: false,
      active: true,

      prices: [
        {
          name: "",
          price: 0,
          currency: "",
          active: true,
        },
      ],
    },
  ],

  // ======================================================
  // OPENING HOURS
  // ======================================================

  openingHours: [
    {
      service: "",
      day: "",
      openTime: "",
      closeTime: "",
    },
  ],

  // ======================================================
  // DESCRIPTIONS
  // ======================================================

  descriptions: [
    {
      title: "",
      content: "",
      sortOrder: 0
    },
  ],

  // ======================================================
  // CONTACT
  // ======================================================

  contacts: {
    phone: "",
    email: "",
    website: "",
  },

  // ======================================================
  // SUSTAINABILITY
  // ======================================================

  sustainabilities: [{ sustainabilityId: "" }],
};
