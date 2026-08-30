import { YachtFormSchema } from "../schema/core/yacht.schema";

import { yachtAvailabilityDefaultValues } from "./availability";
import { yachtBasicDefaultValues } from "./basic";
import { yachtCrewDefaultValues } from "./crew";
import { yachtExtraMapperDefaultValues } from "./extra";
import { yachtImageDefaultValues } from "./image";
import { yachtNoticeDefaultValues } from "./notice";
import { yachtPackageMapperDefaultValues } from "./package";
import { yachtPolicyDefaultValues } from "./policy";
import { yachtPriceDefaultValues } from "./price";
import { yachtRouteDefaultValues } from "./route.default-value";
import { yachtVehicleDefaultValues } from "./vehicle";

export const defaultYachtValues: YachtFormSchema = {
  ...yachtBasicDefaultValues,
  ...yachtVehicleDefaultValues,
  ...yachtImageDefaultValues,
  ...yachtNoticeDefaultValues,
  ...yachtCrewDefaultValues,
  ...yachtExtraMapperDefaultValues,
  ...yachtPackageMapperDefaultValues,
  ...yachtRouteDefaultValues,
  ...yachtAvailabilityDefaultValues,
  ...yachtPriceDefaultValues,
  ...yachtPolicyDefaultValues,
};
