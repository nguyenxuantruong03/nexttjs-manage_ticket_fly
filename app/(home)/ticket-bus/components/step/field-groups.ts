import { FieldPath } from "react-hook-form";
import { BusFormSchema } from "../schema/core/bus.schema";

type BusFieldPath = FieldPath<BusFormSchema>;

export const busFieldGroups: Record<string, readonly BusFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================
  basic: [
    "providerBookingId",
    "name",
    "searchPriority",
    "active",
    "featured",
    "tagIds",
  ],

  // ======================================================
  // ROUTES
  // ======================================================
  routes: [
    // Route
    "routes.0.departureAddressId",
    "routes.0.arrivalAddressId",
    "routes.0.distanceKm",
    "routes.0.estimatedDuration",
    "routes.0.code",

    // Boarding Points
    "routes.0.boardingPoints.0.addressId",
    "routes.0.boardingPoints.0.name",
    "routes.0.boardingPoints.0.departureTime",
    "routes.0.boardingPoints.0.order",

    // Dropoff Points
    "routes.0.dropoffPoints.0.addressId",
    "routes.0.dropoffPoints.0.name",
    "routes.0.dropoffPoints.0.arrivalTime",
    "routes.0.dropoffPoints.0.order",

    // Stops
    "routes.0.trips.0.stops.0.addressId",
    "routes.0.trips.0.stops.0.arrivalTime",
    "routes.0.trips.0.stops.0.departureTime",
    "routes.0.trips.0.stops.0.stopOrder",

    // Trips
    "routes.0.trips.0.vehicleId",
    "routes.0.trips.0.routeId",
    "routes.0.trips.0.departureTime",
    "routes.0.trips.0.arrivalTime",
  ],

  // ======================================================
  // VEHICLES
  // ======================================================
  vehicles: [
    // Vehicle
    "vehicles.0.type",
    "vehicles.0.status",
    "vehicles.0.name",
    "vehicles.0.manufacturer",
    "vehicles.0.model",
    "vehicles.0.year",
    "vehicles.0.active",

    // Capacity
    "vehicles.0.capacity.totalSeats",
    "vehicles.0.capacity.sleeperBeds",
    "vehicles.0.capacity.cabinRooms",
    "vehicles.0.capacity.luggageCapacityKg",

    // Features
    "vehicles.0.features.airConditioner",
    "vehicles.0.features.wifi",
    "vehicles.0.features.usbCharger",
    "vehicles.0.features.powerOutlet",
    "vehicles.0.features.readingLight",
    "vehicles.0.features.blanket",
    "vehicles.0.features.pillow",
    "vehicles.0.features.drinkingWater",
    "vehicles.0.features.snack",
    "vehicles.0.features.toilet",
    "vehicles.0.features.tv",
    "vehicles.0.features.entertainment",
    "vehicles.0.features.gpsTracking",
    "vehicles.0.features.recliningSeat",
    "vehicles.0.features.massageSeat",
    "vehicles.0.features.wheelchairAccessible",

    // Specification
    "vehicles.0.specification.engineType",
    "vehicles.0.specification.transmission",
    "vehicles.0.specification.fuelType",
    "vehicles.0.specification.suspension",
    "vehicles.0.specification.airConditioning",
    "vehicles.0.specification.wifiAvailable",
    "vehicles.0.specification.toiletAvailable",

    // Vehicle Images
    "vehicles.0.images.0.url",
    "vehicles.0.images.0.category",
    "vehicles.0.images.0.alt",
    "vehicles.0.images.0.sortOrder",
    "vehicles.0.images.0.isPrimary",
  ],

  // ======================================================
  // SEATS
  // ======================================================
  seats: [
    // Layout
    "vehicles.0.seatLayout.0.name",
    "vehicles.0.seatLayout.0.seatRows",
    "vehicles.0.seatLayout.0.seatColumns",

    // Seat Map
    "vehicles.0.seatMap.imageUrl",
    "vehicles.0.seatMap.svgUrl",
    "vehicles.0.seatMap.jsonLayout",

    // Seats
    "vehicles.0.seats.0.seatNumber",
    "vehicles.0.seats.0.type",
    "vehicles.0.seats.0.floor",
    "vehicles.0.seats.0.row",
    "vehicles.0.seats.0.column",

    // Availability
    "routes.0.trips.0.seatAvailability.0.seatId",
    "routes.0.trips.0.seatAvailability.0.status",
    "routes.0.trips.0.seatAvailability.0.availableSeats",
    "routes.0.trips.0.seatAvailability.0.soldSeats",
    "routes.0.trips.0.seatAvailability.0.reservedSeats",
    "routes.0.trips.0.seatAvailability.0.totalSeats",
    "routes.0.trips.0.seatAvailability.0.currentPrice",

    // Inventory Locks
    "vehicles.0.locks.0.vehicleId",
    "vehicles.0.locks.0.tripId",
    "vehicles.0.locks.0.userId",
    "vehicles.0.locks.0.startTime",
    "vehicles.0.locks.0.endTime",
    "vehicles.0.locks.0.expiresAt",
    "vehicles.0.locks.0.releasedAt",
    "vehicles.0.locks.0.quantity",
    "vehicles.0.locks.0.status",
  ],

  // ======================================================
  // PRICING
  // ======================================================
  pricing: [
    // Price
    "price.0.fromPrice",
    "price.0.toPrice",
    "price.0.originalFromPrice",
    "price.0.originalToPrice",
    "price.0.effectiveFrom",
    "price.0.effectiveTo",

    // Breakdown
    "price.0.breakdowns.0.seatType",
    "price.0.breakdowns.0.basePrice",
    "price.0.breakdowns.0.originalPrice",
    "price.0.breakdowns.0.taxes",
    "price.0.breakdowns.0.serviceFee",
    "price.0.breakdowns.0.bookingFee",
    "price.0.breakdowns.0.discount",
    "price.0.breakdowns.0.finalPrice",
    "price.0.breakdowns.0.availableSeats",
    "price.0.breakdowns.0.includedItems",

    // Seat Prices
    "routes.0.trips.0.price.seatPrices.0.seatType",
    "routes.0.trips.0.price.seatPrices.0.price",
    "routes.0.trips.0.price.seatPrices.0.originalPrice",
    "routes.0.trips.0.price.seatPrices.0.taxes",
    "routes.0.trips.0.price.seatPrices.0.serviceFee",
    "routes.0.trips.0.price.seatPrices.0.bookingFee",
    "routes.0.trips.0.price.seatPrices.0.discount",
    "routes.0.trips.0.price.seatPrices.0.finalPrice",
    "routes.0.trips.0.price.seatPrices.0.availableSeats",

    // Rules
    "price.0.rules.0.name",
    "price.0.rules.0.type",
    "price.0.rules.0.priority",
    "price.0.rules.0.combinable",
    "price.0.rules.0.active",
    "price.0.rules.0.percentage",
    "price.0.rules.0.amount",
    "price.0.rules.0.minimumSpend",
    "price.0.rules.0.maximumDiscount",
    "price.0.rules.0.couponCode",
    "price.0.rules.0.startDate",
    "price.0.rules.0.endDate",
  ],

  // ======================================================
  // POLICIES
  // ======================================================
  policies: [
    // Boarding
    "policies.boarding.checkInBeforeMinutes",
    "policies.boarding.boardingGateCloseMinutes",
    "policies.boarding.digitalTicketAccepted",
    "policies.boarding.printedTicketRequired",

    // Cancellation
    "policies.cancellation.refundable",
    "policies.cancellation.refundType",
    "policies.cancellation.freeCancellation",
    "policies.cancellation.freeCancellationBeforeHours",
    "policies.cancellation.cancellationFee",
    "policies.cancellation.noShowFee",

    // Change
    "policies.change.type",
    "policies.change.changeFee",
    "policies.change.maxChanges",
    "policies.change.changeBeforeDepartureHours",

    // Luggage
    "policies.luggage.includedLuggage",
    "policies.luggage.unit",
    "policies.luggage.extraLuggageAllowed",
    "policies.luggage.extraLuggageFee",

    // Child
    "policies.child.freeAgeUnder",
    "policies.child.childTicketAgeFrom",
    "policies.child.childTicketAgeTo",
    "policies.child.childDiscountPercent",

    // Passenger
    "policies.passenger.petsAllowed",
    "policies.passenger.smokingAllowed",
    "policies.passenger.foodAllowed",
    "policies.passenger.alcoholAllowed",
    "policies.passenger.wheelchairAccessible",
    "policies.passenger.specialAssistanceAvailable",
  ],

  // ======================================================
  // IMAGES
  // ======================================================
  images: [
    "images.0.url",
    "images.0.category",
    "images.0.alt",
    "images.0.sortOrder",
    "images.0.isPrimary",
  ],

  // ======================================================
  // SCHEDULE
  // ======================================================
  schedule: [
    "routes.0.trips.0.departureTime",
    "routes.0.trips.0.arrivalTime",
    "routes.0.estimatedDuration",
    "routes.0.distanceKm",

    "routes.0.trips.0.routeId",
    "routes.0.trips.0.vehicleId",
    "routes.0.trips.0.status",
    "routes.0.trips.0.boardingStatus",
  ],
};
