import { FlyLounge } from "../../ticket-fly/booking/lounge.types";
import { FlyDiversion } from "../../ticket-fly/operation/diversion.types";
import { FlyRoute } from "../../ticket-fly/routes/route.types";
import { FlyMinimumConnectionTime } from "../alliance/minimum-connection.types";
import { Address } from "@/types/location/address";

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
