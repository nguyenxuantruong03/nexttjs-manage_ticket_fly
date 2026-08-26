"use client";

import { useState } from "react";

import { FormPageProvider } from "@/components/form/form-context";
import CarRentalStepper from "./components/CarRentalStepper";

export default function CarRentalStepperPage() {
  const [mainStep, setMainStep] = useState("basic");

  const [subStep, setSubStep] = useState("insurance-type");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Car Rental Management</h1>

      <FormPageProvider>
        <CarRentalStepper
          mainStep={mainStep}
          setMainStep={setMainStep}
          subStep={subStep}
          setSubStep={setSubStep}
        />
      </FormPageProvider>
    </div>
  );
}
