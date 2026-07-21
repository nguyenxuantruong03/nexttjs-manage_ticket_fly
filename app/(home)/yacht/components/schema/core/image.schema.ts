// image.schema.ts

import { YachtImageCategory } from "@/types/bookings/yacht/enums";
import { z } from "zod";

export const YachtImageSchema = z.object({

  url: z.string().min(1),

  category: z.nativeEnum(YachtImageCategory),

  isPrimary: z.boolean(),

  sortOrder: z.number(),
});

export type YachtImageFormValues = z.infer<typeof YachtImageSchema>;
