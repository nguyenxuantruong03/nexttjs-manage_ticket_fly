import { BookingType } from "../common/commerce/booking-type";
import { AirportTransfer } from "../product-types/airport-transfer/core/airport-transfer.types";
import { Bus } from "../product-types/bus/core/bus.types";
import { CarRental } from "../product-types/car_rental/core/car-rental.types";
import { HotelInformation } from "../product-types/hotel/core/hotel-information.types";
import { Fly } from "../product-types/ticket-fly/core/fly.types";
import { Yacht } from "../product-types/yacht/core/yacht.types";

export interface ProviderBooking {
  id: string;

  // =====================================================
  // BASIC INFORMATION
  // =====================================================

  officialName?: string | null;

  displayName: string;

  shortName?: string | null;

  logo?: string | null;

  banner?: string | null;

  subtitle?: string | null;

  description?: string | null;

  // =====================================================
  // COMPANY INFORMATION
  // =====================================================

  companyType?: string | null;

  registrationNumber?: string | null;

  taxCode?: string | null;

  foundedYear?: number | null;

  employeeCount?: number | null;

  // =====================================================
  // CONTACT INFORMATION
  // =====================================================

  email?: string | null;

  phone?: string | null;

  hotline?: string | null;

  website?: string | null;

  // =====================================================
  // ADDRESS
  // =====================================================

  addressId?: string | null;

  city?: string | null;

  state?: string | null;

  country?: string | null;

  postalCode?: string | null;

  latitude?: number | null;

  longitude?: number | null;

  // =====================================================
  // SOCIAL MEDIA
  // =====================================================

  facebook?: string | null;

  instagram?: string | null;

  youtube?: string | null;

  linkedin?: string | null;

  // =====================================================
  // TRUST & VERIFICATION
  // =====================================================

  verified: boolean;

  status: ProviderStatus;

  licenseNumber?: string | null;

  // =====================================================
  // OPERATION STATUS
  // =====================================================

  operatingStatus: ProviderOperatingStatus;

  // =====================================================
  // RATING & REVIEW
  // =====================================================

  averageRating: number;

  totalReviews: number;

  totalRatings: number;

  fiveStarCount: number;

  fourStarCount: number;

  threeStarCount: number;

  twoStarCount: number;

  oneStarCount: number;

  // =====================================================
  // BOOKING STATISTICS
  // =====================================================

  totalBookings: number;

  completedBookings: number;

  cancelledBookings: number;

  totalCustomers: number;

  // =====================================================
  // SERVICE CAPABILITY
  // =====================================================

  bookingTypes: BookingType[];
  bookingTypeIds: string[];

  // =====================================================
  // RELATIONS
  // =====================================================

  userId: string;

  hotels: HotelInformation[];

  carrentals: CarRental[];

  buses: Bus[];

  yacht: Yacht[];

  airportTransfer: AirportTransfer[];

  fly: Fly[];

  // =====================================================
  // TIMESTAMPS
  // =====================================================

  createdAt: Date;

  updatedAt: Date;
}

export enum ProviderStatus {
  ACTIVE = "ACTIVE",

  INACTIVE = "INACTIVE",

  PENDING = "PENDING",

  BLOCKED = "BLOCKED",
}

export enum ProviderOperatingStatus {
  OPEN = "OPEN",

  TEMPORARILY_CLOSED = "TEMPORARILY_CLOSED",

  CLOSED = "CLOSED",

  MAINTENANCE = "MAINTENANCE",

  SOLD_OUT = "SOLD_OUT",

  HOLIDAY = "HOLIDAY",
}
