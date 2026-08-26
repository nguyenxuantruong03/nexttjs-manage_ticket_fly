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

export enum CarRentalExtraPricingType {
  fixed = "fixed",
  per_day = "per_day",
  per_hour = "per_hour",
  per_rental = "per_rental",
}

// ======================================================
// Pickup / Vehicle
// ======================================================

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