import { YachtVehicle } from "./vehicle.types";

export interface YachtSpecification {
  id: string;

  vehicleId: string;
  vehicle: YachtVehicle;

  enginePowerHp: number | null;
  cruisingSpeedKnots: number | null;
  maxSpeedKnots: number | null;
  fuelCapacityLiter: number | null;
  rangeNm: number | null;
}