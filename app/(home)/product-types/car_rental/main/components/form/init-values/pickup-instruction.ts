// pickup-instruction.ts
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export function initCarRentalPickupInstructionValues(
  rental: CarRental,
): Pick<CarRentalFormSchema, "pickupInstructions"> {
  return {
    pickupInstructions:
      rental.pickupInstructions?.map((instruction) => ({
        type: instruction.type,
        title: instruction.title ?? "",
        description: instruction.description ?? "",
        location: instruction.location ?? "",
        contactPhone: instruction.contactPhone ?? "",
      })) ?? [],
  };
}
