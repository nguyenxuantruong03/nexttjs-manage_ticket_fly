"use client";

import { useFlyAddonTypeCreateFormData } from "@/hooks/product-types/references/airline/addon-type/useFlyAddonTypeCreateFormData";
import { useFlyAirportCreateFormData } from "@/hooks/product-types/references/airport/useFlyAirportCreateFormData";
import { useFlyCabinClassCreateFormData } from "@/hooks/product-types/ticket-fly/cabin-class/useFlyCabinClassCreateFormData";
import { useFlyCrewDutyCreateFormData } from "@/hooks/product-types/references/airline/crew/crew-duty/useFlyCrewDutyCreateFormData";
import { useFlyDelayReasonCreateFormData } from "@/hooks/product-types/ticket-fly/delay-reason/useFlyDelayReasonCreateFormData";
import { useFlyFareRuleTypeCreateFormData } from "@/hooks/product-types/ticket-fly/fare-rule-type/useFlyFareRuleTypeCreateFormData";
import { useFlyMealTypeCreateFormData } from "@/hooks/product-types/ticket-fly/meal-type/useFlyMealTypeCreateFormData";
import { useFlySeatTypeCreateFormData } from "@/hooks/product-types/ticket-fly/seat-type/useFlySeatTypeCreateFormData";

export function useTicketFlyStepperHooks(subStep: string) {
  /**
   * ==========================
   * BASIC
   * ==========================
   */

  const airport = useFlyAirportCreateFormData(subStep === "airport");

  const cabinClass = useFlyCabinClassCreateFormData(subStep === "cabin-class");

  /**
   * ==========================
   * FLIGHT
   * ==========================
   */

  const crewDuty = useFlyCrewDutyCreateFormData(subStep === "crew-duty");

  const delayReason = useFlyDelayReasonCreateFormData(
    subStep === "delay-reason",
  );

  /**
   * ==========================
   * SEAT & MEAL
   * ==========================
   */

  const seatType = useFlySeatTypeCreateFormData(subStep === "seat-type");

  const mealType = useFlyMealTypeCreateFormData(subStep === "meal-type");

  /**
   * ==========================
   * PRICING
   * ==========================
   */

  const fareRuleType = useFlyFareRuleTypeCreateFormData(
    subStep === "fare-rule-type",
  );

  /**
   * ==========================
   * ADDON
   * ==========================
   */

  const addonType = useFlyAddonTypeCreateFormData(subStep === "addon-type");

  return {
    airport,
    cabinClass,

    crewDuty,
    delayReason,

    seatType,
    mealType,

    fareRuleType,

    addonType,
  };
}
