// media-asset.type.ts

import { HotelMedia } from "./core/hotel-media.types";
import { MediaType } from "./enum/enums";
import { FacilityMedia } from "./facilities.types";
import { HotelAwardMedia } from "./hotel-detail.type";
import { RoomMedia } from "./room/room-media.types";

export interface MediaAsset {
  id: string;

  url: string;

  thumbnailUrl?: string | null;

  path?: string | null;

  type: MediaType;

  mimeType?: string | null;

  size?: number | null;

  width?: number | null;

  height?: number | null;

  duration?: number | null;

  alt?: string | null;

  caption?: string | null;

  hotelMedias: HotelMedia[];

  roomMedias: RoomMedia[];

  facilityMedias: FacilityMedia[];

  awardMedias: HotelAwardMedia[];

  createdAt: Date;

  updatedAt: Date;
}
