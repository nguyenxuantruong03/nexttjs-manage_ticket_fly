import { ExtraFeeTypeFormSchema } from "./schema";

import { extraFeeTypeDefaultValues } from "./default-values";

import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";

export function initExtraFeeTypeFormValues(
  extraFeeType?: ExtraFeeType,
): ExtraFeeTypeFormSchema {
  if (!extraFeeType) {
    return structuredClone(extraFeeTypeDefaultValues);
  }

  return structuredClone(extraFeeType);
}
