
export interface YachtSpecification {
  id: string;

  vehicleId: string;

  enginePowerHp?: number | null;

  cruisingSpeedKnots?: number | null;

  maxSpeedKnots?: number | null;

  fuelCapacityLiter?: number | null;

  rangeNm?: number | null;
}