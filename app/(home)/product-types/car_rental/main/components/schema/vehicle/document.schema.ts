import { RentalVehicleDocumentType } from "@/types/product-types/car_rental/enums";
import { z } from "zod";


export const CarRentalVehicleDocumentSchema = z.object({
  type: z.nativeEnum(RentalVehicleDocumentType),

  url: z.string().url(),

  expiryDate: z.date().nullable().optional(),
});

export type CarRentalVehicleDocumentFormSchema = z.infer<
  typeof CarRentalVehicleDocumentSchema
>;
