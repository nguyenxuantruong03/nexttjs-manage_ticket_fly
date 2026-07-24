import { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";

import { LucideIcon } from "lucide-react";

export type FormWizardStepStatus =
  | "pending"
  | "current"
  | "completed"
  | "error"
  | "disabled";

export interface FormWizardStep<
  TFieldValues extends FieldValues = FieldValues,
> {
  /**
   * Unique id
   */
  id: string;

  /**
   * Step title
   */
  title: string;

  /**
   * Description
   */
  description?: string;

  /**
   * Icon
   */
  icon?: LucideIcon;

  /**
   * Fields belong to this step.
   */
  fields?: readonly FieldPath<TFieldValues>[];

  /**
   * Optional step
   */
  optional?: boolean;
}

export interface FormWizardContextType<
  TFieldValues extends FieldValues = FieldValues,
> {
  /**
   * React Hook Form
   */
  form: UseFormReturn<TFieldValues>;

  /**
   * Loading
   */
  loading: boolean;

   /**
   * Edit/View mode
   */
  unlockAll: boolean;

  /**
   * Wizard steps
   */
  steps: FormWizardStep<TFieldValues>[];

  /**
   * Current step
   */
  currentStep: number;

  /**
   * Total steps
   */
  totalSteps: number;

  /**
   * Completed steps
   */
  completedSteps: Set<number>;

  /**
   * Visited steps
   */
  visitedSteps: Set<number>;

  /**
   * Next step
   */
  next(): Promise<void>;

  /**
   * Previous step
   */
  previous(): void;

  /**
   * Go to step
   */
  goTo(index: number, force?: boolean): Promise<void>;

  /**
   * First step
   */
  isFirstStep: boolean;

  /**
   * Last step
   */
  isLastStep: boolean;

  /**
   * Validate current step
   */
  validateCurrentStep(): Promise<boolean>;

  /**
   * Validate step
   */
  validateStep(index: number): Promise<boolean>;

  /**
   * Step status
   */
  getStepStatus(index: number): FormWizardStepStatus;

  /**
   * Step disabled
   */
  isStepDisabled(index: number): boolean;

  /**
   * Step completed
   */
  isStepCompleted(index: number): boolean;

  /**
   * Step visited
   */
  isStepVisited(index: number): boolean;
}
