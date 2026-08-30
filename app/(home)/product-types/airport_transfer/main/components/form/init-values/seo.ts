import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

export function initAirportTransferSeoValues(
  airportTransfer: AirportTransfer,
): Pick<
  AirportTransferFormSchema,
  "tagIds" | "searchable" | "featured" | "searchPriority"
> {
  return {
    tagIds: airportTransfer.tagIds ?? [],

    searchable: airportTransfer.searchable ?? true,

    featured: airportTransfer.featured ?? false,

    searchPriority: airportTransfer.searchPriority ?? 0,
  };
}
