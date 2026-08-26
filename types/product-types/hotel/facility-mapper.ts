import { Facility } from "@/types/common/features/facility/facility";
import { Hotel } from "./core/hotel.types";

export interface HotelFacilityMapper {
  id: string;

  hotelId: string;
  hotel?: Hotel;

  facilityId: string;
  facility?: Facility;
}
