// packages.ts
import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferPackagesDefaultValues = {
  airportTransferPackageMapper: [
    {
      packageId: "",
    },
  ],
} satisfies Pick<AirportTransferFormSchema, "airportTransferPackageMapper">;
