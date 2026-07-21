import { AirportTransferVehicleImageCategory } from "@/types/bookings/airport-transfer/enums";
import { z } from "zod";


export const AirportTransferVehicleImageSchema = z.object({
  url: z.string().url(),

  category: z.nativeEnum(AirportTransferVehicleImageCategory),

  isPrimary: z.boolean().default(false),

  sortOrder: z.number().default(0),

  alt: z.string().optional(),
});
