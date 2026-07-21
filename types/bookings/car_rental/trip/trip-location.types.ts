import { Address } from "../../location/address";
import { CarRentalBooking } from "../booking/booking.types";
import { RentalLocationType } from "../enums";
import { CarRentalTrip } from "./trip.types";

export interface CarRentalLocation {
  id: string;

  tripId: string;
  trip?: CarRentalTrip;

  bookingId?: string;
  booking?: CarRentalBooking;

  type: RentalLocationType;

  name: string;

  addressId: string;
  address?: Address;

  available: boolean;

  createdAt: string;

  updatedAt: string;
}
