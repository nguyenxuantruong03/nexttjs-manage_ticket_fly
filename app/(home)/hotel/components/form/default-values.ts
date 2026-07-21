// form/default-values.ts

import {
  ExtraPriceUnit,
  HotelExtraType,
  HotelImageCategory,
  HotelMealType,
  HotelPriceAdjustmentType,
  HotelPriceRuleType,
  HotelRatePlanType,
  HotelStatus,
  MealPlan,
  MealPriceUnit,
  BathroomType,
  BedType,
  RoomViewType,
  SmokingPolicy,
  RetaurentCategory,
} from "@/types/bookings/hotel/enum/enums";

import { InventoryLockStatus, WeekDay } from "@/types/common/enums";

import { HotelFormValues } from "../schema";

export const hotelDefaultValues: HotelFormValues = {
  id: "",

  information: {
    id: "",
    hotelId: "",
    addressId: "",
    providerBookingId: "",
  },

  hotelImage: [
    {
      id: "",
      hotelId: "",
      url: "",
      category: HotelImageCategory.cover,
      sortOrder: 0,
      isPrimary: false,
      createdAt: new Date(),
    },
  ],

  inventory: [
    {
      id: "",
      hotelId: "",
      roomTypeId: "",

      availability: {
        id: "",
        inventoryId: "",
        isAvailable: true,
        availableRooms: 0,
        lastUpdated: new Date(),

        calendar: [
          {
            id: "",
            availabilityId: "",
            date: new Date(),
            available: true,
            remainingRooms: 0,
            priceOverride: 0,
            stopSell: false,
            minimumStay: 1,
            closedToArrival: false,
            closedToDeparture: false,
          },
        ],
      },

      ratePlans: [
        {
          id: "",
          inventoryId: "",

          name: "",
          description: "",
          type: HotelRatePlanType.breakfast_included,
          code: "",
          mealPlan: MealPlan.all_inclusive,

          policies: {
            id: "",
            ratePlanId: "",

            booking: {
              id: "",
              policiesId: "",
              instantConfirmation: false,
              refundable: false,
              payAtHotel: false,
              payLater: false,
              breakfastIncluded: false,
              mobileVoucher: false,
              onlineCheckIn: false,
              onlineCheckOut: false,
              requiresCreditCardGuarantee: false,
              requiresDeposit: false,
              requiresGovernmentId: false,
              allowsModification: false,
            },

            checkIn: {
              id: "",
              policiesId: "",
              checkInTime: "",
              checkOutTime: "",
              frontDesk24Hours: false,
              selfCheckIn: false,
              expressCheckIn: false,
              expressCheckOut: false,
              keyCollectionNote: "",
            },

            guest: {
              id: "",
              policiesId: "",
              minimumAge: 0,
              childrenAllowed: true,
              petsAllowed: false,
              smokingAllowed: false,
              extraBedAvailable: false,
              extraBedFee: 0,
            },

            payment: {
              id: "",
              policiesId: "",
              paymentTypes: [""],
              acceptedCards: [""],
              cashAccepted: true,
              depositRequired: false,
              depositAmount: 0,
            },

            cancellation: {
              id: "",
              policiesId: "",
              freeCancellation: false,
              freeCancellationBeforeHours: 24,
              cancellationFee: 0,
              noShowFee: 0,
            },

            houseRules: {
              policiesId: "",
              quietHoursStart: "",
              quietHoursEnd: "",
              partiesAllowed: false,
              visitorsAllowed: false,
              alcoholAllowed: false,
            },
          },

          refundable: false,

          cancellationPolicy: {
            id: "",
            ratePlanId: "",
            freeCancellation: false,
            beforeHours: 24,
            cancellationFee: 0,
          },

          price: {
            id: "",
            ratePlanId: "",
            originalPrice: 0,
            averageNightlyPrice: 0,
            taxesIncluded: false,
            payAtHotel: false,

            breakdown: {
              id: "",
              priceId: "",
              roomRate: 0,
              nights: 1,
              taxes: 0,
              serviceFee: 0,
              resortFee: 0,
              cleaningFee: 0,
              extraFee: 0,
              discount: 0,
              includedItems: [""],
            },

            rules: [
              {
                id: "",
                priceId: "",
                name: "",
                type: HotelPriceRuleType.coupon,
                adjustmentType: HotelPriceAdjustmentType.fixed_amount,
                value: 0,
                minimumNights: 1,
                maximumNights: 30,
                validFrom: new Date(),
                validTo: new Date(),
                daysOfWeek: [WeekDay.MONDAY],
                priority: 0,
                combinable: false,
                active: true,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            ],
          },

          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),

          locks: [],
        },
      ],

      locks: [
        {
          id: "",
          inventoryId: "",
          ratePlanId: "",
          userId: "",
          bookingId: "",
          quantity: 1,
          status: InventoryLockStatus.CONVERTED,
          startTime: new Date(),
          releasedAt: new Date(),
          endTime: new Date(),
          expiresAt: new Date(),
          createdAt: new Date(),
        },
      ],

      bookingRooms: [],
    },
  ],

  roomTypes: [
    {
      id: "",
      hotelId: "",
      name: "",
      description: "",
      inventories: [],
      bookingRooms: [],

      rooms: [
        {
          id: "",
          roomTypeId: "",

          roomFacilities: {
            id: "",
            roomId: "",

            tv: false,
            minibar: false,
            refrigerator: false,
            microwave: false,
            coffeeMachine: false,
            kettle: false,
            safe: false,
            wardrobe: false,
            hairDryer: false,
            ironingFacilities: false,
            slippers: false,
            bathrobe: false,
            telephone: false,
            desk: false,
            sofa: false,
            balcony: false,
            bathtub: false,
            shower: false,
            streamingService: false,
          },

          active: true,
          name: "",
          description: "",
          roomSize: 0,
          bedTypes: [BedType.double],
          maxGuests: 2,
          maxAdults: 2,
          maxChildren: 0,
          totalRooms: 1,
          breakfastIncluded: false,
          smokingPolicy: SmokingPolicy.non_smoking,
          mealPlan: MealPlan.room_only,
          bedCount: 1,
          bathroomCount: 1,
          viewType: RoomViewType.city,
          bathRoomType: BathroomType.private,

          roomImage: [
            {
              id: "",
              roomId: "",
              thumbnail: "",
              cover: "",
              hero: "",
              rooms: [],
              bedroom: [],
              bathroom: [],
              balcony: [],
              livingRoom: [],
              kitchen: [],
              workspace: [],
              view: [],
              gallery: [],
            },
          ],

          floor: 1,
          soundproof: false,
          nonSmoking: true,
          airConditioning: true,
          kitchenette: false,
          privateBathroom: true,
        },
      ],

      active: true,
      sortOrder: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],

  reviews: [],

  facilitiesHotel: {
    id: "",
    hotelId: "",

    wifi: {
      id: "",
      facilitiesId: "",
      available: true,
      free: true,
      speedMbps: 100,
      availableInRooms: true,
      availableInPublicAreas: true,
    },

    parking: null,

    swimmingPool: {
      id: "",
      facilitiesId: "",
      available: true,
      indoor: false,
      outdoor: true,
      infinity: false,
      heated: false,
      kidsPool: false,
    },

    gym: {
      id: "",
      facilitiesId: "",
      available: true,
      open24Hours: false,
      personalTrainer: false,
    },

    spa: null,

    restaurants: [
      {
        id: "",
        facilitiesId: "",
        name: "",
        cuisineTypes: [""],
        breakfast: true,
        lunch: true,
        dinner: true,
        buffet: false,
        reservation: false,
        capacity: 50,
        opening: "",
        price: 0,

        images: [
          {
            id: "",
            restaurantId: "",
            url: "",
            category: RetaurentCategory.interior,
            isPrimary: true,
            sortOrder: 0,
            createdAt: new Date(),
          },
        ],
      },
    ],

    bar: false,
    roomService: false,
    laundry: false,
    meetingRoom: false,
    businessCenter: false,
    familyRoom: false,
    kidsClub: false,
    playground: false,
    atm: false,
    currencyExchange: false,
    concierge: false,
    beachAccess: false,
    privateBeach: false,
  },

  bookings: [],

  extras: [
    {
      id: "",
      hotelId: "",
      name: "",
      description: "",
      type: HotelExtraType.airport_transfer,
      required: false,

      prices: [
        {
          id: "",
          extraId: "",
          price: 0,
          unit: ExtraPriceUnit.per_day,
          active: true,
          createdAt: new Date(),
        },
      ],

      bookingExtras: [],
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],

  mealOptions: [
    {
      id: "",
      hotelId: "",
      name: "",
      description: "",
      type: HotelMealType.breakfast,

      prices: [
        {
          id: "",
          mealId: "",
          price: 0,
          unit: MealPriceUnit.per_person,
          createdAt: new Date(),
        },
      ],

      bookingMeals: [],
      active: true,
      createdAt: new Date(),
    },
  ],

  favorites: [],
  nearbyPlaces: [],
  areaGuides: [],

  status: HotelStatus.DRAFT,

  name: "",
  slug: "",

  active: true,

  aliases: [""],
  keywords: [""],
  tags: [""],

  searchText: "",

  featured: false,
  searchable: true,
  searchPriority: 0,

  createdAt: new Date(),
  updatedAt: new Date(),
};