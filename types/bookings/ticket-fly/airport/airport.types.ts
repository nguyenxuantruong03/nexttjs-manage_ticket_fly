import { FlyRoute } from "../routes/route.types";
import { FlyDiversion } from "../operation/diversion.types";
import { FlyLounge } from "../booking/lounge.types";
import { FlyMinimumConnectionTime } from "../alliance/minimum-connection.types";
import { Address } from "../../location/address";

export interface FlyAirport {
  id: string;

  name: string;

  code: string;

  iataCode: string;

  icaoCode?: string;

  terminalCount?: number;

  lat?: number;

  lng?: number;

  addressId?: string;

  address?: Address;
  departures?: FlyRoute[];
  arrivals?: FlyRoute[];
  diversions?: FlyDiversion[];
  lounge?: FlyLounge[];
  minimumConnectionTime?: FlyMinimumConnectionTime[];

  createdAt: Date;

  updatedAt: Date;
}
