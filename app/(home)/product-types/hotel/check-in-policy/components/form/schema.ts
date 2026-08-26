import { z } from "zod";

export const HotelCheckInPolicySchema = z.object({
  hotelId: z.string().trim().min(1, "Hotel is required"),

  checkInFrom: z.string().trim().nullable().optional(),

  checkInUntil: z.string().trim().nullable().optional(),

  checkOutUntil: z.string().trim().nullable().optional(),

  minimumAge: z
    .number()
    .int("Minimum age must be an integer")
    .min(0, "Minimum age cannot be negative")
    .nullable()
    .optional(),
});

export type HotelCheckInPolicySchemaForm = z.infer<
  typeof HotelCheckInPolicySchema
>;
