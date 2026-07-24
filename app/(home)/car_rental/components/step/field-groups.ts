// field-groups.ts

import { FieldPath } from "react-hook-form";
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

type CarRentalFieldPath = FieldPath<CarRentalFormSchema>;

export const carRentalFieldGroups: Record<
  string,
  readonly CarRentalFieldPath[]
> = {
  basic: [
    "name",
    "slug",
    "driverOption",
    "providerBookingId",
    "searchText",
    "searchPriority",
    "aliases",
    "keywords",
    "active",
    "featured",
  ],

  vehicles: [
    "vehicle.0.active",
    "vehicle.0.type",
    "vehicle.0.status",
    "vehicle.0.brand",
    "vehicle.0.model",
    "vehicle.0.year",
    "vehicle.0.color",
    "vehicle.0.licensePlate",
    "vehicle.0.transmission",
    "vehicle.0.fuelType",
    "vehicle.0.fuelCapacityLiters",
    "vehicle.0.mileageKm",
    "vehicle.0.mileageLimitPerDay",
    "vehicle.0.unlimitedMileage",

    "vehicle.0.capacity.seatCount",
    "vehicle.0.capacity.luggageCount",
    "vehicle.0.capacity.doorCount",

    "vehicle.0.features.airConditioner",
    "vehicle.0.features.bluetooth",
    "vehicle.0.features.gps",
    "vehicle.0.features.usbCharger",
    "vehicle.0.features.wirelessCharging",
    "vehicle.0.features.appleCarPlay",
    "vehicle.0.features.androidAuto",
    "vehicle.0.features.cruiseControl",
    "vehicle.0.features.reverseCamera",
    "vehicle.0.features.parkingSensor",
    "vehicle.0.features.dashCamera",
    "vehicle.0.features.sunroof",
    "vehicle.0.features.leatherSeats",
    "vehicle.0.features.heatedSeats",
    "vehicle.0.features.childSeatAvailable",

    "vehicle.0.specification.condition",
    "vehicle.0.specification.vin",
    "vehicle.0.specification.engineSizeCc",
    "vehicle.0.specification.horsePower",
    "vehicle.0.specification.batteryCapacityKwh",
    "vehicle.0.specification.rangeKm",
    "vehicle.0.specification.previousOwners",

    "vehicle.0.maintenance.0.type",
    "vehicle.0.maintenance.0.description",
    "vehicle.0.maintenance.0.mileageKm",
    "vehicle.0.maintenance.0.serviceDate",
    "vehicle.0.maintenance.0.cost",
  ],

  images: [
    "images.0.url",
    "images.0.category",
    "images.0.alt",
    "images.0.isPrimary",
    "images.0.sortOrder",

    "vehicle.0.images.0.url",
    "vehicle.0.images.0.category",
    "vehicle.0.images.0.position",
    "vehicle.0.images.0.alt",
    "vehicle.0.images.0.isPrimary",
    "vehicle.0.images.0.sortOrder",
  ],

  trip: [
    "trip.locations.0.type",
    "trip.locations.0.name",
    "trip.locations.0.addressId",
    "trip.locations.0.bookingId",
    "trip.locations.0.available",

    "trip.schedule.durationType",
    "trip.schedule.minimumHours",
    "trip.schedule.minimumDays",
    "trip.schedule.maximumDays",
    "trip.schedule.pickupTime",
    "trip.schedule.returnTime",

    "trip.tripFee.airportFee",
    "trip.tripFee.oneWayFee",
    "trip.tripFee.deliveryFee",
    "trip.tripFee.pickupFee",
    "trip.tripFee.dropoffFee",
  ],

  pricing: [
    "vehicle.0.price.0.pricingType",
    "vehicle.0.price.0.startDate",
    "vehicle.0.price.0.endDate",
    "vehicle.0.price.0.pricePerHour",
    "vehicle.0.price.0.pricePerDay",
    "vehicle.0.price.0.pricePerWeek",
    "vehicle.0.price.0.pricePerMonth",
    "vehicle.0.price.0.originalPrice",
    "vehicle.0.price.0.minimumDays",
    "vehicle.0.price.0.maximumDays",

    "vehicle.0.price.0.breakdown.rentalRate",
    "vehicle.0.price.0.breakdown.duration",
    "vehicle.0.price.0.breakdown.durationType",
    "vehicle.0.price.0.breakdown.taxes",
    "vehicle.0.price.0.breakdown.serviceFee",
    "vehicle.0.price.0.breakdown.insuranceFee",
    "vehicle.0.price.0.breakdown.deliveryFee",
    "vehicle.0.price.0.breakdown.extraDriverFee",
    "vehicle.0.price.0.breakdown.childSeatFee",
    "vehicle.0.price.0.breakdown.gpsFee",
    "vehicle.0.price.0.breakdown.discount",

    "extras.0.type",
    "extras.0.name",
    "extras.0.description",
    "extras.0.image",
    "extras.0.required",
    "extras.0.available",
    "extras.0.prices.0.pricingType",
    "extras.0.prices.0.amount",
    "extras.0.prices.0.minimumQuantity",
    "extras.0.prices.0.maximumQuantity",
    "extras.0.prices.0.startDate",
    "extras.0.prices.0.endDate",
  ],

  insurance: [
    "insurances.0.type",
    "insurances.0.name",
    "insurances.0.description",
    "insurances.0.pricePerDay",
    "insurances.0.fixedPrice",
    "insurances.0.active",

    "insurances.0.benefits.0.type",
    "insurances.0.benefits.0.title",
    "insurances.0.benefits.0.description",
    "insurances.0.benefits.0.coverageAmount",
    "insurances.0.benefits.0.excessAmount",
  ],

  policies: [
    "policies.minimumDriverAge",
    "policies.minimumLicenseYears",
    "policies.depositAmount",
    "policies.fuelPolicy",

    "policies.mileage.unlimited",
    "policies.mileage.unit",
    "policies.mileage.dailyLimitKm",
    "policies.mileage.extraKmFee",

    "policies.cancellation.refundable",
    "policies.cancellation.freeCancellation",
    "policies.cancellation.freeCancellationBeforeHours",
    "policies.cancellation.partialRefund",
    "policies.cancellation.cancellationFee",
    "policies.cancellation.noShowFee",

    "policies.damagePolicy.insuranceIncluded",
    "policies.damagePolicy.excessAmount",
    "policies.damagePolicy.depositRequired",

    "policies.rules.minimumAge",
    "policies.rules.maximumAge",
    "policies.rules.requiresDriverLicense",
    "policies.rules.requiresInternationalLicense",
    "policies.rules.minimumDrivingExperienceYears",
    "policies.rules.smokingAllowed",
    "policies.rules.petsAllowed",
    "policies.rules.offRoadAllowed",
    "policies.rules.crossBorderAllowed",
    "policies.rules.additionalDriverAllowed",
    "policies.rules.lateReturnFeePerHour",

    "policies.requiredDocuments.documents.0",
  ],

  operation: [
    "driverOption",

    "businessHours.0.day",
    "businessHours.0.openTime",
    "businessHours.0.closeTime",
    "businessHours.0.closed",

    "pickupInstructions.0.type",
    "pickupInstructions.0.title",
    "pickupInstructions.0.description",
    "pickupInstructions.0.location",
    "pickupInstructions.0.contactPhone",

    "drivers.0.name",
    "drivers.0.phone",
    "drivers.0.experienceYears",
    "drivers.0.rating",
    "drivers.0.status",
    "drivers.0.image",
    "drivers.0.languages.0",
  ],

  availability: [
    "vehicle.0.calendar.0.startTime",
    "vehicle.0.calendar.0.endTime",
    "vehicle.0.calendar.0.status",
    "vehicle.0.calendar.0.note",

    "vehicle.0.carLocks.0.bookingId",
    "vehicle.0.carLocks.0.vehicleId",
    "vehicle.0.carLocks.0.userId",
    "vehicle.0.carLocks.0.startTime",
    "vehicle.0.carLocks.0.endTime",
    "vehicle.0.carLocks.0.status",
    "vehicle.0.carLocks.0.quantity",
    "vehicle.0.carLocks.0.expiresAt",
    "vehicle.0.carLocks.0.releasedAt",

    "vehicle.0.locationCurrent.addressId",
  ],
};
