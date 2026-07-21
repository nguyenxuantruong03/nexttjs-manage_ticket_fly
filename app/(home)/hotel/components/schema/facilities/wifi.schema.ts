import { z } from "zod";

export const HotelWifiSchema = z.object({
  id: z.string().cuid(),

  facilitiesId: z.string().cuid(),

  available: z.boolean().default(false),

  free: z.boolean().nullable().optional(),

  speedMbps: z.number().nullable().optional(),

  availableInRooms: z.boolean().nullable().optional(),

  availableInPublicAreas: z.boolean().nullable().optional(),
});
