import { FlyCrewDuty } from "../enums";
import { FlyTrip } from "../trip/trip.types";
import { FlyCrew } from "./crew.types";

export interface FlyCrewSchedule {
  id: string;

  crewId: string;

  crew?: FlyCrew;

  startTime: Date;

  endTime: Date;

  duty: FlyCrewDuty;

  tripId?: string;

  trip?: FlyTrip;
}