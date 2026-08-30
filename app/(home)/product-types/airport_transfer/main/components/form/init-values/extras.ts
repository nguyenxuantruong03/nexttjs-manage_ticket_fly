import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

// extras.ts
export function initAirportTransferExtrasValues(
  airportTransfer: AirportTransfer,
): Pick<AirportTransferFormSchema, "airportTransferExtraMapper"> {
  return {
    airportTransferExtraMapper:
      airportTransfer.airportTransferExtraMapper?.map((extra) => ({
        extraId: extra.extraId ?? "",
        active: extra.active ?? true,
        sortOrder: extra.sortOrder ?? 0,
      })) ?? [],
  };
}
