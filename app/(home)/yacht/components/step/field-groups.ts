import { FieldPath } from "react-hook-form";
import { YachtFormSchema } from "../schema/core/yacht.schema";

type YachtFieldPath = FieldPath<YachtFormSchema>;

export const yachtFieldGroups: Record<string, readonly YachtFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "providerBookingId",

    "name",
    "slug",

    "searchText",
    "searchPriority",

    "aliases.0",
    "keywords.0",
    "tags.0",

    "notice.important",
    "notice.beforeBooking",
    "notice.afterBooking",
    "notice.safetyNotice",

    "active",
    "featured",
    "searchable",

    "marina.0.name",
    "marina.0.addressId",
    "marina.0.city",
    "marina.0.country",
    "marina.0.contactPhone",
    "marina.0.operatingHours",
  ],

  // ======================================================
  // VEHICLE
  // ======================================================

  vehicle: [
    "vehicle.name",
    "vehicle.manufacturer",
    "vehicle.model",
    "vehicle.year",
    "vehicle.registrationNumber",

    "vehicle.lengthMeter",
    "vehicle.widthMeter",
    "vehicle.speedKnots",

    "vehicle.fuelType",
    "vehicle.condition",

    // capacity
    "vehicle.capacity.guestCapacity",
    "vehicle.capacity.overnightCapacity",
    "vehicle.capacity.cabinCount",
    "vehicle.capacity.bathroomCount",
    "vehicle.capacity.crewCapacity",

    // specification
    "vehicle.specification.enginePowerHp",
    "vehicle.specification.cruisingSpeedKnots",
    "vehicle.specification.maxSpeedKnots",
    "vehicle.specification.fuelCapacityLiter",
    "vehicle.specification.rangeNm",

    // facilities
    "vehicle.facilities.wifi",
    "vehicle.facilities.bluetooth",
    "vehicle.facilities.tv",
    "vehicle.facilities.soundSystem",
    "vehicle.facilities.kitchen",
    "vehicle.facilities.refrigerator",
    "vehicle.facilities.coffeeMachine",
    "vehicle.facilities.bar",
    "vehicle.facilities.jacuzzi",
    "vehicle.facilities.swimmingPlatform",
    "vehicle.facilities.sunDeck",
    "vehicle.facilities.airConditioning",
    "vehicle.facilities.heating",
    "vehicle.facilities.shower",
    "vehicle.facilities.toilet",
    "vehicle.facilities.fishingEquipment",
    "vehicle.facilities.snorkelingEquipment",
    "vehicle.facilities.divingEquipment",

    // safety
    "vehicle.safetyEquipment.lifeJacket",
    "vehicle.safetyEquipment.lifeRaft",
    "vehicle.safetyEquipment.fireExtinguisher",
    "vehicle.safetyEquipment.fireAlarm",
    "vehicle.safetyEquipment.firstAidKit",
    "vehicle.safetyEquipment.gps",
    "vehicle.safetyEquipment.radar",
    "vehicle.safetyEquipment.emergencyRadio",
    "vehicle.safetyEquipment.insurance",

    // images
    "vehicle.images.0.url",
    "vehicle.images.0.sortOrder",
    "vehicle.images.0.isPrimary",
  ],

  // ======================================================
  // MARINA
  // ======================================================

  marina: [
    "marina.0.name",
    "marina.0.addressId",
    "marina.0.city",
    "marina.0.country",
    "marina.0.contactPhone",
    "marina.0.operatingHours",

    "marina.0.latitude",
    "marina.0.longitude",

    "marina.0.marinaFacilities.fuelStation",
    "marina.0.marinaFacilities.restaurant",
    "marina.0.marinaFacilities.cafe",
    "marina.0.marinaFacilities.parking",
    "marina.0.marinaFacilities.waitingLounge",
    "marina.0.marinaFacilities.toilet",
    "marina.0.marinaFacilities.shower",
    "marina.0.marinaFacilities.drinkingWater",
    "marina.0.marinaFacilities.electricity",
    "marina.0.marinaFacilities.wifi",
    "marina.0.marinaFacilities.security",
    "marina.0.marinaFacilities.cctv",
    "marina.0.marinaFacilities.luggageStorage",
    "marina.0.marinaFacilities.convenienceStore",
    "marina.0.marinaFacilities.atm",
    "marina.0.marinaFacilities.customs",
    "marina.0.marinaFacilities.immigration",
  ],

  // ======================================================
  // ROUTES
  // ======================================================

  routes: [
    "routes.0.departureMarinaId",
    "routes.0.destinationMarinaId",
    "routes.0.destinationName",

    "routes.0.distanceNm",
    "routes.0.durationMinutes",

    "routes.0.active",

    "routes.0.stops.0.name",
    "routes.0.stops.0.addressId",
    "routes.0.stops.0.stopDurationMinutes",
    "routes.0.stops.0.order",

    "routes.0.trip.0.routeId",
    "routes.0.trip.0.departureTime",
    "routes.0.trip.0.arrivalTime",
  ],

  // ======================================================
  // TRIPS
  // ======================================================

  trips: [
    "trips.0.routeId",

    "trips.0.departureTime",
    "trips.0.arrivalTime",

    "trips.0.status",

    "trips.0.maxGuests",

    "trips.0.schedule.repeatType",
    "trips.0.schedule.daysOfWeek.0",
    "trips.0.schedule.startDate",
    "trips.0.schedule.endDate",
    "trips.0.schedule.departureTime",

    "trips.0.price.amount",
    "trips.0.price.originalAmount",
    "trips.0.price.tax",
    "trips.0.price.serviceFee",
    "trips.0.price.discount",
    "trips.0.price.finalAmount",

    "availability.calendar.0.date",
    "availability.calendar.0.available",
    "availability.calendar.0.booked",
    "availability.calendar.0.stopSell",

    "locks.0.availabilityId",
    "locks.0.tripId",
    "locks.0.userId",
    "locks.0.quantity",
    "locks.0.status",
    "locks.0.startTime",
    "locks.0.endTime",
    "locks.0.expiresAt",
    "locks.0.releasedAt",
  ],

  // ======================================================
  // PRICING
  // ======================================================

  pricing: [
    "price.pricingType",

    "price.basePrices.0.name",
    "price.basePrices.0.duration",
    "price.basePrices.0.durationType",
    "price.basePrices.0.minGuests",
    "price.basePrices.0.maxGuests",
    "price.basePrices.0.originalPrice",
    "price.basePrices.0.includedItems.0",

    "price.fees.0.type",
    "price.fees.0.amount",
    "price.fees.0.mandatory",
    "price.fees.0.description",

    "price.discounts.0.type",
    "price.discounts.0.percentage",
    "price.discounts.0.amount",
    "price.discounts.0.startDate",
    "price.discounts.0.endDate",
    "price.discounts.0.active",

    "packages.0.name",
    "packages.0.description",
    "packages.0.duration",
    "packages.0.durationType",
    "packages.0.maxGuests",
    "packages.0.price",
    "packages.0.active",
  ],

  // ======================================================
  // PACKAGES
  // ======================================================

  packages: [
    "packages.0.name",
    "packages.0.description",
    "packages.0.duration",
    "packages.0.durationType",
    "packages.0.maxGuests",
    "packages.0.price",
    "packages.0.active",

    "packages.0.includedItems.0",

    "packages.0.extras.0.packageId",
    "packages.0.extras.0.extraId",

    "packages.0.images.0.url",
    "packages.0.images.0.sortOrder",
  ],

  // ======================================================
  // EXTRAS
  // ======================================================

  extras: [
    "extras.0.name",
    "extras.0.description",
    "extras.0.category",
    "extras.0.pricingType",
    "extras.0.price",
    "extras.0.active",

    "extras.0.bookingExtras.0.name",
    "extras.0.bookingExtras.0.price",

    "extras.0.packageExtras.0.packageId",
    "extras.0.packageExtras.0.extraId",

    "extras.0.images.0.url",
    "extras.0.images.0.sortOrder",
  ],

  // ======================================================
  // POLICIES
  // ======================================================

  policies: [
    "policies.booking.instantConfirmation",
    "policies.booking.advanceBookingHours",
    "policies.booking.minimumBookingDuration",
    "policies.booking.modificationAllowed",

    "policies.cancellation.refundable",
    "policies.cancellation.freeCancellation",
    "policies.cancellation.freeCancellationBeforeHours",
    "policies.cancellation.cancellationType",
    "policies.cancellation.refundPercentage",
    "policies.cancellation.cancellationFee",
    "policies.cancellation.noShowFee",

    "policies.passenger.minimumAge",
    "policies.passenger.passportRequired",
    "policies.passenger.identityRequired",
    "policies.passenger.nationalityRestriction.0",
    "policies.passenger.childAllowed",
    "policies.passenger.infantAllowed",
    "policies.passenger.pregnantPassengerAllowed",

    "policies.luggage.allowed",
    "policies.luggage.maxWeightKg",
    "policies.luggage.maxPieces",
    "policies.luggage.oversizedAllowed",
    "policies.luggage.note",

    "policies.waiting.freeWaitingMinutes",
    "policies.waiting.extraWaitingFeePerHour",
    "policies.waiting.maximumWaitingHours",

    "policies.meetAndGreet.available",
    "policies.meetAndGreet.pickupSign",
    "policies.meetAndGreet.staffLanguage.0",
    "policies.meetAndGreet.meetingPoint",

    "policies.flightSupport.airportPickup",
    "policies.flightSupport.flightNumberRequired",
    "policies.flightSupport.flightDelayMonitoring",
  ],

  // ======================================================
  // CREW
  // ======================================================

  crew: [
    "crew.0.name",
    "crew.0.role",
    "crew.0.avatar",
    "crew.0.experienceYears",
    "crew.0.languages.0",
  ],

  // ======================================================
  // IMAGES
  // ======================================================

  images: [
    "image.0.url",
    "image.0.category",
    "image.0.isPrimary",
    "image.0.sortOrder",

    "vehicle.images.0.url",
    "vehicle.images.0.category",
    "vehicle.images.0.isPrimary",
    "vehicle.images.0.sortOrder",

    "notice.important",
    "notice.beforeBooking",
    "notice.afterBooking",
    "notice.safetyNotice",
  ],

  // ======================================================
  // SETTINGS
  // ======================================================

  settings: [
    "active",
    "featured",
    "searchable",

    "searchPriority",

    "name",
    "slug",
    "searchText",

    "aliases.0",
    "keywords.0",
    "tags.0",

    "providerBookingId",
  ],
};
