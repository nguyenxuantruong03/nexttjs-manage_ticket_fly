import { WeekDay } from "@/types/common/enums";
import { FlyFormSchema } from "../schema/core/fly.schema";

export const flyScheduleDefaultValues = {
  // =========================
  // SCHEDULE
  // =========================

  schedule: [
    {
      departureTime: "08:00",
      arrivalTime: "10:00",
      startDate: new Date(),
      endDate: undefined,
      aircraftId: "",
      active: true,
      operatingDays: [
        WeekDay.MONDAY,
        WeekDay.TUESDAY,
        WeekDay.WEDNESDAY,
        WeekDay.THURSDAY,
        WeekDay.FRIDAY,
        WeekDay.SATURDAY,
        WeekDay.SUNDAY,
      ],
    },
  ],
} satisfies Pick<FlyFormSchema, "schedule">;
