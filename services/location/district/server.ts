import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { District } from "@/types/location/district";

export const DistrictServerService = createServerCrudApi<District>(
  API.DISTRICT,
);
