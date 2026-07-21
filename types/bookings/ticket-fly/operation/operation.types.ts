import { FlyOperationStatus } from "../enums";
import { FlyTrip } from "../trip/trip.types";
import { FlyDelay } from "./delay.types";
import { FlyOperationTimeline } from "./timeline.types";

export interface FlyOperation {
  id: string;

  tripId: string;

  trip?: FlyTrip;

  status: FlyOperationStatus;

  departureTerminal?: string;

  departureGate?: string;

  arrivalTerminal?: string;

  arrivalGate?: string;

  baggageClaim?: string;

  checkInCounter?: string;

  boardingTime?: Date;

  boardingEndTime?: Date;

  gateOpenTime?: Date;

  gateCloseTime?: Date;

  actualDepartureTime?: Date;

  actualArrivalTime?: Date;

  estimatedDepartureTime?: Date;

  estimatedArrivalTime?: Date;

  timeline?: FlyOperationTimeline[];

  delays?: FlyDelay[];

  createdAt: Date;

  updatedAt: Date;
}