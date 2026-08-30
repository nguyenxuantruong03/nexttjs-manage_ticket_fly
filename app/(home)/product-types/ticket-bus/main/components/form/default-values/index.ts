import { BusFormSchema } from "../schema/core/bus.schema";

import { busBasicDefaultValues } from "./basic";
import { busRoutesDefaultValues } from "./routes";
import { busVehicleDefaultValues } from "./vehicle";
import { busPriceDefaultValues } from "./price";
import { busPolicyDefaultValues } from "./policy";
import { busExtraDefaultValues } from "./extra";
import { busPackageDefaultValues } from "./package";
import { busMediaDefaultValues } from "./media";

export const busDefaultValues: BusFormSchema = {
  ...busBasicDefaultValues,
  ...busRoutesDefaultValues,
  ...busVehicleDefaultValues,
  ...busPriceDefaultValues,
  ...busPolicyDefaultValues,
  ...busExtraDefaultValues,
  ...busPackageDefaultValues,
  ...busMediaDefaultValues,
};
