// media.ts
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export const carRentalMediaDefaultValues = {
  medias: [
    {
      mediaId: "",
      categoryId: "",
      isPrimary: true,
      sortOrder: 0,
    },
  ],
} satisfies Pick<CarRentalFormSchema, "medias">;
