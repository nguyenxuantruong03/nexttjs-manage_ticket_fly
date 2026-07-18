
export interface AirportTransferBookingFlight {
  id: string;

  bookingId: string;

  airline?: string;

  flightNumber?: string;

  terminal?: string;

  expectedArrival?: string;

  actualArrival?: string;
}