import { ReviewStatus } from "@/types/common/enums";
import { YachtReviewImage } from "./review-image.types";

export interface YachtReview {
  id: string;

  yachtId: string;

  userId?: string | null;

  bookingId?: string | null;

  overallRating: number;

  captainRating?: number | null;

  crewRating?: number | null;

  cleanliness?: number | null;

  safety?: number | null;

  comfort?: number | null;

  experience?: number | null;

  valueForMoney?: number | null;

  title?: string | null;

  comment: string;

  images: YachtReviewImage[];

  verified: boolean;

  status: ReviewStatus;

  helpfulCount: number;

  createdAt: Date;

  updatedAt: Date;
}
