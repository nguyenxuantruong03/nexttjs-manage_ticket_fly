import { z } from "zod";

import { WeekDay } from "@/types/common/enums";

export const CarRentalBusinessHourSchema = z.object({
  day: z.nativeEnum(WeekDay),

  openTime: z.string(),

  closeTime: z.string(),

  closed: z.boolean().default(false),
});

export type CarRentalBusinessHourFormSchema = z.infer<
  typeof CarRentalBusinessHourSchema
>;
