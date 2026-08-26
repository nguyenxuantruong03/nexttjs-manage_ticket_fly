import { Extra } from "@/types/common/commerce/extra/extra.type";
import { Hotel } from "@/types/product-types/hotel/core/hotel.types";
import { HotelBookingExtra } from "./bookings/booking-extra";

export interface HotelExtraMapper {
  id: string;

  // ======================================================
  // HOTEL
  // ======================================================

  hotelId: string;
  hotel: Hotel;

  // ======================================================
  // EXTRA
  // ======================================================

  extraId: string;
  extra: Extra;

  // ======================================================
  // BOOKING
  // ======================================================

  hotelBookingExtra: HotelBookingExtra[];

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;
  sortOrder: number;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;
  updatedAt: Date;
}
