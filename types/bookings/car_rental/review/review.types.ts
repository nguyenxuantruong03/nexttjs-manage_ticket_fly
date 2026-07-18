import { ReviewStatus } from "@/types/common/enums";
import { CarRentalReviewImage } from "./review-image.types";

export interface CarRentalReview {
  id: string;

  rentalId: string;

  bookingId?: string;

  userId?: string;

  // =====================
  // RATING
  // =====================

  overallRating: number;

  cleanliness?: number;

  vehicleCondition?: number;

  service?: number;

  pickupExperience?: number;

  valueForMoney?: number;

  // =====================
  // REVIEW CONTENT
  // =====================

  title?: string;

  comment: string;

  pros?: string;

  cons?: string;

  // =====================
  // REVIEW INFO
  // =====================

  verified: boolean;

  status: ReviewStatus;

  anonymous: boolean;

  rentalDate?: string;

  helpfulCount: number;

  response?: string;

  responseAt?: string;

  // =====================
  // MEDIA
  // =====================

  images: CarRentalReviewImage[];

  // =====================
  // TIMESTAMP
  // =====================

  createdAt: string;

  updatedAt: string;
}