import { WeekDay } from "@/types/common/enums";
import { FlyAircraft } from "./aircraft/aircraft.types";
import { Fly } from "../../ticket-fly/core/fly.types";
import { FlyTrip } from "../../ticket-fly/trip/trip.types";

export interface FlySchedule {
  id: string;

  flyId: string;
  fly?: Fly;

  departureTime: string;

  arrivalTime: string;

  startDate: Date;

  endDate?: Date;

  operatingDays: WeekDay[];

  aircraftId?: string;
  aircraft?: FlyAircraft;

  active: boolean;

  trips?: FlyTrip[];

  createdAt: Date;

  updatedAt: Date;
}
