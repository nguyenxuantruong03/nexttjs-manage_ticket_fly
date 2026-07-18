import { ReviewStatus } from "@/types/common/enums";
import { BusReviewImage } from "./review-image.types";

export interface BusReview {
  id: string;

  // ======================================================
  // Relations
  // ======================================================

  busId: string;

  tripId: string;

  bookingId?: string;

  userId?: string;

  // ======================================================
  // Ratings
  // ======================================================

  anonymous: boolean;

  overallRating: number;

  cleanliness?: number;

  comfort?: number;

  busCondition?: number;

  driverService?: number;

  staffService?: number;

  punctuality?: number;

  boardingExperience?: number;

  bookingExperience?: number;

  valueForMoney?: number;

  // ======================================================
  // Review Content
  // ======================================================

  title?: string;

  comment: string;

  pros?: string;

  cons?: string;

  recommend?: boolean;

  // ======================================================
  // Review Info
  // ======================================================

  verified: boolean;

  status: ReviewStatus;

  travelDate?: string;

  helpfulCount: number;

  response?: string;

  responseAt?: string;

  // ======================================================
  // Media
  // ======================================================

  images: BusReviewImage[];

  // ======================================================
  // Timestamp
  // ======================================================

  createdAt: string;

  updatedAt: string;
}