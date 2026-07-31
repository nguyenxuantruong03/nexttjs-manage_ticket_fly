export enum InventoryLockStatus {
  LOCKED = "LOCKED",
  CONFIRMED = "CONFIRMED",
  EXPIRED = "EXPIRED",
  RELEASED = "RELEASED",
  CANCELLED = "CANCELLED",
}

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

export enum ReviewStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  HIDDEN = "hidden",
}

export enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  TOUR_360 = "TOUR_360",
  DOCUMENT = "DOCUMENT",
}

export enum HotelPriceRuleType {
  WEEKEND = "WEEKEND",
  WEEKDAY = "WEEKDAY",
  HOLIDAY = "HOLIDAY",
  PEAK_SEASON = "PEAK_SEASON",
  LOW_SEASON = "LOW_SEASON",
  EARLY_BIRD = "EARLY_BIRD",
  LAST_MINUTE = "LAST_MINUTE",
  LONG_STAY = "LONG_STAY",
  PROMOTIONAL = "PROMOTIONAL",
  COUPON = "COUPON",
  MEMBER = "MEMBER",
  CUSTOM = "CUSTOM",
}

export enum HotelPriceAdjustmentType {
  PERCENTAGE = "PERCENTAGE",
  FIXED_AMOUNT = "FIXED_AMOUNT",
}
