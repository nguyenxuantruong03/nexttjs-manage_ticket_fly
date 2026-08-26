import { AirportTransferTrip } from "../trip/trip.types";
import { AirportTransferPrice } from "./price.types";

export interface AirportTransferTripPrice {
  id: string;

  priceId: string;
  price: AirportTransferPrice;
  
  tripId: string;
  trip: AirportTransferTrip;

  finalPrice: number;
  originalPrice?: number;
}
