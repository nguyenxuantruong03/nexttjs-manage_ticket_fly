import { Hotel } from "../core/hotel.types";

import { HotelInventoryLock } from "../inventory/lock.types";

import { HotelBookingExtra } from "./booking-extra";
import { HotelBookingGuest } from "./booking-guest";
import { HotelBookingPriceSnapshot } from "./booking-price";
import { HotelBookingRoom } from "./booking-room-type";
import { HotelBookingStatusHistory } from "./booking-status";

import { HotelReview } from "../review";
import { User } from "@/types/users/auth/users";
import { HotelPackageMapper } from "../hotel-package-mapper.type";
import { HotelBookingStatus } from "../enum/enums";

export interface HotelBooking {
  id: string;

  // ======================================================
  // HOTEL
  // ======================================================

  hotelId: string;
  hotel: Hotel;

  // ======================================================
  // USER
  // ======================================================

  userId: string | null;
  user: User | null;

  // ======================================================
  // PACKAGE
  // ======================================================

  packageId: string | null;
  package: HotelPackageMapper | null;

  // ======================================================
  // BOOKING
  // ======================================================

  status: HotelBookingStatus;

  checkIn: Date;

  checkOut: Date;

  totalRooms: number;

  // ======================================================
  // ROOMS / GUESTS
  // ======================================================

  rooms: HotelBookingRoom[];

  guests: HotelBookingGuest[];

  // ======================================================
  // PRICE
  // ======================================================

  price: HotelBookingPriceSnapshot | null;

  // ======================================================
  // STATUS / REQUEST
  // ======================================================

  statusHistory: HotelBookingStatusHistory[];

  specialRequest: string | null;

  // ======================================================
  // EXTRAS
  // ======================================================

  extras: HotelBookingExtra[];

  // ======================================================
  // INVENTORY / REVIEW
  // ======================================================

  expiresAt: Date | null;

  locks: HotelInventoryLock[];

  reviews: HotelReview[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
