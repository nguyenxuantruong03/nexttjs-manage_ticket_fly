import { User } from "@/types/users/auth/users";
import { Hotel } from "./core/hotel.types";


export interface HotelFavorite {
  id: string;

  userId: string;
  user?: User;

  hotelId: string;
  hotel?: Hotel;

  createdAt: Date;
}