import { MediaCategory } from "@/types/common/catalog/media-category";
import { Hotel } from "./hotel.types";
import { MediaAsset } from "@/types/common/catalog/media-asset";

export interface HotelMedia {
  id: string;

  hotelId: string;
  hotel?: Hotel;

  mediaId: string;
  media?: MediaAsset;

  categoryId?: string;
  category?: MediaCategory;

  isPrimary: boolean;
  sortOrder: number;
  createdAt: Date;
}
