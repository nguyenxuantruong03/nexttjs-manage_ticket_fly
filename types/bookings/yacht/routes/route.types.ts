import { YachtTrip } from "../trips/trip.types";
import { YachtRouteStop } from "./route-stop.types";

export interface YachtRoute {
  id: string;

  yachtId: string;

  trip: YachtTrip[];

  departureMarinaId: string;

  destinationMarinaId: string;

  destinationName: string;

  distanceNm?: number | null;

  durationMinutes?: number | null;

  stops: YachtRouteStop[];

  active: boolean;

  createdAt: Date;

  updatedAt: Date;
}