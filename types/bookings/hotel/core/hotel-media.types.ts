// hotel-media.type.ts

import { MediaAsset } from "../media.type";
import { Hotel } from "./hotel.types";

export interface HotelMedia {
  id: string;

  hotelId: string;
  hotel: Hotel;

  mediaAssetId: string;
  media: MediaAsset;

  categoryId?: string | null;
  category?: HotelMediaCategory | null;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: Date;
}

export interface HotelMediaCategory {
  id: string;

  name: string;

  description?: string | null;

  icon?: string | null;

  sortOrder: number;

  active: boolean;

  medias: HotelMedia[];

  createdAt: Date;

  updatedAt: Date;
}
