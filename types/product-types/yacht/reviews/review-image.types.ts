import { MediaAsset } from "@/types/common/catalog/media-asset";
import { YachtReview } from "./review.types";

export interface YachtReviewImage {
  id: string;

  reviewId: string;
  review?: YachtReview;

  mediaId: string;
  media?: MediaAsset;

  createdAt: Date;
}
