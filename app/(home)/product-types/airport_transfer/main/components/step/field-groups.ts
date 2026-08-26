export const airportTransferFieldGroups = {
  basic: [
    "providerBookingId",
    "name",
    "serviceTypeId",
    "bookingItemTypeId",
    "instantConfirmation",
    "active",

    "notice.title",
    "notice.color",
    "notice.icon",
    "notice.priority",
    "notice.active",
    "notice.description",
  ] as const,

  route: [
    "routes.0.routeTypeId",
    "routes.0.departureAddressId",
    "routes.0.arrivalAddressId",
    "routes.0.distanceKm",
    "routes.0.estimatedDuration",
    "routes.0.active",

    "routes.0.stops.0.addressId",
    "routes.0.stops.0.stopOrder",
    "routes.0.stops.0.estimatedArrival",
    "routes.0.stops.0.waitingMinutes",

    "schedules.0.departureTime",
    "schedules.0.startDate",
    "schedules.0.endDate",
    "schedules.0.active",
    "schedules.0.operatingDays",
  ] as const,

  trip: [
    "routes.0.trips.0.routeId",
    "routes.0.trips.0.scheduleId",
    "routes.0.trips.0.departureTime",
    "routes.0.trips.0.estimatedArrivalTime",
    "routes.0.trips.0.totalSeats",
    "routes.0.trips.0.availableSeats",
    "routes.0.trips.0.status",
  ] as const,

  // ======================================================
  // AVAILABILITY
  // ======================================================
  availability: [
    "availability.available",

    "availability.calendars.0.date",
    "availability.calendars.0.available",
    "availability.calendars.0.totalVehicles",
    "availability.calendars.0.remainingVehicles",
    "availability.calendars.0.stopSell",
    "availability.calendars.0.minimumNoticeMinutes",
    // "availability.calendars.0.availabilityId" — loại, back-reference

    "availability.blackoutDates.0.date",
    "availability.blackoutDates.0.reason",
  ] as const,

  // ======================================================
  // CAPACITY
  // ======================================================
  capacity: [
    "capacity.maxTripsPerDay",
    "capacity.maxVehiclesPerDay",
    "capacity.overbookingAllowed",
  ] as const,

  vehicle: [
    "vehicle.0.vehicleTypeId",
    "vehicle.0.name",
    "vehicle.0.manufacturer",
    "vehicle.0.model",
    "vehicle.0.year",
    "vehicle.0.color",
    "vehicle.0.licensePlate",
    "vehicle.0.transmission",
    "vehicle.0.fuelTypeId",
    "vehicle.0.status",

    "vehicle.0.capacity.passengerCount",
    "vehicle.0.capacity.luggageCount",
    "vehicle.0.capacity.cabinBaggageCount",
    "vehicle.0.capacity.oversizedLuggage",

    "vehicle.0.facilities",

    "vehicle.0.specification.engineSizeCc",
    "vehicle.0.specification.fuelCapacity",
    "vehicle.0.specification.mileageKm",
    "vehicle.0.specification.vin",

    "vehicle.0.images.0.mediaId",
    "vehicle.0.images.0.categoryId",
    "vehicle.0.images.0.isPrimary",
    "vehicle.0.images.0.sortOrder",
    "vehicle.0.images.0.alt",

    "vehicle.0.availability.0.startDate",
    "vehicle.0.availability.0.endDate",
    "vehicle.0.availability.0.available",
    "vehicle.0.availability.0.note",

    "vehicle.0.drivers.0.firstName",
    "vehicle.0.drivers.0.lastName",
    "vehicle.0.drivers.0.avatar",
    "vehicle.0.drivers.0.phone",
    "vehicle.0.drivers.0.email",
    "vehicle.0.drivers.0.licenseNumber",
    "vehicle.0.drivers.0.licenseExpiry",
    "vehicle.0.drivers.0.languages.0.languageId",
    "vehicle.0.drivers.0.active",
  ] as const,

  pricing: [
    "price.fromPrice",
    "price.toPrice",
    "price.originalFromPrice",
    "price.originalToPrice",

    "price.routePrices.0.routeId",
    "price.routePrices.0.vehicleTypeId",
    "price.routePrices.0.basePrice",
    "price.routePrices.0.originalPrice",

    "price.routePrices.0.breakdown.baseFare",
    "price.routePrices.0.breakdown.airportFee",
    "price.routePrices.0.breakdown.parkingFee",
    "price.routePrices.0.breakdown.tollFee",
    "price.routePrices.0.breakdown.serviceFee",
    "price.routePrices.0.breakdown.taxes",
    "price.routePrices.0.breakdown.discount",
    "price.routePrices.0.breakdown.totalPrice",
    "price.routePrices.0.breakdown.includedItems",

    "price.routePrices.0.breakdown.extraFees.0.extraFeeTypeId",
    "price.routePrices.0.breakdown.extraFees.0.amount",
    "price.routePrices.0.breakdown.extraFees.0.calculationType",
    "price.routePrices.0.breakdown.extraFees.0.active",

    "price.tripPrices.0.tripId",
    "price.tripPrices.0.finalPrice",
    "price.tripPrices.0.originalPrice",

    "price.rules.0.name",
    "price.rules.0.priceRuleTypeId",
    "price.rules.0.adjustmentType",
    "price.rules.0.value",
    "price.rules.0.minimumSpend",
    "price.rules.0.maximumDiscount",
    "price.rules.0.couponCode",
    "price.rules.0.validFrom",
    "price.rules.0.validTo",
    "price.rules.0.priority",
    "price.rules.0.combinable",
    "price.rules.0.active",
  ] as const,

  service: [
    "contactInformation.hotline",
    "contactInformation.whatsapp",
    "contactInformation.telegram",
    "contactInformation.emergencyPhone",
    "contactInformation.supportEmail",
  ] as const,

  extras: [
    "airportTransferExtraMapper.0.extraId",
    "airportTransferExtraMapper.0.active",
    "airportTransferExtraMapper.0.sortOrder",
  ] as const,

  package: ["airportTransferPackageMapper.0.packageId"] as const,

  policies: [
    "policies.0.policyId",
    "policies.0.valueBoolean",
    "policies.0.valueNumber",
    "policies.0.valueText",
    "policies.0.valueJson",
    "policies.0.active",
  ] as const,

  // ======================================================
  // SEO / SEARCH
  // ======================================================
  seo: ["tagIds", "searchable", "featured", "searchPriority"] as const,
};
