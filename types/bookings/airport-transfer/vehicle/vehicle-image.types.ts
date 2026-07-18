import { AirportTransferVehicleImageCategory } from "../enums";

export interface AirportTransferVehicleImage {
  id: string;

  vehicleId: string;

  url: string;

  category: AirportTransferVehicleImageCategory;

  isPrimary: boolean;

  sortOrder: number;

  alt?: string;

  createdAt: string;

  updatedAt: string;
}