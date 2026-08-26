import { FieldPath } from "react-hook-form";
import { BusFormSchema } from "../schema/core/bus.schema";

type BusFieldPath = FieldPath<BusFormSchema>;

/**
 * ...(giữ nguyên toàn bộ comment gốc)...
 *
 * UPDATE (quan trọng): BusRouteSchema thực tế có field `trips:
 * BusTripSchema[]` LỒNG BÊN TRONG route (1 route → nhiều trips), không
 * phải field cấp cao nhất trên BusFormSchema như giả định trước đó. Toàn
 * bộ path "trips.0.*" đã đổi thành "routes.0.trips.0.*" và gộp chung vào
 * group "routes" — không còn group "trips" riêng nữa.
 */
export const busFieldGroups: Record<string, readonly BusFieldPath[]> = {
  // ======================================================
  // BASIC
  // ======================================================
  basic: [
    "providerBookingId",
    "bookingItemTypeId",
    "serviceTypeId",
    "name",
    "searchPriority",
    "active",
    "searchable",
    "featured",
    "tagIds",
  ],

  // ======================================================
  // ROUTES (bao gồm cả trips lồng bên trong từng route)
  // ======================================================
  routes: [
    "routes.0.routeTypeId",
    "routes.0.departureAddressId",
    "routes.0.arrivalAddressId",
    "routes.0.distanceKm",
    "routes.0.estimatedDuration",
    "routes.0.code",

    "routes.0.boardingPoints.0.addressId",
    "routes.0.boardingPoints.0.name",
    "routes.0.boardingPoints.0.departureTime",
    "routes.0.boardingPoints.0.order",

    "routes.0.dropoffPoints.0.addressId",
    "routes.0.dropoffPoints.0.name",
    "routes.0.dropoffPoints.0.arrivalTime",
    "routes.0.dropoffPoints.0.order",

    // -- trips (chuyến xe chạy trên tuyến này) --
    "routes.0.trips.0.vehicleId",
    "routes.0.trips.0.routeId",
    "routes.0.trips.0.departureTime",
    "routes.0.trips.0.arrivalTime",
    "routes.0.trips.0.status",
    "routes.0.trips.0.boardingStatus",

    "routes.0.trips.0.stops.0.addressId",
    "routes.0.trips.0.stops.0.arrivalTime",
    "routes.0.trips.0.stops.0.departureTime",
    "routes.0.trips.0.stops.0.stopOrder",

    // -- seat availability (tồn kho, không phải dữ liệu khách hàng) --
    "routes.0.trips.0.seatAvailability.0.seatId",
    "routes.0.trips.0.seatAvailability.0.status",
    "routes.0.trips.0.seatAvailability.0.availableSeats",
    "routes.0.trips.0.seatAvailability.0.soldSeats",
    "routes.0.trips.0.seatAvailability.0.reservedSeats",
    "routes.0.trips.0.seatAvailability.0.totalSeats",
    "routes.0.trips.0.seatAvailability.0.currentPrice",

    // -- trip price --
    "routes.0.trips.0.price.seatPrices.0.seatTypeId",
    "routes.0.trips.0.price.seatPrices.0.price",
    "routes.0.trips.0.price.seatPrices.0.originalPrice",
    "routes.0.trips.0.price.seatPrices.0.taxes",
    "routes.0.trips.0.price.seatPrices.0.serviceFee",
    "routes.0.trips.0.price.seatPrices.0.bookingFee",
    "routes.0.trips.0.price.seatPrices.0.discount",
    "routes.0.trips.0.price.seatPrices.0.finalPrice",
    "routes.0.trips.0.price.seatPrices.0.availableSeats",
  ],

  // ======================================================
  // VEHICLE
  // ======================================================
  vehicle: [
    "vehicle.0.vehicleTypeId",
    "vehicle.0.status",
    "vehicle.0.name",
    "vehicle.0.manufacturer",
    "vehicle.0.model",
    "vehicle.0.year",
    "vehicle.0.active",

    "vehicle.0.capacity.totalSeats",
    "vehicle.0.capacity.sleeperBeds",
    "vehicle.0.capacity.cabinRooms",
    "vehicle.0.capacity.luggageCapacityKg",

    "vehicle.0.facilities.0.facilityId",
    "vehicle.0.facilities.0.active",

    "vehicle.0.specification.engineType",
    "vehicle.0.specification.transmission",
    "vehicle.0.specification.fuelTypeId",
    "vehicle.0.specification.suspension",
    "vehicle.0.specification.airConditioning",
    "vehicle.0.specification.wifiAvailable",
    "vehicle.0.specification.toiletAvailable",

    "vehicle.0.images.0.mediaId",
    "vehicle.0.images.0.categoryId",
    "vehicle.0.images.0.alt",
    "vehicle.0.images.0.sortOrder",
    "vehicle.0.images.0.isPrimary",
  ],

  // ======================================================
  // SEATS
  // ======================================================
  seats: [
    "vehicle.0.seatLayout.0.name",
    "vehicle.0.seatLayout.0.seatRows",
    "vehicle.0.seatLayout.0.seatColumns",

    "vehicle.0.seatMap.imageUrl",
    "vehicle.0.seatMap.svgUrl",
    "vehicle.0.seatMap.jsonLayout",

    "vehicle.0.seats.0.seatNumber",
    "vehicle.0.seats.0.typeId",
    "vehicle.0.seats.0.floor",
    "vehicle.0.seats.0.row",
    "vehicle.0.seats.0.column",
  ],

  // ======================================================
  // PRICING (cấp bus tổng quát — khác routes.0.trips.0.price theo chuyến)
  // ======================================================
  pricing: [
    "price.0.fromPrice",
    "price.0.toPrice",
    "price.0.originalFromPrice",
    "price.0.originalToPrice",
    "price.0.effectiveFrom",
    "price.0.effectiveTo",

    "price.0.breakdowns.0.seatTypeId",
    "price.0.breakdowns.0.basePrice",
    "price.0.breakdowns.0.originalPrice",
    "price.0.breakdowns.0.taxes",
    "price.0.breakdowns.0.serviceFee",
    "price.0.breakdowns.0.bookingFee",
    "price.0.breakdowns.0.discount",
    "price.0.breakdowns.0.finalPrice",
    "price.0.breakdowns.0.availableSeats",
    "price.0.breakdowns.0.includedItems",
    "price.0.breakdowns.0.extraFees.0.extraFeeTypeId",
    "price.0.breakdowns.0.extraFees.0.amount",
    "price.0.breakdowns.0.extraFees.0.calculationType",
    "price.0.breakdowns.0.extraFees.0.active",

    "price.0.rules.0.name",
    "price.0.rules.0.priceRuleTypeId",
    "price.0.rules.0.priority",
    "price.0.rules.0.combinable",
    "price.0.rules.0.percentage",
    "price.0.rules.0.amount",
    "price.0.rules.0.minimumSpend",
    "price.0.rules.0.maximumDiscount",
    "price.0.rules.0.couponCode",
    "price.0.rules.0.startDate",
    "price.0.rules.0.endDate",
    "price.0.rules.0.active",
  ],

  // ======================================================
  // POLICIES
  // ======================================================
  policies: [
    "policyMappers.0.policyId",
    "policyMappers.0.valueBoolean",
    "policyMappers.0.valueNumber",
    "policyMappers.0.valueText",
    "policyMappers.0.valueJson",
    "policyMappers.0.active",
  ],

  // ======================================================
  // EXTRAS
  // ======================================================
  extras: [
    "busExtraMapper.0.extraId",
    "busExtraMapper.0.active",
    "busExtraMapper.0.sortOrder",
  ],

  // ======================================================
  // PACKAGES
  // ======================================================
  packages: ["busPackageMapper.0.packageId"],

  // ======================================================
  // MEDIA (bus-level — distinct from vehicle.0.images)
  // ======================================================
  media: [
    "images.0.mediaId",
    "images.0.categoryId",
    "images.0.alt",
    "images.0.isPrimary",
    "images.0.sortOrder",
  ],
};
