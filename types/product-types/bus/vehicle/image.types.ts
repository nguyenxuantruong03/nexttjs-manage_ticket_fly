import { MediaAsset } from "@/types/common/catalog/media-asset";
import { MediaCategory } from "@/types/common/catalog/media-category";

import { BusVehicle } from "./vehicle.types";

export interface BusVehicleImage {
  id: string;

  vehicleId: string;
  vehicle: BusVehicle;

  mediaId: string;
  media: MediaAsset;

  categoryId: string | null;
  category: MediaCategory | null;

  isPrimary: boolean;

  sortOrder: number;

  alt: string | null;

  createdAt: string;

  updatedAt: string;
}