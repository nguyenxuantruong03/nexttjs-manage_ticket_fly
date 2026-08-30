import { z } from "zod";

import { FlyAircraftImageSchema } from "./image.schema";
import { FlyAircraftSpecificationSchema } from "./specification.schema";
import { FlyCabinSchema } from "./cabin.schema";
import { FlySeatMapSchema } from "./seat-map.schema";

import { FlyAircraftFacilityMapperSchema } from "./facility-mapper.schema";
import { FlyScheduleSchema } from "./schedule.schema";
import { FlyTripSchema } from "@/app/(home)/product-types/ticket-fly/main/components/form/schema/trip/trip.schema";

export const FlyAircraftSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  airlineId: z.string().min(1),

  trips: z.array(FlyTripSchema),

  // ======================================================
  // BASIC
  // ======================================================

  manufacturer: z.string().nullable(),

  model: z.string().nullable(),

  code: z.string().nullable(),

  registrationNumber: z.string().nullable(),

  active: z.boolean(),

  // ======================================================
  // SPECIFICATION
  // ======================================================

  specification: FlyAircraftSpecificationSchema.nullable(),

  // ======================================================
  // FACILITIES
  // ======================================================

  facilities: z.array(FlyAircraftFacilityMapperSchema),

  // ======================================================
  // CABIN / SEAT
  // ======================================================

  cabins: z.array(FlyCabinSchema),

  images: z.array(FlyAircraftImageSchema),

  seatMap: FlySeatMapSchema.nullable(),

  schedule: z.array(FlyScheduleSchema),
});

export type FlyAircraftFormSchema = z.infer<typeof FlyAircraftSchema>;
