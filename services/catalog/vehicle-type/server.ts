import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";

export const VehicleTypeServerService = createServerCrudApi<VehicleType>(
  API.VEHICLE_TYPE,
);