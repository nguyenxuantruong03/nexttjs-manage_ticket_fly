import { YachtInventoryLock } from "../trips/inventory-lock.types";
import { YachtBookingContact } from "./booking-contact.types";
import { YachtBookingExtra } from "./booking-extra.types";
import { YachtBookingStatusHistory } from "./booking-history.types";
import { YachtBookingPassenger } from "./booking-passenger.types";
import { YachtBookingPickup } from "./booking-pickup.types";
import { YachtReview } from "../reviews/review.types";
import { YachtBookingStatus } from "../enums";

export interface YachtBooking {
  id: string;

  userId: string;

  yachtId: string;

  tripId?: string | null;

  packageId?: string | null;

  bookingCode: string;

  bookingDate: Date;

  startTime: Date;

  endTime?: Date | null;

  guestCount: number;

  status: YachtBookingStatus;

  reviews: YachtReview[];


  subtotal: number;

  tax: number;

  discount: number;

  serviceFee: number;

  total: number;

  passengers: YachtBookingPassenger[];
  extras: YachtBookingExtra[];
  contact?: YachtBookingContact | null;
  pickup?: YachtBookingPickup | null;
  statusHistory: YachtBookingStatusHistory[];
  locks: YachtInventoryLock[];

  createdAt: Date;

  updatedAt: Date;
}