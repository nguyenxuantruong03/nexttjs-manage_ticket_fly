import { FlyRoute } from "./route.types";

export interface FlyRouteSegment {
  id: string;

  routeId: string;

  route?: FlyRoute;

  segmentOrder: number;

  estimatedDuration?: number;

  distanceKm?: number;

  createdAt: Date;
}
