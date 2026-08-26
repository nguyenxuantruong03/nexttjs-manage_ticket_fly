"use client";

import { useBusSeatTypeCreateFormData } from "@/hooks/product-types/bus/seat-type/useSeatTypeCreateFormData";

export function useTicketBusStepperHooks(subStep: string) {
  /**
   * ==========================
   * SEAT
   * ==========================
   */

  const seatType = useBusSeatTypeCreateFormData(subStep === "seat-type");

  return {
    seatType,
  };
}
