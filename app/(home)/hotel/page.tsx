"use client";

import { useState } from "react";

import { FormPageProvider } from "@/components/form/form-context";
import HotelStepper from "./components/HotelStepper";

export default function HotelStepperPage() {
  const [mainStep, setMainStep] = useState("basic");

  const [subStep, setSubStep] = useState("hotel-type");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Hotel Management</h1>

      <FormPageProvider>
        <HotelStepper
          mainStep={mainStep}
          setMainStep={setMainStep}
          subStep={subStep}
          setSubStep={setSubStep}
        />
      </FormPageProvider>
    </div>
  );
}
