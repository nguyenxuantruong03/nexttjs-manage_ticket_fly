import { FlyBooking } from "../../ticket-fly/booking/booking.types";
import { FlyAirline } from "../airline/airline.types";


export interface FlyInterline {
  id: string;

  bookingId: string;
  booking?: FlyBooking;

  validatingAirlineId: string;
  validatingAirline?: FlyAirline;

  baggageTransfer: boolean;

  protectedConnection: boolean;
}