import { LucideIcon } from "lucide-react";

export interface FormWizardStep {
  id: string;

  title: string;

  description?: string;

  icon?: LucideIcon;

  optional?: boolean;
}

export interface FormWizardContextType {
  currentStep: number;

  totalSteps: number;

  next: () => void;

  previous: () => void;

  goTo: (step: number) => void;

  isFirstStep: boolean;

  isLastStep: boolean;
}
