"use client";

import { useFacilityCategoryCreateFormData } from "@/hooks/features/facility-category/useFacilityCategoryCreateFormData";
import { useFacilityCreateFormData } from "@/hooks/features/facility/useFacilityCreateFormData";
import { usePolicyTypeCreateFormData } from "@/hooks/features/policy-type/usePolicyTypeCreateFormData";
import { usePolicyCreateFormData } from "@/hooks/features/policy/usePolicyCreateFormData";

export function useFeaturesStepperHooks(subStep: string) {
  /**
   * ==========================
   * FACILITY
   * ==========================
   */

  const facilityCategory = useFacilityCategoryCreateFormData(
    subStep === "facility-category",
  );

  const facilityMain = useFacilityCreateFormData(subStep === "facility-main");

  /**
   * ==========================
   * POLICY
   * ==========================
   */

  const policyMain = usePolicyCreateFormData(subStep === "policy-main");

  const policyType = usePolicyTypeCreateFormData(subStep === "policy-type");

  return {
    facilityCategory,
    facilityMain,
    policyMain,
    policyType,
  };
}
