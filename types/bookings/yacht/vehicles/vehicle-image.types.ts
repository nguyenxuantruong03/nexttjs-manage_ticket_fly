import { YachtImageCategory } from "../enums";


export interface YachtVehicleImage {
  id: string;

  vehicleId: string;

  url: string;

  category: YachtImageCategory;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: Date;
}
