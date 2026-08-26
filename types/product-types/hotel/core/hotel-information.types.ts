// hotel-information.type.ts

import { Hotel } from "./hotel.types";
import { ProviderBooking } from "../../../users/provider-bookings";
import { Address } from "@/types/location/address";

export interface HotelInformation {
  id: string;

  hotelId: string;
  hotel: Hotel;

  addressId: string;
  address: Address;

  providerBookingId: string;
  providerBooking: ProviderBooking;

  tower?: string | null;
  floor?: number | null;
  unitNumber?: string | null;
}