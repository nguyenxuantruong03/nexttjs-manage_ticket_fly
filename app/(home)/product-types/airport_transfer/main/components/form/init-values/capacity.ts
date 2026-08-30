import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

export function initAirportTransferCapacityValues(
  airportTransfer: AirportTransfer,
): Pick<AirportTransferFormSchema, "capacity">["capacity"] {
  return {
    maxTripsPerDay: airportTransfer.capacity?.maxTripsPerDay ?? 0,

    maxVehiclesPerDay: airportTransfer.capacity?.maxVehiclesPerDay ?? 0,

    overbookingAllowed: airportTransfer.capacity?.overbookingAllowed ?? false,
  };
}
