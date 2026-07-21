// ======================================================
// Bus
// ======================================================

import { z } from "zod";
import { BusRouteSchema } from "../routes/route.schema";
import { BusPoliciesSchema } from "../policies/policies.schema";
import { BusVehicleSchema } from "../vehicle/vehicle.schema";
import { BusImageSchema } from "./bus_image.schema";
import { BusPriceSchema } from "../pricing/price.schema";

export const BusSchema = z.object({
  providerBookingId: z.string(),
  routes: z.array(BusRouteSchema),
  policies: BusPoliciesSchema.optional(),
  vehicles: z.array(BusVehicleSchema).optional(),
  images: z.array(BusImageSchema),
  price: z.array(BusPriceSchema),
  active: z.boolean(),

  // Search Metadata
  name: z.string(),
  slug: z.string(),
  aliases: z.array(z.string()),
  keywords: z.array(z.string()),
  searchText: z.string().optional(),
  featured: z.boolean(),
  tags: z.array(z.string()),
  searchPriority: z.number(),
});

export type BusFormValues = z.infer<typeof BusSchema>;
