"use client";

import { useState } from "react";

import { FormPageProvider } from "@/components/form/form-context";

import FeaturesStepper from "./components/FeaturesStepper";

export default function FeaturesStepperPage() {
  const [mainStep, setMainStep] = useState("facility");

  const [subStep, setSubStep] = useState("facility-main");

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Features Management
      </h1>

      <FormPageProvider>
        <FeaturesStepper
          mainStep={mainStep}
          setMainStep={setMainStep}
          subStep={subStep}
          setSubStep={setSubStep}
        />
      </FormPageProvider>
    </div>
  );
}