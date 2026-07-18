
export interface YachtBookingContact {
  id: string;

  bookingId: string;

  fullName: string;

  email?: string | null;

  phone: string;

  note?: string | null;
}