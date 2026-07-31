import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Ward } from "@/types/bookings/location/ward";

export const WardServerService = createServerCrudApi<Ward>(API.WARD);
