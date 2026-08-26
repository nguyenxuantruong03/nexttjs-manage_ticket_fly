import { z } from "zod";

import { BusVehicleCapacitySchema } from "./capacity.schema";
import { BusVehicleImageSchema } from "./image.schema";
import { BusSeatLayoutSchema } from "./seat-layout.schema";
import { BusSeatMapSchema } from "./seat-map.schema";
import { BusSeatSchema } from "./seat.schema";
import { BusVehicleSpecificationSchema } from "./specification.schema";
import { BusVehicleStatus } from "@/types/product-types/bus/enums";
import { BusVehicleFacilityMapperSchema } from "./facility-mapper";

export const BusVehicleSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  vehicleTypeId: z.string().nullable(),

  active: z.boolean(),

  name: z.string().nullable(),

  manufacturer: z.string().nullable(),

  model: z.string().nullable(),

  year: z.number().nullable(),

  status: z.nativeEnum(BusVehicleStatus).nullable(),

  // ======================================================
  // CONFIGURATION
  // ======================================================

  capacity: BusVehicleCapacitySchema.nullable(),

  facilities: z.array(BusVehicleFacilityMapperSchema),

  seats: z.array(BusSeatSchema),

  specification: BusVehicleSpecificationSchema.nullable(),

  seatLayout: z.array(BusSeatLayoutSchema),

  images: z.array(BusVehicleImageSchema),

  seatMap: BusSeatMapSchema.nullable(),
});

export type BusVehicleFormValues = z.infer<typeof BusVehicleSchema>;
