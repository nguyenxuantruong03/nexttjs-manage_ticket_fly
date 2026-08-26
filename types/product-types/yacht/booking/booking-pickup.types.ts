import { Address } from "@/types/location/address";
import { YachtBooking } from "./booking.types";

export interface YachtBookingPickup {
  id: string;

  bookingId: string;
  booking: YachtBooking;

  pickupRequired: boolean;

  addressId: string;
  address: Address;

  pickupTime: Date | null;
  note: string | null;
}