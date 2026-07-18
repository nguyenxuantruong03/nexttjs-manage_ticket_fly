// ======================================================
// Bus Booking Status
// ======================================================

export enum BusBookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
  REJECTED = 'rejected',
  NO_SHOW = 'no_show',
}

// ======================================================
// Passenger Document Type
// ======================================================

export enum PassengerDocumentType {
  PASSPORT = 'passport',
  NATIONAL_ID = 'national_id',
  DRIVING_LICENSE = 'driving_license',
  OTHER = 'other',
}

// ======================================================
// Bus Payment Status
// ======================================================

export enum BusPaymentStatus {
  UNPAID = 'unpaid',
  PENDING = 'pending',
  PAID = 'paid',
  REFUNDED = 'refunded',
  PARTIALLY_REFUNDED = 'partially_refunded',
}

// ======================================================
// Bus Image Category
// ======================================================

export enum BusImageCategory {
  COVER = 'cover',
  EXTERIOR = 'exterior',
  INTERIOR = 'interior',
  SEAT = 'seat',
  SLEEPER = 'sleeper',
  CABIN = 'cabin',
  AMENITY = 'amenity',
  LUGGAGE = 'luggage',
  ROUTE = 'route',
  OTHER = 'other',
}

// ======================================================
// Bus Luggage Unit
// ======================================================

export enum BusLuggageUnit {
  KG = 'kg',
  PIECE = 'piece',
}

// ======================================================
// Bus Ticket Change Type
// ======================================================

export enum BusTicketChangeType {
  NOT_ALLOWED = 'not_allowed',
  ALLOWED_WITH_FEE = 'allowed_with_fee',
  FREE = 'free',
}

// ======================================================
// Bus Refund Type
// ======================================================

export enum BusRefundType {
  NOT_REFUNDABLE = 'not_refundable',
  PARTIAL = 'partial',
  FULL = 'full',
}

// ======================================================
// Bus Price Rule Type
// ======================================================

export enum BusPriceRuleType {
  DISCOUNT = 'discount',
  PROMOTION = 'promotion',
  COUPON = 'coupon',
  SEASONAL = 'seasonal',
  HOLIDAY = 'holiday',
}

// ======================================================
// Bus Seat Type
// ======================================================

export enum BusSeatType {
  SEAT = 'seat',
  SLEEPER = 'sleeper',
  LIMOUSINE = 'limousine',
  VIP = 'vip',
  CABIN = 'cabin',
}

// ======================================================
// Bus Vehicle Type
// ======================================================

export enum BusVehicleType {
  SEATER = 'seater',
  SLEEPER = 'sleeper',
  LIMOUSINE = 'limousine',
  VIP = 'vip',
  CABIN = 'cabin',
  MINIBUS = 'minibus',
  SHUTTLE = 'shuttle',
}

// ======================================================
// Bus Vehicle Status
// ======================================================

export enum BusVehicleStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

// ======================================================
// Bus Fuel Type
// ======================================================

export enum BusFuelType {
  DIESEL = 'diesel',
  GASOLINE = 'gasoline',
  ELECTRIC = 'electric',
  HYBRID = 'hybrid',
}

// ======================================================
// Bus Vehicle Image Category
// ======================================================

export enum BusVehicleImageCategory {
  EXTERIOR = 'exterior',
  INTERIOR = 'interior',
  SEAT = 'seat',
  CABIN = 'cabin',
  DRIVER = 'driver',
  LUGGAGE = 'luggage',
  AMENITY = 'amenity',
  OTHER = 'other',
}

// ======================================================
// Bus Seat Availability Status
// ======================================================

export enum BusSeatAvailabilityStatus {
  AVAILABLE = 'available',
  LOCKED = 'locked',
  BOOKED = 'booked',
  BLOCKED = 'blocked',
  MAINTENANCE = 'maintenance',
}

// ======================================================
// Bus Boarding Status
// ======================================================

export enum BusBoardingStatus {
  NOT_CHECKED_IN = 'not_checked_in',
  CHECKED_IN = 'checked_in',
  WAITING_BOARDING = 'waiting_boarding',
  BOARDED = 'boarded',
  MISSED = 'missed',
  CANCELLED = 'cancelled',
}

// ======================================================
// Bus Trip Status
// ======================================================

export enum BusTripStatus {
  ACTIVE = 'active',
  SOLD_OUT = 'sold_out',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

// ======================================================
// Boarding Pass Status
// ======================================================

export enum BoardingPassStatus {
  ISSUED = 'issued',
  CHECKED_IN = 'checked_in',
  BOARDED = 'boarded',
  EXPIRED = 'expired',
  CANCELLED = 'cancelled',
}

// ======================================================
// Bus Ticket Status
// ======================================================

export enum BusTicketStatus {
  PENDING = 'pending',
  ISSUED = 'issued',
  USED = 'used',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
  EXPIRED = 'expired',
}