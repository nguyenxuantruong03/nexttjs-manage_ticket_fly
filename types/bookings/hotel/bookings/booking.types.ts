import { HotelBookingStatus } from "../enum/enums";
import { HotelInventoryLock } from "../inventory/lock.types";
import { HotelReview } from "../review/review.types";
import { HotelBookingExtra } from "./booking-extra.types";
import { HotelBookingGuest } from "./booking-guest.types";
import { HotelBookingMeal } from "./booking-meal.types";
import { HotelBookingPriceSnapshot } from "./booking-price.types";
import { HotelBookingRoom } from "./booking-room.types";
import { HotelBookingStatusHistory } from "./booking-status.types";

export interface HotelBooking {
  id: string;

  hotelId: string;

  userId?: string | null;

  status: HotelBookingStatus;

  checkIn: Date;
  checkOut: Date;

  totalRooms: number;

  rooms: HotelBookingRoom[];

  guests: HotelBookingGuest[];

  price?: HotelBookingPriceSnapshot | null;

  statusHistory: HotelBookingStatusHistory[];

  specialRequest?: string | null;

  extras: HotelBookingExtra[];

  meals: HotelBookingMeal[];

  expiresAt?: Date | null;

  locks: HotelInventoryLock[];

  reviews: HotelReview[];

  createdAt: Date;

  updatedAt: Date;
}
