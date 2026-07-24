"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Check, Lock, Pencil, BadgeInfo } from "lucide-react";

import { FieldValues } from "react-hook-form";

import { cn } from "@/lib/utils";

import { FormWizardStep } from "./types";
import { useFormWizard } from "./useFormWizard";

interface Props<TFieldValues extends FieldValues> {
  steps: FormWizardStep<TFieldValues>[];
}

export default function FormWizardHeader<TFieldValues extends FieldValues>({
  steps,
}: Props<TFieldValues>) {
  const { form, loading, goTo, getStepStatus, isStepDisabled, unlockAll } =
    useFormWizard<TFieldValues>();

  const isStepDirty = (step: FormWizardStep<TFieldValues>) => {
    if (!step.fields?.length) return false;

    return step.fields.some((field) => {
      let value: any = form.formState.dirtyFields;

      String(field)
        .split(".")
        .forEach((key) => {
          value = value?.[key];
        });

      return Boolean(value);
    });
  };

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {steps.map((step, index) => {
        const status = getStepStatus(index);
        const disabled = isStepDisabled(index);
        const dirty = isStepDirty(step);

        return (
          <button
            key={step.id}
            type="button"
            disabled={loading || (!unlockAll && disabled)}
            onClick={() => goTo(index)}
            className={cn(
              `
              flex
              min-w-[220px]
              items-center
              gap-3
              rounded-xl
              border
              p-3
              text-left
              transition
              hover:bg-muted
              `,

              status === "current" && "border-primary bg-primary/5",

              !unlockAll && status === "completed" && "border-green-500",

              status === "error" && "border-destructive bg-destructive/5",

              !unlockAll &&
                status === "disabled" &&
                "cursor-not-allowed opacity-50",
            )}
          >
            <StepIcon
              step={step}
              index={index}
              status={status}
              unlockAll={unlockAll}
            />

            <StepInfo
              step={step}
              status={status}
              unlockAll={unlockAll}
              dirty={dirty}
            />
          </button>
        );
      })}
    </div>
  );
}

function StepIcon({ step, index, status, unlockAll }: any) {
  const Icon = step.icon;

  return (
    <div
      className={cn(
        `
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        `,

        !unlockAll &&
          status === "completed" &&
          `
        bg-green-500
        border-green-500
        text-white
        `,

        status === "current" &&
          `
          border-primary
          text-primary
          `,

        status === "disabled" && "text-muted-foreground",
      )}
    >
      {!unlockAll && status === "completed" ? (
        <Check className="h-5 w-5" />
      ) : !unlockAll && status === "disabled" ? (
        <Lock className="h-5 w-5" />
      ) : Icon ? (
        <Icon className="h-5 w-5" />
      ) : (
        index + 1
      )}
    </div>
  );
}

function StepInfo({ step, status, unlockAll, dirty }: any) {
  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <p className="truncate font-medium">{step.title}</p>

        {unlockAll && dirty ? (
          <Pencil className="h-3.5 w-3.5" />
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
                <span>
                  <BadgeInfo className="h-3.5 w-3.5" />
                </span>
            </TooltipTrigger>

            <TooltipContent>
              {step.description && (
                <p className="text-xs">{step.description}</p>
              )}
            </TooltipContent>
          </Tooltip>
        )}
      </div>

      <p
        className="
        mt-1
        text-[11px]
        uppercase
        text-muted-foreground
        "
      >
        {unlockAll ? (dirty ? "Modified" : "Configured") : status}
      </p>
    </div>
  );
}
