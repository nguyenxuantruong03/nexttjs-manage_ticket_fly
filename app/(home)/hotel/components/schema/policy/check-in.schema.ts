import { z } from "zod";

export const HotelCheckInPolicySchema = z.object({
  id: z.string().cuid(),

  policiesId: z.string().cuid(),

  checkInTime: z.string().min(1),

  checkOutTime: z.string().min(1),

  frontDesk24Hours: z.boolean().nullable().optional(),

  selfCheckIn: z.boolean().nullable().optional(),

  expressCheckIn: z.boolean().nullable().optional(),

  expressCheckOut: z.boolean().nullable().optional(),

  keyCollectionNote: z.string().nullable().optional(),
});

export type HotelCheckInPolicyInput = z.infer<typeof HotelCheckInPolicySchema>;
