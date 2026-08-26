import { MediaAsset } from "@/types/common/catalog/media-asset";
import { FlyAirline } from "./airline.types";
import { MediaCategory } from "@/types/common/catalog/media-category";

export interface FlyAirlineImage {
  id: string;

  airlineId: string;
  airline: FlyAirline;

  mediaId: string;
  media: MediaAsset;

  categoryId: string | null;
  category: MediaCategory | null;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: string;
}
