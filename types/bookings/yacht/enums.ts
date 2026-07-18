export enum YachtType {
  yacht = "yacht",
  catamaran = "catamaran",
  sailboat = "sailboat",
  speedboat = "speedboat",
  motorboat = "motorboat",
  luxury_yacht = "luxury_yacht",
  fishing_boat = "fishing_boat",
  house_boat = "house_boat",
  other = "other",
}

export enum YachtServiceType {
  private_charter = "private_charter",
  shared_cruise = "shared_cruise",
  hourly_rental = "hourly_rental",
  daily_rental = "daily_rental",
  overnight = "overnight",
  fishing_trip = "fishing_trip",
  diving_trip = "diving_trip",
  island_hopping = "island_hopping",
}

export enum YachtFuelType {
  diesel = "diesel",
  gasoline = "gasoline",
  electric = "electric",
  hybrid = "hybrid",
}

export enum YachtCondition {
  new = "new",
  excellent = "excellent",
  good = "good",
  normal = "normal",
}

export enum YachtImageCategory {
  exterior = "exterior",
  deck = "deck",
  cabin = "cabin",
  bedroom = "bedroom",
  bathroom = "bathroom",
  kitchen = "kitchen",
  dining = "dining",
  lounge = "lounge",
  activity = "activity",
  crew = "crew",
  safety = "safety",
  marina = "marina",
  other = "other",
}

export enum YachtCrewRole {
  captain = "captain",
  co_captain = "co_captain",
  sailor = "sailor",
  chef = "chef",
  guide = "guide",
  host = "host",
  instructor = "instructor",
}

export enum YachtTripStatus {
  active = "active",
  sold_out = "sold_out",
  cancelled = "cancelled",
  completed = "completed",
}

export enum YachtRepeatType {
  once = "once",
  daily = "daily",
  weekly = "weekly",
  monthly = "monthly",
}

export enum YachtPricingType {
  private_charter = "private_charter",
  per_person = "per_person",
  shared_trip = "shared_trip",
  custom = "custom",
}

export enum YachtDurationType {
  hourly = "hourly",
  half_day = "half_day",
  daily = "daily",
  overnight = "overnight",
  multi_day = "multi_day",
}

export enum YachtFeeType {
  fuel = "fuel",
  captain = "captain",
  crew = "crew",
  port = "port",
  marina = "marina",
  cleaning = "cleaning",
  overtime = "overtime",
  tax = "tax",
  service = "service",
  other = "other",
}

export enum YachtDiscountType {
  early_booking = "early_booking",
  last_minute = "last_minute",
  seasonal = "seasonal",
  promotion = "promotion",
  coupon = "coupon",
}

export enum YachtExtraCategory {
  food = "food",
  beverage = "beverage",
  activity = "activity",
  equipment = "equipment",
  service = "service",
  decoration = "decoration",
  entertainment = "entertainment",
  other = "other",
}

export enum YachtExtraPricingType {
  fixed = "fixed",
  per_person = "per_person",
  per_hour = "per_hour",
  per_day = "per_day",
}

export enum YachtRefundType {
  full = "full",
  partial = "partial",
  none = "none",
}

export enum YachtBookingStatus {
  pending = "pending",
  awaiting_payment = "awaiting_payment",
  confirmed = "confirmed",
  cancelled = "cancelled",
  completed = "completed",
  rejected = "rejected",
  expired = "expired",
}

export enum YachtPassengerType {
  adult = "adult",
  child = "child",
  infant = "infant",
}

export enum CancellationActor {
  customer = "customer",
  provider = "provider",
  system = "system",
}


export enum VoucherDiscountType {
  percentage = "percentage",
  fixed = "fixed",
}
