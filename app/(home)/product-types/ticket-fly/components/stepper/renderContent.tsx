"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import {
  AddonTypeForm,
  AirportForm,
  CabinClassForm,
  CrewDutyForm,
  DelayReasonForm,
  FareRuleTypeForm,
  MealTypeForm,
  SeatTypeForm,
} from "./forms";

interface Props {
  mainStep: string;
  subStep: string;

  hooks: ReturnType<typeof import("./hooks").useTicketFlyStepperHooks>;
}

export function renderTicketFlyStepperContent({
  mainStep,
  subStep,
  hooks,
}: Props) {
  const {
    airport,
    cabinClass,

    crewDuty,
    delayReason,

    seatType,
    mealType,

    fareRuleType,

    addonType,
  } = hooks;

  /**
   * ==========================
   * BASIC
   * ==========================
   */

  if (mainStep === "basic") {
    if (airport.isLoading || cabinClass.isLoading) {
      return <LoadingPage />;
    }

    if (airport.isError || cabinClass.isError) {
      return <ErrorPage />;
    }

    if (subStep === "airport") {
      return (
        <AirportForm
          airportData={airport.data?.airportData ?? []}
          addresses={airport.data?.addresses ?? []}
          countries={airport.data?.countries ?? []}
          cities={airport.data?.cities ?? []}
          districts={airport.data?.districts ?? []}
          wards={airport.data?.wards ?? []}
          redirect={false}
        />
      );
    }

    if (subStep === "cabin-class") {
      return <CabinClassForm redirect={false} />;
    }
  }

  /**
   * ==========================
   * FLIGHT
   * ==========================
   */

  if (mainStep === "flight") {
    if (crewDuty.isLoading || delayReason.isLoading) {
      return <LoadingPage />;
    }

    if (crewDuty.isError || delayReason.isError) {
      return <ErrorPage />;
    }

    if (subStep === "crew-duty") {
      return <CrewDutyForm redirect={false} />;
    }

    if (subStep === "delay-reason") {
      return <DelayReasonForm redirect={false} />;
    }
  }

  /**
   * ==========================
   * SEAT & MEAL
   * ==========================
   */

  if (mainStep === "seat-meal") {
    if (seatType.isLoading || mealType.isLoading) {
      return <LoadingPage />;
    }

    if (seatType.isError || mealType.isError) {
      return <ErrorPage />;
    }

    if (subStep === "seat-type") {
      return <SeatTypeForm redirect={false} />;
    }

    if (subStep === "meal-type") {
      return <MealTypeForm redirect={false} />;
    }
  }

  /**
   * ==========================
   * PRICING
   * ==========================
   */

  if (mainStep === "pricing") {
    if (subStep === "fare-rule-type") {
      return <FareRuleTypeForm redirect={false} />;
    }
  }

  /**
   * ==========================
   * ADDON
   * ==========================
   */

  if (mainStep === "addon") {
    if (addonType.isLoading) {
      return <LoadingPage />;
    }

    if (addonType.isError) {
      return <ErrorPage />;
    }

    if (subStep === "addon-type") {
      return <AddonTypeForm redirect={false} />;
    }
  }

  return null;
}
