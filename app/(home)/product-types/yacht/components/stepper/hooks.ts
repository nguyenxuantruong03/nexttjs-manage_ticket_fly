"use client";

import { useYachtConditionCreateFormData } from "@/hooks/product-types/yacht/condition/useYachtConditionCreateFormData";
import { useYachtCrewRoleCreateFormData } from "@/hooks/product-types/yacht/crew-role/useYachtCrewRoleCreateFormData";

export function useYachtStepperHooks(subStep: string) {
  /**
   * ==========================
   * CREW
   * ==========================
   */

  const crewRole = useYachtCrewRoleCreateFormData(subStep === "crew-role");

  const condition = useYachtConditionCreateFormData(subStep === "condition");

  /**
   * ==========================
   * PRICING
   * ==========================
   */

  return {
    crewRole,
    condition,
  };
}
