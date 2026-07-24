"use client";

import { createContext, useEffect, useMemo, useState } from "react";

import { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";

import {
  FormWizardContextType,
  FormWizardStep,
  FormWizardStepStatus,
} from "./types";

interface Props<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  steps: FormWizardStep<TFieldValues>[];
  children: React.ReactNode;
  loading?: boolean;

  /**
   * Edit / View mode
   * Unlock every step
   */
  unlockAll?: boolean;
}

export const FormWizardContext =
  createContext<FormWizardContextType<any> | null>(null);

export default function FormWizard<TFieldValues extends FieldValues>({
  form,
  steps,
  children,
  loading = false,
  unlockAll = false,
}: Props<TFieldValues>) {
  /**
   * Current step
   */
  const [currentStep, setCurrentStep] = useState(0);

  /**
   * Completed steps
   */
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(() => {
    if (unlockAll) {
      return new Set(steps.map((_, index) => index));
    }

    return new Set<number>();
  });

  /**
   * Visited steps
   */
  const [visitedSteps, setVisitedSteps] = useState<Set<number>>(() => {
    if (unlockAll) {
      return new Set(steps.map((_, index) => index));
    }

    return new Set([0]);
  });

  /**
   * Sync Edit/View mode
   */
  useEffect(() => {
    if (!unlockAll) {
      return;
    }

    const allSteps = new Set(steps.map((_, index) => index));

    setCompletedSteps(allSteps);

    setVisitedSteps(allSteps);
  }, [unlockAll, steps]);

  /**
   * Subscribe form state
   */
  const {
    formState: { errors },
  } = form;

  /**
   * Validate one step
   */
  const validateStep = async (index: number) => {
    const step = steps[index];

    if (!step) {
      return false;
    }

    if (!step.fields?.length) {
      return true;
    }

    return form.trigger(step.fields as FieldPath<TFieldValues>[], {
      shouldFocus: false,
    });
  };

  /**
   * Validate current step
   */
  const validateCurrentStep = async () => {
    return validateStep(currentStep);
  };

  /**
   * Step completed
   */
  const isStepCompleted = (index: number) => {
    return completedSteps.has(index);
  };

  /**
   * Step visited
   */
  const isStepVisited = (index: number) => {
    return visitedSteps.has(index);
  };
  /**
   * Step disabled
   */
  const isStepDisabled = (index: number) => {
    /**
     * Loading
     */
    if (loading) {
      return true;
    }

    /**
     * Edit / View
     */
    if (unlockAll) {
      return false;
    }

    /**
     * First step
     */
    if (index === 0) {
      return false;
    }

    /**
     * Previous step must completed
     */
    return !completedSteps.has(index - 1);
  };

  /**
   * Step status
   */
  const getStepStatus = (index: number): FormWizardStepStatus => {
    const step = steps[index];

    const hasError =
      step.fields?.some((field) => form.getFieldState(field).invalid) ?? false;

    /**
     * Current
     */
    if (index === currentStep) {
      return hasError ? "error" : "current";
    }

    /**
     * Completed
     */
    if (unlockAll || completedSteps.has(index)) {
      return hasError ? "error" : "completed";
    }

    /**
     * Disabled
     */
    if (isStepDisabled(index)) {
      return "disabled";
    }

    /**
     * Pending
     */
    return "pending";
  };
  /**
   * Next
   */
  const next = async () => {
    const valid = await validateCurrentStep();

    if (!valid) {
      return;
    }

    /**
     * Mark current step completed
     */
    setCompletedSteps((prev) => {
      const next = new Set(prev);

      next.add(currentStep);

      return next;
    });

    /**
     * Unlock next step
     */
    setVisitedSteps((prev) => {
      const next = new Set(prev);

      if (currentStep + 1 < steps.length) {
        next.add(currentStep + 1);
      }

      return next;
    });

    /**
     * Move next
     */
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  /**
   * Previous
   */
  const previous = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  /**
   * Go to step
   */
  const goTo = async (index: number, force = false) => {
    if (index < 0 || index >= steps.length) {
      return;
    }

    if (!force && isStepDisabled(index)) {
      return;
    }

    setVisitedSteps((prev) => {
      const next = new Set(prev);

      next.add(index);

      return next;
    });

    setCurrentStep(index);
  };

  const value = useMemo<FormWizardContextType<TFieldValues>>(
    () => ({
      form,

      loading,

      steps,

      currentStep,

      totalSteps: steps.length,

      completedSteps,

      visitedSteps,

      next,

      previous,

      goTo,
      unlockAll,
      isFirstStep: currentStep === 0,

      isLastStep: currentStep === steps.length - 1,

      validateCurrentStep,

      validateStep,

      getStepStatus,

      isStepDisabled,

      isStepCompleted,

      isStepVisited,
    }),
    [form, loading, steps, currentStep, completedSteps, visitedSteps, errors,  unlockAll],
  );

  return (
    <FormWizardContext.Provider value={value}>
      {children}
    </FormWizardContext.Provider>
  );
}
