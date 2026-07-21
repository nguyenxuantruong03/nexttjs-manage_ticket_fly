import { BusVehicleImageCategory } from "@/types/bookings/bus/enums";
import { z } from "zod";

export const BusVehicleImageSchema = z.object({
  url: z.string(),

  category: z.nativeEnum(BusVehicleImageCategory),

  isPrimary: z.boolean(),

  sortOrder: z.number(),

  alt: z.string().optional(),
});

export type BusVehicleImageFormValues = z.infer<typeof BusVehicleImageSchema>;
