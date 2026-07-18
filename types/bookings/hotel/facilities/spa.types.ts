
export interface HotelSpa {
  id: string;

  facilitiesId: string;

  available: boolean;

  massage?: boolean | null;
  sauna?: boolean | null;
  steamRoom?: boolean | null;
  hotTub?: boolean | null;
}