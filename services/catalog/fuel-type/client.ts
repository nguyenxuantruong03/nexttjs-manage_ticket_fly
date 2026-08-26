import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { FuelType } from "@/types/common/catalog/fuel-type";

export const FuelTypeService = createCrudApi<FuelType>(
  clientHttp,
  API.FUEL_TYPE,
);