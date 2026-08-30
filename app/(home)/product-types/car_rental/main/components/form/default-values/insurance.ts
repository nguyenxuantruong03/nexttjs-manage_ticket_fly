import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export const carRentalInsuranceDefaultValues = {
  insurances: [
    {
      typeId: "",

      name: "",

      description: "",

      pricePerDay: 0,

      fixedPrice: 0,

      active: true,

      benefits: [
        {
          typeId: "",

          title: "",

          description: "",

          coverageAmount: 0,

          excessAmount: 0,
        },
      ],
    },
  ],
} satisfies Pick<CarRentalFormSchema, "insurances">;
