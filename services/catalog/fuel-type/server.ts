import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { FuelType } from "@/types/common/catalog/fuel-type";

export const FuelTypeServerService = createServerCrudApi<FuelType>(
  API.FUEL_TYPE,
);
