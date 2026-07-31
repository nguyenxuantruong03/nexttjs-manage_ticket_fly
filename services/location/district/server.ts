import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { District } from "@/types/bookings/location/district";

export const DistrictServerService = createServerCrudApi<District>(
  API.DISTRICT,
);
