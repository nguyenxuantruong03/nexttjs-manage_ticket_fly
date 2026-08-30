"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import {
  ConditionForm,
  CrewRoleForm,
} from "./forms";

interface Props {
  mainStep: string;
  subStep: string;

  hooks: ReturnType<typeof import("./hooks").useYachtStepperHooks>;
}

export function renderYachtStepperContent({ mainStep, subStep, hooks }: Props) {
  const { crewRole, condition } = hooks;

  /**
   * ==========================
   * CREW
   * ==========================
   */

  if (mainStep === "crew") {
    if (crewRole.isLoading || condition.isLoading) {
      return <LoadingPage />;
    }

    if (crewRole.isError || condition.isError) {
      return <ErrorPage />;
    }

    if (subStep === "crew-role") {
      return <CrewRoleForm redirect={false} />;
    }

    if (subStep === "condition") {
      return <ConditionForm redirect={false} />;
    }
  }

 
  return null;
}
