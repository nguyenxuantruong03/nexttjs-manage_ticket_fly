"use client";

import { FormWizardProvider } from "./FormWizardProvider";
import { FormWizardStep } from "./types";

interface Props {

  children: React.ReactNode;

  steps: FormWizardStep[];
}

export function FormWizard({
  children,
  steps,
}: Props) {
  return (
    <FormWizardProvider steps={steps}>
      {children}
    </FormWizardProvider>
  );
}

export default FormWizard;