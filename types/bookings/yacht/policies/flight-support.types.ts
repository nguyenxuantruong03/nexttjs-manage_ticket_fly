
export interface YachtFlightSupport {
  id: string;

  policiesId: string;

  airportPickup?: boolean | null;

  flightNumberRequired?: boolean | null;

  flightDelayMonitoring?: boolean | null;
}
