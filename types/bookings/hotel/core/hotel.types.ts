import { HotelBooking } from "../bookings/booking.types";
import { HotelAreaGuide } from "../content/area-guide.types";
import { HotelNearbyPlace } from "../content/nearby-place.types";
import { HotelStatus } from "../enum/enums";
import { HotelFacilities } from "../facilities/facilities.types";
import { HotelFavorite } from "../favorite/favorite.types";
import { HotelInventory } from "../inventory/inventory.types";
import { HotelReview } from "../review/review.types";
import { HotelRoomType } from "../room/room-type.types";
import { HotelExtra } from "../service/extra.types";
import { HotelMealOption } from "../service/meal.types";
import { HotelImage } from "./hotel-image.types";
import { HotelInformation } from "./hotel-information.types";

export interface Hotel {
  id: string;

  information?: HotelInformation | null;

  hotelImage: HotelImage[];

  inventory: HotelInventory[];

  roomTypes: HotelRoomType[];

  reviews: HotelReview[];

  facilitiesHotel?: HotelFacilities | null;

  bookings: HotelBooking[];

  extras: HotelExtra[];

  mealOptions: HotelMealOption[];

  favorites: HotelFavorite[];

  nearbyPlaces: HotelNearbyPlace[];

  areaGuides: HotelAreaGuide[];

  status: HotelStatus;

  name: string;

  slug: string;

  aliases: string[];

  keywords: string[];

  tags: string[];

  searchText?: string | null;

  featured: boolean;

  searchable: boolean;

  searchPriority: number;

  createdAt: Date;

  updatedAt: Date;
}
