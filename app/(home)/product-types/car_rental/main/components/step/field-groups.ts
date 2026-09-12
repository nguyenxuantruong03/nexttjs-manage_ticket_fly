// field-groups.ts

import { FieldPath } from "react-hook-form";
import { CarRentalFormSchema } from "../form/schema/core/car-rental.schema";

type CarRentalFieldPath = FieldPath<CarRentalFormSchema>;

/**
 * Rebuilt against ALL schema files provided, bao gồm CarRentalTripSchema
 * (+ location, schedule, tripFee), CarRentalPickupInstructionSchema,
 * CarRentalDriverSchema — không còn field nào bị chờ.
 *
 *
 *
 *
 * Các schema từng bị "mồ côi" ở bản trước (CarRentalAvailabilityCalendarSchema
 * cho `vehicle.0.calendar`, CarRentalInventoryLockSchema cho
 * `vehicle.0.carLocks`) VẪN chưa được cung cấp — giữ nguyên trạng thái bỏ.
 * `carLocks` gần như chắc chắn là khoá xe tạm thời lúc khách đặt (tương tự
 * hotelInventoryLockSchema/BusSeatInventoryLockSchema đã loại ở các module
 * khác) nên dù có schema, nhiều khả năng vẫn sẽ bị loại khỏi form admin.
 */
export const carRentalFieldGroups: Record<
  string,
  readonly CarRentalFieldPath[]
> = {
  basic: [
    "name",
    "driverOption",
    "serviceTypeId",
    "bookingItemTypeId",
    "providerBookingId",
    "searchPriority",
    "searchable",
    "active",
    "featured",
    "tagIds",
  ],

  vehicles: [
    "vehicle.0.active",
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
    "vehicle.0.vehicleTypeId",

    "vehicle.0.capacity.seatCount",
    "vehicle.0.capacity.luggageCount",
    "vehicle.0.capacity.doorCount",

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

    "vehicle.0.document.0.type",
    "vehicle.0.document.0.url",
    "vehicle.0.document.0.expiryDate",

    "vehicle.0.facilities.0.facilityId",
    "vehicle.0.facilities.0.quantity",
    "vehicle.0.facilities.0.note",

    "vehicle.0.medias.0.mediaId",
    "vehicle.0.medias.0.categoryId",
    "vehicle.0.medias.0.position",
    "vehicle.0.medias.0.isPrimary",
    "vehicle.0.medias.0.sortOrder",
  ],

  pricing: [
    "vehicle.0.price.0.pricingType",
    "vehicle.0.price.0.effectiveFrom",
    "vehicle.0.price.0.effectiveTo",
    "vehicle.0.price.0.pricePerHour",
    "vehicle.0.price.0.pricePerDay",
    "vehicle.0.price.0.pricePerWeek",
    "vehicle.0.price.0.pricePerMonth",

    "vehicle.0.price.0.originalPricePerHour",
    "vehicle.0.price.0.originalPricePerDay",
    "vehicle.0.price.0.originalPricePerWeek",
    "vehicle.0.price.0.originalPricePerMonth",

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
    "vehicle.0.price.0.breakdown.helmetFee",
    "vehicle.0.price.0.breakdown.discount",
    "vehicle.0.price.0.breakdown.includedItems",

    "vehicle.0.price.0.priceRules.0.priceRuleTypeId",
    "vehicle.0.price.0.priceRules.0.percentage",
    "vehicle.0.price.0.priceRules.0.amount",
    "vehicle.0.price.0.priceRules.0.startDate",
    "vehicle.0.price.0.priceRules.0.endDate",

    "carRentalExtraMapper.0.extraId",
    "carRentalExtraMapper.0.active",
    "carRentalExtraMapper.0.sortOrder",
  ],

  insurance: [
    "insurances.0.typeId",
    "insurances.0.name",
    "insurances.0.description",
    "insurances.0.pricePerDay",
    "insurances.0.fixedPrice",
    "insurances.0.active",

    "insurances.0.benefits.0.typeId",
    "insurances.0.benefits.0.title",
    "insurances.0.benefits.0.description",
    "insurances.0.benefits.0.coverageAmount",
    "insurances.0.benefits.0.excessAmount",
  ],

  operation: [
    "driverOption",

    "businessHours.0.day",
    "businessHours.0.openTime",
    "businessHours.0.closeTime",
    "businessHours.0.closed",
  ],

  availability: ["vehicle.0.locationCurrent.addressId"],

  // ======================================================
  // TRIP (cấu hình chuyến đi mặc định — root-level, singular object)
  // ======================================================
  trip: [
    "trip.locations.0.addressId",
    "trip.locations.0.type",
    "trip.locations.0.name",
    "trip.locations.0.available",
    // "trip.locations.0.tripId" / ".bookingId" — loại, xem LƯU Ý phía trên

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

  // ======================================================
  // PICKUP INSTRUCTIONS (root-level array)
  // ======================================================
  pickupInstructions: [
    "pickupInstructions.0.type",
    "pickupInstructions.0.title",
    "pickupInstructions.0.description",
    "pickupInstructions.0.location",
    "pickupInstructions.0.contactPhone",
  ],

  // ======================================================
  // DRIVERS (tài xế thuộc công ty cho thuê xe — dữ liệu vận hành, không
  // phải khách hàng)
  // ======================================================
  drivers: [
    "drivers.0.name",
    "drivers.0.phone",
    "drivers.0.languages.0",
    "drivers.0.experienceYears",
    "drivers.0.rating",
    "drivers.0.status",
    "drivers.0.image",
  ],

  policies: [
    "policies.0.policyId",
    "policies.0.valueBoolean",
    "policies.0.valueNumber",
    "policies.0.valueText",
    "policies.0.valueJson",
    "policies.0.active",
  ],

  requiredDocuments: [
    "requiredDocuments.0.documentTypeId",
    "requiredDocuments.0.mandatory",
    "requiredDocuments.0.note",
  ],

  medias: [
    "medias.0.mediaId",
    "medias.0.categoryId",
    "medias.0.isPrimary",
    "medias.0.sortOrder",
  ],

  package: ["carRentalPackageMapper.0.packageId"],
};
