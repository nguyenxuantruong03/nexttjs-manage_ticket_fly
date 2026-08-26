import { User } from "@/types/users/auth/users";
import { Bus } from "../core/bus.types";
import { BusBookingStatus, BusPaymentStatus } from "../enums";
import { BusReview } from "../reviews/review.types";
import { BusSeatInventoryLock } from "../routes/inventory-lock.types";
import { BusTrip } from "../routes/trip.types";
import { BusTicket } from "../ticket/ticket.types";
import { BusBookingStatusHistory } from "./booking-history.types";
import { BusBookingPassenger } from "./booking-passenger.types";
import { BusBookingPriceSnapshot } from "./booking-price.types";
import { BusBookingSeat } from "./booking-seat.types";
import { BusBookingExtra } from "./booking-extra.type";
import { BusPackageMapper } from "../bus-package-mapper.type";

export interface BusBooking {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  busId: string;
  bus: Bus;

  tripId: string;
  trip: BusTrip;

  userId: string;
  user: User;

  packageId: string | null;
  package: BusPackageMapper | null;

  // ======================================================
  // BOOKING RELATIONS
  // ======================================================

  ticket: BusTicket[];

  statusHistory: BusBookingStatusHistory[];

  extras: BusBookingExtra[];

  passengers: BusBookingPassenger[];

  reviews: BusReview[];

  seats: BusBookingSeat[];

  priceSnapshot: BusBookingPriceSnapshot | null;

  locks: BusSeatInventoryLock[];

  // ======================================================
  // BOOKING INFORMATION
  // ======================================================

  note: string | null;

  specialRequest: string | null;

  status: BusBookingStatus;

  expiresAt: Date | null;

  paymentStatus: BusPaymentStatus;

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
