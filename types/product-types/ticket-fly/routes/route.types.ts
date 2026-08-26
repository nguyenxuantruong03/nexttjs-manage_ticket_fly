import { RouteType } from "@/types/common/catalog/route-type.type";
import { FlyTrip } from "../trip/trip.types";
import { FlyRouteSegment } from "./segment.types";
import { Fly } from "../core/fly.types";
import { FlyAirport } from "../../references/airport/airport.types";

export interface FlyRoute {
  id: string;

  flyId: string;
  fly?: Fly;

  departureAirportId: string;
  departureAirport?: FlyAirport;

  arrivalAirportId: string;
  arrivalAirport?: FlyAirport;

  distanceKm?: number;

  estimatedDuration?: number;

  directFlight: boolean;

  segments?: FlyRouteSegment[];

  routeTypeId: string;
  routeType: RouteType;

  trips?: FlyTrip[];

  createdAt: Date;

  updatedAt: Date;
}
