"use client";

import GenericMainStepper from "@/components/stepper/GenericMainStepper";
import GenericSubStepper from "@/components/stepper/GenericSubStepper";
import StepperContainer from "@/components/stepper/StepperContainer";

import { changeMainStep } from "./stepper/changeMain";
import { mainSteps, subSteps } from "./stepper/config";
import { useTicketFlyStepperHooks } from "./stepper/hooks";
import { renderTicketFlyStepperContent } from "./stepper/renderContent";

interface Props {
  mainStep: string;
  setMainStep: (value: string) => void;

  subStep: string;
  setSubStep: (value: string) => void;
}

export default function TicketFlyStepper({
  mainStep,
  setMainStep,
  subStep,
  setSubStep,
}: Props) {
  const hooks = useTicketFlyStepperHooks(subStep);

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
        columns={5}
      />

      <GenericSubStepper
        steps={currentSub}
        currentStep={subStep}
        onChange={setSubStep}
        wrap
      />

      <StepperContainer>
        {renderTicketFlyStepperContent({
          mainStep,
          subStep,
          hooks,
        })}
      </StepperContainer>
    </div>
  );
}