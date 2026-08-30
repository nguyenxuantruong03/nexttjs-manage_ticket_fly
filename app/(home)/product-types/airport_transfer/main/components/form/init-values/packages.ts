import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

// packages.ts
export function initAirportTransferPackagesValues(
  airportTransfer: AirportTransfer,
): Pick<AirportTransferFormSchema, "airportTransferPackageMapper"> {
  return {
    airportTransferPackageMapper:
      airportTransfer.airportTransferPackageMapper?.map((pkg) => ({
        packageId: pkg.packageId ?? "",
      })) ?? [],
  };
}
