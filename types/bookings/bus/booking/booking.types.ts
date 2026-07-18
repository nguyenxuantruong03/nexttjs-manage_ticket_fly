import { BusBookingStatus, BusPaymentStatus } from "../enums";
import { BusReview } from "../reviews/review.types";
import { BusSeatInventoryLock } from "../routes/inventory-lock.types";
import { BusTicket } from "../ticket/ticket.types";
import { BusBookingStatusHistory } from "./booking-history.types";
import { BusBookingPassenger } from "./booking-passenger.types";
import { BusBookingPriceSnapshot } from "./booking-price.types";
import { BusBookingSeat } from "./booking-seat.types";

export interface BusBooking {
  id: string;

  busId: string;

  tripId: string;

  userId: string;

  ticket: BusTicket[];

  note?: string;

  specialRequest?: string;

  status: BusBookingStatus;

  statusHistory: BusBookingStatusHistory[];

  passengers: BusBookingPassenger[];

  reviews: BusReview[];

  seats: BusBookingSeat[];

  expiresAt?: string;

  priceSnapshot?: BusBookingPriceSnapshot;

  locks: BusSeatInventoryLock[];

  paymentStatus: BusPaymentStatus;

  createdAt: string;

  updatedAt: string;
}