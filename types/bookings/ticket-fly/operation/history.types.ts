import { FlyOperationStatus } from "../enums";
import { FlyTrip } from "../trip/trip.types";

export interface FlyTripHistory {
  id: string;

  tripId: string;

  trip?: FlyTrip;

  oldStatus: FlyOperationStatus;

  newStatus: FlyOperationStatus;

  changedAt: Date;
}
