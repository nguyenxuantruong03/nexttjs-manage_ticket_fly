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

        const Icon = step.icon;

        return (
          <button
            key={step.id}
            type="button"
            onClick={() => goTo(index)}
            className="
              flex min-w-[190px]
    items-center gap-3
    rounded-lg
    border
    p-3
    text-left
    transition
    hover:bg-muted
    focus:outline-none
    focus:ring-0
            "
          >
            <div
              className={`
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border

                ${
                  completed
                    ? "bg-primary text-primary-foreground"
                    : active
                      ? "border-primary text-primary"
                      : "text-muted-foreground"
                }
              `}
            >
              {completed ? (
                <Check className="h-5 w-5" />
              ) : Icon ? (
                <Icon className="h-5 w-5" />
              ) : (
                index + 1
              )}
            </div>

            <div className="min-w-0">
              <p className="truncate font-medium">{step.title}</p>

              {step.description && (
                <p className="truncate text-xs text-muted-foreground">
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
