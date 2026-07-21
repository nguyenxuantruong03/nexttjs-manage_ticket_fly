import { z } from "zod";

export const YachtSafetyEquipmentSchema = z.object({
  vehicleId: z.string(),

  lifeJacket: z.boolean().nullable().optional(),

  lifeRaft: z.boolean().nullable().optional(),

  fireExtinguisher: z.boolean().nullable().optional(),

  fireAlarm: z.boolean().nullable().optional(),

  firstAidKit: z.boolean().nullable().optional(),

  gps: z.boolean().nullable().optional(),

  radar: z.boolean().nullable().optional(),

  emergencyRadio: z.boolean().nullable().optional(),

  insurance: z.boolean().nullable().optional(),
});

export type YachtSafetyEquipmentFormValues = z.infer<
  typeof YachtSafetyEquipmentSchema
>;
