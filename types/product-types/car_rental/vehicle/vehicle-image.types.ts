import { CarRentalVehicle } from "./vehicle.types";
import { RentalVehicleImagePosition } from "../enums";
import { MediaAsset } from "@/types/common/catalog/media-asset";
import { MediaCategory } from "@/types/common/catalog/media-category";

export interface CarRentalVehicleMedia {
  id: string;

  vehicleId: string;
  vehicle: CarRentalVehicle;

  mediaId: string;
  media: MediaAsset;

  categoryId: string | null;
  category: MediaCategory | null;

  position: RentalVehicleImagePosition | null;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: string;

  updatedAt: string;
}
