"use client";

import { Button } from "@/components/ui/button";

import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

import { useEffect } from "react";

import { useFormWizard } from "./useFormWizard";

interface Props<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
}

function getFirstErrorPath(
  errors: FieldErrors<any>,
  parent = "",
): string | null {
  for (const key in errors) {
    const value: any = errors[key];

    const current = parent ? `${parent}.${key}` : key;

    if (!value) {
      continue;
    }

    if (value.ref) {
      return current;
    }

    if (typeof value === "object") {
      const nested = getFirstErrorPath(value, current);

      if (nested) {
        return nested;
      }
    }
  }

  return null;
}

export default function FormWizardFooter<TFieldValues extends FieldValues>({
  form,
  onSubmit,
}: Props<TFieldValues>) {
  const { loading, previous, next, goTo, isFirstStep, isLastStep, steps } =
    useFormWizard<TFieldValues>();

  /**
   * Keyboard navigation
   */
  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      /**
       * Ignore typing fields
       */
      const target = event.target as HTMLElement;

      const tag = target.tagName.toLowerCase();

      if (
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        target.isContentEditable
      ) {
        return;
      }

      if (loading) {
        return;
      }

      /**
       * Previous
       */
      if (event.key === "ArrowLeft") {
        event.preventDefault();

        if (!isFirstStep) {
          previous();
        }

        return;
      }

      /**
       * Next
       */
      if (event.key === "ArrowRight") {
        event.preventDefault();

        if (!isLastStep) {
          await next();
        }

        return;
      }

      /**
       * Enter
       */
      if (event.key === "Enter") {
        event.preventDefault();

        if (isLastStep) {
          await handleSave();
          return;
        }

        await next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [loading, isFirstStep, isLastStep, next, previous]);

  /**
   * Next
   */
  const handleNext = async () => {
    await next();
  };

  /**
   * Save
   */
  const handleSave = form.handleSubmit(onSubmit, async (errors) => {
    const firstError = getFirstErrorPath(errors);

    if (!firstError) {
      return;
    }

    const stepIndex = steps.findIndex((step) =>
      step.fields?.some(
        (field) =>
          firstError === field ||
          firstError.startsWith(`${field}.`) ||
          firstError.startsWith(`${field}[`),
      ),
    );

    if (stepIndex !== -1) {
      await goTo(stepIndex, true);
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const escaped = CSS.escape(firstError);

        const input = document.querySelector(
          `[name="${escaped}"]`,
        ) as HTMLElement | null;

        if (!input) {
          return;
        }

        input.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        input.focus();
      });
    });
  });

  return (
    <div className="mt-10 flex items-center justify-between">
      <Button
        type="button"
        variant="outline"
        onClick={previous}
        disabled={loading || isFirstStep}
      >
        Previous
      </Button>

      {isLastStep ? (
        <Button type="button" onClick={handleSave} disabled={loading}>
          Save
        </Button>
      ) : (
        <Button type="button" onClick={handleNext} disabled={loading}>
          Next
        </Button>
      )}
    </div>
  );
}
