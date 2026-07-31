import {
  BusBoardingStatus,
  BusFuelType,
  BusImageCategory,
  BusLuggageUnit,
  BusPriceRuleType,
  BusRefundType,
  BusSeatAvailabilityStatus,
  BusSeatType,
  BusTicketChangeType,
  BusTripStatus,
  BusVehicleImageCategory,
  BusVehicleStatus,
  BusVehicleType,
} from "@/types/bookings/bus/enums";

import { InventoryLockStatus } from "@/types/common/enums";
import { BusFormSchema } from "../schema/core/bus.schema";

export const busDefaultValues: BusFormSchema = {
  providerBookingId: "",

  active: true,

  // ==========================
  // Search
  // ==========================
  name: "",
  featured: false,
  tagIds: [],
  searchPriority: 0,
  // ==========================
  // Routes
  // ==========================
  routes: [
    {
      departureAddressId: "",
      arrivalAddressId: "",
      distanceKm: null,
      estimatedDuration: null,
      code: null,

      boardingPoints: [
        {
          addressId: "",
          name: "",
          departureTime: "",
          order: 1,
        },
      ],

      dropoffPoints: [
        {
          addressId: "",
          name: "",
          arrivalTime: "",
          order: 1,
        },
      ],

      trips: [
        {
          routeId: "",
          vehicleId: "",
          departureTime: new Date(),
          arrivalTime: new Date(),

          status: BusTripStatus.ACTIVE,
          boardingStatus: BusBoardingStatus.BOARDED,

          seatAvailability: [
            {
              seatId: "",
              status: BusSeatAvailabilityStatus.AVAILABLE,
              availableSeats: 0,
              soldSeats: 0,
              reservedSeats: 0,
              totalSeats: 0,
              currentPrice: 0,
            },
          ],

          stops: [
            {
              addressId: "",
              arrivalTime: null,
              departureTime: null,
              stopOrder: 1,
            },
          ],

          locks: [
            {
              vehicleId: "",
              userId: null,
              tripId: "",
              startTime: new Date(),
              releasedAt: null,
              status: InventoryLockStatus.CONVERTED,
              endTime: new Date(),
              quantity: 1,
              expiresAt: new Date(),
            },
          ],

          price: {
            seatPrices: [
              {
                seatType: BusSeatType.LIMOUSINE,
                price: 0,
                originalPrice: 0,
                taxes: 0,
                serviceFee: 0,
                bookingFee: 0,
                discount: 0,
                finalPrice: 0,
                availableSeats: 0,
              },
            ],
          },
        },
      ],
    },
  ],

  // ==========================
  // Policies
  // ==========================
  policies: {
    cancellation: {
      refundable: true,
      refundType: BusRefundType.FULL,
      freeCancellation: false,
      freeCancellationBeforeHours: undefined,
      cancellationFee: undefined,
      noShowFee: undefined,
    },

    luggage: {
      includedLuggage: 20,
      unit: BusLuggageUnit.KG,
      extraLuggageAllowed: false,
      extraLuggageFee: undefined,
    },

    child: {
      freeAgeUnder: undefined,
      childTicketAgeFrom: undefined,
      childTicketAgeTo: undefined,
      childDiscountPercent: undefined,
    },

    boarding: {
      checkInBeforeMinutes: 30,
      boardingGateCloseMinutes: 10,
      digitalTicketAccepted: true,
      printedTicketRequired: false,
    },

    change: {
      type: BusTicketChangeType.NOT_ALLOWED,
      changeFee: undefined,
      maxChanges: undefined,
      changeBeforeDepartureHours: undefined,
    },

    passenger: {
      petsAllowed: false,
      smokingAllowed: false,
      foodAllowed: true,
      alcoholAllowed: false,
      wheelchairAccessible: false,
      specialAssistanceAvailable: false,
    },
  },

  // ==========================
  // Vehicle
  // ==========================
  vehicles: [
    {
      type: BusVehicleType.CABIN,
      active: true,

      name: "",
      manufacturer: "",
      model: "",
      year: new Date().getFullYear(),
      status: BusVehicleStatus.ACTIVE,

      capacity: {
        totalSeats: 40,
        sleeperBeds: 0,
        cabinRooms: 0,
        luggageCapacityKg: 0,
      },

      features: {
        airConditioner: false,
        wifi: false,
        usbCharger: false,
        powerOutlet: false,
        readingLight: false,
        blanket: false,
        pillow: false,
        drinkingWater: false,
        snack: false,
        toilet: false,
        tv: false,
        entertainment: false,
        gpsTracking: false,
        recliningSeat: false,
        massageSeat: false,
        wheelchairAccessible: false,
      },

      seats: [
        {
          seatNumber: "A1",
          type: BusSeatType.CABIN,
          floor: 1,
          row: 1,
          column: 1,

          // Seat chỉ mô tả vị trí và loại ghế
          // Không nên chứa availability
        },
      ],

      locks: [],

      specification: {
        engineType: "",
        transmission: "",
        fuelType: BusFuelType.DIESEL,
        suspension: "",
        airConditioning: true,
        wifiAvailable: false,
        toiletAvailable: false,
      },

      seatLayout: [
        {
          name: "Default",
          seatRows: 10,
          seatColumns: 4,
        },
      ],

      images: [
        {
          url: "",
          category: BusVehicleImageCategory.EXTERIOR,
          isPrimary: true,
          sortOrder: 0,
          alt: "",
        },
      ],

      seatMap: {
        imageUrl: "",
        svgUrl: "",
        jsonLayout: undefined,
      },
    },
  ],

  // ==========================
  // Images
  // ==========================
  images: [
    {
      url: "",
      category: BusImageCategory.EXTERIOR,
      alt: "",
      isPrimary: true,
      sortOrder: 0,
    },
  ],

  // ==========================
  // Pricing
  // ==========================
  price: [
    {
      fromPrice: 0,
      toPrice: 0,
      originalFromPrice: 0,
      originalToPrice: 0,

      effectiveFrom: "",
      effectiveTo: "",

      breakdowns: [
        {
          seatType: BusSeatType.CABIN,
          basePrice: 0,
          originalPrice: 0,
          taxes: 0,
          serviceFee: 0,
          bookingFee: 0,
          discount: 0,
          finalPrice: 0,
          availableSeats: 0,
          includedItems: [],
        },
      ],

      rules: [
        {
          name: "",
          type: BusPriceRuleType.DISCOUNT,
          priority: 0,
          combinable: false,
          percentage: undefined,
          amount: undefined,
          minimumSpend: undefined,
          maximumDiscount: undefined,
          couponCode: "",
          startDate: "",
          endDate: "",
          active: true,
        },
      ],
    },
  ],
};
