"use client";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

import {
  RouteTypeForm,
  ServiceTypeForm,
  VehicleTypeForm,
  FuelTypeForm,
} from "./forms";
import { useCatalogStepperHooks } from "./hooks";

interface Props {
  mainStep: string;
  subStep: string;
  hooks: ReturnType<typeof useCatalogStepperHooks>;
}

export function renderCatalogStepperContent({
  mainStep,
  subStep,
  hooks,
}: Props) {
  const { routeType, serviceType, vehicleType, fuelType } = hooks;

  const currentHook = {
    "route-type": routeType,
    "service-type": serviceType,
    "vehicle-type": vehicleType,
    "fuel-type": fuelType,
  }[subStep];

  if (currentHook?.isLoading) {
    return <LoadingPage />;
  }

  if (currentHook?.isError) {
    return <ErrorPage />;
  }

  if (mainStep === "service" && subStep === "route-type") {
    return (
      <RouteTypeForm
        bookingTypeData={routeType.data?.bookingTypes ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "service" && subStep === "service-type") {
    return (
      <ServiceTypeForm
        bookingTypeData={serviceType.data?.bookingTypes ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "vehicle" && subStep === "vehicle-type") {
    return (
      <VehicleTypeForm
        bookingTypeData={vehicleType.data?.bookingTypes ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "vehicle" && subStep === "fuel-type") {
    return (
      <FuelTypeForm
        bookingTypeData={fuelType.data?.bookingTypes ?? []}
        redirect={false}
      />
    );
  }

  return null;
}
