"use client";

import { useFuelTypeCreateFormData } from "@/hooks/catalog/fuel-type/useFuelTypeCreateFormData";
import { useRouteTypeCreateFormData } from "@/hooks/catalog/route-type/useRouteTypeCreateFormData";
import { useServiceTypeCreateFormData } from "@/hooks/catalog/service-type/useServiceTypeCreateFormData";
import { useVehicleTypeCreateFormData } from "@/hooks/catalog/vehicle-type/useVehicleTypeCreateFormData";

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

  return {
    routeType,
    serviceType,
    vehicleType,
    fuelType,
  };
}
