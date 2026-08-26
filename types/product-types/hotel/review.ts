import { MediaAsset } from "@/types/common/catalog/media-asset";
import { HotelBooking } from "./bookings/booking";
import { Hotel } from "./core/hotel.types";
import { TripType } from "./enum/enums";
import { User } from "@/types/users/auth/users";
import { ReviewStatus } from "@/types/common/enums";

export interface HotelReview {
  id: string;

  hotelId: string;
  hotel?: Hotel;

  bookingId?: string | null;
  booking?: HotelBooking | null;

  userId: string;
  user?: User;

  tripType?: TripType | null;

  wouldRecommend?: boolean | null;
  language?: string | null;
  anonymous: boolean;

  overallRating: number;

  status: ReviewStatus;

  response?: string | null;
  responseAt?: Date | null;

  helpfulCount: number;

  medias?: ReviewMedia[];

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

export interface ReviewMedia {
  id: string;

  reviewId: string;
  review?: HotelReview;

  mediaId: string;
  media?: MediaAsset;

  createdAt: Date;
}
