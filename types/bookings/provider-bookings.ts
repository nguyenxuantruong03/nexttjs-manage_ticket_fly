import { AirportTransfer } from "./airport-transfer/core/airport-transfer.types";
import { Bus } from "./bus/core/bus.types";
import { CarRental } from "./car_rental/core/car-rental.types";
import { TicketFly } from "./ticket-fly/core/fly.types";
import { HotelInformation } from "./hotel/core/hotel-information.types";
import { Yacht } from "./yacht/core/yacht.types";

export interface ProviderBooking {
  id: string;

  officialName?: string | null;

  displayName: string;

  shortName?: string | null;

  logo?: string | null;

  banner?: string | null;

  subtitle?: string | null;

  description?: string | null;

  companyType?: string | null;

  registrationNumber?: string | null;

  taxCode?: string | null;

  foundedYear?: number | null;

  employeeCount?: number | null;

  email?: string | null;

  phone?: string | null;

  hotline?: string | null;

  website?: string | null;

  addressId?: string | null;

  city?: string | null;

  state?: string | null;

  country?: string | null;

  postalCode?: string | null;

  latitude?: number | null;

  longitude?: number | null;

  facebook?: string | null;

  instagram?: string | null;

  youtube?: string | null;

  linkedin?: string | null;

  verified: boolean;

  status: ProviderStatus;

  licenseNumber?: string | null;

  operatingStatus: ProviderOperatingStatus;

  averageRating: number;

  totalReviews: number;

  totalRatings: number;

  fiveStarCount: number;

  fourStarCount: number;

  threeStarCount: number;

  twoStarCount: number;

  oneStarCount: number;

  totalBookings: number;

  completedBookings: number;

  cancelledBookings: number;

  totalCustomers: number;

  service: typeServiceBooking[];

  userId: string;

  hotels: HotelInformation[];
  carrentals: CarRental[];
  buses: Bus[];
  yacht: Yacht[];
  airportTransfer: AirportTransfer[];
  fly: TicketFly[];

  createdAt: Date;
  updatedAt: Date;
}

export enum typeServiceBooking {
  HOTEL = "HOTEL",
  CARRENTAL = "CARRENTAL",
  AIRPORTTRANSFER = "AIRPORTTRANSFER",
  TICKETFLY = "TICKETFLY",
  TICKETBUS = "TICKETBUS",
  YACHT = "YACHT",
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

export enum typeServiceBooings {
  AIRPORTTRANSFER = "airport-transfer",
  CAR_RENTAL = "car-rental",
  HOTEL = "hotel",
  YACHT = "yacht",
  TICKETFLY = "fly",
  TICKETBUS = "bus",
}
