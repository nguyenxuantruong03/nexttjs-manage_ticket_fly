import { ReviewStatus } from "@/types/common/enums";
import { AirportTransferReviewImage } from "./review-image.types";

export interface AirportTransferReview {
  id: string;

  transferId: string;

  bookingId?: string;

  userId?: string;

  overallRating: number;

  driverRating?: number;

  vehicleRating?: number;

  punctuality?: number;

  cleanliness?: number;

  communication?: number;

  pickupExperience?: number;

  valueForMoney?: number;

  safety?: number;

  comfort?: number;

  title?: string;

  comment: string;

  pros?: string;

  cons?: string;

  recommend?: boolean;

  verified: boolean;

  status: ReviewStatus;

  travelDate?: string;

  helpfulCount: number;

  response?: string;

  responseAt?: string;

  images: AirportTransferReviewImage[];

  createdAt: string;

  updatedAt: string;
}