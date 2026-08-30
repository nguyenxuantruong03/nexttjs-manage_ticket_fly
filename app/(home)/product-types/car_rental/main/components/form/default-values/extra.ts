// extra.ts
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export const carRentalExtraDefaultValues = {
  carRentalExtraMapper: [
    {
      extraId: "",
      active: true,
      sortOrder: 0,
    },
  ],
} satisfies Pick<CarRentalFormSchema, "carRentalExtraMapper">;
