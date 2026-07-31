"use client";

import { ReactNode } from "react";

interface StepperContainerProps {
  children: ReactNode;
}

export default function StepperContainer({ children }: StepperContainerProps) {
  return (
    <div
      className="
        mt-12
        rounded-xl
        border
        bg-card
        p-6
      "
    >
      {children}
    </div>
  );
}
