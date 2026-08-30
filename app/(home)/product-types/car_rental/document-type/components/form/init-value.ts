import { CarRentalDocumentType } from "@/types/product-types/car_rental/policies/required-documents.types";

import { carRentalDocumentTypeDefaultValues } from "./default-values";

import { CarRentalDocumentTypeFormSchema } from "./schema";

export function initCarRentalDocumentTypeFormValues(
  carRentalDocumentType?: CarRentalDocumentType,
): CarRentalDocumentTypeFormSchema {
  if (!carRentalDocumentType) {
    return structuredClone(carRentalDocumentTypeDefaultValues);
  }

  return {
    name: carRentalDocumentType.name ?? "",
    description: carRentalDocumentType.description ?? null,
    icon: carRentalDocumentType.icon ?? null,
    sortOrder: carRentalDocumentType.sortOrder ?? 0,
    active: carRentalDocumentType.active ?? true,
  };
}
