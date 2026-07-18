

export interface HotelGym {
  id: string;

  facilitiesId: string;

  available: boolean;

  open24Hours?: boolean | null;
  personalTrainer?: boolean | null;
}