import { z } from "zod";

import { AirportTransferAvailabilitySchema } from "../trip/availability.schema";
import { AirportTransferCapacitySchema } from "../trip/capacity.schema";
import { AirportTransferRouteSchema } from "../routes/route.schema";
import { AirportTransferVehicleSchema } from "../vehicle/vehicle.schema";
import { AirportTransferContactInformationSchema } from "../flight/contact-information.schema";
import { AirportTransferPriceSchema } from "../pricing/price.schema";
import { AirportTransferNoticeSchema } from "./notice.schema";
import { AirportTransferScheduleSchema } from "../routes/schedule.schema";
import { AirportTransferPolicyMapperSchema } from "../policy-mapper.schema";

import { AirportTransferPackageMapperSchema } from "../airportTransfer-package-mapper.schema";
import { AirportTransferExtraMapperSchema } from "../airportTransfer-extra-mapper.schema";

export const AirportTransferSchema = z.object({
  // ======================================================
  // PROVIDER
  // ======================================================

  providerBookingId: z.string(),

  // ======================================================
  // AVAILABILITY / CAPACITY
  // ======================================================

  availability: AirportTransferAvailabilitySchema.nullable().optional(),

  capacity: AirportTransferCapacitySchema.nullable().optional(),

  // ======================================================
  // ROUTES / VEHICLES
  // ======================================================

  routes: z.array(AirportTransferRouteSchema),

  vehicle: z.array(AirportTransferVehicleSchema),

  // ======================================================
  // POLICIES / CONTACT
  // ======================================================

  policies: z.array(AirportTransferPolicyMapperSchema),

  contactInformation:
    AirportTransferContactInformationSchema.nullable().optional(),

  // ======================================================
  // PRICING
  // ======================================================

  price: AirportTransferPriceSchema.nullable().optional(),

  notice: AirportTransferNoticeSchema.nullable().optional(),

  // ======================================================
  // SCHEDULES
  // ======================================================

  schedules: z.array(AirportTransferScheduleSchema),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  instantConfirmation: z.boolean(),

  // ======================================================
  // PACKAGE
  // ======================================================

  airportTransferPackageMapper: z.array(AirportTransferPackageMapperSchema),

  // ======================================================
  // BOOKING ITEM TYPE
  // ======================================================

  bookingItemTypeId: z.string(),

  // ======================================================
  // SERVICE TYPE
  // ======================================================

  serviceTypeId: z.string(),

  // ======================================================
  // SEARCH / CATALOG
  // ======================================================

  name: z.string().min(1),

  tagIds: z.array(z.string()).default([]),

  featured: z.boolean(),

  searchable: z.boolean(),

  searchPriority: z.coerce.number().default(0),

  // ======================================================
  // EXTRA
  // ======================================================

  airportTransferExtraMapper: z.array(AirportTransferExtraMapperSchema),
});

export type AirportTransferFormSchema = z.infer<typeof AirportTransferSchema>;
