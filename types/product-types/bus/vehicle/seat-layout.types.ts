import { BusVehicle } from "./vehicle.types";

export interface BusSeatLayout {
  id: string;

  vehicleId: string;
  vehicle: BusVehicle;

  name: string;

  seatRows: number;

  seatColumns: number;
}