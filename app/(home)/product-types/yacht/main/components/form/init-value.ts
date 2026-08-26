import { Yacht } from "@/types/product-types/yacht/core/yacht.types";
import { YachtFormSchema } from "../schema/core/yacht.schema";
import { defaultYachtValues } from "./default-values";

export function initYachtFormValues(yacht?: Yacht): YachtFormSchema {
  if (!yacht) {
    return structuredClone(defaultYachtValues);
  }

  return structuredClone(yacht);
}
