import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtAvailabilityValues(
  yacht: Yacht,
): Pick<YachtFormSchema, "availability"> {
  return {
    availability: yacht.availability
      ? {
          calendar:
            yacht.availability.calendar?.map((cal) => ({
              availabilityId: cal.availabilityId ?? "",
              date: cal.date ?? new Date(),
              available: cal.available ?? true,
              booked: cal.booked ?? false,
              stopSell: cal.stopSell ?? false,
            })) ?? [],
        }
      : { calendar: [] },
  };
}
