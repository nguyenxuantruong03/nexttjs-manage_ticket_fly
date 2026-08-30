// package.ts
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export const carRentalPackageDefaultValues = {
  carRentalPackageMapper: [
    {
      packageId: "",
    },
  ],
} satisfies Pick<CarRentalFormSchema, "carRentalPackageMapper">;
