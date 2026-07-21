import { z } from "zod";

import { FlyDelayReason } from "@/types/bookings/ticket-fly/enums";

export const FlyDelaySchema = z.object({
  minutes: z.number(),

  reason: z.nativeEnum(FlyDelayReason),

  description: z.string().optional(),
});

export type FlyDelayFormValues = z.infer<typeof FlyDelaySchema>;
