export interface HotelWifi {
  id: string;

  facilitiesId: string;

  available: boolean;

  free?: boolean | null;
  speedMbps?: number | null;

  availableInRooms?: boolean | null;
  availableInPublicAreas?: boolean | null;
}
