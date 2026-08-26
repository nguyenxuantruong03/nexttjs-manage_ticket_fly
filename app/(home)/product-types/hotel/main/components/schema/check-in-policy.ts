import { z } from "zod";

// ======================================================
// HOTEL CHECK-IN POLICY - MANAGE
// ======================================================

export const hotelCheckInPolicySchema = z.object({
  // ====================================================
  // CHECK-IN
  // ====================================================

  checkInFrom: z.string().trim().nullable().optional(),

  checkInUntil: z.string().trim().nullable().optional(),

  // ====================================================
  // CHECK-OUT
  // ====================================================

  checkOutUntil: z.string().trim().nullable().optional(),

  // ====================================================
  // AGE
  // ====================================================

  minimumAge: z
    .number()
    .int("Minimum age must be an integer")
    .min(0, "Minimum age cannot be negative")
    .nullable()
    .optional(),
});

export type HotelCheckInPolicyInput = z.infer<typeof hotelCheckInPolicySchema>;
