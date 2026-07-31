// hotel-information.type.ts

import { Address } from "cluster";
import { Hotel } from "./hotel.types";
import { ProviderBooking } from "../../provider-bookings";


export interface HotelInformation {
  id: string;

  hotelId: string;
  hotel: Hotel;

  addressId: string;
  address: Address;

  providerBookingId: string;
  providerBooking: ProviderBooking;

  hotelTypeId?: string | null;
  hotelType?: HotelType | null;

  tower?: string | null;

  floor?: number | null;

  unitNumber?: string | null;
}

export interface HotelType {
  id: string;

  name: string;


  description?: string | null;

  icon?: string | null;

  hotels: HotelInformation[];

  active: boolean;

  sortOrder: number;

  createdAt: Date;

  updatedAt: Date;
}