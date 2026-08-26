import { Facility } from "@/types/common/features/facility/facility";
import { BusVehicle } from "./vehicle.types";

export interface BusVehicleFacilityMapper {
  id: string;

  vehicleId: string;
  vehicle: BusVehicle;

  facilityId: string;
  facility: Facility;

  active: boolean;

  createdAt: string;
}