import { z } from "zod";

import { FlyPriceSchema } from "../pricing/price.schema";
import { FlyRouteSchema } from "../routes/route.schema";
import { FlyImageSchema } from "./image.schema";
import { FlyNoticeSchema } from "./notice.schema";

import { FlyExtraMapperSchema } from "../fly-extra-mapper.schema";
import { FlyPackageMapperSchema } from "../fly-package-mapper.schema";
import { FlyPolicyMapperSchema } from "../policy/policies.schema";
import { FlyScheduleSchema } from "@/app/(home)/product-types/references/airline/aircraft/main/components/schema/schedule.schema";

export const TicketFlySchema = z.object({
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
  // AIRLINE
  // ======================================================

  airlineId: z.string(),

  // ======================================================
  // RELATIONS
  // ======================================================

  flyExtraMapper: z.array(z.lazy(() => FlyExtraMapperSchema)),

  flyPackageMapper: z.array(z.lazy(() => FlyPackageMapperSchema)),

  routes: z.array(z.lazy(() => FlyRouteSchema)),

  policies: z.array(z.lazy(() => FlyPolicyMapperSchema)),

  price: FlyPriceSchema.nullable(),

  notice: FlyNoticeSchema.nullable(),

  images: z.array(z.lazy(() => FlyImageSchema)),

  schedule: z.array(z.lazy(() => FlyScheduleSchema)),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  // ======================================================
  // SEARCH CONFIGURATION
  // ======================================================

  tagIds: z.array(z.string()).default([]),

  featured: z.boolean(),

  searchable: z.boolean(),

  searchPriority: z.coerce.number().default(0),
});

export type FlyFormSchema = z.infer<typeof TicketFlySchema>;
