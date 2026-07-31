import { z } from "zod";

import { FlyAirlineSchema } from "../airline/airline.schema";
import { FlyRouteSchema } from "../routes/route.schema";
import { FlyTripSchema } from "../trip/trip.schema";
import { FlyPriceSchema } from "../pricing/price.schema";
import { FlyImageSchema } from "./image.schema";
import { FlyNoticeSchema } from "./notice.schema";
import { FlyScheduleSchema } from "../airline/schedule.schema";
import { FlyPoliciesSchema } from "../policy/policies.schema";

export const TicketFlySchema = z.object({
  airline: FlyAirlineSchema.optional(),

  routes: z.array(FlyRouteSchema).min(1).optional(),

  trips: z.array(FlyTripSchema).min(1).optional(),

  policies: FlyPoliciesSchema.optional(),

  price: FlyPriceSchema.optional(),

  notice: FlyNoticeSchema.optional(),

  images: z.array(FlyImageSchema).optional(),

  schedule: z.array(FlyScheduleSchema).optional(),

  active: z.boolean(),

  name: z.string().min(1),

  tagIds: z.array(z.string()).default([]),

  featured: z.boolean(),

  searchable: z.boolean(),

  searchPriority: z.coerce.number().default(0),
});

export type FlyFormSchema = z.infer<typeof TicketFlySchema>;
