import { z } from "zod";

// ======================================================
// HOTEL POLICY MAPPER - MANAGE
// ======================================================

export const hotelPolicyMapperSchema = z.object({
  // ====================================================
  // POLICY
  // ====================================================

  policyId: z.string(),

  // ====================================================
  // VALUES
  // ====================================================

  valueBoolean: z.boolean().nullable().optional(),

  valueNumber: z.number().nullable().optional(),

  valueText: z.string().nullable().optional(),

  valueJson: z.unknown().nullable().optional(),

  // ====================================================
  // STATUS
  // ====================================================

  active: z.boolean().default(true),
});

export type HotelPolicyMapperInput = z.infer<typeof hotelPolicyMapperSchema>;
