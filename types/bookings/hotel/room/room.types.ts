import { BathroomType, BedType, MealPlan, RoomViewType, SmokingPolicy } from "../enum/enums";
import { HotelRoomFacilities } from "./room-facilities.types";
import { HotelRoomImage } from "./room-image.types";

export interface HotelRoom {
  id: string;

  roomTypeId: string;

  roomFacilities?: HotelRoomFacilities | null;

  active: boolean;

  name: string;

  description?: string | null;

  roomSize?: number | null;

  bedTypes: BedType[];

  maxGuests?: number | null;

  maxAdults?: number | null;

  maxChildren?: number | null;

  totalRooms?: number | null;

  breakfastIncluded?: boolean | null;

  smokingPolicy?: SmokingPolicy | null;

  mealPlan?: MealPlan | null;

  bedCount?: number | null;

  bathroomCount?: number | null;

  viewType?: RoomViewType | null;

  bathRoomType?: BathroomType | null;

  roomImage: HotelRoomImage[];

  floor?: number | null;

  soundproof?: boolean | null;

  nonSmoking?: boolean | null;

  airConditioning?: boolean | null;

  kitchenette?: boolean | null;

  privateBathroom?: boolean | null;
}
