export enum AirportTransferTripStatus {
  SCHEDULED = "scheduled",
  ACTIVE = "active",
  FULL = "full",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
}

export enum AirportTransferTransmission {
  AUTOMATIC = "automatic",
  MANUAL = "manual",
}

export enum AirportTransferVehicleStatus {
  AVAILABLE = "available",
  RESERVED = "reserved",
  MAINTENANCE = "maintenance",
  INACTIVE = "inactive",
}

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