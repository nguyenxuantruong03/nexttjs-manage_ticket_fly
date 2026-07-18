import { NearbyPlaceType } from "../enum/enums";

export interface HotelNearbyPlace {
  id: string;

  hotelId: string;

  name: string;

  type: NearbyPlaceType;

  addressId?: string | null;

  latitude?: number | null;

  longitude?: number | null;

  distanceKm?: number | null;

  travelTimeMinutes?: number | null;

  description?: string | null;

  createdAt: Date;
}
