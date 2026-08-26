export enum BusBookingStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
  REJECTED = "rejected",
  NO_SHOW = "no_show",
}

export enum PassengerDocumentType {
  PASSPORT = "passport",
  NATIONAL_ID = "national_id",
  DRIVING_LICENSE = "driving_license",
  OTHER = "other",
}

export enum BusPaymentStatus {
  UNPAID = "unpaid",
  PENDING = "pending",
  PAID = "paid",
  REFUNDED = "refunded",
  PARTIALLY_REFUNDED = "partially_refunded",
}

export enum BusVehicleStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export enum BusSeatAvailabilityStatus {
  AVAILABLE = "available",
  LOCKED = "locked",
  BOOKED = "booked",
  BLOCKED = "blocked",
  MAINTENANCE = "maintenance",
}

export enum BusBoardingStatus {
  NOT_CHECKED_IN = "not_checked_in",
  CHECKED_IN = "checked_in",
  WAITING_BOARDING = "waiting_boarding",
  BOARDED = "boarded",
  MISSED = "missed",
  CANCELLED = "cancelled",
}

export enum BusTripStatus {
  ACTIVE = "active",
  SOLD_OUT = "sold_out",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
}

export enum BoardingPassStatus {
  ISSUED = "issued",
  CHECKED_IN = "checked_in",
  BOARDED = "boarded",
  EXPIRED = "expired",
  CANCELLED = "cancelled",
}

export enum BusTicketStatus {
  PENDING = "pending",
  ISSUED = "issued",
  USED = "used",
  CANCELLED = "cancelled",
  REFUNDED = "refunded",
  EXPIRED = "expired",
}