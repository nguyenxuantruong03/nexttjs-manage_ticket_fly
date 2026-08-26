import { MediaAsset } from "@/types/common/catalog/media-asset";
import { MediaCategory } from "@/types/common/catalog/media-category";

import { Bus } from "./bus.types";

export interface BusImage {
  id: string;

  busId: string;
  bus: Bus;

  mediaId: string;
  media: MediaAsset;

  categoryId: string | null;
  category: MediaCategory | null;

  alt: string | null;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: string;

  updatedAt: string;
}