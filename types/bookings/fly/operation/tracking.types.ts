import { FlyTrip } from "../trip/trip.types";

export interface FlyTracking {
  id: string;

  tripId: string;

  trip?: FlyTrip;

  latitude?: number;

  longitude?: number;

  altitudeFt?: number;

  speedKmh?: number;

  heading?: number;

  lastUpdated?: Date;
}