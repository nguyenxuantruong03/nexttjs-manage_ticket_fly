
import { RentalLocationType } from "@/types/product-types/car_rental/enums";
import { z } from "zod";

export const CarRentalLocationSchema = z.object({
  // ======================================================
  // REFERENCES
  // ======================================================

  tripId: z.string().min(1),

  addressId: z.string().min(1),

  // ======================================================
  // LOCATION
  // ======================================================

  type: z.nativeEnum(RentalLocationType),

  name: z.string().min(1),

  available: z.boolean().default(true),
});

export type CarRentalLocationFormSchema = z.infer<
  typeof CarRentalLocationSchema
>;
