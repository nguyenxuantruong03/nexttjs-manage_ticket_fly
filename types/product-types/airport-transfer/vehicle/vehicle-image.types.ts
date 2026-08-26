import { MediaAsset } from "@/types/common/catalog/media-asset";
import { MediaCategory } from "@/types/common/catalog/media-category";

import { AirportTransferVehicle } from "./vehicle.types";

export interface AirportTransferVehicleImage {
  id: string;

  vehicleId: string;

  vehicle: AirportTransferVehicle;

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