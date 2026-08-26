import { Address } from "@/types/location/address";
import { YachtRoute } from "./route.types";

export interface YachtRouteStop {
  id: string;

  routeId: string;
  route: YachtRoute;

  name: string;

  addressId: string;
  address: Address;

  stopDurationMinutes: number | null;

  order: number;
}
