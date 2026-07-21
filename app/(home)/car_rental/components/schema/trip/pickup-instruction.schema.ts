import { PickupInstructionType } from "@/types/bookings/car_rental/enums";
import { z } from "zod";

export const CarRentalPickupInstructionSchema = z.object({
  type: z.nativeEnum(PickupInstructionType),

  title: z.string().min(1),

  description: z.string().optional(),

  location: z.string().optional(),

  contactPhone: z.string().optional(),
});
