import { YachtInventoryLock } from "../trips/inventory-lock.types";

import { YachtBookingContact } from "./booking-contact.types";
import { YachtBookingExtra } from "./booking-extra.types";
import { YachtBookingStatusHistory } from "./booking-history.types";
import { YachtBookingPassenger } from "./booking-passenger.types";
import { YachtBookingPickup } from "./booking-pickup.types";

import { YachtReview } from "../reviews/review.types";
import { YachtBookingStatus } from "../enums";

import { Yacht } from "../core/yacht.types";
import { YachtTrip } from "../trips/trip.types";
import { User } from "@/types/users/auth/users";
import { YachtPackageMapper } from "../yacht-package-mapper.type";

export interface YachtBooking {
  id: string;

  // ======================================================
  // USER
  // ======================================================

  userId: string;
  user: User;

  // ======================================================
  // PRODUCT
  // ======================================================

  yachtId: string;
  yacht: Yacht;

  tripId: string | null;
  trip: YachtTrip | null;

  packageId: string | null;
  package: YachtPackageMapper | null;

  // ======================================================
  // BOOKING INFO
  // ======================================================

  bookingCode: string;

  bookingDate: Date;

  startTime: Date;

  endTime: Date | null;

  guestCount: number;

  status: YachtBookingStatus;

  reviews: YachtReview[];

  // ======================================================
  // PRICE
  // ======================================================

  subtotal: number;

  tax: number;

  discount: number;

  serviceFee: number;

  total: number;

  // ======================================================
  // RELATIONS
  // ======================================================

  passengers: YachtBookingPassenger[];

  extras: YachtBookingExtra[];

  contact: YachtBookingContact | null;

  pickup: YachtBookingPickup | null;

  statusHistory: YachtBookingStatusHistory[];

  locks: YachtInventoryLock[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
