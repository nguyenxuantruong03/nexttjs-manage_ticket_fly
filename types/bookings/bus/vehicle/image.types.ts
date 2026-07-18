import { BusVehicleImageCategory } from "../enums";

export interface BusVehicleImage {
  id: string;

  vehicleId: string;

  url: string;

  category: BusVehicleImageCategory;

  isPrimary: boolean;

  sortOrder: number;

  alt?: string;

  createdAt: string;

  updatedAt: string;
}