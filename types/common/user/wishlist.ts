import { User } from "@/types/users/auth/users";
import { BookingType } from "../commerce/booking-type";

export interface Wishlist {
  id: string;

  userId: string;
  user?: User;

  name: string;

  items?: WishlistItem[];

  createdAt: Date;
}

export interface WishlistItem {
  id: string;

  bookingTypeId: string;
  bookingType?: BookingType;

  wishlistId: string;
  wishlist?: Wishlist;

  createdAt: Date;
}
