// vehicle.ts
import {
  RentalDurationType,
  RentalVehicleDocumentType,
  RentalVehicleImagePosition,
  RentalVehicleStatus,
} from "@/types/product-types/car_rental/enums";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export const carRentalVehicleDefaultValues = {
  vehicle: [
    {
      // ======================================================
      // BASIC
      // ======================================================

      active: true,
      vehicleTypeId: null,
      status: RentalVehicleStatus.available,
      brand: "",
      model: "",
      year: 0,
      color: "",
      licensePlate: "",
      transmission: null,
      fuelType: null,
      fuelCapacityLiters: 0,
      mileageKm: 0,
      mileageLimitPerDay: 0,
      unlimitedMileage: false,

      // ======================================================
      // CAPACITY
      // ======================================================

      capacity: {
        vehicleId: "",
        seatCount: undefined,
        luggageCount: undefined,
        doorCount: undefined,
      },

      // ======================================================
      // SPECIFICATION
      // ======================================================

      specification: {
        condition: null,
        vin: "",
        engineSizeCc: undefined,
        horsePower: undefined,
        batteryCapacityKwh: undefined,
        rangeKm: undefined,
        previousOwners: undefined,
      },

      // ======================================================
      // FACILITIES
      // ======================================================

      facilities: [
        {
          facilityId: "",
          quantity: 1,
          note: "",
        },
      ],

      // ======================================================
      // LOCATION
      // ======================================================

      locationCurrent: {
        addressId: "",
      },

      // ======================================================
      // MEDIAS
      // ======================================================

      medias: [
        {
          mediaId: "",
          categoryId: "",
          position: RentalVehicleImagePosition.cargo,
          isPrimary: true,
          sortOrder: 0,
        },
      ],

      // ======================================================
      // MAINTENANCE
      // ======================================================

      maintenance: [
        {
          type: "",
          description: "",
          mileageKm: undefined,
          serviceDate: new Date(),
          cost: 0,
        },
      ],

      // ======================================================
      // DOCUMENT
      // ======================================================

      document: [
        {
          type: RentalVehicleDocumentType.inspection,
          url: "",
          expiryDate: new Date(),
        },
      ],

      // ======================================================
      // PRICE
      // ======================================================

      price: [
        {
          vehicleId: "",
          pricingType: RentalDurationType.daily,
          effectiveFrom: new Date(),
          effectiveTo: new Date(),
          pricePerHour: 0,
          pricePerDay: 0,
          pricePerWeek: 0,
          pricePerMonth: 0,

          originalPricePerHour: 0,
          originalPricePerDay: 0,
          originalPricePerWeek: 0,
          originalPricePerMonth: 0,

          minimumDays: 1,
          maximumDays: 0,

          breakdown: {
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

          priceRules: [
            {
              priceRuleTypeId: "",
              percentage: 0,
              amount: 0,
              startDate: "",
              endDate: "",
            },
          ],
        },
      ],
    },
  ],
} satisfies Pick<CarRentalFormSchema, "vehicle">;
