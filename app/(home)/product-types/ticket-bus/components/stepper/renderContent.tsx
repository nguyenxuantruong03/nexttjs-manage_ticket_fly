"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import { SeatTypeForm } from "./forms";

interface Props {
  mainStep: string;
  subStep: string;

  hooks: ReturnType<typeof import("./hooks").useTicketBusStepperHooks>;
}

export function renderTicketBusStepperContent({
  mainStep,
  subStep,
  hooks,
}: Props) {
  const { seatType } = hooks;

  /**
   * ==========================
   * SEAT
   * ==========================
   */

  if (mainStep === "seat") {
    if (seatType.isLoading) {
      return <LoadingPage />;
    }

    if (seatType.error) {
      return <ErrorPage />;
    }

    if (subStep === "seat-type") {
      return <SeatTypeForm redirect={false} />;
    }
  }

  return null;
}
