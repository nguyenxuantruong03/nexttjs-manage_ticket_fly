import { YachtCondition, YachtFuelType } from "../enums";
import { YachtSafetyEquipment } from "../facilities/safety-equipment.types";
import { YachtVehicleFacilities } from "../facilities/vehicle-facilities.types";
import { YachtCapacity } from "./capacity.types";
import { YachtSpecification } from "./specification.types";
import { YachtVehicleImage } from "./vehicle-image.types";

export interface YachtVehicle {
  id: string;

  yachtId: string;

  name?: string | null;

  manufacturer?: string | null;

  model?: string | null;

  year?: number | null;

  registrationNumber?: string | null;

  lengthMeter?: number | null;

  widthMeter?: number | null;

  speedKnots?: number | null;

  fuelType?: YachtFuelType | null;
  condition?: YachtCondition | null;
  capacity?: YachtCapacity | null;
  facilities?: YachtVehicleFacilities | null;
  specification?: YachtSpecification | null;
  images: YachtVehicleImage[];
  safetyEquipment?: YachtSafetyEquipment | null;

  createdAt: Date;

  updatedAt: Date;
}