import { YachtRepeatType } from "../enums";
import { YachtTrip } from "./trip.types";

export interface YachtSchedule {
  id: string;

  tripId: string;
  trip: YachtTrip;

  repeatType: YachtRepeatType;

  daysOfWeek: number[];

  startDate?: Date | null;

  endDate?: Date | null;

  departureTime?: string | null;
}
