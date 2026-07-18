import { YachtRepeatType } from "../enums";

export interface YachtSchedule {
  id: string;

  tripId: string;

  repeatType: YachtRepeatType;

  daysOfWeek: number[];

  startDate?: Date | null;

  endDate?: Date | null;

  departureTime?: string | null;
}