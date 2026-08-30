import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

// schedules.ts
export function initAirportTransferSchedulesValues(
  airportTransfer: AirportTransfer,
): Pick<AirportTransferFormSchema, "schedules"> {
  return {
    schedules:
      airportTransfer.schedules?.map((schedule) => ({
        departureTime: schedule.departureTime ?? "",
        startDate: schedule.startDate ?? "",
        endDate: schedule.endDate ?? "",
        active: schedule.active ?? true,
        operatingDays: schedule.operatingDays ?? [],
      })) ?? [],
  };
}
