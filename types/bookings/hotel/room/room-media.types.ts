// room-media.type.ts

import { MediaAsset } from "../media.type";
import { HotelRoomType } from "./room-type.types";

export interface RoomMedia {
  id: string;

  roomTypeId: string;
  roomType: HotelRoomType;

  mediaId: string;
  media: MediaAsset;

  categoryId?: string | null;
  category?: RoomMediaCategory | null;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: Date;
}

export interface RoomMediaCategory {
  id: string;

  name: string;


  description?: string | null;

  icon?: string | null;

  active: boolean;

  sortOrder: number;

  medias: RoomMedia[];

  createdAt: Date;

  updatedAt: Date;
}
