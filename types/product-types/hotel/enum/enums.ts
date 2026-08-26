export enum InventoryLockReason {
  BOOKING = "BOOKING",
  MAINTENANCE = "MAINTENANCE",
  OWNER = "OWNER",
  ADMIN = "ADMIN",
  CHANNEL = "CHANNEL",
}

export enum HotelStatus {
  DRAFT = "DRAFT",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
}

export enum TripType {
  BUSINESS = "BUSINESS",
  LEISURE = "LEISURE",
  FAMILY = "FAMILY",
  COUPLE = "COUPLE",
  SOLO = "SOLO",
  FRIENDS = "FRIENDS",
  GROUP = "GROUP",
}

export enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  TOUR_360 = "TOUR_360",
  DOCUMENT = "DOCUMENT",
}

export enum HotelPriceAdjustmentType {
  PERCENTAGE = "PERCENTAGE",
  FIXED_AMOUNT = "FIXED_AMOUNT",
}

export enum HotelBookingStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  REJECTED = "REJECTED",
  NO_SHOW = "NO_SHOW",
}