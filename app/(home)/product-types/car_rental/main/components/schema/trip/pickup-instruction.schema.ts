import { PickupInstructionType } from "@/types/product-types/car_rental/enums";
import { z } from "zod";


export const CarRentalPickupInstructionSchema = z.object({
  // ======================================================
  // TYPE
  // ======================================================

  type: z.nativeEnum(PickupInstructionType),

  // ======================================================
  // INSTRUCTION
  // ======================================================

  title: z.string().min(1),

  description: z.string().optional(),

  location: z.string().optional(),

  contactPhone: z.string().optional(),
});

export type CarRentalPickupInstructionFormSchema = z.infer<
  typeof CarRentalPickupInstructionSchema
>;
