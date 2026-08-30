"use client";

import { useState } from "react";

import { FormPageProvider } from "@/components/form/form-context";

import CommerceStepper from "./components/CommerceStepper";

export default function CommerceStepperPage() {
  const [mainStep, setMainStep] = useState("booking-item-type");

  const [subStep, setSubStep] = useState("booking-item-type");

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Commerce Management
      </h1>

      <FormPageProvider>
        <CommerceStepper
          mainStep={mainStep}
          setMainStep={setMainStep}
          subStep={subStep}
          setSubStep={setSubStep}
        />
      </FormPageProvider>
    </div>
  );
}