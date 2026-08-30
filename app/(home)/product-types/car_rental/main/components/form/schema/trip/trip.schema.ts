import { z } from "zod";

import { CarRentalLocationSchema } from "./location.schema";
import { CarRentalScheduleSchema } from "./schedule.schema";
import { CarRentalTripFeeSchema } from "./fee.schema";

export const CarRentalTripSchema = z.object({
  // ======================================================
  // RENTAL
  // ======================================================

  rentalId: z.string().min(1),

  // ======================================================
  // LOCATIONS
  // ======================================================

  locations: z.array(CarRentalLocationSchema).default([]),

  // ======================================================
  // SCHEDULE
  // ======================================================

  schedule: CarRentalScheduleSchema.optional(),

  // ======================================================
  // FEES
  // ======================================================

  tripFee: CarRentalTripFeeSchema.optional(),
});

export type CarRentalTripFormSchema = z.infer<typeof CarRentalTripSchema>;
