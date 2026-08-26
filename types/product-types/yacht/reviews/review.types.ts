import { User } from "@/types/users/auth/users";
import { ReviewStatus } from "@/types/common/enums";

import { YachtBooking } from "../booking/booking.types";
import { YachtReviewImage } from "./review-image.types";
import { Yacht } from "../core/yacht.types";

export interface YachtReview {
  id: string;

  yachtId: string;
  yacht: Yacht;

  userId: string | null;
  user: User | null;

  bookingId: string | null;
  booking: YachtBooking | null;

  overallRating: number;

  captainRating: number | null;
  crewRating: number | null;
  cleanliness: number | null;
  safety: number | null;
  comfort: number | null;
  experience: number | null;
  valueForMoney: number | null;

  title: string | null;
  comment: string;

  images: YachtReviewImage[];

  verified: boolean;

  status: ReviewStatus;

  helpfulCount: number;

  createdAt: Date;
  updatedAt: Date;
}