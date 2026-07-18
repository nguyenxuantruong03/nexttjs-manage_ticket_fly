
export interface AirportTransferBookingPassenger {
  id: string;

  bookingId: string;

  firstName: string;

  lastName: string;

  phone?: string;

  email?: string;

  adult: boolean;

  luggage?: number;
}