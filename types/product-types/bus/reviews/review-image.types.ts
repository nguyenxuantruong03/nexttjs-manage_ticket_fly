import { MediaAsset } from "@/types/common/catalog/media-asset";

import { BusReview } from "./review.types";

export interface BusReviewImage {
  id: string;

  reviewId: string;
  review: BusReview;

  mediaId: string;
  media: MediaAsset;

  createdAt: string;
}