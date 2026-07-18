
export interface AirportTransferFlightSupport {
  id: string;

  transferId: string;

  flightNumberRequired: boolean;

  airlineRequired: boolean;

  terminalSupported: boolean;

  arrivalFlightOnly?: boolean;

  departureFlightOnly?: boolean;

  flightTracking: boolean;

  delayMonitoring: boolean;

  createdAt: string;
}