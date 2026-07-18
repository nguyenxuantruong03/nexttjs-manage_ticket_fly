import { ReviewStatus } from "@/types/common/enums";
import { TripType } from "../enum/enums";
import { HotelReviewImage } from "./review-image.types";

export interface HotelReview {
  id: string;

  hotelId: string;

  bookingId?: string | null;

  userId: string;

  tripType?: TripType | null;

  wouldRecommend?: boolean | null;

  language?: string | null;

  anonymous: boolean;

  overallRating: number;

  status: ReviewStatus;

  response?: string | null;

  responseAt?: Date | null;

  helpfulCount: number;

  images: HotelReviewImage[];

  cleanliness?: number | null;

  service?: number | null;

  location?: number | null;

  facilities?: number | null;

  valueForMoney?: number | null;

  comfort?: number | null;

  sleepQuality?: number | null;

  food?: number | null;

  wifi?: number | null;

  title?: string | null;

  comment: string;

  pros?: string | null;

  cons?: string | null;

  verified: boolean;

  reviewerName?: string | null;

  reviewerCountry?: string | null;

  stayDate?: Date | null;

  createdAt: Date;

  updatedAt: Date;
}
