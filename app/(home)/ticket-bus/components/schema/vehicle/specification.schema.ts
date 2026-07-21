import { BusFuelType } from "@/types/bookings/bus/enums";
import { z } from "zod";


export const BusVehicleSpecificationSchema = z.object({
  engineType: z.string().optional(),

  transmission: z.string().optional(),

  fuelType: z.nativeEnum(BusFuelType).optional(),

  suspension: z.string().optional(),

  airConditioning: z.boolean().optional(),

  wifiAvailable: z.boolean().optional(),

  toiletAvailable: z.boolean().optional(),
});

export type BusVehicleSpecificationFormValues = z.infer<
  typeof BusVehicleSpecificationSchema
>;
