"use client";

import { useWizardContext } from "./FormWizardProvider";

export function useFormWizard() {
  return useWizardContext();
}