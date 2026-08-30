// business-hours.ts
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export function initCarRentalBusinessHoursValues(
  rental: CarRental,
): Pick<CarRentalFormSchema, "businessHours"> {
  return {
    businessHours:
      rental.businessHours?.map((hour) => ({
        day: hour.day,
        openTime: hour.openTime ?? "08:00",
        closeTime: hour.closeTime ?? "18:00",
        closed: hour.closed ?? false,
      })) ?? [],
  };
}
