export interface CarRentalBookingPassenger {
  id: string;

  bookingId: string;

  firstName: string;

  lastName?: string;

  email?: string;

  phone?: string;

  createdAt: string;
}