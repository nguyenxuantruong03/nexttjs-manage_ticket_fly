// schema/core/fly.default.ts

import { WeekDay } from "@/types/common/enums";
import { FlyFormSchema } from "../schema/core/fly.schema";
import { FlyTripStatus } from "@/types/product-types/ticket-fly/enums";

export const FlyDefaultValues: FlyFormSchema = {
  // =========================
  // BASIC
  // =========================
  name: "",
  active: true,
  providerBookingId: "",
  serviceTypeId: "", // 👈 fix: thiếu so với fieldGroups.basic
  bookingItemTypeId: "", // 👈 fix: thiếu so với fieldGroups.basic

  // =========================
  // AIRLINE
  // 👈 fix: fieldGroups.airline CHỈ có "airlineId" (chọn qua id, không
  // lồng sửa entity Airline). Loại bỏ toàn bộ object airline đầy đủ
  // (name/legalName/iataCode/.../wifiPackage) vì không khớp field group
  // nào — nếu type thật của FlyFormSchema vẫn bắt buộc field "airline"
  // populated (quan hệ hiển thị readonly), cần xác nhận lại và giữ
  // riêng phần đó tách biệt khỏi form-editable fields.
  // =========================
  airlineId: "",

  // =========================
  // SEO / SEARCH
  // =========================
  tagIds: [],
  featured: false,
  searchable: true,
  searchPriority: 0,

  // =========================
  // EXTRA MAPPER
  // 👈 fix: đổi tên từ "extras" -> "flyExtraMapper" để khớp field cấp
  // cao thật trên schema (giống pattern yacht.yachtExtraMapper).
  // =========================
  flyExtraMapper: [],

  // =========================
  // PACKAGE MAPPER
  // 👈 fix: bổ sung field còn thiếu hoàn toàn trong bản cũ.
  // =========================
  flyPackageMapper: [],

  // =========================
  // ROUTES (trip đã dời vào lồng trong route, xem field "trips" bên dưới)
  // =========================
  routes: [
    {
      departureAirportId: "",
      arrivalAirportId: "",
      distanceKm: 0,
      estimatedDuration: 0,
      directFlight: true,
      routeTypeId: "", // 👈 fix: đổi từ "routeType" (enum) sang "routeTypeId" (ref string)
      segments: [],

      // 👈 fix: trip là mảng CON của route theo
      // "routes.0.trips.0.*", không phải field "trips" riêng ở root.
      trips: [
        {
          flightNumber: "",
          departureTime: new Date(),
          arrivalTime: new Date(),
          durationMinutes: 0,
          status: FlyTripStatus.boarding,
          availableSeats: 0,
          aircraftId: "",
          scheduleId: "",
        },
      ],
    },
  ],

  // =========================
  // POLICIES
  // 👈 fix: đã xác nhận fieldGroups.policies là MẢNG mapper
  // (policyId/valueBoolean/valueNumber/valueText/valueJson/active),
  // KHÔNG phải object lồng cứng cancellation/change/baggage/boarding/
  // passenger/checkIn/transit/visa như bản cũ. Loại bỏ hoàn toàn object
  // cũ (cùng với FlyRefundType không dùng nữa).
  // =========================
  policies: [],

  // =========================
  // PRICING
  // =========================
  price: {
    fromPrice: 0,
    toPrice: 0,
    originalFromPrice: 0,
    originalToPrice: 0,
    fares: [],
    priceRules: [],
  },

  // =========================
  // NOTICE
  // =========================
  notice: {
    title: "",
    content: "",
    baggageNotice: "",
    checkInNotice: "",
    visaNotice: "",
    covidNotice: "", // 👈 fix: có trong fieldGroups.notice nhưng bị thiếu trong bản cũ
    refundNotice: "",
  },

  // =========================
  // IMAGES
  // =========================
  images: [],

  // =========================
  // SCHEDULE
  // =========================
  schedule: [
    {
      departureTime: "08:00",
      arrivalTime: "10:00",
      startDate: new Date(),
      endDate: undefined,
      aircraftId: "",
      active: true,

      // ⚠️ Kiểm tra lại đúng tên member trong enum WeekDay của bạn,
      // thứ tự Thứ 2 → Chủ nhật để khớp index 0-6 hardcode trong
      // flyFieldGroups.schedule.
      operatingDays: [
        WeekDay.MONDAY,
        WeekDay.TUESDAY,
        WeekDay.WEDNESDAY,
        WeekDay.THURSDAY,
        WeekDay.FRIDAY,
        WeekDay.SATURDAY,
        WeekDay.SUNDAY,
      ],
    },
  ],
};
