import { Hotel } from "../core/hotel.types";
import { HotelInventory } from "../inventory/inventory.types";
import { RoomMedia } from "./room-media.types";
import {
  BathroomType,
  HotelRoomTypeBedType,
  RoomCategory,
  RoomFacility,
  RoomView,
} from "./room.types";

export interface HotelRoomType {
  id: string;

  hotelId: string;
  hotel: Hotel;

  code?: string | null;

  name: string;

  description?: string | null;

  medias: RoomMedia[];

  inventories: HotelInventory[];

  categoryId?: string | null;
  category?: RoomCategory | null;

  roomSize?: number | null;

  bedCount?: number | null;

  bedTypes: HotelRoomTypeBedType[];

  bathroomCount?: number | null;

  bathroomTypeId?: string | null;
  bathroomType?: BathroomType | null;

  viewId?: string | null;
  view?: RoomView | null;

  floor?: number | null;

  maxGuests?: number | null;

  maxAdults?: number | null;

  maxChildren?: number | null;

  smokingAllowed?: boolean | null;

  balcony?: boolean | null;

  kitchen?: boolean | null;

  accessible?: boolean | null;

  facilities: RoomFacility[];

  active: boolean;

  sortOrder: number;

  createdAt: Date;

  updatedAt: Date;
}
