import { PriceCalculationType } from "@/types/common/enums";
import {
  AirportTransferTransmission,
  AirportTransferTripStatus,
  AirportTransferVehicleStatus,
} from "@/types/product-types/airport-transfer/enums";

export const airportTransferDefaultValues = {
  // ======================================================
  // BASIC
  // ======================================================

  providerBookingId: "",
  name: "",
  serviceTypeId: "",
  bookingItemTypeId: "",
  instantConfirmation: false,
  active: true,

  notice: {
    title: "",
    color: "",
    icon: "",
    priority: 0,
    active: true,
    description: "",
  },

  // ======================================================
  // ROUTES
  // ======================================================

  routes: [
    {
      routeTypeId: "",
      departureAddressId: "",
      arrivalAddressId: "",
      distanceKm: 0,
      estimatedDuration: 0,
      active: true,

      stops: [
        {
          addressId: "",
          stopOrder: 1,
          estimatedArrival: 0,
          waitingMinutes: 0,
        },
      ],

      // IMPORTANT:
      // Schema hiện tại của bạn dùng routes[].prices[]
      prices: [
        {
          routeId: "",
          vehicleTypeId: "",
          basePrice: 0,
          originalPrice: null,

          breakdown: {
            baseFare: 0,
            airportFee: 0,
            parkingFee: 0,
            tollFee: 0,
            serviceFee: 0,
            taxes: 0,
            discount: 0,
            totalPrice: 0,
            includedItems: [],

            extraFees: [
              {
                extraFeeTypeId: "",
                amount: 0,
                calculationType: PriceCalculationType.FIXED,
                active: true,
              },
            ],
          },
        },
      ],

      trips: [
        {
          routeId: "",
          scheduleId: null,
          departureTime: "",
          estimatedArrivalTime: "",
          totalSeats: 0,
          availableSeats: 0,
          status: AirportTransferTripStatus.SCHEDULED,
        },
      ],

      createdAt: "",
      updatedAt: "",
    },
  ],

  // ======================================================
  // SCHEDULES
  // ======================================================

  schedules: [
    {
      departureTime: "",
      startDate: "",
      endDate: "",
      active: true,
      operatingDays: [],
    },
  ],

  // ======================================================
  // AVAILABILITY
  // ======================================================

  availability: {
    available: true,

    calendars: [
      {
        availabilityId: "",
        date: "",
        available: true,
        totalVehicles: 0,
        remainingVehicles: 0,
        stopSell: false,
        minimumNoticeMinutes: 0,
      },
    ],

    blackoutDates: [
      {
        date: "",
        reason: "",
      },
    ],
  },

  // ======================================================
  // CAPACITY
  // ======================================================

  capacity: {
    maxTripsPerDay: 0,
    maxVehiclesPerDay: 0,
    overbookingAllowed: false,
  },

  // ======================================================
  // VEHICLE
  // ======================================================

  vehicle: [
    {
      vehicleTypeId: "",
      name: "",
      manufacturer: "",
      model: "",
      year: new Date().getFullYear(),
      color: "",
      licensePlate: "",
      transmission: AirportTransferTransmission.AUTOMATIC,
      fuelTypeId: "",
      status: AirportTransferVehicleStatus.AVAILABLE,

      capacity: {
        passengerCount: 0,
        luggageCount: 0,
        cabinBaggageCount: 0,
        oversizedLuggage: 0,
      },

      facilities: [],

      specification: {
        engineSizeCc: 0,
        fuelCapacity: 0,
        mileageKm: 0,
        vin: "",
      },

      images: [
        {
          mediaId: "",
          categoryId: "",
          isPrimary: true,
          sortOrder: 0,
          alt: "",
        },
      ],

      availability: [
        {
          startDate: "",
          endDate: "",
          available: true,
          note: "",
        },
      ],

      drivers: [
        {
          vehicleId: "",
          firstName: "",
          lastName: "",
          avatar: "",
          phone: "",
          email: "",
          licenseNumber: "",
          licenseExpiry: "",
          experienceYears: 0,

          languages: [
            {
              languageId: "",
            },
          ],

          active: true,
        },
      ],
    },
  ],

  // ======================================================
  // PRICE
  // ======================================================

  price: {
    fromPrice: 0,
    toPrice: undefined,
    originalFromPrice: undefined,
    originalToPrice: undefined,

    routePrices: [
      {
        routeId: "",
        vehicleTypeId: "",
        basePrice: 0,
        originalPrice: null,

        breakdown: {
          baseFare: 0,
          airportFee: 0,
          parkingFee: 0,
          tollFee: 0,
          serviceFee: 0,
          taxes: 0,
          discount: 0,
          totalPrice: 0,
          includedItems: [],

          extraFees: [
            {
              extraFeeTypeId: "",
              amount: 0,
              calculationType: PriceCalculationType.FIXED,
              active: true,
            },
          ],
        },
      },
    ],

    tripPrices: [
      {
        tripId: "",
        finalPrice: 0,
        originalPrice: 0,
      },
    ],

    rules: [
      {
        name: "",
        priceRuleTypeId: "",
        adjustmentType: PriceCalculationType.FIXED,
        value: 0,
        minimumSpend: 0,
        maximumDiscount: 0,
        couponCode: "",
        validFrom: "",
        validTo: "",
        priority: 0,
        combinable: false,
        active: true,
      },
    ],
  },

  // ======================================================
  // CONTACT / SERVICE
  // ======================================================

  contactInformation: {
    hotline: "",
    whatsapp: "",
    telegram: "",
    emergencyPhone: "",
    supportEmail: "",
  },

  // ======================================================
  // EXTRAS
  // ======================================================

  airportTransferExtraMapper: [
    {
      extraId: "",
      active: true,
      sortOrder: 0,
    },
  ],

  // ======================================================
  // PACKAGE
  // ======================================================

  airportTransferPackageMapper: [
    {
      packageId: "",
    },
  ],

  // ======================================================
  // POLICIES
  // ======================================================

  policies: [
    {
      policyId: "",
      valueBoolean: false,
      valueNumber: null,
      valueText: "",
      valueJson: undefined,
      active: true,
    },
  ],

  // ======================================================
  // SEO
  // ======================================================

  tagIds: [],
  searchable: true,
  featured: false,
  searchPriority: 0,
};
