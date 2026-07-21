import { WeekDay } from "@/types/common/enums";
import { FlyAircraft } from "../aircraft/aircraft.types";
import { FlyTrip } from "../trip/trip.types";
import { TicketFly } from "../core/fly.types";

export interface FlySchedule {
  id: string;

  flyId: string;

  fly?: TicketFly;

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