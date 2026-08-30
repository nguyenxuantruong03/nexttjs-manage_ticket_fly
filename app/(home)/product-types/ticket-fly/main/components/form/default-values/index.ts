import { FlyFormSchema } from "../schema/core/fly.schema";
import { flyBasicDefaultValues } from "./basic";
import { flyExtraMapperDefaultValues } from "./extra";
import { flyImageDefaultValues } from "./image";
import { flyNoticeDefaultValues } from "./notice";
import { flyPackageMapperDefaultValues } from "./package";
import { flyPolicyDefaultValues } from "./policy";
import { flyPriceDefaultValues } from "./price";
import { flyRouteDefaultValues } from "./route.default-value";
import { flyScheduleDefaultValues } from "./schedule";

export const FlyDefaultValues: FlyFormSchema = {
  ...flyBasicDefaultValues,
  ...flyExtraMapperDefaultValues,
  ...flyPackageMapperDefaultValues,
  ...flyRouteDefaultValues,
  ...flyPolicyDefaultValues,
  ...flyPriceDefaultValues,
  ...flyNoticeDefaultValues,
  ...flyImageDefaultValues,
  ...flyScheduleDefaultValues,
};
