"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import {
  FacilityCategoryForm,
  FacilityMainForm,
  PolicyMainForm,
  PolicyTypeForm,
} from "./forms";
import { useFeaturesStepperHooks } from "./hooks";

interface Props {
  mainStep: string;
  subStep: string;
  hooks: ReturnType<typeof useFeaturesStepperHooks>;
}

export function renderFeaturesStepperContent({
  mainStep,
  subStep,
  hooks,
}: Props) {
  const { facilityCategory, facilityMain, policyMain, policyType } = hooks;

  const currentHook = {
    "facility-category": facilityCategory,
    "facility-main": facilityMain,
    "policy-main": policyMain,
    "policy-type": policyType,
  }[subStep];

  if (currentHook?.isLoading) {
    return <LoadingPage />;
  }

  if (currentHook?.isError) {
    return <ErrorPage />;
  }

  if (mainStep === "facility" && subStep === "facility-category") {
    return (
      <FacilityCategoryForm
        bookingTypeData={facilityCategory.data?.bookingTypeData.data ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "facility" && subStep === "facility-main") {
    return (
      <FacilityMainForm
        facilityCategoryData={facilityMain.data?.facilityCategoryData.data ?? []}
        bookingTypeData={facilityMain.data?.bookingTypeData.data ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "policy" && subStep === "policy-main") {
    return (
      <PolicyMainForm
        policyTypeData={policyMain.data?.policyTypeData.data ?? []}
        bookingTypeData={policyMain.data?.bookingTypeData.data ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "policy" && subStep === "policy-type") {
    return (
      <PolicyTypeForm
        bookingTypeData={policyType.data?.bookingTypeData.data ?? []}
        redirect={false}
      />
    );
  }

  return null;
}
