import { WeekDay } from "@/types/common/enums";
import { z } from "zod";

export const CarRentalBusinessHourSchema = z.object({
  day: z.nativeEnum(WeekDay),

  openTime: z.string(),

  closeTime: z.string(),

  closed: z.boolean().default(false),
});
