import { CarRentalTrip } from "./trip.types";

export interface CarRentalTripFee {
  id: string;

  tripId: string;
  trip?: CarRentalTrip;

  airportFee?: number;

  oneWayFee?: number;

  deliveryFee?: number;

  pickupFee?: number;

  dropoffFee?: number;
}