import { z } from "zod";

export const AirportTransferPolicyMapperSchema = z.object({
  // =====================================================
  // POLICY
  // =====================================================

  policyId: z.string().min(1),

  // =====================================================
  // POLICY VALUE
  // =====================================================

  valueBoolean: z.boolean().nullable(),

  valueNumber: z.number().nullable(),

  valueText: z.string().nullable(),

  valueJson: z.unknown().nullable(),

  // =====================================================
  // STATUS
  // =====================================================

  active: z.boolean().default(true),
});

export type AirportTransferPolicyMapperSchemaType = z.infer<
  typeof AirportTransferPolicyMapperSchema
>;
