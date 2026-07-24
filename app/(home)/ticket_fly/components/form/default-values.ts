import {
  FlyOperationStatus,
  FlyRefundType,
  FlyRouteType,
  FlyTripStatus,
} from "@/types/bookings/ticket-fly/enums";
import { FlyFormSchema } from "../schema/core/fly.schema";

export const FlyDefaultValues: FlyFormSchema = {
  airline: {
    name: "",
    legalName: "",
    iataCode: "",
    icaoCode: "",
    callsign: "",
    country: "",
    website: "",
    hotline: "",
    email: "",
    logo: "",
    banner: "",
    description: "",
    active: true,
    images: [],
    addon: [],
    wifiPackage: [],
  },

  routes: [
    {
      departureAirportId: "",
      departureAirport: undefined,
      arrivalAirportId: "",
      arrivalAirport: undefined,
      distanceKm: 0,
      estimatedDuration: 0,
      directFlight: true,
      routeType: FlyRouteType.domestic,
      segments: [],
    },
  ],

  trips: [
    {
      routeId: "",
      flightNumber: "",
      departureTime: new Date(),
      arrivalTime: new Date(),
      durationMinutes: 0,
      status: FlyTripStatus.boarding,
      availableSeats: 0,
      aircraftId: "",
      scheduleId: "",
      inventory: {
        cabins: [],
      },
      operation: {
        status: FlyOperationStatus.scheduled,
        timeline: [],
        delays: [],
      },
      tracking: [],
      codeshares: [],
      history: [],
    },
  ],

  policies: {
    cancellation: {
      refundable: false,
      refundType: FlyRefundType.full,
    },

    change: {
      allowed: false,
    },

    baggage: {
      extraAllowed: false,
      cabinIncludedKg: 7,
      checkedIncludedKg: 20,
    },

    boarding: {
      onlineBoardingPass: true,
      printedBoardingPass: true,
    },

    passenger: {
      infantAllowed: true,
      childAllowed: true,
      petsAllowed: false,
      unaccompaniedMinor: false,
      wheelchairSupport: false,
      pregnantPassengerAllowed: true,
    },

    checkIn: {
      onlineCheckIn: true,
      airportCheckIn: true,
      mobileBoardingPass: true,
    },

    transit: {
      selfTransfer: false,
      baggageTransfer: true,
      visaRequiredDuringTransit: false,
    },

    visa: {
      visaRequired: false,
      passportRequired: true,
    },
  },

  price: {
    fromPrice: 0,
    toPrice: 0,
    originalFromPrice: 0,
    originalToPrice: 0,
    fares: [],
    priceRules: [],
  },

  notice: {
    title: "",
    content: "",
    baggageNotice: "",
    checkInNotice: "",
    visaNotice: "",
    refundNotice: "",
  },

  images: [],

  schedule: [
    {
      departureTime: "08:00",
      arrivalTime: "10:00",
      startDate: new Date(),
      operatingDays: [],
      active: true,
    },
  ],

  active: true,

  name: "",
  slug: "",

  aliases: [],
  keywords: [],
  tags: [],

  searchText: "",

  featured: false,

  searchable: true,

  searchPriority: 0,
};
