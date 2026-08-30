"use client";

import { useState } from "react";

import { FormPageProvider } from "@/components/form/form-context";

import CatalogStepper from "./components/CatalogStepper";

export default function CatalogStepperPage() {
  const [mainStep, setMainStep] = useState("service");

  const [subStep, setSubStep] = useState("route-type");

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Catalog Management</h1>

      <FormPageProvider>
        <CatalogStepper
          mainStep={mainStep}
          setMainStep={setMainStep}
          subStep={subStep}
          setSubStep={setSubStep}
        />
      </FormPageProvider>
    </div>
  );
}