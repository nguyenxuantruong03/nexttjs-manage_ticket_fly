"use client";

import GenericMainStepper from "@/components/stepper/GenericMainStepper";

import GenericSubStepper from "@/components/stepper/GenericSubStepper";

import StepperContainer from "@/components/stepper/StepperContainer";

import { changeMainStep } from "./stepper/changeMain";

import { mainSteps, subSteps } from "./stepper/config";

import { useReferencesStepperHooks } from "./stepper/hooks";

import { renderReferencesStepperContent } from "./stepper/renderContent";

interface Props {
  mainStep: string;

  setMainStep: (value: string) => void;

  subStep: string;

  setSubStep: (value: string) => void;
}

export default function ReferencesStepper({
  mainStep,
  setMainStep,
  subStep,
  setSubStep,
}: Props) {
  const hooks = useReferencesStepperHooks(subStep);

  const currentSub = subSteps[mainStep as keyof typeof subSteps];

  const handleMainChange = (id: string) =>
    changeMainStep(id, {
      setMainStep,
      setSubStep,
    });

  return (
    <div className="w-full">
      <GenericMainStepper
        steps={mainSteps}
        currentStep={mainStep}
        onChange={handleMainChange}
        columns={mainSteps.length}
      />

      {currentSub && currentSub.length > 0 && (
        <GenericSubStepper
          steps={currentSub}
          currentStep={subStep}
          onChange={setSubStep}
          wrap
        />
      )}

      <StepperContainer>
        {renderReferencesStepperContent({
          mainStep,
          subStep,
          hooks,
        })}
      </StepperContainer>
    </div>
  );
}