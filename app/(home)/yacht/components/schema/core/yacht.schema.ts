// schema/core/yacht.schema.ts

import { z } from "zod";

import { YachtVehicleSchema } from "../vehicle/vehicle.schema";

import { YachtRouteSchema } from "../routes/route.schema";

import { YachtTripSchema } from "../trips/trip.schema";
import { YachtAvailabilitySchema } from "../trips/availability.schema";
import { YachtInventoryLockSchema } from "../trips/inventory-lock.schema";

import { YachtPriceSchema } from "../pricing/price.schema";
import { YachtPackageSchema } from "../pricing/package.schema";

import { YachtExtraSchema } from "../extra/extra.schema";

import { YachtPoliciesSchema } from "../policies/policies.schema";

import { YachtCrewSchema } from "../crew/crew.schema";

import { YachtImageSchema } from "./image.schema";
import { YachtNoticeSchema } from "./notice.schema";
import { YachtMarinaSchema } from "../marina/marina.schema";

export const YachtSchema = z.object({
  providerBookingId: z.string(),

  marina: z.array(YachtMarinaSchema).default([]),

  vehicle: YachtVehicleSchema.nullable().optional(),

  routes: z.array(YachtRouteSchema).default([]),

  trips: z.array(YachtTripSchema).default([]),

  availability: YachtAvailabilitySchema.nullable().optional(),

  price: YachtPriceSchema.nullable().optional(),

  packages: z.array(YachtPackageSchema).default([]),

  extras: z.array(YachtExtraSchema).default([]),

  policies: YachtPoliciesSchema.nullable().optional(),

  notice: YachtNoticeSchema.nullable().optional(),

  locks: z.array(YachtInventoryLockSchema).default([]),

  image: z.array(YachtImageSchema).default([]),

  crew: z.array(YachtCrewSchema).default([]),

  active: z.boolean(),

  name: z.string().min(1),

  slug: z.string().min(1),

  aliases: z.array(z.string()).default([]),

  keywords: z.array(z.string()).default([]),

  tags: z.array(z.string()).default([]),

  searchText: z.string().nullable().optional(),

  featured: z.boolean(),

  searchable: z.boolean(),

  searchPriority: z.number(),
});

export type YachtFormValues = z.infer<typeof YachtSchema>;
