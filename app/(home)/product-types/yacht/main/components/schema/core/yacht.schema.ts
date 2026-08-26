import { z } from "zod";

import { YachtCrewSchema } from "../crew/crew.schema";
import { YachtMarinaSchema } from "../marina/marina.schema";
import { YachtPolicyMapperSchema } from "../policies/policies.schema";
import { YachtPriceSchema } from "../pricing/price.schema";
import { YachtRouteSchema } from "../routes/route.schema";
import { YachtAvailabilitySchema } from "../trips/availability.schema";
import { YachtExtraMapperSchema } from "../yacht-extra-mapper.schema";
import { YachtPackageMapperSchema } from "../yacht-package-mapper.schema";

import { YachtImageSchema } from "./image.schema";
import { YachtNoticeSchema } from "./notice.schema";
import { YachtVehicleSchema } from "../vehicle/vehicle.schema";

// ======================================================
// YACHT CREATE / MANAGE
// ======================================================

export const YachtSchema = z.object({
  // ======================================================
  // PROVIDER
  // ======================================================

  providerBookingId: z.string(),

  // ======================================================
  // SERVICE / BOOKING TYPE
  // ======================================================

  serviceTypeId: z.string(),

  bookingItemTypeId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  active: z.boolean(),

  // ======================================================
  // SEARCH CONFIGURATION
  // ======================================================

  tagIds: z.array(z.string()).default([]),

  featured: z.boolean(),

  searchable: z.boolean(),

  searchPriority: z.coerce.number().default(0),

  // ======================================================
  // MARINA
  // ======================================================

  marina: z.array(z.lazy(() => YachtMarinaSchema)),

  // ======================================================
  // EXTRA
  // ======================================================

  yachtExtraMapper: z.array(z.lazy(() => YachtExtraMapperSchema)),

  // ======================================================
  // VEHICLE
  // ======================================================

  vehicle: z
    .lazy(() => YachtVehicleSchema)
    .nullable()
    .optional(),

  // ======================================================
  // PACKAGE
  // ======================================================

  yachtPackageMapper: z.array(z.lazy(() => YachtPackageMapperSchema)),

  // ======================================================
  // ROUTES
  // ======================================================

  routes: z.array(z.lazy(() => YachtRouteSchema)),

  // ======================================================
  // AVAILABILITY
  // ======================================================

  availability: z
    .lazy(() => YachtAvailabilitySchema)
    .nullable()
    .optional(),

  // ======================================================
  // PRICE
  // ======================================================

  price: z
    .lazy(() => YachtPriceSchema)
    .nullable()
    .optional(),

  // ======================================================
  // POLICIES
  // ======================================================

  policies: z.array(z.lazy(() => YachtPolicyMapperSchema)),

  // ======================================================
  // NOTICE
  // ======================================================

  notice: z
    .lazy(() => YachtNoticeSchema)
    .nullable()
    .optional(),

  // ======================================================
  // IMAGES
  // ======================================================

  image: z.array(z.lazy(() => YachtImageSchema)),

  // ======================================================
  // CREW
  // ======================================================

  crew: z.array(z.lazy(() => YachtCrewSchema)),
});

export type YachtFormSchema = z.infer<typeof YachtSchema>;
