import { FieldPath } from "react-hook-form";
import { FlyFormSchema } from "../schema/core/fly.schema";

type FlyFieldPath = FieldPath<FlyFormSchema>;

export const flyFieldGroups: Record<string, readonly FlyFieldPath[]> = {
  basic: ["name", "active"],

  airline: [
    "airline.name",
    "airline.legalName",
    "airline.iataCode",
    "airline.icaoCode",
    "airline.callsign",
    "airline.country",
    "airline.website",
    "airline.hotline",
    "airline.email",
    "airline.logo",
    "airline.banner",
    "airline.active",
    "airline.description",

    "airline.images.0.url",
    "airline.images.0.category",
    "airline.images.0.isPrimary",

    "airline.wifiPackage.0.name",
    "airline.wifiPackage.0.dataLimitMb",
    "airline.wifiPackage.0.durationMinutes",
    "airline.wifiPackage.0.amount",

    "airline.addon.0.name",
    "airline.addon.0.description",
    "airline.addon.0.type",
    "airline.addon.0.provider",
    "airline.addon.0.image",
    "airline.addon.0.amount",
    "airline.addon.0.active",
  ],
  trips: [
    // ======================================================
    // TRIP INFORMATION
    // ======================================================

    "trips.0.routeId",
    "trips.0.flightNumber",
    "trips.0.departureTime",
    "trips.0.arrivalTime",
    "trips.0.durationMinutes",
    "trips.0.status",
    "trips.0.availableSeats",
    "trips.0.aircraftId",
    "trips.0.scheduleId",

    // ======================================================
    // INVENTORY
    // ======================================================

    "trips.0.inventory.cabins.0.cabinClass",
    "trips.0.inventory.cabins.0.totalSeats",
    "trips.0.inventory.cabins.0.availableSeats",
    "trips.0.inventory.cabins.0.reservedSeats",
    "trips.0.inventory.cabins.0.blockedSeats",
    "trips.0.inventory.cabins.0.overbookLimit",
    "trips.0.inventory.cabins.0.waitlistSeats",

    // ======================================================
    // OPERATION
    // ======================================================

    "trips.0.operation.status",

    "trips.0.operation.departureTerminal",
    "trips.0.operation.departureGate",

    "trips.0.operation.arrivalTerminal",
    "trips.0.operation.arrivalGate",

    "trips.0.operation.baggageClaim",
    "trips.0.operation.checkInCounter",

    // ======================================================
    // TRACKING
    // ======================================================

    "trips.0.tracking.0.latitude",
    "trips.0.tracking.0.longitude",
    "trips.0.tracking.0.altitudeFt",
    "trips.0.tracking.0.speedKmh",
    "trips.0.tracking.0.heading",
    "trips.0.tracking.0.lastUpdated",

    // ======================================================
    // TIMELINE
    // ======================================================

    "trips.0.operation.timeline.0.type",
    "trips.0.operation.timeline.0.eventTime",
    "trips.0.operation.timeline.0.note",
  ],

  routes: [
    "routes.0.departureAirportId",
    "routes.0.arrivalAirportId",
    "routes.0.distanceKm",
    "routes.0.estimatedDuration",
    "routes.0.routeType",
    "routes.0.directFlight",

    "routes.0.segments.0.segmentOrder",
    "routes.0.segments.0.estimatedDuration",
    "routes.0.segments.0.distanceKm",
  ],

  pricing: [
    "price.fromPrice",
    "price.toPrice",
    "price.originalFromPrice",
    "price.originalToPrice",

    "price.fares.0.name",
    "price.fares.0.cabinClass",
    "price.fares.0.code",
    "price.fares.0.refundable",
    "price.fares.0.changeable",
    "price.fares.0.priorityBoarding",
    "price.fares.0.loungeAccess",
    "price.fares.0.seatSelectionIncluded",
    "price.fares.0.mealsIncluded",
    "price.fares.0.wifiIncluded",
    "price.fares.0.active",

    "price.fares.0.baggage.cabinWeightKg",
    "price.fares.0.baggage.checkedWeightKg",
    "price.fares.0.baggage.extraBaggageAllowed",
    "price.fares.0.baggage.extraBaggagePrice",

    "price.fares.0.breakdown.baseFare",
    "price.fares.0.breakdown.taxes",
    "price.fares.0.breakdown.airportFee",
    "price.fares.0.breakdown.fuelSurcharge",
    "price.fares.0.breakdown.serviceFee",
    "price.fares.0.breakdown.bookingFee",
    "price.fares.0.breakdown.discount",
    "price.fares.0.breakdown.finalPrice",

    "price.fares.0.taxes.0.name",
    "price.fares.0.taxes.0.amount",

    "price.priceRules.0.name",
    "price.priceRules.0.type",
    "price.priceRules.0.percentage",
    "price.priceRules.0.amount",
    "price.priceRules.0.couponCode",
    "price.priceRules.0.minimumSpend",
    "price.priceRules.0.maximumDiscount",
    "price.priceRules.0.validFrom",
    "price.priceRules.0.validTo",
    "price.priceRules.0.active",
  ],

  policies: [
    "policies.cancellation.refundable",
    "policies.cancellation.refundType",
    "policies.cancellation.cancellationFee",
    "policies.cancellation.noShowFee",
    "policies.cancellation.freeCancellationBeforeHours",

    "policies.change.allowed",
    "policies.change.changeFee",
    "policies.change.maxChanges",
    "policies.change.beforeDepartureHours",

    "policies.baggage.cabinIncludedKg",
    "policies.baggage.checkedIncludedKg",
    "policies.baggage.extraAllowed",
    "policies.baggage.extraPricePerKg",

    "policies.boarding.boardingBeforeMinutes",
    "policies.boarding.gateCloseMinutes",
    "policies.boarding.onlineBoardingPass",
    "policies.boarding.printedBoardingPass",

    "policies.passenger.infantAllowed",
    "policies.passenger.childAllowed",
    "policies.passenger.petsAllowed",
    "policies.passenger.unaccompaniedMinor",
    "policies.passenger.wheelchairSupport",
    "policies.passenger.pregnantPassengerAllowed",

    "policies.checkIn.onlineCheckIn",
    "policies.checkIn.opensBeforeHours",
    "policies.checkIn.closesBeforeMinutes",
    "policies.checkIn.airportCheckIn",
    "policies.checkIn.mobileBoardingPass",

    "policies.transit.selfTransfer",
    "policies.transit.baggageTransfer",
    "policies.transit.visaRequiredDuringTransit",
    "policies.transit.minimumConnectionMinutes",

    "policies.visa.visaRequired",
    "policies.visa.passportRequired",
    "policies.visa.passportMinimumValidityMonths",
    "policies.visa.healthDocumentsRequired",
    "policies.visa.note",
  ],

  notice: [
    "notice.title",
    "notice.content",
    "notice.baggageNotice",
    "notice.checkInNotice",
    "notice.visaNotice",
    "notice.covidNotice",
    "notice.refundNotice",
  ],

  images: [
    "images.0.url",
    "images.0.category",
    "images.0.alt",
    "images.0.sortOrder",
    "images.0.isPrimary",
  ],

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

  seo: [
    "name",
    "searchPriority",
    "searchable",
    "featured",
    "tagIds",
  ],
};
