import { z } from "zod";

export const HotelGuestPolicySchema = z.object({
  id: z.string().cuid(),

  policiesId: z.string().cuid(),

  minimumAge: z.number().int().nullable().optional(),

  childrenAllowed: z.boolean().nullable().optional(),

  petsAllowed: z.boolean().nullable().optional(),

  smokingAllowed: z.boolean().nullable().optional(),

  extraBedAvailable: z.boolean().nullable().optional(),

  extraBedFee: z.number().nullable().optional(),
});

export type HotelGuestPolicyInput = z.infer<typeof HotelGuestPolicySchema>;
