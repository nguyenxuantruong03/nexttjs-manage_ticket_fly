import { Facility } from "@/types/common/features/facility/facility";
import { HotelRoomType } from "./room-type.types";

export interface BathroomType {
  id: string;

  name: string;
  slug?: string;
  description?: string | null;
  icon?: string | null;

  rooms?: HotelRoomType[];

  active: boolean;
  sortOrder: number;

  createdAt: Date;
  updatedAt: Date;
}

export interface RoomView {
  id: string;

  name: string;
  slug?: string;
  description?: string | null;
  icon?: string | null;

  rooms?: HotelRoomType[];

  active: boolean;
  sortOrder: number;

  createdAt: Date;
  updatedAt: Date;
}

export interface BedType {
  id: string;

  name: string;
  slug?: string;
  description?: string | null;
  icon?: string | null;

  rooms?: HotelRoomTypeBedType[];

  active: boolean;
  sortOrder: number;

  createdAt: Date;
  updatedAt: Date;
}

export interface HotelRoomTypeBedType {
  id: string;

  roomTypeId: string;
  roomType?: HotelRoomType;

  bedTypeId: string;
  bedType?: BedType;

  quantity: number;

  createdAt: Date;
}

export interface RoomCategory {
  id: string;

  name: string;
  slug?: string;
  description?: string | null;
  icon?: string | null;

  rooms?: HotelRoomType[];

  active: boolean;
  sortOrder: number;

  createdAt: Date;
  updatedAt: Date;
}

export interface RoomFacility {
  id: string;

  roomTypeId: string;
  roomType?: HotelRoomType;

  facilityId: string;
  facility?: Facility;

  quantity?: number | null;
  note?: string | null;
}
