import { MediaAsset } from "@/types/common/catalog/media-asset";
import { CarRentalReview } from "./review.types";

export interface CarRentalReviewMedia {
  id: string;

  reviewId: string;
  review: CarRentalReview;

  mediaId: string;
  media: MediaAsset;

  createdAt: string;
}
