// business-hours.ts
import { WeekDay } from "@/types/common/enums";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export const carRentalBusinessHoursDefaultValues = {
  businessHours: [
    {
      day: WeekDay.MONDAY,
      openTime: "08:00",
      closeTime: "18:00",
      closed: false,
    },
    {
      day: WeekDay.TUESDAY,
      openTime: "08:00",
      closeTime: "18:00",
      closed: false,
    },
    {
      day: WeekDay.WEDNESDAY,
      openTime: "08:00",
      closeTime: "18:00",
      closed: false,
    },
    {
      day: WeekDay.THURSDAY,
      openTime: "08:00",
      closeTime: "18:00",
      closed: false,
    },
    {
      day: WeekDay.FRIDAY,
      openTime: "08:00",
      closeTime: "18:00",
      closed: false,
    },
    {
      day: WeekDay.SATURDAY,
      openTime: "08:00",
      closeTime: "18:00",
      closed: false,
    },
    {
      day: WeekDay.SUNDAY,
      openTime: "08:00",
      closeTime: "18:00",
      closed: true,
    },
  ],
} satisfies Pick<CarRentalFormSchema, "businessHours">;
