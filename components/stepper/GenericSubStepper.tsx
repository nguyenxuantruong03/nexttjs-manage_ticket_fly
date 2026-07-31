"use client";

import { Step } from "./types";

interface GenericSubStepperProps {
  steps: Step[];

  currentStep: string;

  onChange: (id: string) => void;

  wrap?: boolean;
}

export default function GenericSubStepper({
  steps,
  currentStep,
  onChange,
  wrap = false,
}: GenericSubStepperProps) {
  return (
    <div
      className={`
        mt-10
        flex
        justify-center
        gap-5

        ${wrap ? "flex-wrap" : ""}
      `}
    >
      {steps.map(([id, title, Icon]) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`
            flex
            items-center
            gap-3

            px-6
            py-3

            rounded-xl
            border
            transition-colors

            ${
              currentStep === id
                ? "bg-primary/10 border-primary text-primary"
                : "hover:bg-muted"
            }
          `}
        >
          <Icon size={20} />

          <span>{title}</span>
        </button>
      ))}
    </div>
  );
}
