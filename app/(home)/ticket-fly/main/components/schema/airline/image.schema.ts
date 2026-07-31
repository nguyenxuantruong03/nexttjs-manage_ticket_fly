import { z } from "zod";

import { FlyAirlineImageCategory } from "@/types/bookings/ticket-fly/enums";

export const FlyAirlineImageSchema = z.object({
  url: z.string().min(1),

  category: z.nativeEnum(FlyAirlineImageCategory),

  isPrimary: z.boolean(),
});

export type FlyAirlineImageFormValues = z.infer<typeof FlyAirlineImageSchema>;
