import { AirportTransferServiceType } from "@/types/bookings/airport-transfer/enums";

export const airportTransferDefaultValues = {
  providerBookingId: "",

  availability: {
    available: true,

    calendars: [],

    locks: [],

    blackoutDates: [],
  },

  capacity: {
    maxTripsPerDay: undefined,

    maxVehiclesPerDay: undefined,

    overbookingAllowed: false,
  },

  routes: [],

  trips: [],

  vehicle: [],

  flightSupport: {
    flightNumberRequired: false,

    airlineRequired: false,

    terminalSupported: false,

    arrivalFlightOnly: false,

    departureFlightOnly: false,

    flightTracking: false,

    delayMonitoring: false,
  },

  meetAndGreet: {
    available: false,

    included: false,

    additionalFee: 0,

    nameBoard: false,

    airportRepresentative: false,

    multilingualSupport: false,
  },

  waitingPolicy: {
    freeWaitingMinutes: 0,

    airportFreeWaitingMinutes: 0,

    waitingFeePerHour: 0,

    maximumWaitingMinutes: 0,
  },

  luggagePolicy: {
    checkedBaggage: 0,

    cabinBaggage: 0,

    oversizedAllowed: false,

    oversizedFee: 0,

    sportsEquipmentAllowed: false,

    strollerAllowed: false,

    wheelchairAllowed: false,
  },

  passengerRequirement: {
    passportRequired: false,

    phoneRequired: true,

    emailRequired: true,

    minimumPassenger: 1,

    maximumPassenger: undefined,
  },

  contactInformation: {
    hotline: "",

    whatsapp: "",

    telegram: "",

    emergencyPhone: "",

    supportEmail: "",
  },

  specialRequest: {
    childSeat: false,

    babySeat: false,

    boosterSeat: false,

    wheelchair: false,

    petTransport: false,

    bicycle: false,

    skiEquipment: false,

    golfBag: false,

    additionalStop: false,

    noteSupported: false,
  },

  price: {
    fromPrice: 0,

    toPrice: undefined,

    originalFromPrice: undefined,

    originalToPrice: undefined,

    routePrices: [],

    tripPrices: [],

    rules: [],
  },

  notice: {
    title: "",

    description: "",

    color: "",

    icon: "",

    priority: 0,

    active: true,
  },

  schedules: [],

  active: true,

  serviceType: AirportTransferServiceType.PRIVATE,

  instantConfirmation: false,

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
