// extras.ts
import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferExtrasDefaultValues = {
  airportTransferExtraMapper: [
    {
      extraId: "",
      active: true,
      sortOrder: 0,
    },
  ],
} satisfies Pick<AirportTransferFormSchema, "airportTransferExtraMapper">;
