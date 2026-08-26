import { Yacht } from "../core/yacht.types";
import { YachtMarina } from "../marina/marina.types";
import { YachtTrip } from "../trips/trip.types";
import { YachtRouteStop } from "./route-stop.types";
import { RouteType } from "@/types/common/catalog/route-type.type";

export interface YachtRoute {
  id: string;

  yachtId: string;
  yacht: Yacht;

  routeTypeId: string;
  routeType: RouteType;

  trip: YachtTrip[];

  departureMarinaId: string;
  departureMarina: YachtMarina;

  destinationMarinaId: string;
  destinationMarina: YachtMarina;

  destinationName: string;

  distanceNm: number | null;
  durationMinutes: number | null;

  stops: YachtRouteStop[];

  active: boolean;

  createdAt: Date;
  updatedAt: Date;
}