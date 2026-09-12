"use client";

import { useFuelTypeCreateFormData } from "@/hooks/catalog/fuel-type/useFuelTypeCreateFormData";

import { useRouteTypeCreateFormData } from "@/hooks/catalog/route-type/useRouteTypeCreateFormData";

import { useServiceTypeCreateFormData } from "@/hooks/catalog/service-type/useServiceTypeCreateFormData";

import { useVehicleTypeCreateFormData } from "@/hooks/catalog/vehicle-type/useVehicleTypeCreateFormData";

import { useMediaAssetCreateFormData } from "@/hooks/catalog/media-asset/useMediaAssetCreateFormData";

import { useMediaCategoryCreateFormData } from "@/hooks/catalog/media-category/useMediaCategoryCreateFormData";
import { useReasonCodeCreateFormData } from "@/hooks/catalog/reason/reason-code/useReasonCodeCreateFormData";
import { useReasonContextCreateFormData } from "@/hooks/catalog/reason/reason-context/useReasonContextCreateFormData";

export function useCatalogStepperHooks(subStep: string) {
  /**
   * ==========================
   * CATALOG
   * ==========================
   */

  const routeType = useRouteTypeCreateFormData(subStep === "route-type");

  const serviceType = useServiceTypeCreateFormData(subStep === "service-type");

  const vehicleType = useVehicleTypeCreateFormData(subStep === "vehicle-type");

  const fuelType = useFuelTypeCreateFormData(subStep === "fuel-type");

  /**
   * ==========================
   * MEDIA
   * ==========================
   */

  const mediaAsset = useMediaAssetCreateFormData(subStep === "media-asset");

  const mediaCategory = useMediaCategoryCreateFormData(
    subStep === "media-category",
  );

  const reasonCode = useReasonCodeCreateFormData(subStep === "reason-code");
  const reasonContext = useReasonContextCreateFormData();

  return {
    routeType,
    serviceType,
    vehicleType,
    fuelType,

    mediaAsset,
    mediaCategory,

    reasonCode,
    reasonContext,
  };
}
