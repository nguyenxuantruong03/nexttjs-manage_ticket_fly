import { CarRental } from "@/types/bookings/car_rental/core/car-rental.types";
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";
import { defaultCarRentalValues } from "./default-values";

export function initCarRentalFormValues(
  rental?: CarRental,
): CarRentalFormSchema {
  if (!rental) {
    return structuredClone(defaultCarRentalValues);
  }

  return structuredClone(rental);
}
