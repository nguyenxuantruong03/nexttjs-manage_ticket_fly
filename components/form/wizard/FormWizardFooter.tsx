"use client";

import { Button } from "@/components/ui/button";

import { useFormWizard } from "./useFormWizard";

interface Props {
  onSubmit?: () => void;
}

export default function FormWizardFooter({ onSubmit }: Props) {
  const { previous, next, isFirstStep, isLastStep } = useFormWizard();

  return (
    <div className="mt-10 flex justify-between">
      <Button
        type="button"
        variant="outline"
        disabled={isFirstStep}
        onClick={previous}
      >
        Previous
      </Button>

      {isLastStep ? (
        <Button type="submit" onClick={onSubmit}>
          Save
        </Button>
      ) : (
        <Button type="button" onClick={next}>
          Next
        </Button>
      )}
    </div>
  );
}
