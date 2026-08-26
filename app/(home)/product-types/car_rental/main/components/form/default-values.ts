import { WeekDay } from "@/types/common/enums";
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";
import {
  DriverOption,
  RentalDurationType,
  RentalVehicleDocumentType,
  RentalVehicleImagePosition,
  RentalVehicleStatus,
} from "@/types/product-types/car_rental/enums";

export const defaultCarRentalValues: CarRentalFormSchema = {
  // =====================
  // BASIC
  // =====================

  driverOption: DriverOption.with_driver,

  serviceTypeId: "",
  bookingItemTypeId: "",

  name: "",
  tagIds: [],

  featured: false,
  searchable: true,
  searchPriority: 0,
  active: true,

  providerBookingId: "",

  // =====================
  // TRIP
  // =====================

  // LƯU Ý: CarRentalTripSchema chưa được cung cấp và carRentalFieldGroups
  // không có group nào cho field này — giữ null (field nullable trên
  // schema) cho tới khi có schema thật.
  trip: null,

  // =====================
  // POLICIES
  // =====================

  policies: [
    {
      policyId: "",
      valueBoolean: false,
      valueNumber: 0,
      valueText: "",
      valueJson: undefined,
      active: true,
    },
  ],

  requiredDocuments: [
    {
      documentTypeId: "",
      mandatory: true,
      note: "",
    },
  ],

  // =====================
  // VEHICLES
  // =====================

  vehicle: [
    {
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

      capacity: {
        vehicleId: "",
        seatCount: undefined,
        luggageCount: undefined,
        doorCount: undefined,
      },

      // FIXED: was `null` — carRentalFieldGroups edits condition/vin/
      // engineSizeCc/horsePower/batteryCapacityKwh/rangeKm/previousOwners
      // directly on this object.
      specification: {
        condition: null,
        vin: "",
        engineSizeCc: undefined,
        horsePower: undefined,
        batteryCapacityKwh: undefined,
        rangeKm: undefined,
        previousOwners: undefined,
      },

      // FIXED: was `[]` — carRentalFieldGroups drills into facilityId/
      // quantity/note.
      facilities: [
        {
          facilityId: "",
          quantity: 1,
          note: "",
        },
      ],

      // FIXED: was `null` — carRentalFieldGroups edits `.addressId`
      // directly on this object.
      locationCurrent: {
        addressId: "",
      },

      // FIXED: was `[]` — carRentalFieldGroups drills into mediaId/
      // categoryId/position/isPrimary/sortOrder.
      medias: [
        {
          mediaId: "",
          categoryId: "",
          position: RentalVehicleImagePosition.cargo,
          isPrimary: true,
          sortOrder: 0,
        },
      ],

      // FIXED: was `[]` — carRentalFieldGroups drills into type/
      // description/mileageKm/serviceDate/cost.
      maintenance: [
        {
          type: "",
          description: "",
          mileageKm: undefined,
          serviceDate: new Date,
          cost: 0,
        },
      ],

      // FIXED: was `[]` — carRentalFieldGroups drills into type/url/
      // expiryDate.
      document: [
        {
          type: RentalVehicleDocumentType.inspection,
          url: "",
          expiryDate: new Date(),
        },
      ],

      // =====================
      // PRICE
      // =====================
      price: [
        {
          vehicleId: "",

          pricingType: RentalDurationType.daily,

          // ADDED: carRentalFieldGroups reads these two directly on the
          // price row — were missing entirely before.
          startDate: "",
          endDate: "",

          pricePerHour: 0,
          pricePerDay: 0,
          pricePerWeek: 0,
          pricePerMonth: 0,
          originalPrice: 0,

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

          // FIXED: was `[]` — carRentalFieldGroups drills into
          // priceRuleTypeId/percentage/amount/startDate/endDate.
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

  // =====================
  // MEDIA (root-level)
  // =====================

  // FIXED: was `[]` — carRentalFieldGroups' "medias" group drills into
  // mediaId/categoryId/isPrimary/sortOrder.
  medias: [
    {
      mediaId: "",
      categoryId: "",
      isPrimary: true,
      sortOrder: 0,
    },
  ],

  // =====================
  // EXTRA
  // =====================

  // FIXED: was `[]` — carRentalFieldGroups' "pricing" group drills into
  // extraId/active/sortOrder.
  carRentalExtraMapper: [
    {
      extraId: "",
      active: true,
      sortOrder: 0,
    },
  ],

  // =====================
  // PACKAGE
  // =====================

  // FIXED: was `[]` — carRentalFieldGroups' "package" group drills into
  // packageId.
  carRentalPackageMapper: [{ packageId: "" }],

  // =====================
  // INSURANCE
  // =====================

  // FIXED: was `[]` — carRentalFieldGroups' "insurance" group drills into
  // typeId/name/description/pricePerDay/fixedPrice/active plus nested
  // benefits.0.typeId/title/description/coverageAmount/excessAmount.
  insurances: [
    {
      typeId: "",
      name: "",
      description: "",
      pricePerDay: 0,
      fixedPrice: 0,
      active: true,

      benefits: [
        {
          typeId: "",
          title: "",
          description: "",
          coverageAmount: 0,
          excessAmount: 0,
        },
      ],
    },
  ],

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

  // LƯU Ý: CarRentalDriverSchema chưa được cung cấp và carRentalFieldGroups
  // không có group nào cho field này — giữ mảng rỗng.
  drivers: [],

  // =====================
  // PICKUP
  // =====================

  // LƯU Ý: CarRentalPickupInstructionSchema chưa được cung cấp và
  // carRentalFieldGroups không có group nào cho field này — giữ mảng rỗng.
  pickupInstructions: [],
};
