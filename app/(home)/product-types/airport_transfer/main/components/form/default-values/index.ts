import { AirportTransferFormSchema } from "../schema/core/schema";

import { airportTransferAvailabilityDefaultValues } from "./availability";

import { airportTransferBasicDefaultValues } from "./basic";

import { airportTransferCapacityDefaultValues } from "./capacity";

import { airportTransferContactInformationDefaultValues } from "./contact-information";

import { airportTransferExtrasDefaultValues } from "./extras";

import { airportTransferPackagesDefaultValues } from "./packages";

import { airportTransferPoliciesDefaultValues } from "./policies";

import { airportTransferPriceDefaultValues } from "./price";

import { airportTransferRoutesDefaultValues } from "./route.default-value";

import { airportTransferSchedulesDefaultValues } from "./schedules";

import { airportTransferSeoDefaultValues } from "./seo";

import { airportTransferVehicleDefaultValues } from "./vehicle";

export const airportTransferDefaultValues: AirportTransferFormSchema = {
  ...airportTransferBasicDefaultValues,

  ...airportTransferRoutesDefaultValues,

  ...airportTransferSchedulesDefaultValues,

  ...airportTransferAvailabilityDefaultValues,

  ...airportTransferCapacityDefaultValues,

  ...airportTransferVehicleDefaultValues,

  ...airportTransferPriceDefaultValues,

  ...airportTransferContactInformationDefaultValues,

  ...airportTransferExtrasDefaultValues,

  ...airportTransferPackagesDefaultValues,

  ...airportTransferPoliciesDefaultValues,

  ...airportTransferSeoDefaultValues,
};
