import { FieldPath } from "react-hook-form";
import { FlyFormSchema } from "../schema/core/fly.schema";


type FlyFieldPath = FieldPath<FlyFormSchema>;

export const flyFieldGroups: Record<string, readonly FlyFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================
  basic: [
    "name",
    "active",
    "providerBookingId",
    "serviceTypeId",
    "bookingItemTypeId",
  ],

  // ======================================================
  // AIRLINE
  // ======================================================
  // Chỉ chọn airline có sẵn qua id, KHÔNG lồng sửa entity Airline ở đây.
  airline: ["airlineId"],

  // ======================================================
  // SEO / SEARCH
  // ======================================================
  seo: ["searchPriority", "searchable", "featured", "tagIds"],

  // ======================================================
  // EXTRA MAPPER
  // ======================================================
  flyExtraMapper: [
    "flyExtraMapper.0.extraId",
    "flyExtraMapper.0.active",
    "flyExtraMapper.0.sortOrder",
  ],

  // ======================================================
  // PACKAGE MAPPER
  // ======================================================
  flyPackageMapper: ["flyPackageMapper.0.packageId"],

  // ======================================================
  // POLICIES
  // ======================================================
  policies: [
    "policies.0.policyId",
    "policies.0.valueBoolean",
    "policies.0.valueNumber",
    "policies.0.valueText",
    "policies.0.valueJson",
    "policies.0.active",
  ],

  // ======================================================
  // TRIPS
  // ======================================================
  trips: [
    "routes.0.trips.0.flightNumber",
    "routes.0.trips.0.departureTime",
    "routes.0.trips.0.arrivalTime",
    "routes.0.trips.0.durationMinutes",
    "routes.0.trips.0.status",
    "routes.0.trips.0.availableSeats",
    "routes.0.trips.0.aircraftId",
    "routes.0.trips.0.scheduleId",
  ],

  // ======================================================
  // ROUTES
  // ======================================================
  routes: [
    "routes.0.departureAirportId",
    "routes.0.arrivalAirportId",
    "routes.0.distanceKm",
    "routes.0.estimatedDuration",
    "routes.0.routeTypeId",
    "routes.0.directFlight",

    // Segments
    "routes.0.segments.0.segmentOrder",
    "routes.0.segments.0.estimatedDuration",
    "routes.0.segments.0.distanceKm",
  ],

  // ======================================================
  // PRICING
  // ======================================================
  pricing: [
    "price.fromPrice",
    "price.toPrice",
    "price.originalFromPrice",
    "price.originalToPrice",

    // Fare
    "price.fares.0.name",
    "price.fares.0.code",
    "price.fares.0.cabinClassId", // required trong FlyFareSchema, trước đó bị thiếu
    "price.fares.0.refundable",
    "price.fares.0.changeable",
    "price.fares.0.priorityBoarding",
    "price.fares.0.loungeAccess",
    "price.fares.0.seatSelectionIncluded",
    "price.fares.0.mealsIncluded",
    "price.fares.0.wifiIncluded",
    "price.fares.0.active",

    // Fare taxes
    "price.fares.0.taxes.0.name",
    "price.fares.0.taxes.0.amount",

    // Price rules
    "price.priceRules.0.name",
    "price.priceRules.0.priceRuleTypeId", // required trong FlyPriceRuleSchema, trước đó bị thiếu
    "price.priceRules.0.percentage",
    "price.priceRules.0.amount",
    "price.priceRules.0.couponCode",
    "price.priceRules.0.minimumSpend",
    "price.priceRules.0.maximumDiscount",
    "price.priceRules.0.validFrom",
    "price.priceRules.0.validTo",
    "price.priceRules.0.active",
  ],

  // ======================================================
  // NOTICE
  // ======================================================
  notice: [
    "notice.title",
    "notice.content",
    "notice.baggageNotice",
    "notice.checkInNotice",
    "notice.visaNotice",
    "notice.covidNotice",
    "notice.refundNotice",
  ],

  // ======================================================
  // IMAGES
  // ======================================================
  images: [
    "images.0.mediaId", // required trong FlyImageSchema, trước đó bị thiếu
    "images.0.categoryId",
    "images.0.sortOrder",
    "images.0.isPrimary",
  ],

  // ======================================================
  // SCHEDULE
  // ======================================================
  schedule: [
    "schedule.0.departureTime",
    "schedule.0.arrivalTime",
    "schedule.0.startDate",
    "schedule.0.endDate",
    "schedule.0.aircraftId",
    "schedule.0.active",

    "schedule.0.operatingDays.0",
    "schedule.0.operatingDays.1",
    "schedule.0.operatingDays.2",
    "schedule.0.operatingDays.3",
    "schedule.0.operatingDays.4",
    "schedule.0.operatingDays.5",
    "schedule.0.operatingDays.6",
  ],
};