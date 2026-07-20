"use client";

import { useFormWizard } from "./useFormWizard";

interface Props {

  index: number;

  children: React.ReactNode;
}

export default function FormWizardStep({
  index,
  children,
}: Props) {
  const { currentStep } = useFormWizard();

  if (currentStep !== index) return null;

  return <>{children}</>;
}