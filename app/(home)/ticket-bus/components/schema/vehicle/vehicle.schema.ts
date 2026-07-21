import { z } from "zod";


import { BusSeatInventoryLockSchema } from "../routes/inventory-lock.schema";

import { BusVehicleCapacitySchema } from "./capacity.schema";
import { BusVehicleFeaturesSchema } from "./features.schema";
import { BusVehicleImageSchema } from "./image.schema";
import { BusSeatLayoutSchema } from "./seat-layout.schema";
import { BusSeatMapSchema } from "./seat-map.schema";
import { BusSeatSchema } from "./seat.schema";
import { BusVehicleSpecificationSchema } from "./specification.schema";
import { BusVehicleStatus, BusVehicleType } from "@/types/bookings/bus/enums";

export const BusVehicleSchema = z.object({
  type: z.nativeEnum(BusVehicleType),

  active: z.boolean(),

  name: z.string().optional(),

  manufacturer: z.string().optional(),

  model: z.string().optional(),

  year: z.number().optional(),

  status: z.nativeEnum(BusVehicleStatus).optional(),

  capacity: BusVehicleCapacitySchema.optional(),

  features: BusVehicleFeaturesSchema.optional(),

  seats: z.array(BusSeatSchema),

  locks: z.array(BusSeatInventoryLockSchema),

  specification: BusVehicleSpecificationSchema.optional(),

  seatLayout: z.array(BusSeatLayoutSchema),

  images: z.array(BusVehicleImageSchema),

  seatMap: BusSeatMapSchema.optional(),
});

export type BusVehicleFormValues = z.infer<typeof BusVehicleSchema>;
