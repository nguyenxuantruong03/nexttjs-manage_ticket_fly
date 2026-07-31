import { Hotel } from "./core/hotel.types";
import { MediaAsset } from "./media.type";
import { RoomFacility } from "./room/room.types";

export interface HotelFacilityMapper {
  id: string;

  hotelId: string;
  hotel: Hotel;

  facilityId: string;
  facility: HotelFacility;
}

export interface HotelFacility {
  id: string;

  name: string;


  description?: string | null;

  categoryId?: string | null;
  category?: FacilityCategory | null;

  icon?: string | null;

  hotels: HotelFacilityMapper[];

  rooms: RoomFacility[];

  medias: FacilityMedia[];

  active: boolean;

  sortOrder: number;

  createdAt: Date;
}

export interface FacilityCategory {
  id: string;

  name: string;


  description?: string | null;

  icon?: string | null;

  facilities: HotelFacility[];

  active: boolean;

  sortOrder: number;

  createdAt: Date;

  updatedAt: Date;
}

export interface FacilityMedia {
  id: string;

  facilityId: string;
  facility: HotelFacility;

  mediaId: string;
  media: MediaAsset;

  createdAt: Date;
}
