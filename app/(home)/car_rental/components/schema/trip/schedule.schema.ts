import { RentalDurationType } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalScheduleSchema = z.object({
  tripId: z.string(),

  durationType: z.nativeEnum(RentalDurationType),

  minimumHours: z.number().optional(),

  minimumDays: z.number().optional(),

  maximumDays: z.number().optional(),

  pickupTime: z.string().optional(),

  returnTime: z.string().optional(),
});
