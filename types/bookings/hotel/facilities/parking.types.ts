
export interface HotelParking {
  id: string;

  facilitiesId: string;

  available: boolean;

  free?: boolean | null;
  valet?: boolean | null;
  covered?: boolean | null;
  evCharging?: boolean | null;
  reservationRequired?: boolean | null;
}