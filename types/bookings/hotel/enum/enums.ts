// hotel.enums.ts

// ======================================================
// MEAL
// ======================================================

export enum MealPriceUnit {
  per_person = "per_person",
  per_room = "per_room",
  per_night = "per_night",
}

export enum HotelMealType {
  breakfast = "breakfast",
  lunch = "lunch",
  dinner = "dinner",
  snack = "snack",
}

// ======================================================
// EXTRA
// ======================================================

export enum ExtraPriceUnit {
  per_booking = "per_booking",
  per_room = "per_room",
  per_night = "per_night",
  per_person = "per_person",
  per_day = "per_day",
}

export enum HotelExtraType {
  airport_transfer = "airport_transfer",
  extra_bed = "extra_bed",
  baby_crib = "baby_crib",
  breakfast = "breakfast",
  dinner = "dinner",
  lunch = "lunch",
  laundry = "laundry",
  minibar = "minibar",
  parking = "parking",
  spa = "spa",
  other = "other",
}

// ======================================================
// BOOKING
// ======================================================

export enum HotelBookingStatus {
  pending = "pending",
  confirmed = "confirmed",
  cancelled = "cancelled",
  completed = "completed",
  rejected = "rejected",
  no_show = "no_show",
}

// ======================================================
// IMAGE
// ======================================================

export enum HotelImageCategory {
  cover = "cover",
  exterior = "exterior",
  room = "room",
  pool = "pool",
  restaurant = "restaurant",
  spa = "spa",
  gym = "gym",
}

// ======================================================
// RATE PLAN
// ======================================================

export enum HotelRatePlanType {
  standard = "standard",
  refundable = "refundable",
  non_refundable = "non_refundable",
  breakfast_included = "breakfast_included",
  half_board = "half_board",
  full_board = "full_board",
  corporate = "corporate",
  member = "member",
  promotional = "promotional",
}

// ======================================================
// ROOM
// ======================================================

export enum RoomType {
  standard = "standard",
  superior = "superior",
  deluxe = "deluxe",
  premier = "premier",
  executive = "executive",
  club = "club",
  studio = "studio",

  single = "single",
  double = "double",
  twin = "twin",
  triple = "triple",
  quadruple = "quadruple",
  family = "family",

  connecting = "connecting",
  adjoining = "adjoining",

  suite = "suite",
  junior_suite = "junior_suite",
  executive_suite = "executive_suite",
  presidential_suite = "presidential_suite",
  honeymoon_suite = "honeymoon_suite",

  apartment = "apartment",
  villa = "villa",
  bungalow = "bungalow",
  cottage = "cottage",
  chalet = "chalet",
  cabin = "cabin",

  dormitory = "dormitory",
  capsule = "capsule",

  penthouse = "penthouse",
  loft = "loft",

  accessible = "accessible",

  other = "other",
}

export enum BedType {
  single = "single",
  twin = "twin",
  double = "double",
  queen = "queen",
  king = "king",
  california_king = "california_king",

  bunk_bed = "bunk_bed",
  sofa_bed = "sofa_bed",
  futon = "futon",
  murphy_bed = "murphy_bed",

  mixed = "mixed",

  other = "other",
}

export enum RoomViewType {
  city = "city",
  sea = "sea",
  ocean = "ocean",
  beach = "beach",

  lake = "lake",
  river = "river",
  mountain = "mountain",
  garden = "garden",
  pool = "pool",

  park = "park",
  forest = "forest",

  landmark = "landmark",
  skyline = "skyline",

  courtyard = "courtyard",

  street = "street",

  interior = "interior",

  no_view = "no_view",

  other = "other",
}

export enum BathroomType {
  private = "private",
  shared = "shared",
}

export enum SmokingPolicy {
  smoking = "smoking",
  non_smoking = "non_smoking",
  both = "both",
}

export enum MealPlan {
  room_only = "room_only",
  breakfast = "breakfast",
  half_board = "half_board",
  full_board = "full_board",
  all_inclusive = "all_inclusive",
}

// ======================================================
// LOCATION
// ======================================================

export enum NearbyPlaceType {
  airport = "airport",
  landmark = "landmark",
  attraction = "attraction",
  shopping = "shopping",
  restaurant = "restaurant",
  station = "station",
  hospital = "hospital",
  beach = "beach",
  other = "other",
}

// ======================================================
// PRICE
// ======================================================

export enum HotelPriceRuleType {
  weekend = "weekend",
  weekday = "weekday",
  holiday = "holiday",
  peak_season = "peak_season",
  low_season = "low_season",
  early_bird = "early_bird",
  last_minute = "last_minute",
  long_stay = "long_stay",
  promotional = "promotional",
  coupon = "coupon",
  member = "member",
  custom = "custom",
}

export enum HotelPriceAdjustmentType {
  percentage = "percentage",
  fixed_amount = "fixed_amount",
}

// ======================================================
// TRIP
// ======================================================

export enum TripType {
  BUSINESS = "BUSINESS",
  LEISURE = "LEISURE",
  FAMILY = "FAMILY",
  COUPLE = "COUPLE",
  SOLO = "SOLO",
  FRIENDS = "FRIENDS",
  GROUP = "GROUP",
}

// ======================================================
// RESTAURANT
// ======================================================

export enum RetaurentCategory {
  interior = "interior",
  food = "food",
  menu = "menu",
  outside = "outside",
}



export enum HotelStatus {
  DRAFT = "DRAFT",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
}
