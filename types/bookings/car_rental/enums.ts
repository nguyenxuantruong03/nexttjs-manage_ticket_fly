// ======================================================
// Car Rental Enums
// ======================================================

export enum CarRentalCalendarStatus {
  available = "available",
  reserved = "reserved",
  blocked = "blocked",
  maintenance = "maintenance",
}

export enum CarRentalBookingStatus {
  pending = "pending",
  confirmed = "confirmed",
  awaiting_payment = "awaiting_payment",
  paid = "paid",
  cancelled = "cancelled",
  completed = "completed",
  rejected = "rejected",
  expired = "expired",
}

export enum CarRentalPaymentStatus {
  unpaid = "unpaid",
  pending = "pending",
  paid = "paid",
  refunded = "refunded",
  partially_refunded = "partially_refunded",
}

export enum CarRentalBookingType {
  self_drive = "self_drive",
  with_driver = "with_driver",
}

export enum CarRentalExtraType {
  gps = "gps",
  child_seat = "child_seat",
  extra_driver = "extra_driver",
  wifi = "wifi",
  delivery = "delivery",
  pickup = "pickup",
  snow_chain = "snow_chain",
  luggage_rack = "luggage_rack",
  baby_seat = "baby_seat",
  other = "other",
}

export enum CarRentalExtraPricingType {
  fixed = "fixed",
  per_day = "per_day",
  per_hour = "per_hour",
  per_rental = "per_rental",
}

export enum CarRentalBookingLocationType {
  pickup = "pickup",
  dropoff = "dropoff",
}

export enum CarRentalImageCategory {
  cover = "cover",
  banner = "banner",
  gallery = "gallery",
  promotion = "promotion",
}

export enum CarRentalInsuranceType {
  basic = "basic",
  standard = "standard",
  premium = "premium",
  full_protection = "full_protection",
}

export enum CarRentalInsuranceBenefitType {
  damage = "damage",
  theft = "theft",
  accident = "accident",
  liability = "liability",
  medical = "medical",
  roadside_assistance = "roadside_assistance",
  windshield = "windshield",
  tire = "tire",
  other = "other",
}

export enum PickupInstructionType {
  airport = "airport",
  office = "office",
  hotel = "hotel",
  delivery = "delivery",
  meeting_point = "meeting_point",
}

export enum RentalVehicleCondition {
  new = "new",
  excellent = "excellent",
  good = "good",
  fair = "fair",
}

export enum RentalVehicleDocumentType {
  registration = "registration",
  insurance = "insurance",
  inspection = "inspection",
  permit = "permit",
}

export enum RentalVehicleImageCategory {
  exterior = "exterior",
  interior = "interior",
  trunk = "trunk",
  engine = "engine",
  wheel = "wheel",
  roof = "roof",
  document = "document",
  damage = "damage",
  accessory = "accessory",
  other = "other",
}

// ======================================================
// Vehicle Enums
// ======================================================

export enum RentalVehicleStatus {
  available = "available",
  reserved = "reserved",
  maintenance = "maintenance",
  out_of_service = "out_of_service",
}

export enum RentalTransmission {
  manual = "manual",
  automatic = "automatic",
}

export enum RentalVehicleType {
  car = "car",
  luxury_car = "luxury_car",
  suv = "suv",
  pickup = "pickup",
  van = "van",
  minibus = "minibus",
  motorbike = "motorbike",
  electric_bicycle = "electric_bicycle",
  other = "other",
}

export enum RentalFuelType {
  gasoline = "gasoline",
  diesel = "diesel",
  electric = "electric",
  hybrid = "hybrid",
}

export enum RentalVehicleImagePosition {
  front = "front",
  rear = "rear",
  left = "left",
  right = "right",
  front_left = "front_left",
  front_right = "front_right",
  rear_left = "rear_left",
  rear_right = "rear_right",
  dashboard = "dashboard",
  driver_seat = "driver_seat",
  front_seats = "front_seats",
  rear_seats = "rear_seats",
  cargo = "cargo",
  engine_bay = "engine_bay",
  full_view = "full_view",
  detail = "detail",
  other = "other",
}

export enum RentalLocationType {
  PICKUP = "PICKUP",
  DROPOFF = "DROPOFF",
}

export enum DriverStatus {
  active = "active",
  inactive = "inactive",
}

export enum DriverOption {
  self_drive = "self_drive",
  with_driver = "with_driver",
}

export enum RentalDurationType {
  hourly = "hourly",
  daily = "daily",
  weekly = "weekly",
  monthly = "monthly",
}


export enum CarRentalPriceRuleType {
  weekend = "weekend",
  weekday = "weekday",
  holiday = "holiday",
  peak_season = "peak_season",
  low_season = "low_season",
  early_bird = "early_bird",
  last_minute = "last_minute",
  long_rental = "long_rental",
  promotional = "promotional",
  member = "member",
  custom = "custom",
}

export enum UnitOption {
  km = "km",
  m = "m",
}

export enum FuelPolicy {
  full_to_full = "full_to_full",
  same_level = "same_level",
  prepaid = "prepaid",
  electric_charge = "electric_charge",
}

export enum RentalDocument {
  passport = "passport",
  driver_license = "driver_license",
  international_driver_license = "international_driver_license",
  identity_card = "identity_card",
  credit_card = "credit_card",
}