import { z } from "zod";
import { hotelRatePlanSchema } from "../pricing/rate-plan.schema";
import { hotelAvailabilitySchema } from "./availability.schema";

// ======================================================
// HOTEL INVENTORY
// ======================================================

export const hotelInventorySchema = z.object({
  hotelId: z.string().min(1, "Hotel is required"),

  roomTypeId: z.string().min(1, "Room type is required"),

  // ==========================
  // RATE PLANS
  // ==========================

  ratePlans: z.array(z.lazy(() => hotelRatePlanSchema)).default([]),

  // ==========================
  // AVAILABILITY
  // ==========================

  availability: z
    .lazy(() => hotelAvailabilitySchema)
    .nullable()
    .optional(),
});

export const updateHotelInventorySchema = hotelInventorySchema.partial().omit({
  hotelId: true,
  roomTypeId: true,
});

// ======================================================
// TYPES
// ======================================================

export type HotelInventoryFormSchema = z.infer<typeof hotelInventorySchema>;
