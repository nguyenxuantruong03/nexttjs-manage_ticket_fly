import { CarRentalBookingExtra } from "../booking/booking-extra.types";
import { CarRentalExtraType } from "../enums";
import { CarRentalExtraPrice } from "./extra-price.types";

export interface CarRentalExtra {
  id: string;

  rentalId: string;

  type: CarRentalExtraType;

  name: string;

  description?: string;

  image?: string;

  required: boolean;

  available: boolean;

  prices: CarRentalExtraPrice[];

  bookingExtras: CarRentalBookingExtra[];

  createdAt: string;

  updatedAt: string;
}
