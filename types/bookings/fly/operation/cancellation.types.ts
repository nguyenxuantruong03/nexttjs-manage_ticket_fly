import { FlyTrip } from "../trip/trip.types";

export interface FlyCancellation {
  id: string;

  tripId: string;

  trip?: FlyTrip;

  reason?: string;

  cancelledAt: Date;

  compensationRequired?: boolean;
}