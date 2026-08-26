import { YachtVehicle } from "./vehicle.types";

export interface YachtCapacity {
  id: string;

  vehicleId: string;
  vehicle: YachtVehicle;

  guestCapacity: number;

  overnightCapacity: number | null;
  cabinCount: number | null;
  bathroomCount: number | null;
  crewCapacity: number | null;
}