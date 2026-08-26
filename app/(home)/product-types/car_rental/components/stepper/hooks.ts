"use client";

import { useCarRentalInsuranceBenefitTypeCreateFormData } from "@/hooks/product-types/car-rental/insurance-benefit-type/useInsuranceBenefitTypeCreateFormData";

import { useCarRentalInsuranceTypeCreateFormData } from "@/hooks/product-types/car-rental/insurance-type/useInsuranceTypeCreateFormData";

import { useCarRentalDocumentTypeCreateFormData } from "@/hooks/product-types/car-rental/document-type/useDocumentTypeCreateFormData";

export function useCarRentalStepperHooks(subStep: string) {
  /**
   * ==========================
   * INSURANCE
   * ==========================
   */

  const insuranceType = useCarRentalInsuranceTypeCreateFormData(
    subStep === "insurance-type",
  );

  const insuranceBenefitType = useCarRentalInsuranceBenefitTypeCreateFormData(
    subStep === "insurance-benefit-type",
  );

  /**
   * ==========================
   * DOCUMENT
   * ==========================
   */

  const documentType = useCarRentalDocumentTypeCreateFormData(
    subStep === "document-type",
  );

  return {
    insuranceType,
    insuranceBenefitType,
    documentType,
  };
}
