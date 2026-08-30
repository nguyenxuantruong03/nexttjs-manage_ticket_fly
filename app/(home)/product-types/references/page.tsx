"use client";

import { useState } from "react";

import { FormPageProvider } from "@/components/form/form-context";
import ReferencesStepper from "./components/ReferencesStepper";

export default function ReferencesStepperPage() {
  const [mainStep, setMainStep] = useState("airline");

  const [subStep, setSubStep] = useState("airline-main");

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">References Management</h1>

      <FormPageProvider>
        <ReferencesStepper
          mainStep={mainStep}
          setMainStep={setMainStep}
          subStep={subStep}
          setSubStep={setSubStep}
        />
      </FormPageProvider>
    </div>
  );
}
