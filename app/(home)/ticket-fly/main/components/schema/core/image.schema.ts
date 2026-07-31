import { z } from "zod";

import { FlyImageCategory } from "@/types/bookings/ticket-fly/enums";

export const FlyImageSchema = z.object({
  url: z.string().min(1),

  category: z.nativeEnum(FlyImageCategory),

  alt: z.string().optional(),

  isPrimary: z.boolean(),

  sortOrder: z.number(),
});

export type FlyImageFormValues = z.infer<typeof FlyImageSchema>;
