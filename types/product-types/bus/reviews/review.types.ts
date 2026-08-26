import { User } from "@/types/users/auth/users";

import { ReviewStatus } from "@/types/common/enums";

import { Bus } from "../core/bus.types";
import { BusBooking } from "../booking/booking.types";

import { BusReviewImage } from "./review-image.types";
import { BusTrip } from "../routes/trip.types";

export interface BusReview {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  busId: string;
  bus: Bus;

  tripId: string;
  trip: BusTrip;

  bookingId: string | null;
  booking: BusBooking | null;

  userId: string | null;
  user: User | null;

  // ======================================================
  // RATINGS
  // ======================================================

  anonymous: boolean;

  overallRating: number;

  cleanliness: number | null;

  comfort: number | null;

  busCondition: number | null;

  driverService: number | null;

  staffService: number | null;

  punctuality: number | null;

  boardingExperience: number | null;

  bookingExperience: number | null;

  valueForMoney: number | null;

  // ======================================================
  // REVIEW CONTENT
  // ======================================================

  title: string | null;

  comment: string;

  pros: string | null;

  cons: string | null;

  recommend: boolean | null;

  // ======================================================
  // REVIEW INFO
  // ======================================================

  verified: boolean;

  status: ReviewStatus;

  travelDate: string | null;

  helpfulCount: number;

  response: string | null;

  responseAt: string | null;

  // ======================================================
  // MEDIA
  // ======================================================

  images: BusReviewImage[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: string;

  updatedAt: string;
}