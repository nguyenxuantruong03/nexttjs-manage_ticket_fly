
export interface HotelPool {
  id: string;

  facilitiesId: string;

  available: boolean;

  indoor?: boolean | null;
  outdoor?: boolean | null;
  infinity?: boolean | null;
  heated?: boolean | null;
  kidsPool?: boolean | null;
}