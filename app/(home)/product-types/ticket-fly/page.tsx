"use client";

import { useState } from "react";

import { FormPageProvider } from "@/components/form/form-context";
import TicketFlyStepper from "./components/TicketFlyStepper";

export default function TicketFlyStepperPage() {
  const [mainStep, setMainStep] = useState("basic");

  const [subStep, setSubStep] = useState("airport");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Ticket Fly Management</h1>

      <FormPageProvider>
        <TicketFlyStepper
          mainStep={mainStep}
          setMainStep={setMainStep}
          subStep={subStep}
          setSubStep={setSubStep}
        />
      </FormPageProvider>
    </div>
  );
}