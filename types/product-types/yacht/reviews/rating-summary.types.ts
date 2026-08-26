import { Yacht } from "../core/yacht.types";

export interface YachtRatingSummary {
  id: string;

  yachtId: string;
  yacht: Yacht;

  totalReviews: number;

  averageRating: number;

  captain: number;

  crew: number;

  safety: number;
}