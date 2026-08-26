import { MediaCategory } from "@/types/common/catalog/media-category";
import { FlyAircraft } from "./aircraft.types";
import { MediaAsset } from "@/types/common/catalog/media-asset";

export interface FlyAircraftImage {
  id: string;

  aircraftId: string;
  aircraft: FlyAircraft;

  mediaId: string;
  media: MediaAsset;

  categoryId: string | null;
  category: MediaCategory | null;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: string;
}
