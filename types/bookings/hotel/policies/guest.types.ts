export interface HotelGuestPolicy {
  id: string;

  minimumAge?: number | null;

  childrenAllowed?: boolean | null;

  petsAllowed?: boolean | null;

  smokingAllowed?: boolean | null;

  extraBedAvailable?: boolean | null;

  extraBedFee?: number | null;

  policiesId: string;
}
