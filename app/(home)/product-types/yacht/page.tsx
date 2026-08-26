"use client";

import { useState } from "react";

import { FormPageProvider } from "@/components/form/form-context";
import YachtStepper from "./components/YachtStepper";

export default function YachtStepperPage() {
  const [mainStep, setMainStep] = useState("basic");

  const [subStep, setSubStep] = useState("type");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Yacht Management</h1>

      <FormPageProvider>
        <YachtStepper
          mainStep={mainStep}
          setMainStep={setMainStep}
          subStep={subStep}
          setSubStep={setSubStep}
        />
      </FormPageProvider>
    </div>
  );
}
