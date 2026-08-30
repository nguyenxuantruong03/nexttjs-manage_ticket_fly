import { FieldPath } from "react-hook-form";
import { YachtFormSchema } from "../form/schema/core/yacht.schema";

type YachtFieldPath = FieldPath<YachtFormSchema>;

/**
 * UPDATE: Đã nhận YachtTripSchema thật — KHÔNG flatten như giả định
 * trước đó. "schedule" và "price" là 2 object lồng con riêng biệt
 * (không phải field phẳng nằm ngay trên trip). Đã dựng lại group
 * "trips" theo đúng cấu trúc lồng này.
 *
 * Rule áp dụng — loại khoá quan hệ tự sinh: "trips.0.schedule.tripId",
 * "trips.0.price.tripId" (back-reference nội bộ), cùng nguyên tắc
 * hotelId/inventoryId/tripId ở các module khác.
 *
 */
export const yachtFieldGroups: Record<string, readonly YachtFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================
  basic: [
    "providerBookingId",
    "serviceTypeId",
    "bookingItemTypeId",
    "name",
    "active",
  ],

  // ======================================================
  // NOTICE
  // ======================================================
  notice: [
    "notice.important",
    "notice.beforeBooking",
    "notice.afterBooking",
    "notice.safetyNotice",
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
    "vehicle.fuelTypeId",
    "vehicle.lengthMeter",
    "vehicle.widthMeter",
    "vehicle.speedKnots",
    "vehicle.conditionId",

    "vehicle.capacity.guestCapacity",
    "vehicle.capacity.overnightCapacity",
    "vehicle.capacity.cabinCount",
    "vehicle.capacity.bathroomCount",
    "vehicle.capacity.crewCapacity",

    "vehicle.specification.enginePowerHp",
    "vehicle.specification.cruisingSpeedKnots",
    "vehicle.specification.maxSpeedKnots",
    "vehicle.specification.fuelCapacityLiter",
    "vehicle.specification.rangeNm",

    "vehicle.facilities.0.facilityId",
    "vehicle.facilities.0.active",

    "vehicle.images.0.mediaId",
    "vehicle.images.0.categoryId",
    "vehicle.images.0.sortOrder",
    "vehicle.images.0.isPrimary",
  ],

  // ======================================================
  // MARINA
  // (city/country đã loại — không tồn tại trên YachtMarinaSchema,
  // xem ghi chú (1) ở trên. marinaFacilities/departureRoutes/
  // destinationRoutes chưa thêm, xem ghi chú (2).)
  // ======================================================
  marina: [
    "marina.0.name",
    "marina.0.addressId",
    "marina.0.contactPhone",
    "marina.0.operatingHours",
    "marina.0.latitude",
    "marina.0.longitude",
    "marina.0.marinaFacilities.0.facilityId",
    "marina.0.marinaFacilities.0.active",
  ],

  // ======================================================
  // ROUTES
  // (field "trip" lồng trong route chưa thêm, xem ghi chú (3))
  // ======================================================
  routes: [
    "routes.0.routeTypeId",
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
  ],

  // ======================================================
  // TRIPS (schema thật: KHÔNG flatten — schedule/price là object lồng)
  // ======================================================
  trips: [
    "routes.0.trip.0.routeId",
    "routes.0.trip.0.departureTime",
    "routes.0.trip.0.arrivalTime",
    "routes.0.trip.0.status",
    "routes.0.trip.0.maxGuests",

    // -- schedule (object lồng, không phải field phẳng) --
    "routes.0.trip.0.schedule.repeatType",
    "routes.0.trip.0.schedule.daysOfWeek.0",
    "routes.0.trip.0.schedule.startDate",
    "routes.0.trip.0.schedule.endDate",
    "routes.0.trip.0.schedule.departureTime",

    // -- price (object lồng, không phải field phẳng) --
    "routes.0.trip.0.price.amount",
    "routes.0.trip.0.price.originalAmount",
    "routes.0.trip.0.price.tax",
    "routes.0.trip.0.price.serviceFee",
    "routes.0.trip.0.price.discount",
    "routes.0.trip.0.price.finalAmount",

    // "trips.0.schedule.tripId" / "trips.0.price.tripId" — loại vì là
    // back-reference tự sinh.
  ],

  // ======================================================
  // AVAILABILITY (field số ít riêng cấp yacht — KHÔNG thuộc trips)
  // ======================================================
  availability: [
    "availability.calendar.0.date",
    "availability.calendar.0.available",
    "availability.calendar.0.booked",
    "availability.calendar.0.stopSell",
    // "availability.calendar.0.availabilityId" — loại vì là
    // back-reference tự sinh.
  ],

  // ======================================================
  // PRICING (giá tổng quát cấp root — khác trips.0.price.amount theo chuyến)
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

    "price.discounts.0.percentage",
    "price.discounts.0.amount",
    "price.discounts.0.startDate",
    "price.discounts.0.endDate",
    "price.discounts.0.active",

    // "price.fees.*" — KHÔNG tồn tại trên YachtPriceSchema (chỉ có
    // pricingType/basePrices/discounts), xem ghi chú (4) ở trên.
  ],

  // ======================================================
  // PACKAGES
  // ======================================================
  packages: ["yachtPackageMapper.0.packageId"],

  // ======================================================
  // EXTRAS
  // ======================================================
  extras: [
    "yachtExtraMapper.0.extraId",
    "yachtExtraMapper.0.active",
    "yachtExtraMapper.0.sortOrder",
  ],

  // ======================================================
  // CREW
  // ======================================================
  crew: [
    "crew.0.name",
    "crew.0.roleId",
    "crew.0.avatar",
    "crew.0.experienceYears",
    "crew.0.languages.0",
  ],

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
  // IMAGES
  // ======================================================
  images: [
    "image.0.mediaId",
    "image.0.categoryId",
    "image.0.isPrimary",
    "image.0.sortOrder",
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
    "tagIds",
  ],
};
