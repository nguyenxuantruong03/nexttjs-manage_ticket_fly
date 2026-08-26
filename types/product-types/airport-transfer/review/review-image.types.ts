import { MediaAsset } from "@/types/common/catalog/media-asset";

import { AirportTransferReview } from "./review.types";

export interface AirportTransferReviewImage {
  id: string;

  reviewId: string;

  review: AirportTransferReview;

  mediaId: string;

  media: MediaAsset;

  createdAt: string;
}