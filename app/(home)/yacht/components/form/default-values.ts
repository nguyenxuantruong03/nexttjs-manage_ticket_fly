// schema/core/yacht.default.ts

import {
  YachtPricingType,
  YachtRefundType,
} from "@/types/bookings/yacht/enums";
import { YachtFormSchema } from "../schema/core/yacht.schema";

export const defaultYachtValues: YachtFormSchema = {
  // =========================
  // CORE
  // =========================

  providerBookingId: "",

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

    fuelType: undefined,

    condition: undefined,

    capacity: {
      vehicleId: "",
      guestCapacity: 0,

      overnightCapacity: null,

      cabinCount: null,

      bathroomCount: null,

      crewCapacity: null,
    },

    facilities: {
      vehicleId: "",
      wifi: false,

      bluetooth: false,

      tv: false,

      soundSystem: false,

      kitchen: false,

      refrigerator: false,

      coffeeMachine: false,

      bar: false,

      jacuzzi: false,

      swimmingPlatform: false,

      sunDeck: false,

      airConditioning: false,

      heating: false,

      shower: false,

      toilet: false,

      fishingEquipment: false,

      snorkelingEquipment: false,

      divingEquipment: false,
    },

    specification: {
      vehicleId: "",
      enginePowerHp: null,

      cruisingSpeedKnots: null,

      maxSpeedKnots: null,

      fuelCapacityLiter: null,

      rangeNm: null,
    },

    images: [],

    safetyEquipment: {
      vehicleId: "",
      lifeJacket: false,

      lifeRaft: false,

      fireExtinguisher: false,

      fireAlarm: false,

      firstAidKit: false,

      gps: false,

      radar: false,

      emergencyRadio: false,

      insurance: false,
    },
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

  extras: [],

  // =========================
  // PACKAGES
  // =========================

  packages: [],

  // =========================
  // ROUTES
  // =========================

  routes: [],

  // =========================
  // TRIPS
  // =========================

  trips: [],

  // =========================
  // AVAILABILITY
  // =========================

  availability: {
    calendar: [],

    locks: [],
  },

  // =========================
  // INVENTORY LOCK
  // =========================

  locks: [],

  // =========================
  // PRICING
  // =========================

  price: {
    pricingType: YachtPricingType.custom,

    basePrices: [],

    fees: [],

    discounts: [],
  },

  // =========================
  // POLICIES
  // =========================

  policies: {
    cancellation: {
      refundable: false,

      freeCancellation: false,

      freeCancellationBeforeHours: null,

      cancellationType: YachtRefundType.full,

      refundPercentage: null,

      cancellationFee: null,

      noShowFee: null,
    },

    passenger: {
      minimumAge: null,

      passportRequired: false,

      identityRequired: false,

      nationalityRestriction: [],

      childAllowed: false,

      infantAllowed: false,

      pregnantPassengerAllowed: null,
    },

    luggage: {
      allowed: false,

      maxWeightKg: null,

      maxPieces: null,

      oversizedAllowed: null,

      note: null,
    },

    waiting: {
      freeWaitingMinutes: null,

      extraWaitingFeePerHour: null,

      maximumWaitingHours: null,
    },

    meetAndGreet: {
      available: false,

      pickupSign: null,

      staffLanguage: [],

      meetingPoint: null,
    },

    flightSupport: {
      airportPickup: null,

      flightNumberRequired: null,

      flightDelayMonitoring: null,
    },

    booking: {
      instantConfirmation: false,

      advanceBookingHours: null,

      minimumBookingDuration: null,

      modificationAllowed: null,
    },
  },
};
