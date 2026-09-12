import { FieldPath } from "react-hook-form";
import { HotelSchemaForm } from "../form/schema/core/hotel.schema";

type HotelFieldPath = FieldPath<HotelSchemaForm>;

/**
 * Assumption noted: HotelSchema imports `HotelMediaSchema` from
 * "./hotel-media.types" (capitalized, different file) for the `medias`
 * field, while this same schema file also defines a lowercase
 * `hotelMediaSchema` with identical fields (mediaId, categoryId, isPrimary,
 * sortOrder). Treated as the same shape since no conflicting definition was
 * given — flag this if `HotelMediaSchema` actually differs.
 */
export const hotelFieldGroups: Record<string, readonly HotelFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "name",
    "status",
    "serviceTypeId",
    "bookingItemTypeId",
    "searchPriority",
    "featured",
    "searchable",
  ],

  // ======================================================
  // INFORMATION
  // ======================================================

  information: [
    "information.providerBookingId",
    "information.addressId",

    "information.tower",
    "information.floor",
    "information.unitNumber",
  ],

  // ======================================================
  // MEDIA (hotel-level)
  // ======================================================

  media: [
    "medias.0.mediaId",
    "medias.0.categoryId",
    "medias.0.isPrimary",
    "medias.0.sortOrder",
  ],

  // ======================================================
  // HOTEL FACILITIES (top-level hotelFacilityMapper)
  // Note: distinct from roomTypes.0.facilities
  // ======================================================

  facilities: ["facilities.0.facilityId"],

  // ======================================================
  // ROOM TYPES
  // ======================================================

  rooms: [
    "roomTypes.0.categoryId",
    "roomTypes.0.bathroomTypeId",
    "roomTypes.0.viewId",

    "roomTypes.0.code",
    "roomTypes.0.name",
    "roomTypes.0.description",

    "roomTypes.0.roomSize",
    "roomTypes.0.bedCount",
    "roomTypes.0.bathroomCount",
    "roomTypes.0.floor",

    "roomTypes.0.maxGuests",
    "roomTypes.0.maxAdults",
    "roomTypes.0.maxChildren",

    "roomTypes.0.smokingAllowed",
    "roomTypes.0.balcony",
    "roomTypes.0.kitchen",
    "roomTypes.0.accessible",

    "roomTypes.0.active",
    "roomTypes.0.sortOrder",

    // beds
    "roomTypes.0.bedTypes.0.bedTypeId",
    "roomTypes.0.bedTypes.0.quantity",

    // room-level facilities
    "roomTypes.0.facilities.0.facilityId",
    "roomTypes.0.facilities.0.quantity",
    "roomTypes.0.facilities.0.note",

    // room media
    "roomTypes.0.medias.0.mediaId",
    "roomTypes.0.medias.0.categoryId",
    "roomTypes.0.medias.0.isPrimary",
    "roomTypes.0.medias.0.sortOrder",
  ],

  // ======================================================
  // INVENTORY / RATE PLAN / AVAILABILITY / PRICE
  //
  // Cấu trúc thật (theo hotelInventorySchema, hotelRatePlanSchema,
  // HotelRoomPriceSchema, hotelRoomPriceBreakdownSchema,
  // HotelRoomPriceRuleSchema, hotelAvailabilitySchema,
  // hotelAvailabilityCalendarSchema đã cung cấp):
  //
  //   inventories[] (1 dòng = 1 roomType + tồn kho + rate plan của nó)
  //     ├─ roomTypeId
  //     ├─ ratePlans[]
  //     │   ├─ name/code/description, typeId, mealPlanId, refundable, active
  //     │   ├─ policies[].policyId
  //     │   ├─ cancellationPolicy { freeCancellation, beforeHours, cancellationFee }
  //     │   └─ price
  //     │       ├─ originalPrice, averageNightlyPrice, taxesIncluded, payAtHotel
  //     │       ├─ breakdown { roomRate, nights, taxes, serviceFee, resortFee,
  //     │       │                cleaningFee, discount, includedItems[] }
  //     │       └─ rules[] { name, priceRuleTypeId, adjustmentType, value,
  //     │                     minimumNights, maximumNights, validFrom, validTo,
  //     │                     daysOfWeek[], priority, combinable, active }
  //     └─ availability
  //         ├─ availableRooms, lastUpdated
  //         └─ calendar[] { date, totalRooms, remainingRooms, available,
  //                          priceOverride, stopSell, closed, minimumStay,
  //                          closedToArrival, closedToDeparture, note }
  // ======================================================

  inventories: [
    "inventories.0.roomTypeId",

    // -- rate plans --
    "inventories.0.ratePlans.0.name",
    "inventories.0.ratePlans.0.code",
    "inventories.0.ratePlans.0.description",
    "inventories.0.ratePlans.0.typeId",
    "inventories.0.ratePlans.0.mealPlanId",
    "inventories.0.ratePlans.0.refundable",
    "inventories.0.ratePlans.0.active",

    "inventories.0.ratePlans.0.policies.0.policyId",

    "inventories.0.ratePlans.0.cancellationPolicy.freeCancellation",
    "inventories.0.ratePlans.0.cancellationPolicy.beforeHours",
    "inventories.0.ratePlans.0.cancellationPolicy.cancellationFee",

    // -- price --
    "inventories.0.ratePlans.0.price.originalPrice",
    "inventories.0.ratePlans.0.price.averageNightlyPrice",
    "inventories.0.ratePlans.0.price.taxesIncluded",
    "inventories.0.ratePlans.0.price.payAtHotel",

    "inventories.0.ratePlans.0.price.effectiveFrom",
    "inventories.0.ratePlans.0.price.effectiveTo",

    "inventories.0.ratePlans.0.price.breakdown.roomRate",
    "inventories.0.ratePlans.0.price.breakdown.nights",
    "inventories.0.ratePlans.0.price.breakdown.taxes",
    "inventories.0.ratePlans.0.price.breakdown.serviceFee",
    "inventories.0.ratePlans.0.price.breakdown.resortFee",
    "inventories.0.ratePlans.0.price.breakdown.cleaningFee",
    "inventories.0.ratePlans.0.price.breakdown.discount",
    "inventories.0.ratePlans.0.price.breakdown.includedItems.0",

    "inventories.0.ratePlans.0.price.priceRules.0.name",
    "inventories.0.ratePlans.0.price.priceRules.0.priceRuleTypeId",
    "inventories.0.ratePlans.0.price.priceRules.0.adjustmentType",
    "inventories.0.ratePlans.0.price.priceRules.0.value",
    "inventories.0.ratePlans.0.price.priceRules.0.minimumNights",
    "inventories.0.ratePlans.0.price.priceRules.0.maximumNights",
    "inventories.0.ratePlans.0.price.priceRules.0.validFrom",
    "inventories.0.ratePlans.0.price.priceRules.0.validTo",
    "inventories.0.ratePlans.0.price.priceRules.0.daysOfWeek.0",
    "inventories.0.ratePlans.0.price.priceRules.0.priority",
    "inventories.0.ratePlans.0.price.priceRules.0.combinable",
    "inventories.0.ratePlans.0.price.priceRules.0.active",

    // -- availability --
    "inventories.0.availability.availableRooms",
    "inventories.0.availability.lastUpdated",

    "inventories.0.availability.calendar.0.date",
    "inventories.0.availability.calendar.0.totalRooms",
    "inventories.0.availability.calendar.0.remainingRooms",
    "inventories.0.availability.calendar.0.available",
    "inventories.0.availability.calendar.0.priceOverride",
    "inventories.0.availability.calendar.0.stopSell",
    "inventories.0.availability.calendar.0.closed",
    "inventories.0.availability.calendar.0.minimumStay",
    "inventories.0.availability.calendar.0.closedToArrival",
    "inventories.0.availability.calendar.0.closedToDeparture",
    "inventories.0.availability.calendar.0.note",
  ],

  // ======================================================
  // MEAL / DINING
  // ======================================================

  meal: [
    "mealOptions.0.mealTypeId",
    "mealOptions.0.serviceTypeId",

    "mealOptions.0.name",
    "mealOptions.0.openingHours",
    "mealOptions.0.capacity",
    "mealOptions.0.description",
    "mealOptions.0.location",
    "mealOptions.0.dressCode",
    "mealOptions.0.reservationRequired",
    "mealOptions.0.active",

    "mealOptions.0.prices.0.name",
    "mealOptions.0.prices.0.price",
    "mealOptions.0.prices.0.currency",
    "mealOptions.0.prices.0.active",
  ],

  // ======================================================
  // EXTRAS
  // ======================================================

  extras: [
    "hotelExtraMapper.0.extraId",
    "hotelExtraMapper.0.active",
    "hotelExtraMapper.0.sortOrder",
  ],

  // ======================================================
  // POLICY (check-in/out settings)
  // ======================================================

  policies: [
    "checkinPolicy.checkInFrom",
    "checkinPolicy.checkInUntil",
    "checkinPolicy.checkOutUntil",
    "checkinPolicy.minimumAge",
  ],

  // ======================================================
  // POLICY MAPPER (top-level `policies` array — distinct from checkinPolicy)
  // ======================================================

  hotelPolicyMapper: [
    "policies.0.policyId",
    "policies.0.valueBoolean",
    "policies.0.valueNumber",
    "policies.0.valueText",
    "policies.0.valueJson",
    "policies.0.active",
  ],

  // ======================================================
  // DETAILS
  // ======================================================

  details: [
    "descriptions.0.title",
    "descriptions.0.content",

    "contacts.phone",
    "contacts.email",
    "contacts.website",

    "openingHours.0.service",
    "openingHours.0.day",
    "openingHours.0.openTime",
    "openingHours.0.closeTime",

    "accessibilities.0.accessibilityId",

    "awards.0.name",
    "awards.0.issuer",
    "awards.0.awardDate",
    "awards.0.year",
    "awards.0.description",
    "awards.0.awardUrl",
    "awards.0.active",
    "awards.0.medias.0.mediaId",
    "awards.0.medias.0.isPrimary",
    "awards.0.medias.0.sortOrder",

    "sustainabilities.0.sustainabilityId",
  ],

  // ======================================================
  // BRAND
  // HotelSchema has no relation field `brand`, only `brandId`.
  // If you need brand details in the form, fetch them separately (e.g. via
  // a lookup keyed by brandId) rather than registering them as form fields.
  // ======================================================

  brand: ["brandId"],

  // ======================================================
  // STAR RATING
  // Same as `brand` — HotelSchema only has `starRatingId`, no `starRating`
  // relation field on the form schema.
  // ======================================================

  rating: ["starRatingId"],

  // ======================================================
  // PACKAGES
  // ======================================================

  packages: ["hotelPackageMapper.0.packageId"],

  // ======================================================
  // SEO
  // ======================================================

  seo: ["tagIds", "searchable", "featured", "searchPriority"],
};
