import { z } from "zod";

export const AirportTransferVehicleAssignmentSchema = z.object({
  vehicleId: z.string(),

  driverId: z.string().optional(),
});
