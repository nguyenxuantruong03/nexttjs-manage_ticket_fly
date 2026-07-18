export interface HotelCheckInPolicy {
  id: string;

  checkInTime: string;

  checkOutTime: string;

  frontDesk24Hours?: boolean | null;

  selfCheckIn?: boolean | null;

  expressCheckIn?: boolean | null;

  expressCheckOut?: boolean | null;

  keyCollectionNote?: string | null;

  policiesId: string;
}
