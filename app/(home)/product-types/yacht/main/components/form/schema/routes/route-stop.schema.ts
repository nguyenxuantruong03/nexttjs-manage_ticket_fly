// schema/routes/route-stop.schema.ts

import { z } from "zod";

export const YachtRouteStopSchema = z.object({
  routeId: z.string(),

  name: z.string().min(1),

  addressId: z.string().nullable().optional(),

  stopDurationMinutes: z.number().nullable().optional(),

  order: z.number(),
});

export type YachtRouteStopFormValues = z.infer<typeof YachtRouteStopSchema>;
