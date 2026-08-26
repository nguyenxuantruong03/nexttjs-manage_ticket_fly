import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";

export const VehicleTypeService = createCrudApi<VehicleType>(
  clientHttp,
  API.VEHICLE_TYPE,
);