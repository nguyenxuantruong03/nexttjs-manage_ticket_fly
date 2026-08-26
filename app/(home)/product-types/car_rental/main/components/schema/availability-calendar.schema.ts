import { CarRentalCalendarStatus } from "@/types/product-types/car_rental/enums";
import { z } from "zod";

export const CarRentalAvailabilityCalendarSchema = z.object({
  vehicleId: z.string(),

  startTime: z.string(),

  endTime: z.string(),

  status: z.nativeEnum(CarRentalCalendarStatus),

  note: z.string().optional(),
});
