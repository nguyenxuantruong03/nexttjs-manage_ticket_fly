import { FlyAirline } from "../airline/airline.types";
import { FlyBooking } from "../booking/booking.types";


export interface FlyInterline {
  id: string;

  bookingId: string;

  booking?: FlyBooking;

  validatingAirlineId: string;

  validatingAirline?: FlyAirline;

  baggageTransfer: boolean;

  protectedConnection: boolean;
}