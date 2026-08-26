"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import {
  InsuranceBenefitTypeForm,
  InsuranceTypeForm,
  DocumentTypeForm,
} from "./forms";

interface Props {
  mainStep: string;
  subStep: string;
  hooks: ReturnType<typeof import("./hooks").useCarRentalStepperHooks>;
}

export function renderCarRentalStepperContent({
  mainStep,
  subStep,
  hooks,
}: Props) {
  const { insuranceType, insuranceBenefitType, documentType } = hooks;

  if (mainStep === "insurance") {
    if (insuranceType.isLoading || insuranceBenefitType.isLoading) {
      return <LoadingPage />;
    }

    if (insuranceType.error || insuranceBenefitType.error) {
      return <ErrorPage />;
    }

    if (subStep === "insurance-type") {
      return <InsuranceTypeForm redirect={false} />;
    }

    if (subStep === "insurance-benefit-type") {
      return <InsuranceBenefitTypeForm redirect={false} />;
    }
  }

  if (mainStep === "document") {
    if (documentType.isLoading) {
      return <LoadingPage />;
    }

    if (documentType.error) {
      return <ErrorPage />;
    }

    if (subStep === "document-type") {
      return <DocumentTypeForm redirect={false} />;
    }
  }

  return null;
}
