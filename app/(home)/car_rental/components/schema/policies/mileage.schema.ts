import { UnitOption } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalMileagePolicySchema = z.object({
  policiesId: z.string(),

  unlimited: z.boolean().default(false),

  unit: z.nativeEnum(UnitOption),

  dailyLimitKm: z.number().optional(),

  extraKmFee: z.number().optional(),
});
