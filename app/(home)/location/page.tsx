"use client";

import { useState } from "react";
import LocationStepper from "./components/LocationStepper";
import { FormPageProvider } from "@/components/form/form-context";

export default function LocationPage() {
  const [mainStep, setMainStep] = useState("country");
  const [subStep, setSubStep] = useState("currency");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Location Management</h1>
      <FormPageProvider>
        <LocationStepper
          mainStep={mainStep}
          setMainStep={setMainStep}
          subStep={subStep}
          setSubStep={setSubStep}
        />
      </FormPageProvider>
    </div>
  );
}
