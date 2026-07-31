"use client";

import { Step } from "./types";

interface GenericMainStepperProps {
  steps: Step[];

  currentStep: string;

  onChange: (id: string) => void;

  columns?: number;
}

export default function GenericMainStepper({
  steps,
  currentStep,
  onChange,
  columns,
}: GenericMainStepperProps) {
  const hasGrid = !!columns;

  if (hasGrid) {
    return (
      <div
        className="gap-6"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {steps.map(([id, title, Icon], index) => (
          <div key={id} className="flex items-center">
            <button
              onClick={() => onChange(id)}
              className="flex flex-col items-center text-center w-full"
            >
              <div
                className={`
                  w-16
                  h-16
                  rounded-full
                  border-2
                  flex
                  items-center
                  justify-center
                  transition-all

                  ${
                    currentStep === id
                      ? "bg-primary text-white border-primary scale-110"
                      : "border-muted text-muted-foreground"
                  }
                `}
              >
                <Icon size={26} />
              </div>

              <span className="mt-3 font-semibold">{title}</span>
            </button>

            {index < steps.length - 1 && (
              <div
                className="
                  w-32
                  h-[3px]
                  bg-muted
                  mx-5
                "
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      {steps.map(([id, title, Icon], index) => (
        <div key={id} className="flex items-center">
          <button
            onClick={() => onChange(id)}
            className="flex flex-col items-center"
          >
            <div
              className={`
                w-16
                h-16
                rounded-full
                border-2
                flex
                items-center
                justify-center
                transition-all

                ${
                  currentStep === id
                    ? "bg-primary text-white border-primary scale-110"
                    : "border-muted text-muted-foreground"
                }
              `}
            >
              <Icon size={26} />
            </div>

            <span className="mt-3 font-semibold">{title}</span>
          </button>

          {index < steps.length - 1 && (
            <div
              className="
                w-32
                h-[3px]
                bg-muted
                mx-5
              "
            />
          )}
        </div>
      ))}
    </div>
  );
}
