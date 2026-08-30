import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

import { PickupInstructionType } from "@/types/product-types/car_rental/enums";

export const carRentalPickupInstructionDefaultValues = {
  pickupInstructions: [
    {
      type: PickupInstructionType.office,

      title: "",

      description: "",

      location: "",

      contactPhone: "",
    },
  ],
} satisfies Pick<CarRentalFormSchema, "pickupInstructions">;
