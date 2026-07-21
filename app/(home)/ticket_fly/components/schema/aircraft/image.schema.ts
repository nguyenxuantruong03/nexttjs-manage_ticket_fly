import { z } from "zod";

import { FlyAircraftImageCategory } from "@/types/bookings/ticket-fly/enums";

export const FlyAircraftImageSchema = z.object({
  url: z.string().min(1),

  category: z.nativeEnum(FlyAircraftImageCategory),

  isPrimary: z.boolean(),

  sortOrder: z.number(),

  alt: z.string().optional(),
});

export type FlyAircraftImageFormValues = z.infer<typeof FlyAircraftImageSchema>;
