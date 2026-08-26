import { ReviewStatus } from "@/types/common/enums";

import { AirportTransfer } from "../core/airport-transfer.types";
import { AirportTransferBooking } from "../booking/booking.types";
import { User } from "@/types/users/auth/users";

import { AirportTransferReviewImage } from "./review-image.types";

export interface AirportTransferReview {
  id: string;

  transferId: string;

  transfer: AirportTransfer;

  bookingId: string | null;

  booking: AirportTransferBooking | null;

  userId: string | null;

  user: User | null;

  overallRating: number;

  driverRating: number | null;

  vehicleRating: number | null;

  punctuality: number | null;

  cleanliness: number | null;

  communication: number | null;

  pickupExperience: number | null;

  valueForMoney: number | null;

  safety: number | null;

  comfort: number | null;

  title: string | null;

  comment: string;

  pros: string | null;

  cons: string | null;

  recommend: boolean | null;

  verified: boolean;

  status: ReviewStatus;

  travelDate: string | null;

  helpfulCount: number;

  response: string | null;

  responseAt: string | null;

  images: AirportTransferReviewImage[];

  createdAt: string;

  updatedAt: string;
}