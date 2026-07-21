import { Yacht } from "../core/yacht.types";
import { YachtMarinaFacilities } from "../facilities/marina-facilities.types";
import { YachtRoute } from "../routes/route.types";

export interface YachtMarina {
  id: string;

  name: string;

  yachtId: string;

  addressId: string;

  departureRoutes: YachtRoute[];

  destinationRoutes: YachtRoute[];

  latitude?: number | null;

  longitude?: number | null;

  country?: string | null;

  city?: string | null;

  contactPhone?: string | null;

  operatingHours?: string | null;

  marinaFacilities?: YachtMarinaFacilities | null;

  createdAt: Date;

  updatedAt: Date;
}
