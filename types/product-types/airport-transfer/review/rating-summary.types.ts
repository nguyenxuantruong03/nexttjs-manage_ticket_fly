import { AirportTransfer } from "../core/airport-transfer.types";

export interface AirportTransferRatingSummary {
  id: string;

  transferId: string;

  transfer: AirportTransfer;

  averageRating: number;

  totalReviews: number;

  driverRating: number;

  vehicleRating: number;

  punctuality: number;

  cleanliness: number;

  communication: number;

  pickupExperience: number;

  valueForMoney: number;

  safety: number;

  comfort: number;

  fiveStar: number;

  fourStar: number;

  threeStar: number;

  twoStar: number;

  oneStar: number;

  updatedAt: string;
}