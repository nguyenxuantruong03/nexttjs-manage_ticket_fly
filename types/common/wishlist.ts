import { User } from "../bookings/auth/users";

export enum WishlistItemType {
  HOTEL_BOOKING = "HOTEL_BOOKING",
  BUS_BOOKING = "BUS_BOOKING",
  CAR_RENTAL_BOOKING = "CAR_RENTAL_BOOKING",
  TRANSFER_BOOKING = "TRANSFER_BOOKING",
  FLIGHT_BOOKING = "FLIGHT_BOOKING",
  YACHT_BOOKING = "YACHT_BOOKING",
}

export interface Wishlist {
  id: string;

  userId: string;
  user?: User;

  name: string;

  items: WishlistItem[];

  createdAt: string;
}

export interface WishlistItem {
  id: string;

  itemType: WishlistItemType;

  wishlistId: string;
  wishlist?: Wishlist;

  createdAt: string;
}
