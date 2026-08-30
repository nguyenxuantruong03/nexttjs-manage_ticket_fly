// schedules.ts
import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferSchedulesDefaultValues = {
  schedules: [
    {
      departureTime: "",
      startDate: "",
      endDate: "",
      active: true,
      operatingDays: [],
    },
  ],
} satisfies Pick<AirportTransferFormSchema, "schedules">;
