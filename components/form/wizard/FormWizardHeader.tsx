"use client";

import { Check } from "lucide-react";

import { useFormWizard } from "./useFormWizard";

import { FormWizardStep } from "./types";

interface Props {
  steps: FormWizardStep[];
}

export default function FormWizardHeader({ steps }: Props) {
  const { currentStep, goTo } = useFormWizard();

  return (
    <div className="flex items-center gap-4 overflow-x-auto pb-2">
      {steps.map((step, index) => {
        const completed = index < currentStep;

        const active = index === currentStep;

        return (
          <button
            key={step.id}
            onClick={() => goTo(index)}
            className="flex min-w-[170px] items-center gap-3 rounded-lg border p-3 text-left transition hover:bg-muted"
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full border

              ${
                completed
                  ? "bg-primary text-primary-foreground"
                  : active
                    ? "border-primary"
                    : ""
              }`}
            >
              {completed ? <Check className="h-4 w-4" /> : index + 1}
            </div>

            <div>
              <p className="font-medium">{step.title}</p>

              {step.description && (
                <p className="text-xs text-muted-foreground">
                  {step.description}
                </p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
