// ======================================================
// Yacht Trip Status
// ======================================================

export enum YachtTripStatus {
  active = "active",
  sold_out = "sold_out",
  cancelled = "cancelled",
  completed = "completed",
}

// ======================================================
// Yacht Repeat Type
// ======================================================

export enum YachtRepeatType {
  once = "once",
  daily = "daily",
  weekly = "weekly",
  monthly = "monthly",
}

// ======================================================
// Yacht Pricing Type
// ======================================================

export enum YachtPricingType {
  private_charter = "private_charter",
  per_person = "per_person",
  shared_trip = "shared_trip",
  custom = "custom",
}

// ======================================================
// Yacht Duration Type
// ======================================================

export enum YachtDurationType {
  hourly = "hourly",
  half_day = "half_day",
  daily = "daily",
  overnight = "overnight",
  multi_day = "multi_day",
}

// ======================================================
// Yacht Booking Status
// ======================================================

export enum YachtBookingStatus {
  pending = "pending",
  awaiting_payment = "awaiting_payment",
  confirmed = "confirmed",
  cancelled = "cancelled",
  completed = "completed",
  rejected = "rejected",
  expired = "expired",
}

// ======================================================
// Yacht Passenger Type
// ======================================================

export enum YachtPassengerType {
  adult = "adult",
  child = "child",
  infant = "infant",
}
