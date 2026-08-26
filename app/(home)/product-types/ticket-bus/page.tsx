"use client";

import { useState } from "react";

import { FormPageProvider } from "@/components/form/form-context";
import TicketBusStepper from "./components/TicketBusStepper";

export default function TicketBusStepperPage() {
  const [mainStep, setMainStep] = useState("basic");

  const [subStep, setSubStep] = useState("vehicle-type");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Ticket Bus Management</h1>

      <FormPageProvider>
        <TicketBusStepper
          mainStep={mainStep}
          setMainStep={setMainStep}
          subStep={subStep}
          setSubStep={setSubStep}
        />
      </FormPageProvider>
    </div>
  );
}