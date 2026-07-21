import { z } from "zod";

import { CarRentalLocationSchema } from "./location.schema";

import { CarRentalScheduleSchema } from "./schedule.schema";

import { CarRentalTripFeeSchema } from "./fee.schema";

export const CarRentalTripSchema = z.object({
  rentalId: z.string(),

  locations: z.array(CarRentalLocationSchema).default([]),

  schedule: CarRentalScheduleSchema.optional(),

  tripFee: CarRentalTripFeeSchema.optional(),
});
