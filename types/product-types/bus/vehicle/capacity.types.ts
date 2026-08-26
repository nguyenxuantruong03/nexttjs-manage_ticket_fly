import { BusVehicle } from "./vehicle.types";

export interface BusVehicleCapacity {
  id: string;

  vehicleId: string;

  vehicle: BusVehicle;

  totalSeats: number;

  sleeperBeds: number | null;

  cabinRooms: number | null;

  luggageCapacityKg: number | null;

  createdAt: string;
}