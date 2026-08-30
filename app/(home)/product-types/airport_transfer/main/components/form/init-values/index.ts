import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

import { airportTransferDefaultValues } from "../default-values";

import { initAirportTransferAvailabilityValues } from "./availability";

import { initAirportTransferBasicValues } from "./basic";

import { initAirportTransferCapacityValues } from "./capacity";

import { initAirportTransferContactInformationValues } from "./contact-information";

import { initAirportTransferExtrasValues } from "./extras";

import { initAirportTransferPackagesValues } from "./packages";

import { initAirportTransferPoliciesValues } from "./policies";

import { initAirportTransferPriceValues } from "./price";

import { initAirportTransferRoutesValues } from "./route.init-value";

import { initAirportTransferSchedulesValues } from "./schedules";

import { initAirportTransferSeoValues } from "./seo";

import { initAirportTransferVehicleValues } from "./vehicle";

export function initAirportTransferFormValues(
  airportTransfer?: AirportTransfer,
): AirportTransferFormSchema {
  if (!airportTransfer) {
    return structuredClone(airportTransferDefaultValues);
  }

  return {
    ...initAirportTransferBasicValues(airportTransfer),

    ...initAirportTransferRoutesValues(airportTransfer),

    ...initAirportTransferSchedulesValues(airportTransfer),

    ...initAirportTransferAvailabilityValues(airportTransfer),

    ...initAirportTransferCapacityValues(airportTransfer),

    ...initAirportTransferVehicleValues(airportTransfer),

    ...initAirportTransferPriceValues(airportTransfer),

    ...initAirportTransferContactInformationValues(airportTransfer),

    ...initAirportTransferExtrasValues(airportTransfer),

    ...initAirportTransferPackagesValues(airportTransfer),

    ...initAirportTransferPoliciesValues(airportTransfer),

    ...initAirportTransferSeoValues(airportTransfer),
  };
}
