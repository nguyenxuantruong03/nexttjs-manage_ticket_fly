"use client";

import ErrorPage from "@/components/ui/error-page";

import LoadingPage from "@/components/ui/loading-page";

import {
  RouteTypeForm,
  ServiceTypeForm,
  VehicleTypeForm,
  FuelTypeForm,
  MediaAssetForm,
  MediaCategoryForm,
  ReasonCodeForm,
  ReasonContextForm,
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
  const {
    routeType,
    serviceType,
    vehicleType,
    fuelType,
    mediaAsset,
    mediaCategory,
    reasonCode,
    reasonContext,
  } = hooks;

  const currentHook = {
    "route-type": routeType,
    "service-type": serviceType,
    "vehicle-type": vehicleType,
    "fuel-type": fuelType,
    "media-asset": mediaAsset,
    "media-category": mediaCategory,
    "reason-code": reasonCode,
    "reason-context": reasonContext,
  }[subStep];

  if (currentHook?.isLoading) {
    return <LoadingPage />;
  }

  if (currentHook?.isError) {
    return <ErrorPage />;
  }

  // ======================================================
  // SERVICE
  // ======================================================

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

  // ======================================================
  // VEHICLE
  // ======================================================

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

  // ======================================================
  // MEDIA
  // ======================================================

  if (mainStep === "media" && subStep === "media-asset") {
    return (
      <MediaAssetForm
        bookingTypeData={mediaAsset.data?.bookingTypes ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "media" && subStep === "media-category") {
    return (
      <MediaCategoryForm
        bookingTypeData={mediaCategory.data?.bookingTypes ?? []}
        redirect={false}
      />
    );
  }

  // ======================================================
  // REASON
  // ======================================================

  if (mainStep === "reason" && subStep === "reason-code") {
    return (
      <ReasonCodeForm
        contextData={reasonCode.data?.reasonContexts ?? []}
        redirect={false}
      />
    );
  }

  if (mainStep === "reason" && subStep === "reason-context") {
    return <ReasonContextForm redirect={false} />;
  }

  return null;
}
