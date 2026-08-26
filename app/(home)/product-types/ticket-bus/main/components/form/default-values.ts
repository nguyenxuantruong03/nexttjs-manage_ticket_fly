import { BusBoardingStatus, BusSeatAvailabilityStatus, BusTripStatus, BusVehicleStatus } from "@/types/product-types/bus/enums";
import { BusFormSchema } from "../schema/core/bus.schema";
import { PriceCalculationType } from "@/types/common/enums";

export const busDefaultValues: BusFormSchema = {
  // ==========================
  // Basic
  // ==========================
  providerBookingId: "",
  bookingItemTypeId: "",
  serviceTypeId: "",
  name: "",
  searchPriority: 0,
  active: true,
  searchable: true,
  featured: false,
  tagIds: [],

  // ==========================
  // Routes
  // ==========================
  routes: [
    {
      routeTypeId: "",
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

      // 👇 fix: thiếu hoàn toàn trong bản cũ. Theo busFieldGroups.routes,
      // BusTripSchema là mảng LỒNG trong route ("routes.0.trips.0.*"),
      // bao gồm cả stops, seatAvailability, và price.seatPrices theo
      // chuyến — khác với price cấp bus tổng quát ở field "price" root.
      trips: [
        {
          vehicleId: "",
          routeId: "",
          departureTime: "",
          arrivalTime: "",
          // ⚠️ TODO XÁC NHẬN: chưa có enum xác nhận cho "status" và
          // "boardingStatus" của trip — đang để "" làm placeholder,
          // thay bằng member enum thật khi bạn cung cấp.
          status: BusTripStatus.ACTIVE,
          boardingStatus: BusBoardingStatus.BOARDED,

          stops: [
            {
              addressId: "",
              arrivalTime: "",
              departureTime: "",
              stopOrder: 1,
            },
          ],

          seatAvailability: [
            {
              seatId: "",
              // ⚠️ TODO XÁC NHẬN: chưa có enum xác nhận cho "status"
              // của seatAvailability — placeholder "".
              status: BusSeatAvailabilityStatus.AVAILABLE,
              availableSeats: 0,
              soldSeats: 0,
              reservedSeats: 0,
              totalSeats: 0,
              currentPrice: 0,
            },
          ],

          price: {
            tripId:"",
            seatPrices: [
              {
                seatTypeId: "",
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
  // Vehicle
  // ==========================
  vehicle: [
    {
      vehicleTypeId: "",
      status: BusVehicleStatus.ACTIVE,

      name: "",
      manufacturer: "",
      model: "",
      year: new Date().getFullYear(),
      active: true,

      capacity: {
        totalSeats: 40,
        sleeperBeds: 0,
        cabinRooms: 0,
        luggageCapacityKg: 0,
      },

      facilities: [
        {
          facilityId: "",
          active: true,
        },
      ],

      specification: {
        engineType: "",
        transmission: "",
        fuelTypeId: "",
        suspension: "",
        airConditioning: true,
        wifiAvailable: false,
        toiletAvailable: false,
      },

      images: [
        {
          mediaId: "",
          categoryId: "",
          alt: "",
          sortOrder: 0,
          isPrimary: true,
        },
      ],

      // ==========================
      // Seats
      // ==========================
      seatLayout: [
        {
          name: "Default",
          seatRows: 10,
          seatColumns: 4,
        },
      ],

      seatMap: {
        imageUrl: "",
        svgUrl: "",
        jsonLayout: undefined,
      },

      seats: [
        {
          seatNumber: "A1",
          typeId: "",
          floor: 1,
          row: 1,
          column: 1,
        },
      ],
    },
  ],

  // ==========================
  // Pricing (cấp bus tổng quát — khác routes.0.trips.0.price theo chuyến)
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
          seatTypeId: "",
          basePrice: 0,
          originalPrice: 0,
          taxes: 0,
          serviceFee: 0,
          bookingFee: 0,
          discount: 0,
          finalPrice: 0,
          availableSeats: 0,
          includedItems: [],

          extraFees: [
            {
              extraFeeTypeId: "",
              amount: 0,
              // ⚠️ TODO XÁC NHẬN: chưa có enum xác nhận cho
              // calculationType — "" là placeholder.
              calculationType: PriceCalculationType.FIXED,
              active: true,
            },
          ],
        },
      ],

      rules: [
        {
          name: "",
          priceRuleTypeId: "",
          priority: 0,
          combinable: false,
          percentage: 0,
          amount: 0,
          minimumSpend: 0,
          maximumDiscount: 0,
          couponCode: "",
          startDate: "",
          endDate: "",
          active: true,
        },
      ],
    },
  ],

  // ==========================
  // Policies
  // ==========================
  policyMappers: [
    {
      policyId: "",
      valueBoolean: false,
      valueNumber: 0,
      valueText: "",
      valueJson: undefined,
      active: true,
    },
  ],

  // ==========================
  // Extras
  // ==========================
  busExtraMapper: [
    {
      extraId: "",
      active: true,
      sortOrder: 0,
    },
  ],

  // ==========================
  // Packages
  // ==========================
  busPackageMapper: [
    {
      packageId: "",
    },
  ],

  // ==========================
  // Bus-level media
  // ==========================
  images: [
    {
      mediaId: "",
      categoryId: "",
      alt: "",
      isPrimary: true,
      sortOrder: 0,
    },
  ],
};