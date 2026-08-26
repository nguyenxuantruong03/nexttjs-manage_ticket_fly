import { Hotel } from "./core/hotel.types";

export type HotelCheckInPolicy = {
  id: string;
  hotelId: string;
  hotel: Hotel;

  checkInFrom: string | null;
  checkInUntil: string | null;
  checkOutUntil: string | null;
  minimumAge: number | null;

  createdAt: string;
};
