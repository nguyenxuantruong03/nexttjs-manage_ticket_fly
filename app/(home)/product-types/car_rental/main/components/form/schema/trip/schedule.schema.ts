import { RentalDurationType } from "@/types/product-types/car_rental/enums";
import { z } from "zod";


export const CarRentalScheduleSchema = z.object({
  // ======================================================
  // TRIP
  // ======================================================

  tripId: z.string().min(1),

  // ======================================================
  // DURATION
  // ======================================================

  durationType: z.nativeEnum(RentalDurationType),

  minimumHours: z.number().optional(),

  minimumDays: z.number().optional(),

  maximumDays: z.number().optional(),

  // ======================================================
  // TIME
  // ======================================================

  pickupTime: z.string().optional(),

  returnTime: z.string().optional(),
});

export type CarRentalScheduleFormSchema = z.infer<
  typeof CarRentalScheduleSchema
>;
