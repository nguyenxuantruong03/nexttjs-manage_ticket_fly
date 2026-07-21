import { FlyAirport } from "../airport/airport.types";
import { TicketFly } from "../core/fly.types";
import { FlyRouteType } from "../enums";
import { FlyTrip } from "../trip/trip.types";
import { FlyRouteSegment } from "./segment.types";

export interface FlyRoute {
  id: string;

  flyId: string;

  fly?: TicketFly;

  departureAirportId: string;

  departureAirport?: FlyAirport;

  arrivalAirportId: string;

  arrivalAirport?: FlyAirport;

  distanceKm?: number;

  estimatedDuration?: number;

  directFlight: boolean;

  segments?: FlyRouteSegment[];

  routeType: FlyRouteType;

  trips?: FlyTrip[];

  createdAt: Date;

  updatedAt: Date;
}
