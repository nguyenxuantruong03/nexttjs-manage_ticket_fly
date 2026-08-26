import { MediaAsset } from "@/types/common/catalog/media-asset";
import { MediaCategory } from "@/types/common/catalog/media-category";
import { CarRental } from "./car-rental.types";

export interface CarRentalMedia {
  id: string;

  rentalId: string;
  rental: CarRental;

  mediaId: string;
  media: MediaAsset;

  categoryId: string | null;
  category: MediaCategory | null;

  isPrimary: boolean;
  sortOrder: number;

  createdAt: string;
  updatedAt: string;
}