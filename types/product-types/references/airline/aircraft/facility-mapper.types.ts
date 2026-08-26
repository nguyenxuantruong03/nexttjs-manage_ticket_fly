import { Facility } from "@/types/common/features/facility/facility";
import { FlyAircraft } from "./aircraft.types";

export interface FlyAircraftFacilityMapper {
  id: string;

  aircraftId: string;
  aircraft: FlyAircraft;

  facilityId: string;
  facility: Facility;

  active: boolean;

  createdAt: string;
}
