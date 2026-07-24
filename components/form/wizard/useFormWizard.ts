"use client";

import { useContext } from "react";
import { FieldValues } from "react-hook-form";

import { FormWizardContext } from "./FormWizard";
import { FormWizardContextType } from "./types";

export function useFormWizard<
  TFieldValues extends FieldValues = FieldValues,
>() {
  const context = useContext(FormWizardContext);

  if (!context) {
    throw new Error("useFormWizard must be used inside FormWizard.");
  }

  return context as FormWizardContextType<TFieldValues>;
}
