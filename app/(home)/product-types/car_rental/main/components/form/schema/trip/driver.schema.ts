import { DriverStatus } from "@/types/product-types/car_rental/enums";
import { z } from "zod";


export const CarRentalDriverSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  phone: z.string().nullable(),

  languages: z.array(z.string()).default([]),

  experienceYears: z.number().nullable(),

  rating: z.number().default(0),

  status: z.nativeEnum(DriverStatus),

  image: z.string().nullable(),
});

export type CarRentalDriverFormSchema = z.infer<
  typeof CarRentalDriverSchema
>;