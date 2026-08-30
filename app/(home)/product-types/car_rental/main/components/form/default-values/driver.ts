import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

import { DriverStatus } from "@/types/product-types/car_rental/enums";

export const carRentalDriverDefaultValues = {
  drivers: [
    {
      name: "",

      phone: null,

      languages: [],

      experienceYears: null,

      rating: 0,

      status: DriverStatus.active,

      image: null,
    },
  ],
} satisfies Pick<CarRentalFormSchema, "drivers">;
