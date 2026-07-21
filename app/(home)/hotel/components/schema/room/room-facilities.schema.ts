import { z } from "zod";

export const HotelRoomFacilitiesSchema = z.object({
  id: z.string().cuid(),

  roomId: z.string().cuid(),

  tv: z.boolean().nullable().optional(),

  minibar: z.boolean().nullable().optional(),

  refrigerator: z.boolean().nullable().optional(),

  microwave: z.boolean().nullable().optional(),

  coffeeMachine: z.boolean().nullable().optional(),

  kettle: z.boolean().nullable().optional(),

  safe: z.boolean().nullable().optional(),

  wardrobe: z.boolean().nullable().optional(),

  hairDryer: z.boolean().nullable().optional(),

  ironingFacilities: z.boolean().nullable().optional(),

  slippers: z.boolean().nullable().optional(),

  bathrobe: z.boolean().nullable().optional(),

  telephone: z.boolean().nullable().optional(),

  desk: z.boolean().nullable().optional(),

  sofa: z.boolean().nullable().optional(),

  balcony: z.boolean().nullable().optional(),

  bathtub: z.boolean().nullable().optional(),

  shower: z.boolean().nullable().optional(),

  streamingService: z.boolean().nullable().optional(),
});

export type HotelRoomFacilitiesInput = z.infer<
  typeof HotelRoomFacilitiesSchema
>;
