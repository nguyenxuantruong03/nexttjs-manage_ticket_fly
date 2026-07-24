// field-groups.ts

import { FieldPath } from "react-hook-form";
import { HotelFormSchema } from "../schema";

type HotelFieldPath = FieldPath<HotelFormSchema>;

export const hotelFieldGroups: Record<string, readonly HotelFieldPath[]> = {
  basic: ["name", "slug", "status", "searchPriority", "featured", "searchable"],

  location: [
    "information.hotelId",
    "information.providerBookingId",
    "information.addressId",

    "nearbyPlaces",
    "areaGuides",
  ],

  images: [
    "hotelImage.0.url",
    "hotelImage.0.category",
    "hotelImage.0.sortOrder",
    "hotelImage.0.isPrimary",
  ],

  rooms: [
    // room type
    "roomTypes.0.name",
    "roomTypes.0.sortOrder",
    "roomTypes.0.description",
    "roomTypes.0.active",

    // room
    "roomTypes.0.rooms.0.name",
    "roomTypes.0.rooms.0.description",
    "roomTypes.0.rooms.0.roomSize",
    "roomTypes.0.rooms.0.bedTypes.0",
    "roomTypes.0.rooms.0.maxGuests",
    "roomTypes.0.rooms.0.maxAdults",
    "roomTypes.0.rooms.0.maxChildren",
    "roomTypes.0.rooms.0.totalRooms",
    "roomTypes.0.rooms.0.bedCount",
    "roomTypes.0.rooms.0.bathroomCount",
    "roomTypes.0.rooms.0.floor",

    "roomTypes.0.rooms.0.mealPlan",
    "roomTypes.0.rooms.0.smokingPolicy",
    "roomTypes.0.rooms.0.viewType",
    "roomTypes.0.rooms.0.bathRoomType",

    "roomTypes.0.rooms.0.breakfastIncluded",
    "roomTypes.0.rooms.0.soundproof",
    "roomTypes.0.rooms.0.nonSmoking",
    "roomTypes.0.rooms.0.airConditioning",
    "roomTypes.0.rooms.0.kitchenette",
    "roomTypes.0.rooms.0.privateBathroom",

    // room facilities
    "roomTypes.0.rooms.0.roomFacilities.tv",
    "roomTypes.0.rooms.0.roomFacilities.minibar",
    "roomTypes.0.rooms.0.roomFacilities.refrigerator",
    "roomTypes.0.rooms.0.roomFacilities.microwave",
    "roomTypes.0.rooms.0.roomFacilities.coffeeMachine",
    "roomTypes.0.rooms.0.roomFacilities.kettle",
    "roomTypes.0.rooms.0.roomFacilities.safe",
    "roomTypes.0.rooms.0.roomFacilities.wardrobe",
    "roomTypes.0.rooms.0.roomFacilities.hairDryer",
    "roomTypes.0.rooms.0.roomFacilities.ironingFacilities",
    "roomTypes.0.rooms.0.roomFacilities.slippers",
    "roomTypes.0.rooms.0.roomFacilities.bathrobe",
    "roomTypes.0.rooms.0.roomFacilities.telephone",
    "roomTypes.0.rooms.0.roomFacilities.desk",
    "roomTypes.0.rooms.0.roomFacilities.sofa",
    "roomTypes.0.rooms.0.roomFacilities.balcony",
    "roomTypes.0.rooms.0.roomFacilities.bathtub",
    "roomTypes.0.rooms.0.roomFacilities.shower",
    "roomTypes.0.rooms.0.roomFacilities.streamingService",

    // room images
    "roomTypes.0.rooms.0.roomImage.0.thumbnail",
    "roomTypes.0.rooms.0.roomImage.0.cover",
    "roomTypes.0.rooms.0.roomImage.0.hero",

    // inventory
    "inventory.0.roomTypeId",
  ],

  facilities: [
    // wifi
    "facilitiesHotel.wifi.available",
    "facilitiesHotel.wifi.free",
    "facilitiesHotel.wifi.speedMbps",
    "facilitiesHotel.wifi.availableInRooms",
    "facilitiesHotel.wifi.availableInPublicAreas",

    // pool
    "facilitiesHotel.swimmingPool.available",
    "facilitiesHotel.swimmingPool.indoor",
    "facilitiesHotel.swimmingPool.outdoor",
    "facilitiesHotel.swimmingPool.infinity",
    "facilitiesHotel.swimmingPool.heated",
    "facilitiesHotel.swimmingPool.kidsPool",

    // gym
    "facilitiesHotel.gym.available",
    "facilitiesHotel.gym.open24Hours",
    "facilitiesHotel.gym.personalTrainer",

    // restaurant
    "facilitiesHotel.restaurants.0.name",
    "facilitiesHotel.restaurants.0.price",
    "facilitiesHotel.restaurants.0.capacity",
    "facilitiesHotel.restaurants.0.opening",
    "facilitiesHotel.restaurants.0.breakfast",
    "facilitiesHotel.restaurants.0.lunch",
    "facilitiesHotel.restaurants.0.dinner",
    "facilitiesHotel.restaurants.0.buffet",
    "facilitiesHotel.restaurants.0.reservation",

    "facilitiesHotel.restaurants.0.images.0.url",
    "facilitiesHotel.restaurants.0.images.0.category",
    "facilitiesHotel.restaurants.0.images.0.sortOrder",
    "facilitiesHotel.restaurants.0.images.0.isPrimary",

    // general
    "facilitiesHotel.bar",
    "facilitiesHotel.roomService",
    "facilitiesHotel.laundry",
    "facilitiesHotel.meetingRoom",
    "facilitiesHotel.businessCenter",
    "facilitiesHotel.familyRoom",
    "facilitiesHotel.kidsClub",
    "facilitiesHotel.playground",
    "facilitiesHotel.atm",
    "facilitiesHotel.currencyExchange",
    "facilitiesHotel.concierge",
    "facilitiesHotel.beachAccess",
    "facilitiesHotel.privateBeach",
  ],

  meal: [
    "mealOptions.0.name",
    "mealOptions.0.type",
    "mealOptions.0.description",
    "mealOptions.0.active",

    "mealOptions.0.prices.0.price",
    "mealOptions.0.prices.0.unit",

    "extras.0.name",
    "extras.0.type",
    "extras.0.description",
    "extras.0.required",
    "extras.0.active",

    "extras.0.prices.0.price",
    "extras.0.prices.0.unit",
    "extras.0.prices.0.active",
  ],

  pricing: [
    "inventory.0.ratePlans.0.name",
    "inventory.0.ratePlans.0.code",
    "inventory.0.ratePlans.0.description",
    "inventory.0.ratePlans.0.type",
    "inventory.0.ratePlans.0.mealPlan",
    "inventory.0.ratePlans.0.refundable",
    "inventory.0.ratePlans.0.active",

    "inventory.0.ratePlans.0.cancellationPolicy.freeCancellation",
    "inventory.0.ratePlans.0.cancellationPolicy.beforeHours",
    "inventory.0.ratePlans.0.cancellationPolicy.cancellationFee",

    "inventory.0.ratePlans.0.price.originalPrice",
    "inventory.0.ratePlans.0.price.averageNightlyPrice",
    "inventory.0.ratePlans.0.price.taxesIncluded",
    "inventory.0.ratePlans.0.price.payAtHotel",

    "inventory.0.ratePlans.0.price.breakdown.roomRate",
    "inventory.0.ratePlans.0.price.breakdown.nights",
    "inventory.0.ratePlans.0.price.breakdown.taxes",
    "inventory.0.ratePlans.0.price.breakdown.serviceFee",
    "inventory.0.ratePlans.0.price.breakdown.resortFee",
    "inventory.0.ratePlans.0.price.breakdown.cleaningFee",
    "inventory.0.ratePlans.0.price.breakdown.extraFee",
    "inventory.0.ratePlans.0.price.breakdown.discount",

    "inventory.0.ratePlans.0.price.rules.0.name",
    "inventory.0.ratePlans.0.price.rules.0.type",
    "inventory.0.ratePlans.0.price.rules.0.adjustmentType",
    "inventory.0.ratePlans.0.price.rules.0.value",
    "inventory.0.ratePlans.0.price.rules.0.minimumNights",
    "inventory.0.ratePlans.0.price.rules.0.maximumNights",
    "inventory.0.ratePlans.0.price.rules.0.daysOfWeek.0",
    "inventory.0.ratePlans.0.price.rules.0.priority",
    "inventory.0.ratePlans.0.price.rules.0.combinable",
    "inventory.0.ratePlans.0.price.rules.0.active",
  ],

  policies: [
    "inventory.0.ratePlans.0.policies.booking.instantConfirmation",
    "inventory.0.ratePlans.0.policies.booking.refundable",
    "inventory.0.ratePlans.0.policies.booking.payAtHotel",
    "inventory.0.ratePlans.0.policies.booking.payLater",
    "inventory.0.ratePlans.0.policies.booking.breakfastIncluded",
    "inventory.0.ratePlans.0.policies.booking.mobileVoucher",
    "inventory.0.ratePlans.0.policies.booking.onlineCheckIn",
    "inventory.0.ratePlans.0.policies.booking.onlineCheckOut",
    "inventory.0.ratePlans.0.policies.booking.requiresCreditCardGuarantee",
    "inventory.0.ratePlans.0.policies.booking.requiresDeposit",
    "inventory.0.ratePlans.0.policies.booking.requiresGovernmentId",
    "inventory.0.ratePlans.0.policies.booking.allowsModification",

    "inventory.0.ratePlans.0.policies.checkIn.checkInTime",
    "inventory.0.ratePlans.0.policies.checkIn.checkOutTime",
    "inventory.0.ratePlans.0.policies.checkIn.keyCollectionNote",
    "inventory.0.ratePlans.0.policies.checkIn.frontDesk24Hours",
    "inventory.0.ratePlans.0.policies.checkIn.selfCheckIn",
    "inventory.0.ratePlans.0.policies.checkIn.expressCheckIn",
    "inventory.0.ratePlans.0.policies.checkIn.expressCheckOut",

    "inventory.0.ratePlans.0.policies.guest.minimumAge",
    "inventory.0.ratePlans.0.policies.guest.extraBedFee",
    "inventory.0.ratePlans.0.policies.guest.childrenAllowed",
    "inventory.0.ratePlans.0.policies.guest.petsAllowed",
    "inventory.0.ratePlans.0.policies.guest.smokingAllowed",
    "inventory.0.ratePlans.0.policies.guest.extraBedAvailable",

    "inventory.0.ratePlans.0.policies.payment.paymentTypes.0",
    "inventory.0.ratePlans.0.policies.payment.acceptedCards.0",
    "inventory.0.ratePlans.0.policies.payment.depositAmount",
    "inventory.0.ratePlans.0.policies.payment.cashAccepted",
    "inventory.0.ratePlans.0.policies.payment.depositRequired",

    "inventory.0.ratePlans.0.policies.cancellation.freeCancellation",
    "inventory.0.ratePlans.0.policies.cancellation.freeCancellationBeforeHours",
    "inventory.0.ratePlans.0.policies.cancellation.cancellationFee",
    "inventory.0.ratePlans.0.policies.cancellation.noShowFee",

    "inventory.0.ratePlans.0.policies.houseRules.quietHoursStart",
    "inventory.0.ratePlans.0.policies.houseRules.quietHoursEnd",
    "inventory.0.ratePlans.0.policies.houseRules.partiesAllowed",
    "inventory.0.ratePlans.0.policies.houseRules.visitorsAllowed",
    "inventory.0.ratePlans.0.policies.houseRules.alcoholAllowed",
  ],

  availability: [
    "inventory.0.availability.isAvailable",
    "inventory.0.availability.availableRooms",
    "inventory.0.availability.lastUpdated",

    "inventory.0.availability.calendar.0.date",
    "inventory.0.availability.calendar.0.available",
    "inventory.0.availability.calendar.0.remainingRooms",
    "inventory.0.availability.calendar.0.priceOverride",
    "inventory.0.availability.calendar.0.minimumStay",
    "inventory.0.availability.calendar.0.stopSell",
    "inventory.0.availability.calendar.0.closedToArrival",
    "inventory.0.availability.calendar.0.closedToDeparture",

    "inventory.0.locks.0.ratePlanId",
    "inventory.0.locks.0.userId",
    "inventory.0.locks.0.bookingId",
    "inventory.0.locks.0.quantity",
    "inventory.0.locks.0.status",
    "inventory.0.locks.0.startTime",
    "inventory.0.locks.0.endTime",
    "inventory.0.locks.0.expiresAt",
    "inventory.0.locks.0.releasedAt",
  ],

  seo: [
    "slug",
    "searchPriority",
    "searchText",

    "keywords.0",
    "aliases.0",
    "tags.0",

    "searchable",
    "featured",
  ],
};
