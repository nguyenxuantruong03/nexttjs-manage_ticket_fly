import { Facility } from "@/types/common/features/facility/facility";
import { CarRentalVehicle } from "./vehicle.types";

export interface CarRentalVehicleFacilityMapper {
  id: string;

  vehicleId: string;
  vehicle: CarRentalVehicle;

  facilityId: string;
  facility: Facility;

  quantity: number | null;
  note: string | null;

  createdAt: string;
}
