import { Facility } from "@/types/common/features/facility/facility";

import { AirportTransferVehicle } from "./vehicle/vehicle.types";

export interface AirportTransferVehicleFacilityMapper {
  id: string;

  vehicleId: string;
  vehicle: AirportTransferVehicle;

  facilityId: string;
  facility: Facility;

  active: boolean;
}