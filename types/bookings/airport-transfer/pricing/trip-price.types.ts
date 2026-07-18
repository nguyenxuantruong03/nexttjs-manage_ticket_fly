
export interface AirportTransferTripPrice {
  id: string;

  priceId: string;

  tripId: string;

  finalPrice: number;

  originalPrice?: number;
}