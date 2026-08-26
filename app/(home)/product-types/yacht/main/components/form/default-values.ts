// schema/core/yacht.default.ts

import { YachtPricingType } from "@/types/product-types/yacht/enums";
import { YachtFormSchema } from "../schema/core/yacht.schema";

export const defaultYachtValues: YachtFormSchema = {
  // =========================
  // CORE
  // =========================

  providerBookingId: "",

  // 👇 fix: bổ sung 2 field basic còn thiếu so với fieldGroups.basic
  serviceTypeId: "",
  bookingItemTypeId: "",

  marina: [],

  name: "",

  tagIds: [],

  active: true,

  featured: false,

  searchable: true,

  searchPriority: 0,

  // =========================
  // VEHICLE
  // =========================

  vehicle: {
    name: "",
    manufacturer: "",
    model: "",
    year: null,
    registrationNumber: null,
    lengthMeter: null,
    widthMeter: null,
    speedKnots: null,

    fuelTypeId: "",

    conditionId: "",

    capacity: {
      vehicleId: "",
      guestCapacity: 0,
      overnightCapacity: null,
      cabinCount: null,
      bathroomCount: null,
      crewCapacity: null,
    },

    // 👇 fix: đã xác nhận fieldGroups.vehicle dùng
    // "vehicle.facilities.0.facilityId" / ".0.active" — tức
    // YachtVehicleFacilityMapperSchema[], KHÔNG phải object boolean-flags.
    // Đổi từ object sang mảng rỗng, bỏ toàn bộ các flag cũ.
    facilities: [],

    specification: {
      vehicleId: "",
      enginePowerHp: null,
      cruisingSpeedKnots: null,
      maxSpeedKnots: null,
      fuelCapacityLiter: null,
      rangeNm: null,
    },

    images: [],

  },

  // =========================
  // IMAGES
  // =========================

  image: [],

  // =========================
  // NOTICE
  // =========================

  notice: {
    important: null,
    beforeBooking: null,
    afterBooking: null,
    safetyNotice: null,
  },

  // =========================
  // CREW
  // =========================

  crew: [],

  // =========================
  // EXTRA
  // =========================

  yachtExtraMapper: [],

  // =========================
  // PACKAGES
  // =========================

  yachtPackageMapper: [],

  // =========================
  // ROUTES
  // (đã bỏ "trips" top-level — theo fieldGroups.trips, trip là mảng con
  // lồng trong route: "routes.0.trip.0.*", không tồn tại field "trips"
  // riêng ở root)
  // =========================

  routes: [],

  // =========================
  // AVAILABILITY
  // =========================

  availability: {
    calendar: [],
  },

  // =========================
  // PRICING
  // =========================

  price: {
    pricingType: YachtPricingType.custom,
    basePrices: [],
    discounts: [],
  },

  // =========================
  // POLICIES
  // =========================

  // 👇 fix: đã xác nhận fieldGroups.policies dùng
  // "policies.0.policyId" / ".valueBoolean" / ".valueNumber" /
  // ".valueText" / ".valueJson" / ".active" — tức
  // YachtPolicyMapperSchema[], KHÔNG phải object lồng cứng
  // (cancellation/passenger/luggage/waiting/meetAndGreet/
  // flightSupport/booking) như trước. Object cũ còn tham chiếu
  // YachtRefundType mà không import — lỗi biên dịch, nay đã loại bỏ
  // hoàn toàn cùng với việc đổi sang mảng.
  policies: [],
};
