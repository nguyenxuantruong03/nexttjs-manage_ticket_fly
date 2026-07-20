"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  FormWizardContextType,
  FormWizardStep,
} from "./types";

interface Props {

  steps: FormWizardStep[];

  children: React.ReactNode;
}

const FormWizardContext =
  createContext<FormWizardContextType | null>(null);

export function FormWizardProvider({
  children,
  steps,
}: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((s) =>
      Math.min(s + 1, steps.length - 1),
    );
  };

  const previous = () => {
    setCurrentStep((s) =>
      Math.max(s - 1, 0),
    );
  };

  const goTo = (index: number) => {
    if (index < 0) return;

    if (index >= steps.length) return;

    setCurrentStep(index);
  };

  const value = useMemo(
    () => ({
      currentStep,

      totalSteps: steps.length,

      next,

      previous,

      goTo,

      isFirstStep: currentStep === 0,

      isLastStep:
        currentStep === steps.length - 1,
    }),
    [currentStep, steps.length],
  );

  return (
    <FormWizardContext.Provider value={value}>
      {children}
    </FormWizardContext.Provider>
  );
}

export function useWizardContext() {
  const context = useContext(FormWizardContext);

  if (!context)
    throw new Error(
      "useWizardContext must be inside FormWizardProvider",
    );

  return context;
}