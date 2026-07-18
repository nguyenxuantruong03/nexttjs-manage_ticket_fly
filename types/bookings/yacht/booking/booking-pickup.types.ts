
export interface YachtBookingPickup {
  id: string;

  bookingId: string;

  pickupRequired: boolean;

  addressId?: string | null;

  pickupTime?: Date | null;

  note?: string | null;
}
