import { MediaCategory } from "@/types/common/catalog/media-category";
import { HotelRoomType } from "./room-type.types";
import { MediaAsset } from "@/types/common/catalog/media-asset";

export interface RoomMedia {
  id: string;

  roomTypeId: string;
  roomType?: HotelRoomType;

  mediaId: string;
  media?: MediaAsset;

  categoryId?: string | null;
  category?: MediaCategory | null;

  isPrimary: boolean;
  sortOrder: number;

  createdAt: Date;
}
