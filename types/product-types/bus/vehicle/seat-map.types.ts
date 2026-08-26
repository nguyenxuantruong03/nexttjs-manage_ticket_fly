import { BusVehicle } from "./vehicle.types";

export interface BusSeatMap {
  id: string;

  vehicleId: string;
  vehicle: BusVehicle;

  imageUrl: string | null;

  svgUrl: string | null;

  jsonLayout: unknown | null;

  createdAt: string;

  updatedAt: string;
}