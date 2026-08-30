import { FlyTimelineType } from "@/types/product-types/ticket-fly/enums";
import { z } from "zod";


export const FlyOperationTimelineSchema = z.object({
  type: z.nativeEnum(FlyTimelineType),

  eventTime: z.date(),

  note: z.string().optional(),
});

export type FlyOperationTimelineFormValues = z.infer<
  typeof FlyOperationTimelineSchema
>;