
export interface CarRentalBookingDriver {
  id: string;

  bookingId: string;

  name: string;

  phone?: string;

  licenseNumber?: string;

  nationality?: string;

  experienceYears?: number;

  note?: string;

  createdAt: string;
}