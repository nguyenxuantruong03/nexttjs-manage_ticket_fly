import { MediaAsset } from "@/types/common/catalog/media-asset";
import { Yacht } from "./yacht.types";
import { MediaCategory } from "@/types/common/catalog/media-category";

export interface YachtImage {
  id: string;

  yachtId: string;
  yacht?: Yacht;

  mediaId: string;
  media?: MediaAsset;

  categoryId?: string | null;
  category?: MediaCategory | null;

  isPrimary: boolean;
  sortOrder: number;

  createdAt: Date;
}
