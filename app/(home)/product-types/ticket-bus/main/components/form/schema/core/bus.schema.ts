import { z } from "zod";

import { BusRouteSchema } from "../routes/route.schema";
import { BusVehicleSchema } from "../vehicle/vehicle.schema";
import { BusPolicyMapperSchema } from "../policy-mapper";
import { BusPriceSchema } from "../pricing/price.schema";
import { BusExtraMapperSchema } from "../bus-extra-mapper.type";
import { BusPackageMapperSchema } from "../bus-package-mapper.type";
import { BusImageSchema } from "./bus_image.schema";


// ======================================================
// BUS CREATE / MANAGE
// ======================================================

export const BusSchema = z.object({
  // ======================================================
  // PROVIDER
  // ======================================================

  providerBookingId: z.string(),

  // ======================================================
  // SERVICE / BOOKING TYPE
  // ======================================================

  bookingItemTypeId: z.string(),

  serviceTypeId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  active: z.boolean(),

  // ======================================================
  // SEARCH CONFIGURATION
  // ======================================================

  tagIds: z.array(
    z.string(),
  ).default([]),

  searchable: z.boolean(),

  featured: z.boolean(),

  searchPriority: z.coerce
    .number()
    .default(0),

  // ======================================================
  // ROUTES
  // ======================================================

  routes: z.array(
    z.lazy(() => BusRouteSchema),
  ),

  // ======================================================
  // POLICIES
  // ======================================================

  policyMappers: z.array(
    z.lazy(() => BusPolicyMapperSchema),
  ),

  // ======================================================
  // VEHICLES
  // ======================================================

  vehicle: z.array(
    z.lazy(() => BusVehicleSchema),
  ),

  // ======================================================
  // EXTRA
  // ======================================================

  busExtraMapper: z.array(
    z.lazy(() => BusExtraMapperSchema),
  ),

  // ======================================================
  // PACKAGE
  // ======================================================

  busPackageMapper: z.array(
    z.lazy(() => BusPackageMapperSchema),
  ),

  // ======================================================
  // IMAGES
  // ======================================================

  images: z.array(
    z.lazy(() => BusImageSchema),
  ),

  // ======================================================
  // PRICE
  // ======================================================

  price: z.array(
    z.lazy(() => BusPriceSchema),
  ),
});

export type BusFormSchema = z.infer<
  typeof BusSchema
>;