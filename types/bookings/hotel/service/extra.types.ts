import { HotelBookingExtra } from "../bookings/booking-extra.types";
import { HotelExtraType } from "../enum/enums";
import { HotelExtraPrice } from "./extra-price.types";


export interface HotelExtra {
  id: string;

  hotelId: string;

  name: string;

  description?: string | null;

  type: HotelExtraType;

  required: boolean;

  prices: HotelExtraPrice[];

  bookingExtras: HotelBookingExtra[];

  active: boolean;

  createdAt: Date;

  updatedAt: Date;
}