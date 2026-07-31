import { FieldPath } from "react-hook-form";
import { HotelSchemaForm } from "../schema/core/hotel.schema";

type HotelFieldPath = FieldPath<HotelSchemaForm>;

export const hotelFieldGroups: Record<string, readonly HotelFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: ["name", "status", "searchPriority", "featured", "searchable", "tags"],

  // ======================================================
  // INFORMATION
  // ======================================================

  information: [
    "information.providerBookingId",
    "information.addressId",

    "information.hotelTypeId",

    "information.tower",
    "information.floor",
    "information.unitNumber",
  ],

  // ======================================================
  // MEDIA
  // ======================================================

  medias: [
    "medias.0.mediaAssetId",
    "medias.0.categoryId",

    "medias.0.isPrimary",
    "medias.0.sortOrder",
  ],

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

    // facilities

    "roomTypes.0.facilities.0.facilityId",
    "roomTypes.0.facilities.0.quantity",
    "roomTypes.0.facilities.0.note",
  ],

  // ======================================================
  // INVENTORY
  // ======================================================

  inventories: [
    "inventories.0.roomTypeId",

    // availability

    "inventories.0.availability.availableRooms",

    "inventories.0.availability.lastUpdated",

    // calendar

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
  // RATE PLAN
  // ======================================================

  pricing: [
    "inventories.0.ratePlans.0.typeId",

    "inventories.0.ratePlans.0.mealPlanId",

    "inventories.0.ratePlans.0.name",

    "inventories.0.ratePlans.0.code",

    "inventories.0.ratePlans.0.description",

    "inventories.0.ratePlans.0.refundable",

    "inventories.0.ratePlans.0.active",
  ],

  // ======================================================
  // PRICE
  // ======================================================

  price: [
    "inventories.0.ratePlans.0.price.originalPrice",

    "inventories.0.ratePlans.0.price.averageNightlyPrice",

    "inventories.0.ratePlans.0.price.taxesIncluded",

    "inventories.0.ratePlans.0.price.payAtHotel",

    // breakdown

    "inventories.0.ratePlans.0.price.breakdown.roomRate",

    "inventories.0.ratePlans.0.price.breakdown.nights",

    "inventories.0.ratePlans.0.price.breakdown.taxes",

    "inventories.0.ratePlans.0.price.breakdown.serviceFee",

    "inventories.0.ratePlans.0.price.breakdown.resortFee",

    "inventories.0.ratePlans.0.price.breakdown.cleaningFee",

    "inventories.0.ratePlans.0.price.breakdown.extraFee",

    "inventories.0.ratePlans.0.price.breakdown.discount",

    "inventories.0.ratePlans.0.price.breakdown.includedItems",

    // rules

    "inventories.0.ratePlans.0.price.rules.0.name",

    "inventories.0.ratePlans.0.price.rules.0.type",

    "inventories.0.ratePlans.0.price.rules.0.adjustmentType",

    "inventories.0.ratePlans.0.price.rules.0.value",

    "inventories.0.ratePlans.0.price.rules.0.minimumNights",

    "inventories.0.ratePlans.0.price.rules.0.maximumNights",

    "inventories.0.ratePlans.0.price.rules.0.validFrom",

    "inventories.0.ratePlans.0.price.rules.0.validTo",

    "inventories.0.ratePlans.0.price.rules.0.daysOfWeek",

    "inventories.0.ratePlans.0.price.rules.0.priority",

    "inventories.0.ratePlans.0.price.rules.0.combinable",

    "inventories.0.ratePlans.0.price.rules.0.active",
  ],

  // ======================================================
  // MEAL
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
  ],

  // ======================================================
  // EXTRA
  // ======================================================

  extras: [
    "extras.0.name",

    "extras.0.description",

    "extras.0.typeId",

    "extras.0.isMandatory",

    "extras.0.availableFor",

    "extras.0.maxQuantity",

    "extras.0.active",

    "extras.0.prices.0.name",

    "extras.0.prices.0.price",

    "extras.0.prices.0.active",
  ],

  // ======================================================
  // FACILITY
  // ======================================================

  facilities: ["facilities.0.facilityId"],

  // ======================================================
  // POLICY
  // ======================================================

  policies: [
    "policies.0.hotelId",

    "policies.0.policyId",

    "checkinPolicy.checkInFrom",

    "checkinPolicy.checkInUntil",

    "checkinPolicy.checkOutUntil",

    "checkinPolicy.minimumAge",
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

    "sustainabilities.0.sustainabilityId",
  ],

  // ======================================================
  // BRAND
  // ======================================================

  brand: [
    "brandId",

    "brand.name",

    "brand.description",

    "brand.logo",

    "brand.active",
  ],

  // ======================================================
  // STAR
  // ======================================================

  rating: [
    "starRatingId",

    "starRating.name",

    "starRating.star",

    "starRating.description",
  ],

  // ======================================================
  // SEO
  // ======================================================

  seo: ["tags", "searchable", "featured", "searchPriority"],
};
