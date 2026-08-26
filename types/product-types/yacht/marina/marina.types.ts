import { Address } from "@/types/location/address";
import { Yacht } from "../core/yacht.types";
import { YachtMarinaFacilityMapper } from "../facilities/yacht-facilities.types";
import { YachtRoute } from "../routes/route.types";

export interface YachtMarina {
  id: string;

  name: string;

  yachtId: string;
  yacht?: Yacht;

  addressId: string;
  address?: Address;

  departureRoutes?: YachtRoute[];
  destinationRoutes?: YachtRoute[];

  latitude?: number | null;
  longitude?: number | null;

  contactPhone?: string | null;
  operatingHours?: string | null;

  marinaFacilities?: YachtMarinaFacilityMapper[];

  createdAt: Date;
  updatedAt: Date;
}
