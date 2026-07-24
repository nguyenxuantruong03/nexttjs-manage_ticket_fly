import { AirportTransfer } from "@/types/bookings/airport-transfer/core/airport-transfer.types";
import { AirportTransferFormSchema } from "../schema/core/schema";
import { airportTransferDefaultValues } from "./default-values";

export function initAirportTransferFormValues(
  airportTransfer?: AirportTransfer,
): AirportTransferFormSchema {
  if (!airportTransfer) {
    return structuredClone(airportTransferDefaultValues);
  }

  return structuredClone(airportTransfer);
}
