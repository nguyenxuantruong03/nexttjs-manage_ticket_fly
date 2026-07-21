import { z } from "zod";

export const YachtVehicleFacilitiesSchema = z.object({
  vehicleId: z.string(),

  wifi: z.boolean().nullable().optional(),

  bluetooth: z.boolean().nullable().optional(),

  tv: z.boolean().nullable().optional(),

  soundSystem: z.boolean().nullable().optional(),

  kitchen: z.boolean().nullable().optional(),

  refrigerator: z.boolean().nullable().optional(),

  coffeeMachine: z.boolean().nullable().optional(),

  bar: z.boolean().nullable().optional(),

  jacuzzi: z.boolean().nullable().optional(),

  swimmingPlatform: z.boolean().nullable().optional(),

  sunDeck: z.boolean().nullable().optional(),

  airConditioning: z.boolean().nullable().optional(),

  heating: z.boolean().nullable().optional(),

  shower: z.boolean().nullable().optional(),

  toilet: z.boolean().nullable().optional(),

  fishingEquipment: z.boolean().nullable().optional(),

  snorkelingEquipment: z.boolean().nullable().optional(),

  divingEquipment: z.boolean().nullable().optional(),
});

export type YachtVehicleFacilitiesFormValues = z.infer<
  typeof YachtVehicleFacilitiesSchema
>;
