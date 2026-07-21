import { z } from "zod";

import { FlyTimelineType } from "@/types/bookings/ticket-fly/enums";

export const FlyOperationTimelineSchema = z.object({
  type: z.nativeEnum(FlyTimelineType),

  eventTime: z.date(),

  note: z.string().optional(),
});

export type FlyOperationTimelineFormValues = z.infer<
  typeof FlyOperationTimelineSchema
>;