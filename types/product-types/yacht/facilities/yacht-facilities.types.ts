import { Facility } from "@/types/common/features/facility/facility";
import { YachtMarina } from "../marina/marina.types";
import { YachtVehicle } from "../vehicles/vehicle.types";

export interface YachtMarinaFacilityMapper {
  id: string;

  marinaId: string;
  marina?: YachtMarina;

  facilityId: string;
  facility?: Facility;

  active: boolean;
}

export interface YachtVehicleFacilityMapper {
  id: string;

  vehicleId: string;
  vehicle?: YachtVehicle;

  facilityId: string;
  facility?: Facility;

  active: boolean;
}
