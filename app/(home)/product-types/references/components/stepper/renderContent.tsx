"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import {
  AirlineMainForm,
  AircraftTypeForm,
  AircraftMainForm,
  CrewDutyForm,
  CrewRoleForm,
  CrewMainForm,
  AddonTypeForm,
  AirportForm,
  AllianceForm,
} from "./forms";
import { useReferencesStepperHooks } from "./hooks";

interface Props {
  mainStep: string;
  subStep: string;
  hooks: ReturnType<typeof useReferencesStepperHooks>;
}

export function renderReferencesStepperContent({
  mainStep,
  subStep,
  hooks,
}: Props) {
  const {
    airlineMain,
    aircraftType,
    aircraftMain,
    crewDuty,
    crewRole,
    crewMain,
    addonType,
    airport,
    alliance,
  } = hooks;

  const currentHook = {
    "airline-main": airlineMain,
    "aircraft-type": aircraftType,
    "aircraft-main": aircraftMain,
    "crew-duty": crewDuty,
    "crew-role": crewRole,
    "crew-main": crewMain,
    "addon-type": addonType,
    airport: airport,
    alliance: alliance,
  }[subStep];

  if (currentHook?.isLoading) {
    return <LoadingPage />;
  }

  if (currentHook?.isError) {
    return <ErrorPage />;
  }

  if (mainStep === "airline" && subStep === "airline-main") {
    return (
      <AirlineMainForm
        mediaCategoryData={airlineMain.data?.mediaCategoryData.data ?? []}
        mediaAssetData={airlineMain.data?.mediaAssetData.data ?? []}
        bookingTypeData={airlineMain.data?.bookingTypeData.data ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "airline" && subStep === "aircraft-type") {
    return <AircraftTypeForm redirect={false} />;
  }

  if (mainStep === "airline" && subStep === "aircraft-main") {
    return (
      <AircraftMainForm
        mediaCategoryData={aircraftMain.data?.mediaCategoryData.data ?? []}
        mediaAssetData={aircraftMain.data?.mediaAssetData.data ?? []}
        bookingTypeData={aircraftMain.data?.bookingTypeData.data ?? []}
        airlineData={aircraftMain.data?.airlineData.data ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "airline" && subStep === "crew-duty") {
    return <CrewDutyForm redirect={false} />;
  }

  if (mainStep === "airline" && subStep === "crew-role") {
    return <CrewRoleForm redirect={false} />;
  }

  if (mainStep === "airline" && subStep === "crew-main") {
    return (
      <CrewMainForm
        airlineData={crewMain.data?.airlines.data ?? []}
        roleData={crewMain.data?.roles.data ?? []}
        dutyData={crewMain.data?.duties.data ?? []}
        aircraftTypeData={crewMain.data?.aircraftTypeData.data ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "airline" && subStep === "addon-type") {
    return <AddonTypeForm redirect={false} />;
  }

  if (mainStep === "airport" && subStep === "airport") {
    return (
      <AirportForm
        addresses={airport.data?.addresses.data ?? []}
        countries={airport.data?.countries.data ?? []}
        cities={airport.data?.cities.data ?? []}
        districts={airport.data?.districts.data ?? []}
        wards={airport.data?.wards.data ?? []}
        airportData={airport.data?.airportData.data ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "alliance" && subStep === "alliance") {
    return <AllianceForm redirect={false} />;
  }

  return null;
}
