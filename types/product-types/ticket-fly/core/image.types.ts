import { MediaCategory } from "@/types/common/catalog/media-category";
import { Fly } from "./fly.types";
import { MediaAsset } from "@/types/common/catalog/media-asset";

export interface FlyImage {
  id: string;

  flyId: string;
  fly: Fly;

  mediaId: string;
  media: MediaAsset;

  categoryId: string | null;
  category: MediaCategory | null;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: string;

  updatedAt: string;
}
