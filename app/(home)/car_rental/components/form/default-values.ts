import {
  DriverOption,
  RentalVehicleType,
  RentalVehicleStatus,
  RentalDurationType,
  CarRentalInsuranceType,
  CarRentalExtraType,
} from "@/types/bookings/car_rental/enums";
import { WeekDay } from "@/types/common/enums";
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export const defaultCarRentalValues: CarRentalFormSchema = {
  // =====================
  // BASIC
  // =====================

  driverOption: DriverOption.with_driver,

  name: "",
  tagIds: [],

  featured: false,

  searchPriority: 0,

  active: true,

  providerBookingId: "",

  // =====================
  // TRIP
  // =====================

  trip: {
    rentalId: "",

    locations: [],

    schedule: undefined,

    tripFee: undefined,
  },

  // =====================
  // POLICIES
  // =====================

  policies: {
    rentalId: "",

    minimumDriverAge: undefined,

    minimumLicenseYears: undefined,

    depositAmount: undefined,

    mileage: undefined,

    cancellation: undefined,

    rules: undefined,

    requiredDocuments: undefined,

    fuelPolicy: undefined,

    damagePolicy: undefined,
  },

  // =====================
  // VEHICLES
  // =====================

  vehicle: [
    {
      rentalId: "",

      active: true,

      type: RentalVehicleType.suv,

      status: RentalVehicleStatus.available,

      brand: "",

      model: "",

      year: undefined,

      color: "",

      licensePlate: "",

      transmission: undefined,

      fuelType: undefined,

      fuelCapacityLiters: undefined,

      mileageKm: undefined,

      mileageLimitPerDay: undefined,

      unlimitedMileage: false,

      capacity: {
        vehicleId: "",

        seatCount: undefined,

        luggageCount: undefined,

        doorCount: undefined,
      },

      features: {
        vehicleId: "",
      },

      locationCurrent: undefined,

      images: [],

      maintenance: [],

      specification: undefined,

      document: [],

      // =====================
      // PRICE
      // =====================
      price: [
        {
          vehicleId: "",

          pricingType: RentalDurationType.daily,

          pricePerHour: undefined,

          pricePerDay: 0,

          pricePerWeek: undefined,

          pricePerMonth: undefined,

          originalPrice: 0,

          minimumDays: 1,

          maximumDays: undefined,

          breakdown: {
            priceId: "",

            rentalRate: 0,

            duration: 1,

            durationType: RentalDurationType.daily,

            taxes: 0,

            serviceFee: 0,

            insuranceFee: 0,

            deliveryFee: 0,

            extraDriverFee: 0,

            childSeatFee: 0,

            gpsFee: 0,

            helmetFee: 0,

            discount: 0,

            includedItems: [],
          },

          priceRules: [],
        },
      ],

      // =====================
      // LOCK
      // =====================
      carLocks: [],

      // =====================
      // CALENDAR
      // =====================
      calendar: [],
    },
  ],

  // =====================
  // IMAGES
  // =====================

  images: [],

  // =====================
  // EXTRA
  // =====================

  extras: [],

  // =====================
  // INSURANCE
  // =====================

  insurances: [],

  // =====================
  // BUSINESS HOURS
  // =====================

  businessHours: [
    {
      day: WeekDay.MONDAY,

      openTime: "08:00",

      closeTime: "18:00",

      closed: false,
    },

    {
      day: WeekDay.TUESDAY,

      openTime: "08:00",

      closeTime: "18:00",

      closed: false,
    },

    {
      day: WeekDay.WEDNESDAY,

      openTime: "08:00",

      closeTime: "18:00",

      closed: false,
    },

    {
      day: WeekDay.THURSDAY,

      openTime: "08:00",

      closeTime: "18:00",

      closed: false,
    },

    {
      day: WeekDay.FRIDAY,

      openTime: "08:00",

      closeTime: "18:00",

      closed: false,
    },

    {
      day: WeekDay.SATURDAY,

      openTime: "08:00",

      closeTime: "18:00",

      closed: false,
    },

    {
      day: WeekDay.SUNDAY,

      openTime: "08:00",

      closeTime: "18:00",

      closed: true,
    },
  ],

  // =====================
  // DRIVER
  // =====================

  drivers: [],

  // =====================
  // PICKUP
  // =====================

  pickupInstructions: [],
};
