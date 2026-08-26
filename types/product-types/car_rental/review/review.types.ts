import { ReviewStatus } from "@/types/common/enums";

import { CarRental } from "../core/car-rental.types";
import { CarRentalBooking } from "../booking/booking.types";
import { CarRentalReviewMedia } from "./review-image.types";
import { User } from "@/types/users/auth/users";

export interface CarRentalReview {
  id: string;

  // =====================
  // RELATIONS
  // =====================

  rentalId: string;
  rental: CarRental;

  bookingId: string | null;
  booking: CarRentalBooking | null;

  userId: string | null;
  user: User | null;

  // =====================
  // RATING
  // =====================

  overallRating: number;

  cleanliness: number | null;

  vehicleCondition: number | null;

  service: number | null;

  pickupExperience: number | null;

  valueForMoney: number | null;

  // =====================
  // REVIEW CONTENT
  // =====================

  title: string | null;

  comment: string;

  pros: string | null;

  cons: string | null;

  // =====================
  // REVIEW INFO
  // =====================

  verified: boolean;

  status: ReviewStatus;

  anonymous: boolean;

  rentalDate: string | null;

  helpfulCount: number;

  response: string | null;

  responseAt: string | null;

  // =====================
  // MEDIA
  // =====================

  medias: CarRentalReviewMedia[];

  // =====================
  // TIMESTAMP
  // =====================

  createdAt: string;

  updatedAt: string;
}
