import { PackageFormSchema } from "./schema";

import { packageDefaultValues } from "./default-values";

import { Package } from "@/types/common/commerce/package/package.type";

export function initPackageFormValues(
  packageData?: Package,
): PackageFormSchema {
  if (!packageData) {
    return structuredClone(packageDefaultValues);
  }

  return structuredClone(packageData);
}
