import { Yacht } from "../core/yacht.types";
import { YachtCapacity } from "./capacity.types";
import { YachtSpecification } from "./specification.types";
import { YachtVehicleFacilityMapper } from "../facilities/yacht-facilities.types";
import { YachtVehicleImage } from "./vehicle-image.types";
import { YachtCondition } from "../yacht-condition";
import { FuelType } from "@/types/common/catalog/fuel-type";

export interface YachtVehicle {
  id: string;

  yachtId: string;
  yacht?: Yacht;

  name?: string | null;
  manufacturer?: string | null;
  model?: string | null;
  year?: number | null;
  registrationNumber?: string | null;

  lengthMeter?: number | null;
  widthMeter?: number | null;
  speedKnots?: number | null;

  fuelTypeId?: string | null;
  fuelType?: FuelType | null;

  conditionId?: string | null;
  condition?: YachtCondition | null;

  capacity?: YachtCapacity | null;
  facilities?: YachtVehicleFacilityMapper[];
  specification?: YachtSpecification | null;
  images?: YachtVehicleImage[];

  createdAt: Date;
  updatedAt: Date;
}
