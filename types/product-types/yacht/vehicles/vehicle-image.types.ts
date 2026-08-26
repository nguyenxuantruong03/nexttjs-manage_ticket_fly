import { MediaAsset } from "@/types/common/catalog/media-asset";
import { YachtVehicle } from "./vehicle.types";
import { MediaCategory } from "@/types/common/catalog/media-category";

export interface YachtVehicleImage {
  id: string;

  vehicleId: string;
  vehicle?: YachtVehicle;

  mediaId: string;
  media?: MediaAsset;

  categoryId?: string | null;
  category?: MediaCategory | null;

  isPrimary: boolean;
  sortOrder: number;

  createdAt: Date;
}
