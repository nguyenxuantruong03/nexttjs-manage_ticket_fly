import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";

import { FlyFormSchema } from "../schema/core/fly.schema";

export function initFlyScheduleValues(
  ticketFly: Fly,
): Pick<FlyFormSchema, "schedule"> {
  return {
    schedule:
      ticketFly.schedule?.map((item) => ({
        departureTime: item.departureTime ?? "08:00",
        arrivalTime: item.arrivalTime ?? "10:00",
        startDate: item.startDate ?? new Date(),
        endDate: item.endDate ?? undefined,
        aircraftId: item.aircraftId ?? "",
        active: item.active ?? true,
        operatingDays: item.operatingDays ?? [],
      })) ?? [],
  };
}
