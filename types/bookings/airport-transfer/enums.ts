// ======================================================
// Airport Transfer Service Type
// ======================================================

export enum AirportTransferServiceType {
  PRIVATE = "private",
  SHARED = "shared",
  SHUTTLE = "shuttle",
  LUXURY = "luxury",
  LIMOUSINE = "limousine",
}

// ======================================================
// Airport Transfer Trip Status
// ======================================================

export enum AirportTransferTripStatus {
  SCHEDULED = "scheduled",
  ACTIVE = "active",
  FULL = "full",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
}

// ======================================================
// Airport Transfer Route Type
// ======================================================

export enum AirportTransferRouteType {
  AIRPORT_TO_CITY = "airport_to_city",
  CITY_TO_AIRPORT = "city_to_airport",
  AIRPORT_TO_AIRPORT = "airport_to_airport",
  HOTEL_TO_AIRPORT = "hotel_to_airport",
  AIRPORT_TO_HOTEL = "airport_to_hotel",
  CUSTOM = "custom",
}

// ======================================================
// Airport Transfer Vehicle Type
// ======================================================

export enum AirportTransferVehicleType {
  SEDAN = "sedan",
  SUV = "suv",
  MPV = "mpv",
  VAN = "van",
  MINIBUS = "minibus",
  BUS = "bus",
  LIMOUSINE = "limousine",
  LUXURY = "luxury",
}

// ======================================================
// Airport Transfer Transmission
// ======================================================

export enum AirportTransferTransmission {
  AUTOMATIC = "automatic",
  MANUAL = "manual",
}

// ======================================================
// Airport Transfer Fuel Type
// ======================================================

export enum AirportTransferFuelType {
  GASOLINE = "gasoline",
  DIESEL = "diesel",
  HYBRID = "hybrid",
  ELECTRIC = "electric",
}

// ======================================================
// Airport Transfer Vehicle Status
// ======================================================

export enum AirportTransferVehicleStatus {
  AVAILABLE = "available",
  RESERVED = "reserved",
  MAINTENANCE = "maintenance",
  INACTIVE = "inactive",
}

// ======================================================
// Airport Transfer Driver Language
// ======================================================

export enum AirportTransferDriverLanguage {
  ENGLISH = "english",
  VIETNAMESE = "vietnamese",
  CHINESE = "chinese",
  JAPANESE = "japanese",
  KOREAN = "korean",
  THAI = "thai",
  FRENCH = "french",
  GERMAN = "german",
}

// ======================================================
// Airport Transfer Vehicle Image Category
// ======================================================

export enum AirportTransferVehicleImageCategory {
  EXTERIOR = "exterior",
  INTERIOR = "interior",
  SEAT = "seat",
  LUGGAGE = "luggage",
  DRIVER = "driver",
  OTHER = "other",
}

// ======================================================
// Airport Transfer Price Rule Type
// ======================================================

export enum AirportTransferPriceRuleType {
  WEEKEND = "weekend",
  HOLIDAY = "holiday",
  PEAK_HOUR = "peak_hour",
  NIGHT = "night",
  PROMOTION = "promotion",
  COUPON = "coupon",
  SEASONAL = "seasonal",
  MEMBER = "member",
  CUSTOM = "custom",
}

// ======================================================
// Airport Transfer Adjustment Type
// ======================================================

export enum AirportTransferAdjustmentType {
  FIXED = "fixed",
  PERCENTAGE = "percentage",
}

// ======================================================
// Airport Transfer Extra Fee Type
// ======================================================

export enum AirportTransferExtraFeeType {
  AIRPORT = "airport",
  PARKING = "parking",
  TOLL = "toll",
  WAITING = "waiting",
  CHILD_SEAT = "child_seat",
  OVERSIZED_LUGGAGE = "oversized_luggage",
  EXTRA_STOP = "extra_stop",
  MEET_AND_GREET = "meet_and_greet",
  MIDNIGHT = "midnight",
  HOLIDAY = "holiday",
  OTHER = "other",
}

// ======================================================
// Airport Transfer Booking Status
// ======================================================

export enum AirportTransferBookingStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  ASSIGNED = "assigned",
  DRIVER_ARRIVING = "driver_arriving",
  PASSENGER_PICKED_UP = "passenger_picked_up",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  NO_SHOW = "no_show",
}
